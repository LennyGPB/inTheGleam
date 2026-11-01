import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid, { type Project } from "@/components/ProjectsGrid/ProjectsGrid";

export const metadata: Metadata = {
  title: "Nos Projets | inTheGleam - Sites, Apps & Plateformes",
  description:
    "Découvrez les projets réalisés par inTheGleam : sites vitrines, boutiques e-commerce, applications mobiles et plateformes développées pour nos clients et en interne.",
  keywords: [
    "portfolio inTheGleam",
    "réalisations web",
    "site vitrine",
    "site e-commerce",
    "application mobile",
    "projets internes",
    "inTheGleam",
  ],
  openGraph: {
    title: "Nos Projets | inTheGleam",
    description:
      "Sites vitrines, e-commerce, applications mobiles et plateformes : découvrez les projets inTheGleam.",
    url: "https://www.inthegleam.com/projets",
    type: "website",
    images: [
      {
        url: "https://www.inthegleam.com/logos/LogoPNG_inTheGleam_Black.png",
        alt: "Projets inTheGleam",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.inthegleam.com/projets",
  },
};

const projects: Project[] = [
  {
    name: "Kinetik",
    description: "Découvrez Kinetik, un projet développé par inTheGleam.",
    image: "/images/kinetik.png",
    category: "Plateforme web",
    internal: true,
    href: "https://kinetik-app.com/",
  },
  {
    name: "Kit à planter",
    description:
      "Site vitrine présentant les différentes ambiances végétales de KAP ainsi que leurs gammes de pots. Design épuré et navigation intuitive pour mettre en valeur les produits et l'univers de la marque.",
    image: "/images/kap_home.png",
    category: "Site vitrine",
    href: "https://www.kit-a-planter.fr/",
  },
  {
    name: "Belle Nippe",
    description:
      "Boutique de mode en ligne élégante avec gestion des stocks en temps réel, système de paiement sécurisé et interface utilisateur intuitive.",
    image: "/images/bellenippe.png",
    category: "E-commerce",
    href: "https://www.bellenippe.fr/",
  },
  {
    name: "Inkera Studio",
    description:
      "Solution complète de gestion de salon de tatouage, intégrant prise de rendez-vous, gestion client, du stock, affichage des artistes, du portfolio et du profil public sur Inkera People.",
    image: "/images/Dashboard.png",
    category: "SaaS",
    internal: true,
    href: "https://www.inkera-studio.com/",
  },
  {
    name: "ViewZ",
    description:
      "Application mobile dédiée aux danseurs : un réseau social pensé pour partager ses performances, découvrir d'autres talents et faire grandir la communauté de la danse.",
    image: "/images/viewz.png",
    imageClass: "object-cover object-top",
    category: "App mobile",
    href: "https://play.google.com/store/apps/details?id=com.hiden.viewz",
  },
  {
    name: "Faiseur de Battements",
    description:
      "Site vitrine professionnel pour producteur musical. Présentation élégante du portfolio, intégration de players audio et design optimisé pour l'industrie musicale.",
    image: "/images/battement.png",
    category: "Site vitrine",
    href: "https://www.faiseurdebattements.com/",
  },
  {
    name: "Inkera People",
    description:
      "Plateforme reliée à Inkera Studio pour permettre aux clients de créer un compte, consulter les portfolios des artistes, suivre leurs rendez-vous, chercher de l'inspiration et interagir avec la communauté du tatouage.",
    image: "/images/people.png",
    category: "Plateforme web",
    internal: true,
    href: "https://www.theinkera.com/",
  },
  {
    name: "Signs",
    description:
      "Application de bien-être et de manifestation : un accompagnement au quotidien pour cultiver un état d'esprit positif, fixer ses intentions et suivre son évolution personnelle.",
    image: "/images/signs.png",
    imageClass: "object-contain bg-black p-8",
    category: "App mobile",
    href: "https://play.google.com/store/apps/details?id=com.signs.app",
  },
  {
    name: "Prospera",
    description:
      "Notre plateforme de gestion de client interne, conçue pour centraliser les données, automatiser les tâches administratives et offrir une vue 360° de chaque projet et client.",
    image: "/images/prospera.png",
    category: "Outil métier",
    internal: true,
  },
];


export default function ProjetsPage() {
  return (
    <>
      <section className="relative bg-white pt-36 lg:pt-40 pb-16 overflow-hidden">
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
              Nos{" "}
              <span className="font-DissolveRegular mr-1 text-5xl sm:text-7xl text-blackGleam">
                P
              </span>
              <span className="bg-gradient-to-r from-purple3 to-purple2 bg-clip-text text-transparent">
                rojets
              </span>
            </h1>

            <p className="font-Gudea tracking-wider text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Sites vitrines, boutiques en ligne, applications mobiles et
              plateformes : ce que nous avons construit pour nos clients et
              pour nous-mêmes.
            </p>
          </div>
        </div>
      </section>

      <section id="projets" className="pb-20 pt-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <ProjectsGrid projects={projects} />

          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple3 to-purple2 px-6 py-8">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-Gudea tracking-[.3em] uppercase text-white/50 mb-1">
                    Votre projet
                  </p>
                  <h2 className="font-semibold text-white text-lg sm:text-2xl tracking-[.1em] uppercase font-Gudea">
                    Le prochain, c&apos;est le vôtre ?
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#offres"
                    className="shrink-0 inline-flex items-center justify-center font-Gudea font-semibold text-sm border border-white/40 text-white rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/10 transition-all duration-300"
                  >
                    Nos offres
                  </Link>
                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center justify-center gap-2 font-Gudea font-semibold text-sm bg-white text-purple2 rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
