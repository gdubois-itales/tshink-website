export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Créations", href: "/creations" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
];

export type Collection = {
  slug: string;
  title: string;
  year: string;
  theme: string;
};

// Central source of truth for the 3 collections — used by /collections,
// the nav dropdown, and generateStaticParams for /collections/[slug].
export const collections: Collection[] = [
  {
    slug: "zodiac-tribe",
    title: "Zodiac Tribe",
    year: "Collection de 2ᵉ année",
    theme: "Day by Day",
  },
  {
    slug: "kinky-link",
    title: "Kinky Link",
    year: "Collection de 3ᵉ année",
    theme: "Deal",
  },
  {
    slug: "freedoms-temptation",
    title: "Freedom's Temptation",
    year: "Travail de fin d'études",
    theme: "Liberté",
  },
];
