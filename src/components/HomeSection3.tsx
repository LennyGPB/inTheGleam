// import Image from "next/image"; // à réactiver avec la section "Nos technologies"
import React from "react";
import RevealOnScroll from "./RevealOnScroll/RevealOnScroll";
import { SparklesCore } from "./ui/vortex";

const pillars = [
  {
    title: "Cibler",
    description:
      "Identifier vos objectifs, votre audience et les leviers digitaux les plus pertinents pour votre activité.",
    icon: "M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  {
    title: "Analyser",
    description:
      "Étudier les possibilités offertes par le digital pour choisir les solutions les plus adaptées à votre projet.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  },
  {
    title: "Concrétiser",
    description:
      "Saisir chaque opportunité et la transformer en un site ou une application qui fait la différence.",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
  },
];

export default function HomeSection3() {
  return (
    <section className="flex flex-col">
      <article className="relative overflow-hidden bg-[#080808] text-white shadow-2xl w-full py-16 lg:py-24">
        {/* Ciel étoilé */}
        <SparklesCore
          id="tsparticlesDigital"
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={100}
          className="absolute inset-0 w-full h-full z-0"
          particleColor="#FFFFFF"
        />

        {/* Halos décoratifs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple2 rounded-full blur-[140px] opacity-20"></div>
          <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-purple3 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h3 className="font-DissolveRegular text-center text-4xl lg:text-5xl tracking-[.25em] uppercase mb-8">
            Le monde digital
          </h3>

          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <p className="font-Gudea text-lg lg:text-xl text-white/90 leading-relaxed mb-5">
              Votre présence sur internet est devenue indispensable dans un
              monde qui se digitalise chaque jour un peu plus.{" "}
              <span className="text-[#b080dd] font-semibold">
                Se réinventer, se transformer, se digitaliser
              </span>{" "}
              : c&apos;est la clé pour répondre aux besoins de vos clients et
              aux exigences du marché.
            </p>
            <p className="font-Gudea text-white/60 leading-relaxed">
              <span className="text-white font-semibold">inTheGleam</span> vous
              accompagne tout au long du processus en intégrant les technologies
              digitales adaptées à votre profil et à vos objectifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <RevealOnScroll key={pillar.title} className="h-full" delay={index * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-3xl p-8 bg-white/[0.04] border border-white/10 hover:border-purple2/60 hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-300">
                  <span
                    aria-hidden="true"
                    className="absolute top-6 right-8 text-6xl font-bold font-Gudea text-white/[0.05] group-hover:text-purple2/30 transition-colors duration-300 select-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative w-14 h-14 bg-gradient-to-br from-purple2 to-purple3 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple2/40 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                    </svg>
                  </div>

                  <h4 className="relative text-2xl font-bold mb-3 font-Gudea tracking-wide group-hover:text-[#b080dd] transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="relative text-white/60 leading-relaxed font-Gudea">
                    {pillar.description}
                  </p>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple2 to-purple3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </article>

      {/* Section "Nos technologies" masquée pour le moment
      <div className="nostech flex flex-col justify-center text-white bg-[#3D0571] gap-4 items-center">
        <h3 className="font-Gudea text-center text-4xl lg:text-5xl tracking-[.25em] uppercase mt-12 lg:mt-16 ">
          Nos <span className="font-DissolveRegular">t</span>echnologies
        </h3>

        <div className="flex flex-wrap justify-center items-center mt-6 mb-12 lg:mb-24 gap-7 lg:gap-20">
          <Image
            className="object-contain h-20 w-20"
            src="/techno/symf.png"
            alt="logo symfony"
            width={300}
            height={300}
          />
          <Image
            className="object-contain h-20 w-20"
            src="/techno/react.png"
            alt="logo react"
            width={300}
            height={300}
          />
          <Image
            className="object-contain h-20 w-32"
            src="/techno/node.png"
            alt="logo node"
            width={300}
            height={300}
          />
          <Image
            className="object-cover w-24 h-full"
            src="/techno/php.png"
            alt="logo php"
            width={300}
            height={300}
          />
          <Image
            className="h-20 w-20"
            src="/techno/js.png"
            alt="logo js"
            width={300}
            height={300}
          />
        </div>
      </div>
      */}
    </section>
  );
}
