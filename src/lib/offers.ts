// Source unique des offres : section "Nos offres", formulaire de contact et API.

export type OfferFeature = {
  label: string;
  /** true = inclus, false = non inclus, string = valeur précise */
  value: boolean | string;
  /** Mis en gras dans la carte */
  emphasis?: boolean;
};

export type Offer = {
  slug: string;
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  highlighted?: boolean;
  features: OfferFeature[];
};

export const subscriptions: Offer[] = [
  {
    slug: "essentiel",
    name: "Essentiel",
    price: "290 €",
    priceSuffix: "/mois",
    tagline: "Pour être présent chaque semaine sur les réseaux.",
    features: [
      { label: "Motions par mois", value: "4" },
      { label: "Formats", value: "9:16" },
      { label: "Retouches par motion", value: "1" },
      { label: "Texte de publication + hashtags", value: true },
      { label: "Crédits Kinetik offerts", value: true },
      { label: "Voix off IA", value: false },
      { label: "Covers / miniatures", value: false },
      { label: "Logo animé offert", value: false },
    ],
  },
  {
    slug: "croissance",
    name: "Croissance",
    price: "590 €",
    priceSuffix: "/mois",
    tagline: "Le meilleur équilibre pour accélérer votre visibilité.",
    highlighted: true,
    features: [
      { label: "Motions par mois", value: "8" },
      { label: "Formats", value: "2 formats" },
      { label: "Retouches par motion", value: "2" },
      { label: "Texte de publication + hashtags", value: true },
      { label: "Crédits Kinetik offerts", value: true },
      { label: "Voix off IA", value: true },
      { label: "Covers / miniatures", value: true },
      { label: "Logo animé offert", value: true },
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    price: "890 €",
    priceSuffix: "/mois",
    tagline: "Une présence complète, tous formats, en priorité.",
    features: [
      { label: "Motions par mois", value: "12" },
      { label: "Formats", value: "Tous formats" },
      { label: "Retouches par motion", value: "2" },
      { label: "Texte de publication + hashtags", value: true },
      { label: "Crédits Kinetik offerts", value: true },
      { label: "Voix off IA", value: true },
      { label: "Covers / miniatures", value: true },
      { label: "Logo animé offert", value: true },
      { label: "Vidéo promo longue (30-60 s)", value: "1 par trimestre" },
      { label: "Posts statiques déclinés", value: true },
      { label: "Livraison prioritaire 48 h", value: true },
    ],
  },
];

export const launchPacks: Offer[] = [
  {
    slug: "lancement-vitrine",
    name: "Lancement Vitrine",
    price: "À partir de 990 €",
    tagline: "Votre site vitrine livré avec tout pour le faire connaître.",
    features: [
      { label: "Type", value: "One-shot" },
      { label: "Livrable", value: "Site vitrine" },
      { label: "Vidéo promo en motion", value: true, emphasis: true },
      { label: "Logo animé", value: true },
      { label: "Crédits Kinetik offerts", value: true },
      { label: "-50 % le 1er mois d'abonnement", value: true },
      { label: "Visuels App Store / Play Store", value: false },
    ],
  },
  {
    slug: "lancement-e-commerce",
    name: "Lancement E-commerce",
    price: "À partir de 1 890 €",
    tagline: "Votre boutique en ligne prête à vendre dès le premier jour.",
    highlighted: true,
    features: [
      { label: "Type", value: "One-shot" },
      { label: "Livrable", value: "Site e-commerce" },
      { label: "Vidéo promo en motion", value: true, emphasis: true },
      { label: "Logo animé", value: true },
      { label: "Crédits Kinetik offerts", value: true },
      { label: "-50 % le 1er mois d'abonnement", value: true },
      { label: "Visuels App Store / Play Store", value: false },
    ],
  },
  {
    slug: "lancement-app",
    name: "Lancement App",
    price: "Sur devis",
    tagline: "Votre app iOS + Android, lancée avec ses visuels stores.",
    features: [
      { label: "Type", value: "One-shot" },
      { label: "Livrable", value: "App iOS + Android" },
      { label: "Vidéo promo en motion", value: true, emphasis: true },
      { label: "Logo animé", value: true },
      { label: "Crédits Kinetik offerts", value: true },
      { label: "-50 % le 1er mois d'abonnement", value: true },
      { label: "Visuels App Store / Play Store", value: true },
    ],
  },
];

export const devServices: { slug: string; name: string; price: string }[] = [
  { slug: "site-vitrine", name: "Site Vitrine", price: "À partir de 700 €" },
  { slug: "site-e-commerce", name: "Site E-commerce", price: "À partir de 1 500 €" },
  { slug: "app-mobile", name: "App mobile", price: "Sur devis" },
  { slug: "sur-mesure", name: "Sur mesure", price: "Sur devis" },
  { slug: "maintenance", name: "Maintenance", price: "Sur devis" },
];

/** Options du menu déroulant du formulaire de contact, groupées. */
export const offerGroups = [
  {
    label: "Abonnements motion design",
    options: subscriptions.map((o) => ({
      slug: o.slug,
      label: `${o.name} — ${o.price}${o.priceSuffix ?? ""}`,
    })),
  },
  {
    label: "Packs lancement",
    options: launchPacks.map((o) => ({
      slug: o.slug,
      label: `${o.name} — ${o.price}`,
    })),
  },
  {
    label: "Développement",
    options: devServices.map((o) => ({
      slug: o.slug,
      label: `${o.name} — ${o.price}`,
    })),
  },
];

/** slug -> libellé lisible (utilisé par l'API pour le message Telegram). */
export const offerLabels: Record<string, string> = Object.fromEntries(
  offerGroups.flatMap((g) => g.options.map((o) => [o.slug, o.label]))
);
