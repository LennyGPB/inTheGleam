import React from "react";

export default function FeatureCard({
  index,
  title,
  description,
  icon,
}: {
  index: number;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <article className="group relative h-full overflow-hidden bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/60 hover:shadow-2xl hover:shadow-purple2/15 hover:-translate-y-2 hover:border-purple2/20 transition-all duration-300">
      {/* Halo violet au survol */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple2/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <span
        aria-hidden="true"
        className="absolute top-6 right-8 text-6xl font-bold font-Gudea text-purple2/[0.07] group-hover:text-purple2/15 transition-colors duration-300 select-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative w-16 h-16 bg-gradient-to-br from-purple2 to-purple3 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple2/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>

      <h3 className="relative text-2xl font-bold text-blackGleam mb-4 font-Gudea group-hover:text-purple2 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative text-gray-600 leading-relaxed font-Gudea">
        {description}
      </p>

      {/* Barre d'accent au survol */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple2 to-purple3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
      />
    </article>
  );
}
