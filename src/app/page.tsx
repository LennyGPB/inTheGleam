import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import Offers from "@/components/Offers/Offers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "inTheGleam - Sites, Apps & Motion Design | Faites briller votre marque",
  description:
    "inTheGleam crée vos sites web, applications mobiles et motion designs pour les réseaux sociaux. Abonnements motion dès 290 €/mois et packs lancement site + vidéo promo.",
  keywords: [
    "agence web",
    "développement mobile",
    "site vitrine",
    "site e-commerce",
    "développement sur-mesure",
    "applications web",
    "motion design",
    "vidéo réseaux sociaux",
    "logo animé",
    "services web professionnels",
  ],
  openGraph: {
    title: "inTheGleam - Sites, Apps & Motion Design | Faites briller votre marque",
    description:
      "inTheGleam crée vos sites web, applications mobiles et motion designs pour les réseaux sociaux. Abonnements motion dès 290 €/mois et packs lancement site + vidéo promo.",
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
      <section aria-label="Nos offres">
        <Offers />
      </section>
      <section aria-label="Nos avantages">
        <HomeSection4 />
      </section>
      <section aria-label="Le monde digital">
        <HomeSection3 />
      </section>
    </main>
  );
}
