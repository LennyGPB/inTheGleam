import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "inTheGleam - Agence Web et Mobile | Développement Sur-Mesure",
  description:
    "inTheGleam, votre agence spécialisée en développement web et mobile. Création de sites vitrines, e-commerce, applications webs, et bien plus. Découvrez nos services et technologies.",
  keywords: [
    "agence web",
    "développement mobile",
    "site vitrine",
    "site e-commerce",
    "développement sur-mesure",
    "applications web",
    "services web professionnels",
  ],
  openGraph: {
    title: "inTheGleam - Agence Web et Mobile | Développement Sur-Mesure",
    description:
      "inTheGleam, votre agence spécialisée en développement web et mobile. Création de sites vitrines, e-commerce, applications webs, et bien plus. Découvrez nos services et technologies.",
    url: "https://www.inthegleam.com",
    type: "website",
    images: [
      {
        url: "https://www.inthegleam.com/images/og-image.jpg",
        alt: "inTheGleam - Développement Web et Mobile",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="">
      <section aria-label="Accueil" className=" h-[100vh]">
        <HomeSection1 />
      </section>
      <section aria-label="Nos Services Web">
        <HomeSection2 />
      </section>
      <section aria-label="Le monde digital" className=" mt-12 lg:mt-20">
        <HomeSection3 />
      </section>
      <section aria-label="Nos avantages" className=" mt-12">
        <HomeSection4 />
      </section>
    </main>
  );
}
