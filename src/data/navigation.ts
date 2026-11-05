export type NavItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

export const navigation: {
  main: NavItem[];
  footer: Record<string, NavItem[]>;
} = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Collections",
      href: "/collections",
    },
    { name: "Portfolio", href: "/portfolio" },
    {
      name: "Our Factory",
      href: "/manufacturing",
      dropdown: [
        { name: "Manufacturing", href: "/manufacturing" },
        { name: "Quality Control", href: "/quality" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Global Reach", href: "/global" },
        { name: "Export Services", href: "/export-services" },
      ],
    },
    {
      name: "Services",
      href: "/private-label",
      dropdown: [
        { name: "Private Label", href: "/private-label" },
        { name: "Custom Manufacturing", href: "/custom-manufacturing" },
        { name: "Customization & Printing", href: "/customization" },
        { name: "Fabric Sourcing", href: "/fabrics" },
      ],
    },
    { name: "Design Studio", href: "/design-studio" },
    { name: "Contact", href: "/contact" },
  ],
  footer: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Collections", href: "/collections" },
      { name: "Contact Us", href: "/contact" },
    ],
    explore: [
      { name: "Manufacturing", href: "/manufacturing" },
      { name: "Quality Control", href: "/quality" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Global Reach", href: "/global" },
      { name: "Export Services", href: "/export-services" },
      { name: "Manufacturer for Europe", href: "/clothing-manufacturer-europe" },
      { name: "Manufacturer for UK", href: "/clothing-manufacturer-uk" },
    ],
    services: [
      { name: "Private Label", href: "/private-label" },
      { name: "Custom Manufacturing", href: "/custom-manufacturing" },
      { name: "Customization & Printing", href: "/customization" },
      { name: "Fabric Sourcing", href: "/fabrics" },
      { name: "Apparel Manufacturer Pakistan", href: "/apparel-manufacturer-pakistan" },
      { name: "Hoodie Manufacturer", href: "/hoodie-manufacturer" },
      { name: "Activewear Manufacturer", href: "/activewear-manufacturer" },
    ],
    resources: [
      { name: "Design Studio", href: "/design-studio" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ],
  },
};
