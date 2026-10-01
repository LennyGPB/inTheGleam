import React from "react";
import RevealEffect from "./RevealEffect/RevealEffect";
import FeatureCard from "./FeatureCard/FeatureCard";
import RevealOnScroll from "./RevealOnScroll/RevealOnScroll";

const services = [
  {
    title: "Gestion de projet web",
    description:
      "Nous vous accompagnons dans la création de vos projets web : sites vitrines, e-commerce, corporate, ou événementiels. De l'idée à la mise en ligne, nous assurons une gestion complète et personnalisée pour garantir votre succès en ligne.",
    icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75",
  },
  {
    title: "Application mobile",
    description:
      "Nous concevons et développons vos applications mobiles sur-mesure pour iPhone et Android. Des apps fluides, intuitives et performantes, publiées sur l'App Store et Google Play, pour accompagner vos clients partout.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    title: "Web Design",
    description:
      "Créez une expérience immersive pour vos utilisateurs en reflétant votre identité visuelle. Notre web design est conçu pour captiver vos visiteurs, renforcer votre image de marque et améliorer l'engagement.",
    icon: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z",
  },
  {
    title: "Intégration WEB",
    description:
      "Nous réalisons des intégrations HTML/CSS respectueuses des standards W3C et 100% responsive. Votre site s'adapte parfaitement aux ordinateurs, tablettes et mobiles pour offrir une expérience fluide sur tous les écrans, grâce à un code propre et performant.",
    icon: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
  },
  {
    title: "Maintenance site internet",
    description:
      "Assurez la longévité et la sécurité de votre site web grâce à une maintenance régulière. Nous veillons à optimiser les performances, corriger les bugs, et garantir la compatibilité avec les nouvelles technologies.",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "Référencement naturel",
    description:
      "Optimisez la visibilité de votre site grâce à un référencement naturel efficace. Nous structurons vos contenus avec des balises sémantiques et des mots-clés stratégiques pour améliorer votre positionnement dans les moteurs de recherche.",
    icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
  },
];

const processSteps = [
  {
    title: "Communication",
    description: "Échange et analyse de vos besoins",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    title: "Accord",
    description: "Validation du devis et planning",
    icon: "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12",
  },
  {
    title: "Conception",
    description: "Design et développement de votre projet",
    icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
  },
  {
    title: "Livraison",
    description: "Mise en ligne et formation",
    icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
];

export default function HomeSection2() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="service">
          <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
            Nos <span className="text-purple2">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions web complètes et sur-mesure pour accompagner votre
            réussite digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <RevealOnScroll
              key={service.title}
              className="h-full"
              delay={(index % 3) * 0.12}
            >
              <FeatureCard
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Section processus modernisée */}
        <RevealEffect>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blackGleam mb-4 font-Gudea">
                Notre <span className="text-purple2">Processus</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une méthode éprouvée en 4 étapes pour garantir le succès de
                votre projet
              </p>
            </div>

            <ol className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Ligne de liaison entre les étapes */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-purple2/10 via-purple2/40 to-purple2/10"
              />

              {processSteps.map((step, index) => (
                <li key={step.title} className="group relative text-center">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-purple2 to-purple3 rounded-2xl flex items-center justify-center shadow-lg shadow-purple2/30 ring-8 ring-white group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={step.icon}
                      />
                    </svg>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-purple2 text-xs font-bold font-Gudea flex items-center justify-center shadow-md border border-purple2/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-blackGleam md:mb-2 font-Gudea">
                    {step.title}
                  </h4>
                  <p className="hidden md:block text-gray-600 text-sm">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </RevealEffect>
      </div>
    </section>
  );
}
