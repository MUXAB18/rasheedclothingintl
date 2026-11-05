"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type L = { href: string; label: string; blurb: string };

const ALL: Record<string, L> = {
  "/products": {
    "href": "/products",
    "label": "Clothing Products",
    "blurb": "Hoodies, tees, tracksuits, gymwear and uniforms made to order."
  },
  "/private-label": {
    "href": "/private-label",
    "label": "Private Label Clothing",
    "blurb": "Launch your own brand with low MOQ from 50 units."
  },
  "/custom-manufacturing": {
    "href": "/custom-manufacturing",
    "label": "Custom Manufacturing",
    "blurb": "OEM apparel from tech pack to bulk delivery."
  },
  "/customization": {
    "href": "/customization",
    "label": "Printing & Embroidery",
    "blurb": "Screen print, embroidery, sublimation and custom labels."
  },
  "/fabrics": {
    "href": "/fabrics",
    "label": "Fabric Sourcing",
    "blurb": "Fleece, jersey, French terry and performance fabrics."
  },
  "/manufacturing": {
    "href": "/manufacturing",
    "label": "Our Sialkot Factory",
    "blurb": "Cutting, stitching and finishing at 10,000+ units a month."
  },
  "/quality": {
    "href": "/quality",
    "label": "Quality Control",
    "blurb": "Multi-stage inspection with a 99.5% quality rate."
  },
  "/global": {
    "href": "/global",
    "label": "Global Reach",
    "blurb": "We ship to Asia, the UK, USA, Canada, Australia, UAE and Europe."
  },
  "/export-services": {
    "href": "/export-services",
    "label": "Export Services",
    "blurb": "Documentation, packaging and worldwide shipping."
  },
  "/sustainability": {
    "href": "/sustainability",
    "label": "Sustainability",
    "blurb": "Responsible sourcing and ethical production."
  },
  "/portfolio": {
    "href": "/portfolio",
    "label": "Portfolio",
    "blurb": "Garments we have produced for international clients."
  },
  "/case-studies": {
    "href": "/case-studies",
    "label": "Case Studies",
    "blurb": "Real results from brands that scaled with us."
  },
  "/collections": {
    "href": "/collections",
    "label": "Collections",
    "blurb": "Browse our apparel collections."
  },
  "/design-studio": {
    "href": "/design-studio",
    "label": "Design Studio",
    "blurb": "Design your own custom apparel online."
  },
  "/about": {
    "href": "/about",
    "label": "About Rasheed Clothing",
    "blurb": "Our story, values and team in Sialkot, Pakistan."
  },
  "/faq": {
    "href": "/faq",
    "label": "FAQ",
    "blurb": "MOQ, pricing, lead times and shipping answers."
  },
  "/blog": {
    "href": "/blog",
    "label": "Blog & Guides",
    "blurb": "Apparel manufacturing and export insights."
  },
  "/contact": {
    "href": "/contact",
    "label": "Contact Us",
    "blurb": "Talk to our team. We reply within 24 hours."
  },
  "/request-quote": {
    "href": "/request-quote",
    "label": "Request a Quote",
    "blurb": "Get bulk pricing for your project."
  }
};

const RELATED: Record<string, string[]> = {
  "/": [
    "/products",
    "/private-label",
    "/manufacturing",
    "/global",
    "/case-studies",
    "/blog"
  ],
  "/about": [
    "/manufacturing",
    "/quality",
    "/sustainability",
    "/case-studies",
    "/global",
    "/contact"
  ],
  "/products": [
    "/private-label",
    "/custom-manufacturing",
    "/fabrics",
    "/customization",
    "/portfolio",
    "/request-quote"
  ],
  "/private-label": [
    "/custom-manufacturing",
    "/customization",
    "/fabrics",
    "/products",
    "/case-studies",
    "/request-quote"
  ],
  "/custom-manufacturing": [
    "/private-label",
    "/customization",
    "/fabrics",
    "/quality",
    "/manufacturing",
    "/request-quote"
  ],
  "/customization": [
    "/custom-manufacturing",
    "/private-label",
    "/design-studio",
    "/fabrics",
    "/portfolio",
    "/request-quote"
  ],
  "/fabrics": [
    "/custom-manufacturing",
    "/private-label",
    "/quality",
    "/sustainability",
    "/products",
    "/request-quote"
  ],
  "/manufacturing": [
    "/quality",
    "/sustainability",
    "/custom-manufacturing",
    "/global",
    "/case-studies",
    "/request-quote"
  ],
  "/quality": [
    "/manufacturing",
    "/sustainability",
    "/case-studies",
    "/private-label",
    "/faq",
    "/request-quote"
  ],
  "/global": [
    "/export-services",
    "/manufacturing",
    "/products",
    "/private-label",
    "/case-studies",
    "/request-quote"
  ],
  "/export-services": [
    "/global",
    "/manufacturing",
    "/private-label",
    "/products",
    "/faq",
    "/request-quote"
  ],
  "/sustainability": [
    "/manufacturing",
    "/quality",
    "/fabrics",
    "/case-studies",
    "/private-label",
    "/contact"
  ],
  "/portfolio": [
    "/case-studies",
    "/products",
    "/collections",
    "/private-label",
    "/request-quote"
  ],
  "/case-studies": [
    "/portfolio",
    "/quality",
    "/private-label",
    "/custom-manufacturing",
    "/global",
    "/request-quote"
  ],
  "/collections": [
    "/products",
    "/portfolio",
    "/private-label",
    "/design-studio",
    "/request-quote"
  ],
  "/design-studio": [
    "/customization",
    "/custom-manufacturing",
    "/products",
    "/private-label",
    "/faq",
    "/request-quote"
  ],
  "/faq": [
    "/private-label",
    "/custom-manufacturing",
    "/global",
    "/quality",
    "/products",
    "/contact"
  ],
  "/blog": [
    "/private-label",
    "/custom-manufacturing",
    "/fabrics",
    "/global",
    "/faq",
    "/request-quote"
  ],
  "/contact": [
    "/request-quote",
    "/faq",
    "/products",
    "/private-label",
    "/manufacturing",
    "/global"
  ],
  "/request-quote": [
    "/faq",
    "/private-label",
    "/products",
    "/quality",
    "/global",
    "/contact"
  ],
  "/privacy": [
    "/terms",
    "/contact",
    "/about",
    "/products"
  ],
  "/terms": [
    "/privacy",
    "/contact",
    "/faq",
    "/products"
  ]
};

export function RelatedLinks() {
  const pathname = usePathname() || "/";
  if (pathname === "/thank-you") return null;

  const section = pathname === "/" ? "/" : "/" + pathname.split("/").filter(Boolean)[0];
  const keys = (RELATED[section] ?? RELATED["/products"]).filter((k) => k !== pathname);
  const links = keys.map((k) => ALL[k]).filter(Boolean);

  return (
    <aside aria-labelledby="related-links" className="bg-[#0a0a0a] border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="related-links" className="text-xl md:text-2xl font-display text-white mb-8">
          Explore more from our Sialkot clothing manufacturer
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => (
            <li key={l.href} className="relative h-full p-5 rounded-2xl border border-white/10 hover:border-white/40 transition-colors">
              {/* Anchor text is just the page name; the stretched link makes the whole card clickable */}
              <Link href={l.href} className="block text-white font-bold mb-1 after:absolute after:inset-0 after:content-['']">
                {l.label}
              </Link>
              <p className="text-sm text-white/55">{l.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
