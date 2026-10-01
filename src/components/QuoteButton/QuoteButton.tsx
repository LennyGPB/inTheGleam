"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function QuoteButton() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="group fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2 bg-gradient-to-r from-purple2 to-purple3 text-white font-bold font-Gudea text-sm md:text-base py-3 px-5 md:py-4 md:px-6 rounded-2xl shadow-lg shadow-purple2/40 hover:shadow-xl hover:shadow-purple2/50 hover:scale-105 transition-all duration-300"
    >
      Obtenir un devis gratuit
      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  );
}
