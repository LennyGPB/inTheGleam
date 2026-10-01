import React from "react";
import FeatureCard from "./FeatureCard/FeatureCard";
import RevealOnScroll from "./RevealOnScroll/RevealOnScroll";

const atouts = [
  {
    title: "Tarif Avantageux",
    description:
      "En tant que Freelancers, nous offrons des tarifs compétitifs adaptés aux besoins des entreprises et des particuliers. Profitez de solutions web de qualité professionnelle à des prix bien inférieurs à ceux des agences traditionnelles.",
    icon: "M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Design Personnalisé",
    description:
      "Chaque projet est unique ! Nous concevons des designs sur mesure qui reflètent vos goûts et valorisent votre identité visuelle. Transformez vos idées en un site web moderne, élégant et parfaitement adapté à vos besoins.",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
  },
  {
    title: "Support Rapide",
    description:
      "Nous privilégions une communication claire et continue à chaque étape de votre projet : avant, pendant et après la réalisation. Notre support réactif vous garantit une réponse sous 24 heures pour toute question ou demande.",
    icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Pure Code",
    description:
      "En tant que développeurs experts, nous utilisons un code pur et optimisé, offrant une flexibilité totale dans la création de votre site web. Vous bénéficiez d'une solution sur-mesure, performante et évolutive, sans limitations liées aux outils standards.",
    icon: "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6A2.25 2.25 0 0 0 18.75 3.75H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z",
  },
];

export default function HomeSection4() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
            Nos <span className="text-purple2">Atouts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi nos clients nous font confiance pour leurs
            projets web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {atouts.map((atout, index) => (
            <RevealOnScroll
              key={atout.title}
              className="h-full"
              delay={(index % 2) * 0.12}
            >
              <FeatureCard
                index={index}
                title={atout.title}
                description={atout.description}
                icon={atout.icon}
              />
            </RevealOnScroll>
          ))}
        </div>

        {/* Call to action modernisé */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple3 to-purple2 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-Gudea">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-Gudea leading-relaxed">
              Contactez-nous dès maintenant pour discuter de vos besoins et
              découvrir comment nous pouvons transformer vos idées en réalité
              digitale.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-blackGleam font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-Gudea"
            >
              Obtenir un devis gratuit
              <svg
                className="ml-3 w-6 h-6"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
