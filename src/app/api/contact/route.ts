import { NextResponse } from "next/server";

const PROJECT_TYPES = [
  "Site vitrine",
  "Site e-commerce",
  "Application mobile",
  "Application web",
  "Refonte / Maintenance",
  "Autre",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function field(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Variables TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID manquantes");
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
  const message = field(body.message, 3000);

  if (!name || !EMAIL_REGEX.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Merci de remplir correctement tous les champs obligatoires." },
      { status: 400 }
    );
  }

  const type = PROJECT_TYPES.includes(projectType) ? projectType : "Non précisé";

  const text = [
    "📩 <b>Nouveau message depuis inTheGleam</b>",
    "",
    `👤 <b>Nom :</b> ${escapeHtml(name)}`,
    `✉️ <b>Email :</b> ${escapeHtml(email)}`,
    phone ? `📞 <b>Téléphone :</b> ${escapeHtml(phone)}` : null,
    `🗂 <b>Projet :</b> ${escapeHtml(type)}`,
    "",
    `💬 <b>Message :</b>`,
    escapeHtml(message),
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });

    if (!res.ok) {
      console.error("Erreur Telegram :", res.status, await res.text());
      throw new Error("Telegram error");
    }
  } catch {
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer dans quelques instants." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
