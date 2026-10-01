import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SparklesCore } from "./ui/vortex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-gleam overflow-hidden min-h-screen flex flex-col justify-between">
      <SparklesCore
        background="transparent"
        minSize={0.3}
        maxSize={1}
        particleDensity={100}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />

      <div className="relative z-10 w-full px-8 lg:px-48 pt-16 pb-8 flex flex-col flex-1 justify-end">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_0.9fr_1fr] gap-12 mb-12 items-end">

          {/* Colonne 1 — Logo + présentation */}
          <div className="flex flex-col justify-center gap-6 max-w-sm">
            <Image
              className="object-contain h-[4.5rem] w-auto imgNeon"
              src="/logos/Logo_Inline_inTheGleam_Blanc.png"
              alt="logo inthegleam"
              width={300}
              height={300}
            />
           
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-Gudea tracking-[.3em] uppercase mb-2">
              Navigation
            </h3>
            <Link href="/" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              Accueil
            </Link>
            <Link href="/a-propos" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              À propos
            </Link>
          
          </div>

          {/* Colonne 3 — Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-Gudea tracking-[.3em] uppercase mb-2">
              Services
            </h3>
            <Link href="/vitrine" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              Site Vitrine
            </Link>
            <Link href="/e-commerce" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              Site E-Commerce
            </Link>
            <Link href="/application-mobile" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              Application Mobile
            </Link>
          </div>

          {/* Colonne 4 — Légal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-Gudea tracking-[.3em] uppercase mb-2">
              Légal
            </h3>
            <Link href="/mentions-legales" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea">
              Politique de confidentialité
            </Link>
          </div>

          {/* Colonne 5 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-Gudea tracking-[.3em] uppercase mb-2">
              Contact
            </h3>
            <a
              href="mailto:contact@inthegleam.com"
              className="flex items-center gap-3 text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              contact@inthegleam.com
            </a>
            <Link
              href="https://www.instagram.com/inthe_gleam/"
              target="_blank"
              className="flex items-center gap-3 text-sm text-white/70 hover:text-[#b080dd] transition-colors font-Gudea"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              @inthe_gleam
            </Link>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-xs font-Gudea tracking-wide">
            2026 inTheGleam &copy; — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
