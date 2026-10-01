import React from "react";
import type { Metadata } from "next";
import ProjectForm from "@/components/ProjectForm/ProjectForm";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contactez-nous | inTheGleam - Experts en Développement Web",
  description:
    "Discutez de vos projets avec l'équipe inTheGleam. Bénéficiez de conseils personnalisés et obtenez une réponse rapide sous 24 heures. Transformez vos idées en solutions digitales.",
  keywords: [
    "contact inTheGleam",
    "agence développement web",
    "experts web et mobile",
    "demander un devis web",
    "contact agence web",
    "développement web sur-mesure",
    "inTheGleam contact",
  ],
};

const highlights = [
  {
    title: "Réponse Rapide",
    subtitle: "Moins de 24h",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Conseils Gratuits",
    subtitle: "Sans engagement",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Équipe Dédiée",
    subtitle: "Experts à l'écoute",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section moderne */}
      <section className="relative min-h-screen bg-white pt-36 lg:pt-32 pb-20 overflow-hidden flex flex-col justify-center">
        {/* Éléments décoratifs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple2 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple3 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-6xl mx-auto flex flex-col">
            {/* Section titre et description */}
            <div className="order-1 text-center">
              {/* Eyebrow */}
              <span className="inline-block mb-6 text-xs font-Gudea tracking-[.35em] uppercase text-purple2 border border-purple2/40 rounded-full px-4 py-1.5">
                inthegleam
              </span>

              <h1 className="font-semibold text-blackGleam text-center text-3xl sm:text-5xl tracking-[.15em] uppercase mb-6 font-Gudea">
                <span className="font-DissolveRegular mr-1 text-5xl sm:text-7xl text-blackGleam">
                  C
                </span>
                ontactez-{" "}
                <span className="bg-gradient-to-r from-purple3 to-purple2 bg-clip-text text-transparent">
                  Nous
                </span>
              </h1>

              <p className="font-Gudea tracking-wider text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Vous avez un projet ? Besoin de conseils ?{" "}
                <span className="text-purple2 font-semibold">
                  Réponse garantie en moins de 24 heures !
                </span>
              </p>
            </div>

            {/* Statistiques/Avantages rapides */}
            <div className="order-3 sm:order-2 grid sm:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mt-8 sm:mt-0 sm:mb-16">
              {highlights.map((item, index) => (
                <RevealOnScroll key={item.title} className="h-full" delay={index * 0.12}>
                  <div className="group relative h-full overflow-hidden rounded-2xl p-6 bg-white border border-gray-100 shadow-md shadow-gray-200/60 hover:shadow-xl hover:shadow-purple2/15 hover:-translate-y-1 hover:border-purple2/20 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple2 to-purple3 rounded-xl flex items-center justify-center shadow-lg shadow-purple2/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="font-bold text-blackGleam mb-1 font-Gudea group-hover:text-purple2 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-purple2/70 text-xs font-Gudea tracking-[.15em] uppercase">
                      {item.subtitle}
                    </p>
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple2 to-purple3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Formulaire puis informations de contact (le formulaire passe avant les avantages sur mobile) */}
            <div
              id="formulaire"
              className="order-2 sm:order-3 w-full max-w-4xl mx-auto"
            >
              <ProjectForm />
            </div>

            <div className="order-4 w-full max-w-4xl mx-auto space-y-8 mt-8">
              {/* Informations de contact */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-blackGleam mb-6 font-Gudea">
                  Moyens de contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple2/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blackGleam font-Gudea">
                        Email
                      </h4>
                      <p className="text-gray-600 font-Gudea">
                        contact@inthegleam.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple2/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blackGleam font-Gudea">
                        Disponibilité
                      </h4>
                      <p className="text-gray-600 font-Gudea">
                        Lun - Ven : 9h00 - 18h00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple2/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blackGleam font-Gudea">
                        Zone d&apos;intervention
                      </h4>
                      <p className="text-gray-600 font-Gudea">
                        France & International
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action additionnel */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple3 to-purple2 px-6 py-8">
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-xs font-Gudea tracking-[.3em] uppercase text-white/50 mb-1">
                      En savoir plus ?
                    </p>
                    <h3 className="font-semibold text-white text-lg sm:text-2xl tracking-[.1em] uppercase font-Gudea">
                      Découvrez qui nous sommes
                    </h3>
                  </div>
                  <a
                    href="/a-propos"
                    className="shrink-0 inline-flex items-center gap-2 font-Gudea font-semibold text-sm bg-white text-purple2 rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  >
                    Notre équipe
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flèche pour scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-blackGleam/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
