/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export const metadata: Metadata = {
  title: "Création de Site Vitrine Professionnel | inTheGleam",
  description:
    "Valorisez votre entreprise avec un site vitrine sur-mesure. Découvrez les avantages d'une présence en ligne professionnelle pour attirer vos clients et renforcer votre image de marque.",
  keywords: [
    "site vitrine",
    "création site vitrine",
    "site vitrine professionnel",
    "développement site vitrine",
    "présence en ligne professionnelle",
    "image de marque en ligne",
    "site sur-mesure entreprise",
  ],
};

export default function Vitrine() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white pt-36 lg:pt-32 pb-20 overflow-hidden flex flex-col justify-center">
        {/* Éléments décoratifs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple2 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple3 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <span className="inline-block mb-6 text-xs font-Gudea tracking-[.35em] uppercase text-purple2 border border-purple2/40 rounded-full px-4 py-1.5">
              inthegleam
            </span>

            <h1 className="font-semibold text-blackGleam text-center text-3xl sm:text-5xl tracking-[.15em] uppercase mb-6 font-Gudea">
              <span className="font-DissolveRegular mr-1 text-5xl sm:text-7xl text-blackGleam">
                S
              </span>
              ites{" "}
              <span className="bg-gradient-to-r from-purple3 to-purple2 bg-clip-text text-transparent">
                Vitrine
              </span>
            </h1>

            <p className="font-Gudea tracking-wider text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Valorisez votre expertise avec un site vitrine professionnel.
              Établissez une connexion authentique avec vos clients et
              renforcez votre crédibilité en ligne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/contact"
                className="font-Gudea font-semibold text-sm sm:text-base bg-gradient-to-l from-purple2 to-purple3 rounded-md py-3 px-6 uppercase tracking-[.25em] text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Lancer mon projet
              </Link>
              <Link
                href="#realisations"
                className="font-Gudea font-semibold text-sm sm:text-base border border-blackGleam/20 rounded-md py-3 px-6 uppercase tracking-[.25em] text-blackGleam/70 hover:border-purple2/60 hover:text-purple2 transition-all duration-300"
              >
                Voir nos réalisations
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                  +200%
                </div>
                <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                  Augmentation de la visibilité
                </div>
              </div>
              <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                  24/7
                </div>
                <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                  Présence en ligne
                </div>
              </div>
              <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                  ∞
                </div>
                <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                  Portée géographique
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

      {/* Section fonctionnalités modernisée */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide">
              Fonctionnalités <span className="text-purple2">Essentielles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque site vitrine que nous créons est conçu pour maximiser votre
              impact et renforcer votre présence professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Design */}
            <RevealOnScroll className="h-full" delay={0}>
              <div className="group relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple2 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Design Unique
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Votre site vitrine reflète votre identité visuelle et vos
                  valeurs. Nous concevons des designs personnalisés pour renforcer
                  votre image de marque.
                </p>
              </div>
            </RevealOnScroll>

            {/* Simplicité */}
            <RevealOnScroll className="h-full" delay={0.12}>
              <div className="group relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Navigation Intuitive
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Sites vitrine intuitifs où vos visiteurs trouvent rapidement les
                  informations recherchées. Navigation claire et optimisée pour
                  une expérience utilisateur de qualité.
                </p>
              </div>
            </RevealOnScroll>

            {/* Compatibilité */}
            <RevealOnScroll className="h-full" delay={0.24}>
              <div className="group relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Responsive Design
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Sites entièrement responsives garantissant une accessibilité
                  optimale sur ordinateurs, tablettes et mobiles. Adaptabilité
                  parfaite sur tous les écrans.
                </p>
              </div>
            </RevealOnScroll>

            {/* Rapidité */}
            <RevealOnScroll className="h-full" delay={0.36}>
              <div className="group relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Performance Optimisée
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Sites vitrines rapides et performants. Vitesse de chargement
                  optimisée qui améliore l'expérience utilisateur et renforce
                  votre référencement SEO.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Call to action modernisé */}
          <div className="mt-16 px-28 mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple3 to-purple2 px-6 py-8 text-center">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-Gudea tracking-[.3em] uppercase text-white/50 mb-1">
                    Prêt à démarrer ?
                  </p>
                  <h3 className="font-semibold text-white text-lg sm:text-2xl tracking-[.1em] uppercase font-Gudea">
                    Valorisez votre présence en ligne
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 font-Gudea font-semibold text-sm bg-white text-purple2 rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  Créer mon site vitrine
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section réalisations modernisée */}
      <section id="realisations" className="py-20 bg-blackGleam/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blackGleam mb-4 uppercase tracking-[.15em] font-Gudea">
              Nos <span className="font-DissolveRegular text-purple2">R</span>
              éalisations Vitrine
            </h2>
            <p className="text-lg text-blackGleam max-w-2xl mx-auto font-Gudea">
              Découvrez nos sites vitrine sur mesure, conçus pour valoriser
              l'expertise de nos clients et renforcer leur présence
              professionnelle en ligne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Kit a planter */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              <div className="relative overflow-hidden">
                <Image
                  src={"/images/kap_home.png"}
                  width={600}
                  height={400}
                  alt="Kit a planter - Site vitrine"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackGleam/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-bold text-blackGleam mb-1.5 font-Gudea">
                  Kit à planter
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed font-Gudea flex-1">
                  Site vitrine présentant les différentes abiances végétales de
                  KAP ainsi que leurs gammes de pots. Design épuré et navigation
                  intuitive pour mettre en valeur les produits et l'univers de
                  la marque.
                </p>

                <Link
                  target="_blank"
                  href={"https://www.kit-a-planter.fr/"}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple2 to-purple3 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-Gudea"
                >
                  <span>Visiter le site</span>
                  <svg
                    className="ml-2 w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Faiseur de Battements */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
              <div className="relative overflow-hidden">
                <Image
                  src={"/images/battement.png"}
                  width={600}
                  height={400}
                  alt="Faiseur de Battements - Site vitrine musical"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackGleam/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-bold text-blackGleam mb-1.5 font-Gudea">
                  Faiseur de Battements
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed font-Gudea flex-1">
                  Site vitrine professionnel pour producteur musical.
                  Présentation élégante du portfolio, intégration de players
                  audio et design optimisé pour l'industrie musicale.
                </p>

                <Link
                  target="_blank"
                  href={"https://www.faiseurdebattements.com/"}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple2 to-purple3 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-Gudea"
                >
                  <span>Visiter le site</span>
                  <svg
                    className="ml-2 w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Section statistiques modernisée */}
          <div className="max-w-6xl mx-auto mt-16 bg-gradient-to-r from-purple2 to-purple3 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2 font-Gudea">
                  99.9%
                </div>
                <div className="text-sm opacity-90 font-Gudea">
                  Uptime garanti
                </div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2 font-Gudea">
                  &lt;2s
                </div>
                <div className="text-sm opacity-90 font-Gudea">
                  Temps de chargement
                </div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2 font-Gudea">
                  100%
                </div>
                <div className="text-sm opacity-90 font-Gudea">
                  Responsive design
                </div>
              </div>
            </div>
          </div>

          {/* Call to action final */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Prêt à créer votre site vitrine professionnel ?
            </h3>
            <p className="text-blackGleam mb-6 max-w-2xl mx-auto font-Gudea">
              Contactez-nous pour discuter de votre projet et découvrir comment
              nous pouvons valoriser votre expertise en ligne.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-l from-purple3 to-purple2 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-Gudea"
            >
              Démarrer mon projet
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
