import { NextResponse } from "next/server";
import { offerLabels } from "@/lib/offers";

const PROJECT_TYPES = [
  "Motion design / Réseaux sociaux",
  "Site vitrine",
  "Site e-commerce",
  "Application mobile",
  "Application web",
  "Refonte / Maintenance",
  "Autre",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Adresse qui reçoit les demandes de contact. */
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@inthegleam.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function field(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

type Contact = {
  name: string;
  email: string;
  phone: string;
  type: string;
  offer: string;
  message: string;
};

async function sendTelegram(c: Contact, token: string, chatId: string) {
  const text = [
    "📩 <b>Nouveau message depuis inTheGleam</b>",
    "",
    `👤 <b>Nom :</b> ${escapeHtml(c.name)}`,
    `✉️ <b>Email :</b> ${escapeHtml(c.email)}`,
    c.phone ? `📞 <b>Téléphone :</b> ${escapeHtml(c.phone)}` : null,
    `🗂 <b>Projet :</b> ${escapeHtml(c.type)}`,
    c.offer ? `💎 <b>Offre :</b> ${escapeHtml(c.offer)}` : null,
    "",
    `💬 <b>Message :</b>`,
    escapeHtml(c.message),
  ]
    .filter((line) => line !== null)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });

  if (!res.ok) {
    throw new Error(`Telegram ${res.status} : ${await res.text()}`);
  }
}

async function sendEmail(c: Contact, apiKey: string) {
  const from = process.env.RESEND_FROM || "inTheGleam <onboarding@resend.dev>";

  const rows = [
    ["Nom", c.name],
    ["Email", c.email],
    ["Téléphone", c.phone || "—"],
    ["Projet", c.type],
    ["Offre", c.offer || "—"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#6b7280">${label}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#080808;max-width:600px">
      <h2 style="color:#4f0694;margin:0 0 16px">Nouveau message depuis inTheGleam</h2>
      <table style="border-collapse:collapse;font-size:14px">${rows}</table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;background:#f5f3f7;padding:16px;border-radius:8px">${escapeHtml(c.message)}</p>
    </div>`;

  const subject = `Nouveau contact : ${c.name}${c.offer ? ` (${c.offer})` : ""}`.replace(
    /[\r\n]+/g,
    " "
  );

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL],
      reply_to: c.email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend ${res.status} : ${await res.text()}`);
  }
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const resendKey = process.env.RESEND_API_KEY;

  const telegramReady = Boolean(token && chatId);
  if (!telegramReady && !resendKey) {
    console.error(
      "Aucun canal configuré : TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID ou RESEND_API_KEY manquants"
    );
    return NextResponse.json(
      { error: "Le service de contact est momentanément indisponible." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot : champ invisible rempli uniquement par les bots
  if (field(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = field(body.name, 100);
  const email = field(body.email, 150);
  const phone = field(body.phone, 30);
  const projectType = field(body.projectType, 50);
  const offerSlug = field(body.offer, 50);
  const offer = Object.hasOwn(offerLabels, offerSlug) ? offerLabels[offerSlug] : "";
  const message = field(body.message, 3000);

  if (!name || !EMAIL_REGEX.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Merci de remplir correctement tous les champs obligatoires." },
      { status: 400 }
    );
  }

  const contact: Contact = {
    name,
    email,
    phone,
    type: PROJECT_TYPES.includes(projectType) ? projectType : "Non précisé",
    offer,
    message,
  };

  // Envoi en parallèle : la demande est valide si au moins un canal a fonctionné
  const jobs: Promise<void>[] = [];
  if (telegramReady) jobs.push(sendTelegram(contact, token!, chatId!));
  if (resendKey) jobs.push(sendEmail(contact, resendKey));

  const results = await Promise.allSettled(jobs);
  results.forEach((r) => {
    if (r.status === "rejected") console.error("Erreur d'envoi contact :", r.reason);
  });

  if (!results.some((r) => r.status === "fulfilled")) {
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer dans quelques instants." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
