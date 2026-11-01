"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  devServices,
  launchPacks,
  subscriptions,
  type Offer,
} from "@/lib/offers";
import { SparklesCore } from "../ui/vortex";

const tabs = [
  { id: "abonnements", label: "Abonnements motion", short: "Motion" },
  { id: "lancement", label: "Packs lancement", short: "Lancement" },
  { id: "dev", label: "Développement", short: "Site & app" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const tabIntro: Record<TabId, string> = {
  abonnements:
    "Des motions designs livrés chaque mois pour faire vivre vos réseaux. Engagement minimum 3 mois.",
  lancement:
    "Votre site ou votre app, livré avec vidéo promo et logo animé pour un lancement qui se remarque.",
  dev: "Vous avez seulement besoin d'un site ou d'une app ? On le développe sur-mesure.",
};

function contactHref(slug: string) {
  return `/contact?offre=${slug}#formulaire`;
}

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 ${muted ? "text-white/20" : "text-[#b080dd]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {muted ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      )}
    </svg>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  const hl = offer.highlighted;

  return (
    <article
      className={`group relative h-full rounded-3xl p-[1px] transition-transform duration-300 hover:-translate-y-2 ${
        hl
          ? "bg-gradient-to-b from-[#b080dd] via-purple3 to-purple2 shadow-2xl shadow-purple2/40 lg:-my-4"
          : "bg-white/10 hover:bg-white/20"
      }`}
    >
      {hl && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-full bg-white px-4 py-1 text-[11px] font-bold uppercase tracking-[.2em] text-purple2 font-Gudea shadow-lg">
          ★ Le plus choisi
        </span>
      )}

      <div
        className={`relative flex h-full flex-col rounded-[calc(1.5rem-1px)] p-7 lg:p-8 ${
          hl ? "bg-[#12081f]" : "bg-[#0d0d0f]"
        }`}
      >
        <h3 className="font-Gudea text-sm uppercase tracking-[.3em] text-white/60">
          {offer.name}
        </h3>

        <p className="mt-4 font-Gudea text-white">
          <span className="text-4xl font-bold tracking-tight">{offer.price}</span>
          {offer.priceSuffix && (
            <span className="ml-1 text-white/50">{offer.priceSuffix}</span>
          )}
        </p>

        <p className="mt-3 min-h-[3rem] font-Gudea text-sm leading-relaxed text-white/60">
          {offer.tagline}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <ul className="flex-1 space-y-3 font-Gudea text-sm">
          {offer.features.map((f) => {
            const included = f.value !== false;
            return (
              <li
                key={f.label}
                className={`flex items-start gap-3 ${included ? "text-white/85" : "text-white/30"}`}
              >
                <CheckIcon muted={!included} />
                <span>
                  {typeof f.value === "string" ? (
                    <>
                      {f.label} :{" "}
                      <span className="font-semibold text-white">{f.value}</span>
                    </>
                  ) : f.emphasis ? (
                    <span className="font-semibold text-white">{f.label}</span>
                  ) : (
                    f.label
                  )}
                </span>
              </li>
            );
          })}
        </ul>

        <Link
          href={contactHref(offer.slug)}
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-Gudea font-semibold transition-all duration-300 ${
            hl
              ? "bg-white text-purple2 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
              : "border border-white/20 text-white hover:border-[#b080dd] hover:bg-white/5"
          }`}
        >
          Nous contacter
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function Offers() {
  const [tab, setTab] = useState<TabId>("abonnements");

  return (
    <section
      id="offres"
      className="relative scroll-mt-24 overflow-hidden bg-[#080808] py-20 lg:py-28 text-white"
    >
      <SparklesCore
        id="tsparticlesOffres"
        background="transparent"
        minSize={0.3}
        maxSize={1}
        particleDensity={60}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-purple2 rounded-full blur-[160px] opacity-25" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple3 rounded-full blur-[160px] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-6 text-xs font-Gudea tracking-[.35em] uppercase text-[#b080dd] border border-[#b080dd]/40 rounded-full px-4 py-1.5">
            Tarifs transparents
          </span>
          <h2 className="font-Gudea text-4xl md:text-5xl font-bold tracking-wide">
            Nos <span className="text-[#b080dd]">Offres</span>
          </h2>
          <p className="mt-5 font-Gudea text-lg text-white/60 leading-relaxed">
            Choisissez la formule qui vous ressemble. Un doute ? On en parle
            ensemble, sans engagement.
          </p>
        </div>

        {/* Onglets */}
        <div
          role="tablist"
          aria-label="Catégories d'offres"
          className="mx-auto mt-10 grid w-full max-w-xl grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap rounded-xl px-2 py-2.5 font-Gudea text-sm font-semibold sm:px-4 transition-all duration-300 ${
                tab === t.id
                  ? "bg-gradient-to-r from-purple2 to-purple3 text-white shadow-lg shadow-purple2/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span className="sm:hidden">{t.short}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center font-Gudea text-sm text-white/50">
          {tabIntro[tab]}
        </p>

        <div key={tab} className="tab-fade mt-14">
          {tab === "abonnements" && (
            <div className="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-3">
              {subscriptions.map((o) => (
                <OfferCard key={o.slug} offer={o} />
              ))}
            </div>
          )}

          {tab === "lancement" && (
            <div className="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-3">
              {launchPacks.map((o) => (
                <OfferCard key={o.slug} offer={o} />
              ))}
            </div>
          )}

          {tab === "dev" && (
            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {devServices.map((s) => (
                <Link
                  key={s.slug}
                  href={contactHref(s.slug)}
                  className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b080dd]/60 hover:bg-white/[0.07]"
                >
                  <div>
                    <h3 className="font-Gudea text-lg font-bold group-hover:text-[#b080dd] transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-2 font-Gudea text-white/60">{s.price}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-Gudea text-sm font-semibold text-[#b080dd]">
                    Nous contacter
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center font-Gudea text-sm italic text-white/40 space-y-1">
          <p>Chaque motion peut intégrer vos produits ou votre app en mockup.</p>
          <p>Abonnements : engagement minimum 3 mois.</p>
        </div>
      </div>
    </section>
  );
}
