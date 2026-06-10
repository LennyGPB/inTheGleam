import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projets Internes | inTheGleam",
  description:
    "Découvrez les projets internes d'inTheGleam : produits digitaux, prototypes IA et outils métier conçus par notre équipe pour innover plus vite.",
  keywords: [
    "projets internes",
    "innovation digitale",
    "R&D web",
    "prototypes IA",
    "outils métier",
    "inTheGleam",
  ],
  openGraph: {
    title: "Projets Internes | inTheGleam",
    description:
      "Explorez les initiatives internes inTheGleam qui transforment nos idées en produits concrets : plateformes, outils et expériences digitales.",
    url: "https://www.inthegleam.com/projets",
    type: "website",
    images: [
      {
        url: "https://www.inthegleam.com/logos/LogoPNG_inTheGleam_Black.png",
        alt: "Projets internes inTheGleam",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const internalProjects = [
  {
    name: "Inkera Studio",
    description:
      "Solution complète de gestion de salon de tatouage, intégrant prise de rendez-vous, gestion client, du stock, affichage des artistes, du portfolio et du profil public sur Inkera People.",
    image: "/images/dashboard.png",
    status: "Actif",
    href: "https://www.inkera-studio.com/",
  },
  {
    name: "Inkera People",
    description:
      "Plateforme reliée à Inkera Studio pour permettre aux clients de créer un compte, consulter les portfolios des artistes, suivre leurs rendez-vous, chercher de l'inspiration et interagir avec la communauté du tatouage.",
    image: "/images/people.png",
    status: "Actif",
    href: "https://www.theinkera.com/",
  },
  {
    name: "Prospera",
    description:
      "Notre plateforme de gestion de client interne, conçue pour centraliser les données, automatiser les tâches administratives et offrir une vue 360° de chaque projet et client.",
    image: "/images/prospera.png",
    status: "Privé",
  },
];

export default function ProjetsPage() {
  return (
    <>
      <section className="relative min-h-screen bg-white pt-36 lg:pt-32 pb-20 overflow-hidden flex flex-col justify-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple2 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple3 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block mb-6 text-xs font-Gudea tracking-[.35em] uppercase text-purple2 border border-purple2/40 rounded-full px-4 py-1.5">
              inthegleam
            </span>

            <h1 className="font-semibold text-blackGleam text-center text-3xl sm:text-5xl tracking-[.15em] uppercase mb-6 font-Gudea">
              <span className="font-DissolveRegular mr-1 text-5xl sm:text-7xl text-blackGleam">
                P
              </span>
              rojets
              <span className="bg-gradient-to-r from-purple3 to-purple2 bg-clip-text text-transparent">
                {" "}
                Internes
              </span>
            </h1>

            <p className="font-Gudea tracking-wider text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Nous concevons en interne des outils, des produits et des
              expériences digitales pour accélérer l&apos;innovation de notre
              agence et de nos clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/contact"
                className="font-Gudea font-semibold text-sm sm:text-base bg-gradient-to-l from-purple2 to-purple3 rounded-md py-3 px-6 uppercase tracking-[.25em] text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Discuter de votre idée
              </Link>
              <Link
                href="#projets-internes"
                className="font-Gudea font-semibold text-sm sm:text-base border border-blackGleam/20 rounded-md py-3 px-6 uppercase tracking-[.25em] text-blackGleam/70 hover:border-purple2/60 hover:text-purple2 transition-all duration-300"
              >
                Voir nos projets
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                  3+
                </div>
                <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                  Produits en incubation
                </div>
              </div>
              <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                  100%
                </div>
                <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                  Développés en interne
                </div>
              </div>
              <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                  R&D
                </div>
                <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                  Culture d&apos;innovation continue
                </div>
              </div>
            </div>
          </div>
        </div>

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

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide">
              Pourquoi nos <span className="text-purple2">projets internes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque initiative est pensée comme un terrain d&apos;expérimentation
              pour améliorer nos méthodes, renforcer nos expertises et livrer
              plus vite des solutions à forte valeur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
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
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                Time-to-Market
              </h3>
              <p className="text-gray-600 leading-relaxed font-Gudea">
                Nous validons rapidement des idées et transformons les concepts
                en MVP exploitables en conditions réelles.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                Qualité produit
              </h3>
              <p className="text-gray-600 leading-relaxed font-Gudea">
                Nos briques internes sont testées, sécurisées et réutilisées
                dans les projets clients pour gagner en robustesse.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                Innovation continue
              </h3>
              <p className="text-gray-600 leading-relaxed font-Gudea">
                Nous explorons l&apos;IA, l&apos;automatisation et les nouveaux usages
                web pour garder une longueur d&apos;avance.
              </p>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
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
                    d="M17 20h5V4H2v16h5m10 0v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m12 0H7m6-10a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                Impact équipe
              </h3>
              <p className="text-gray-600 leading-relaxed font-Gudea">
                Ces projets structurent nos process et améliorent la
                collaboration entre design, produit et développement.
              </p>
            </div>
          </div>

          <div className="mt-16 px-4 sm:px-8 lg:px-28 mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple3 to-purple2 px-6 py-8 text-center">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-Gudea tracking-[.3em] uppercase text-white/50 mb-1">
                    Collaboration
                  </p>
                  <h3 className="font-semibold text-white text-lg sm:text-2xl tracking-[.1em] uppercase font-Gudea">
                    Transformons une idée en produit
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 font-Gudea font-semibold text-sm bg-white text-purple2 rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  Parlons-en
                  <svg
                    className="w-3.5 h-3.5"
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
          </div>
        </div>
      </section>

      <section id="projets-internes" className="py-20 bg-blackGleam/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blackGleam mb-4 uppercase tracking-[.15em] font-Gudea">
              Nos <span className="font-DissolveRegular text-purple2">P</span>
              rojets Internes
            </h2>
            <p className="text-lg text-blackGleam max-w-2xl mx-auto font-Gudea">
              Un aperçu de nos chantiers internes, pensés pour innover et créer
              les solutions de demain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {internalProjects.map((project) => (
              <article
                key={project.name}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.name}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blackGleam/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-white/90 text-blackGleam text-[10px] font-semibold uppercase tracking-[.15em] px-2.5 py-1">
                    {project.status}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-blackGleam mb-1.5 font-Gudea">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed font-Gudea flex-1">
                    {project.description}
                  </p>

                  {"href" in project ? (
                    <Link
                      href={project.href as string}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple2 to-purple3 text-white text-sm font-semibold py-2 px-4 rounded-lg font-Gudea hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Voir la plateforme
                    </Link>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple2 to-purple3 text-white text-sm font-semibold py-2 px-4 rounded-lg font-Gudea opacity-90">
                      Projet interne privé
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
