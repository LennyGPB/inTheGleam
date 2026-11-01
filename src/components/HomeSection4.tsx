import Link from "next/link";
import React from "react";
import RevealOnScroll from "./RevealOnScroll/RevealOnScroll";

const atouts = [
  {
    title: "Un seul interlocuteur",
    description:
      "Site, application et motion design au même endroit. Plus besoin de jongler entre une agence web, un vidéaste et un graphiste : une seule équipe connaît votre projet de A à Z.",
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Tarifs clairs",
    description:
      "Nos prix sont affichés, sans surprise. En freelance, vous profitez d'une qualité pro sans les frais d'une grande agence.",
    icon: "M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "100 % sur-mesure",
    description:
      "Pas de template : chaque site est codé et chaque motion créé pour votre marque.",
    icon: "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6A2.25 2.25 0 0 0 18.75 3.75H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z",
  },
  {
    title: "Ultra réactifs",
    description:
      "Réponse sous 24 h et livraison prioritaire en 48 h sur l'offre Premium.",
    icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Pensé pour performer",
    description:
      "Formats adaptés à chaque réseau, sites rapides et optimisés pour Google : vos contenus sont faits pour être vus.",
    icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
  },
  {
    title: "Partenaire dans la durée",
    description:
      "Maintenance, abonnement mensuel, évolutions : on grandit avec votre marque, bien après la mise en ligne.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
  },
];

const stats = [
  { value: "24 h", label: "Délai de réponse" },
  { value: "48 h", label: "Livraison prioritaire" },
  { value: "Web + Motion", label: "Une seule équipe" },
  { value: "100 %", label: "Sur-mesure" },
];

function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function HomeSection4() {
  const [main, ...rest] = atouts;

  return (
    <section id="atouts" className="scroll-mt-20 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
            Nos <span className="text-purple2">Atouts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ce qui fait la différence quand vous travaillez avec nous
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Atout principal, mis en avant */}
          <RevealOnScroll className="h-full md:col-span-2 lg:row-span-2" delay={0}>
            <article className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blackGleam via-[#1f0736] to-purple2 p-8 lg:p-10 text-white shadow-2xl shadow-purple2/20">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#b080dd]/30 blur-[90px]"
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Icon d={main.icon} className="h-8 w-8" />
                </div>
                <h3 className="font-Gudea text-3xl lg:text-4xl font-bold mb-4">
                  {main.title}
                </h3>
                <p className="font-Gudea text-lg leading-relaxed text-white/75 max-w-xl">
                  {main.description}
                </p>

                <dl className="mt-auto grid grid-cols-2 gap-4 pt-10">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <dt className="font-Gudea text-xs uppercase tracking-[.2em] text-white/50">
                        {s.label}
                      </dt>
                      <dd className="mt-1 font-Gudea text-xl lg:text-2xl font-bold">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </RevealOnScroll>

          {rest.map((atout, index) => (
            <RevealOnScroll
              key={atout.title}
              className="h-full"
              delay={((index + 1) % 3) * 0.12}
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-lg shadow-gray-200/60 hover:shadow-2xl hover:shadow-purple2/15 hover:-translate-y-1 hover:border-purple2/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple2 to-purple3 text-white shadow-lg shadow-purple2/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Icon d={atout.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-Gudea text-xl font-bold text-blackGleam group-hover:text-purple2 transition-colors duration-300">
                    {atout.title}
                  </h3>
                </div>
                <p className="font-Gudea leading-relaxed text-gray-600">
                  {atout.description}
                </p>
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple2 to-purple3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                />
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple3 to-purple2 rounded-3xl p-10 md:p-12 max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-Gudea">
              Prêt à faire briller votre marque ?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-Gudea leading-relaxed">
              Parlez-nous de votre projet : on vous répond sous 24 heures avec
              la formule la plus adaptée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-blackGleam font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-Gudea"
              >
                Nous contacter
                <svg
                  className="ml-3 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/#offres"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg font-Gudea"
              >
                Voir les offres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
