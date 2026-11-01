"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export type Project = {
  name: string;
  description: string;
  image: string;
  imageClass?: string;
  category: string;
  internal?: boolean;
  href?: string;
};

const filters = [
  { id: "all", label: "Tous" },
  { id: "client", label: "Clients" },
  { id: "internal", label: "Projets internes" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = projects.filter((p) =>
    filter === "all" ? true : filter === "internal" ? p.internal : !p.internal
  );

  return (
    <>
      <div
        role="tablist"
        aria-label="Filtrer les projets"
        className="mx-auto mb-12 flex w-fit flex-wrap justify-center gap-1 rounded-2xl border border-blackGleam/10 bg-white p-1.5 shadow-sm"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-xl px-4 py-2 font-Gudea text-sm font-semibold transition-all duration-300 ${
              filter === f.id
                ? "bg-gradient-to-r from-purple2 to-purple3 text-white shadow-md shadow-purple2/30"
                : "text-blackGleam/60 hover:text-purple2"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="tab-fade grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {visible.map((project) => (
          <article
            key={project.name}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                width={600}
                height={400}
                alt={`${project.name} - ${project.category}`}
                className={`w-full h-48 transition-transform duration-500 group-hover:scale-110 ${
                  project.imageClass ?? "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blackGleam/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-3 left-3 right-3 flex justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-white/90 text-blackGleam text-[10px] font-semibold uppercase tracking-[.15em] px-2.5 py-1 backdrop-blur">
                  {project.category}
                </span>
                {project.internal && (
                  <span className="inline-flex items-center rounded-full bg-purple2 text-white text-[10px] font-semibold uppercase tracking-[.15em] px-2.5 py-1 shadow-md">
                    Interne
                  </span>
                )}
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-blackGleam mb-1.5 font-Gudea">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed font-Gudea flex-1">
                {project.description}
              </p>

              {project.href ? (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple2 to-purple3 text-white text-sm font-semibold py-2.5 px-4 rounded-lg font-Gudea hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
                >
                  Voir le projet
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              ) : (
                <div className="inline-flex items-center justify-center w-full border border-purple2/20 text-purple2 text-sm font-semibold py-2.5 px-4 rounded-lg font-Gudea">
                  Outil privé
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
