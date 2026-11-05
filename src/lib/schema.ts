import { SITE_URL } from "@/lib/seo";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type PageType =
  | "WebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage"
  | "Blog"
  | "Service";

/** Builds a WebPage-family node (plus an optional Service node) for a route. */
export function pageSchema(opts: {
  type: PageType;
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  const page = {
    "@type": opts.type === "Service" || opts.type === "Blog" ? "WebPage" : opts.type,
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
  };
  const graph: Record<string, unknown>[] = [page];

  if (opts.type === "Service") {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: opts.name,
      description: opts.description,
      serviceType: opts.serviceType ?? opts.name,
      url,
      provider: { "@id": BUSINESS_ID },
      areaServed: ["Pakistan", "Asia", "United Kingdom", "United States", "Canada", "Australia", "United Arab Emirates", "Europe"],
      audience: { "@type": "BusinessAudience", audienceType: "Clothing brands, retailers and businesses" },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function itemListSchema(items: { name: string; url: string }[], name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}
