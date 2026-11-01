import Link from "next/link";
import React from "react";
import { SparklesCore } from "./ui/vortex";

export default function HomeSection1() {
  return (
    <>
      <section className="bg-[#080808] h-[85%] shadow-2xl">
        <div className="w-full absolute inset-0 h-screen z-0">
          <SparklesCore
            id="tsparticlesAccueil"
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={100}
            className="w-full h-[85%]"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative pt-[147px] lg:pt-[164px] text-white text-center flex flex-col gap-[1rem] md:gap-12 lg:gap-4 my-auto z-40">
          <h1 className="mt-16 sm:mt-[15rem] lg:mt-20 font-semibold text-center text-xl sm:text-4xl tracking-[.35em] uppercase title-section1">
            <span className="hero-reveal inline-block [animation-delay:200ms]">
              Faites{" "}
              <span className="w-gleam font-DissolveRegular text-4xl sm:text-7xl">
                B
              </span>
              riller
            </span>{" "}
            <span className="hero-reveal inline-block [animation-delay:900ms]">
              votre marque
            </span>
          </h1>
          <p className="hero-reveal [animation-delay:1500ms] font-Gudea tracking-widest lg:p-0 text-xs px-5 md:px-4 sm:text-lg lg:text-xl max-w-[50em] mx-auto title-section1">
            Sites web, applications et motion design : nous créons ce qui
            attire le regard, puis nous le faisons vivre chaque mois sur vos
            réseaux.
          </p>
          <div className="hero-reveal [animation-delay:1900ms] flex flex-col sm:flex-row items-center justify-center gap-4 px-8 sm:px-0 lg:mt-4 mt-3 z-50">
            <Link
              href="/#offres"
              className="w-full max-w-xs sm:w-auto sm:max-w-none text-center font-Gudea font-semibold text-sm sm:text-lg bg-gradient-to-l from-purple2 to-purple3 rounded-lg px-5 py-4 sm:p-3 lg:px-6 uppercase tracking-[.25em] RDV"
            >
              Découvrir nos offres
            </Link>
            <Link
              href="/contact"
              className="w-full max-w-xs sm:w-auto sm:max-w-none text-center font-Gudea font-semibold text-sm sm:text-lg border border-white/30 rounded-lg px-5 py-4 sm:p-3 lg:px-6 uppercase tracking-[.25em] hover:border-white transition-colors duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <p className="rounded-full p-1 animate-bounce mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14 text-[#080808]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </div>
    </>
  );
}

// className="absolute w-full h-[85%] z-10"
