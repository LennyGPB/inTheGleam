import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export const metadata: Metadata = {
  title: "Création d'Application Mobile iOS & Android | inTheGleam",
  description:
    "Donnez vie à votre application mobile sur-mesure pour iPhone et Android. De la conception à la publication sur l'App Store et Google Play, nous vous accompagnons à chaque étape.",
  keywords: [
    "application mobile",
    "création application mobile",
    "développement application iOS",
    "développement application Android",
    "application sur-mesure",
    "agence application mobile",
    "inTheGleam application mobile",
  ],
  openGraph: {
    title: "Création d'Application Mobile iOS & Android | inTheGleam",
    description:
      "Donnez vie à votre application mobile sur-mesure pour iPhone et Android. De la conception à la publication sur l'App Store et Google Play, nous vous accompagnons à chaque étape.",
    url: "https://www.inthegleam.com/application-mobile",
    type: "website",
  },
};

const features = [
  {
    title: "iOS & Android",
    description:
      "Une seule application pensée pour iPhone et Android, avec une expérience cohérente et soignée sur tous les smartphones et tablettes.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    title: "Design Mobile",
    description:
      "Des interfaces intuitives et des animations fluides, conçues pour le tactile et fidèles à votre identité visuelle.",
    icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
  },
  {
    title: "Notifications Push",
    description:
      "Gardez le lien avec vos utilisateurs grâce aux notifications, aux comptes utilisateurs et aux fonctionnalités communautaires.",
    icon: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0",
  },
  {
    title: "Publication Stores",
    description:
      "Nous gérons la mise en ligne sur l'App Store et Google Play, puis les mises à jour pour faire évoluer votre application.",
    icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
];

const apps = [
  {
    name: "ViewZ",
    description:
      "Application mobile dédiée aux danseurs : un réseau social pensé pour partager ses performances, découvrir d'autres talents et faire grandir la communauté de la danse.",
    image: "/images/viewz.png",
    imageClass: "object-cover object-top",
    href: "https://play.google.com/store/apps/details?id=com.hiden.viewz",
  },
  {
    name: "Signs",
    description:
      "Application de bien-être et de manifestation : un accompagnement au quotidien pour cultiver un état d'esprit positif, fixer ses intentions et suivre son évolution personnelle.",
    image: "/images/signs.png",
    imageClass: "object-contain bg-black p-8",
    href: "https://play.google.com/store/apps/details?id=com.signs.app",
  },
];

const stats = [
  { value: "2", label: "Plateformes iOS & Android" },
  { value: "100%", label: "Sur-mesure" },
  { value: "A → Z", label: "De l'idée aux stores" },
];

export default function ApplicationMobile() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white pt-36 lg:pt-32 pb-20 overflow-hidden flex flex-col justify-center">
        {/* Éléments décoratifs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple2 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple3 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <span className="inline-block mb-6 text-xs font-Gudea tracking-[.35em] uppercase text-purple2 border border-purple2/40 rounded-full px-4 py-1.5">
              inthegleam
            </span>

            <h1 className="font-semibold text-blackGleam text-center text-3xl sm:text-5xl tracking-[.15em] uppercase mb-6 font-Gudea">
              <span className="font-DissolveRegular mr-1 text-5xl sm:text-7xl text-blackGleam">
                A
              </span>
              pplication{" "}
              <span className="bg-gradient-to-r from-purple3 to-purple2 bg-clip-text text-transparent">
                Mobile
              </span>
            </h1>

            <p className="font-Gudea tracking-wider text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Votre projet dans la poche de vos clients. Nous concevons et
              développons des applications sur-mesure pour iPhone et Android,
              de l&apos;idée jusqu&apos;à la publication sur les stores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/contact"
                className="font-Gudea font-semibold text-sm sm:text-base bg-gradient-to-l from-purple2 to-purple3 rounded-md py-3 px-6 uppercase tracking-[.25em] text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Lancer mon projet
              </Link>
              <Link
                href="#realisations"
                className="font-Gudea font-semibold text-sm sm:text-base border border-blackGleam/20 rounded-md py-3 px-6 uppercase tracking-[.25em] text-blackGleam/70 hover:border-purple2/60 hover:text-purple2 transition-all duration-300"
              >
                Voir nos applications
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-purple2 mb-1 font-Gudea">
                    {stat.value}
                  </div>
                  <div className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flèche pour scroll */}
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

      {/* Section fonctionnalités */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
              Des Apps <span className="text-purple2">Qui Marquent</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chaque application que nous créons est pensée pour offrir une
              expérience fluide et engager durablement vos utilisateurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <RevealOnScroll
                key={feature.title}
                className="h-full"
                delay={index * 0.12}
              >
                <FeatureCard
                  index={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </RevealOnScroll>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple3 to-purple2 px-6 py-8 text-center">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-Gudea tracking-[.3em] uppercase text-white/50 mb-1">
                    Une idée d&apos;application ?
                  </p>
                  <h3 className="font-semibold text-white text-lg sm:text-2xl tracking-[.1em] uppercase font-Gudea">
                    Donnons-lui vie ensemble
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 font-Gudea font-semibold text-sm bg-white text-purple2 rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  Lancer mon projet
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section réalisations */}
      <section id="realisations" className="py-20 bg-blackGleam/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blackGleam mb-4 uppercase tracking-[.15em] font-Gudea">
              Nos <span className="font-DissolveRegular text-purple2">A</span>
              pplications
            </h2>
            <p className="text-lg text-blackGleam max-w-2xl mx-auto font-Gudea">
              Découvrez les applications mobiles que nous avons conçues et
              publiées sur les stores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {apps.map((app, index) => (
              <RevealOnScroll
                key={app.name}
                className="h-full"
                delay={index * 0.12}
              >
                <article className="group h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={app.image}
                      width={600}
                      height={400}
                      alt={`${app.name} - Application mobile`}
                      className={`w-full h-56 ${app.imageClass} transition-transform duration-500 group-hover:scale-110`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blackGleam/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-white/90 text-blackGleam text-[10px] font-semibold uppercase tracking-[.15em] px-2.5 py-1">
                      Google Play
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-blackGleam mb-1.5 font-Gudea">
                      {app.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed font-Gudea flex-1">
                      {app.description}
                    </p>

                    <Link
                      href={app.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple2 to-purple3 text-white text-sm font-semibold py-2 px-4 rounded-lg font-Gudea hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Voir sur Google Play
                      <svg
                        className="ml-2 w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          {/* Call to action final */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Prêt à lancer votre application ?
            </h3>
            <p className="text-blackGleam mb-6 max-w-2xl mx-auto font-Gudea">
              Contactez-nous pour discuter de votre projet mobile et découvrir
              comment nous pouvons le concrétiser sur iPhone et Android.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-l from-purple3 to-purple2 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-Gudea"
            >
              Démarrer mon projet
              <svg
                className="ml-2 w-5 h-5"
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
      </section>
    </>
  );
}
