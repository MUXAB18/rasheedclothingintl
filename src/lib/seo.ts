import type { Metadata } from "next";

export const SITE_URL = "https://www.rasheedclothingintl.me";
export const DEFAULT_OG_IMAGE = "/blue-zip-up-hoodie-puff-print-model.jpg";
const SITE_NAME = "Rasheed Clothing International";

/** A relevant photo for each page's share card (jpg/png only, from /public). */
const FACTORY = "/aboutus/rasheed-clothing-factory-sialkot-";
const OG_PHOTOS: Record<string, string> = {
  "/": "/blue-zip-up-hoodie-puff-print-model.jpg",
  "/private-label": "/custom-hoodies-collection.png",
  "/custom-manufacturing": "/grey-zip-hoodie-tracksuit-models.jpg",
  "/products": "/black-first-48-graphic-tee-shorts-set.jpg",
  "/customization": `${FACTORY}multi-head-embroidery-machines-red-garments.jpeg`,
  "/fabrics": `${FACTORY}industrial-sewing-machine-black-fabric-closeup.jpeg`,
  "/manufacturing": `${FACTORY}sewing-machine-operator-grey-fabric.jpeg`,
  "/quality": `${FACTORY}overlock-machine-black-garment-seams.jpeg`,
  "/global": "/custom-tracksuits-collection.png",
  "/export-services": "/outerwear-jackets-collection.png",
  "/about": "/rasheed-clothing-showroom-design-table.jpg",
  "/contact": "/rasheed-clothing-showroom-design-table.jpg",
  "/request-quote": "/grey-zip-hoodie-joggers-model.jpg",
  "/case-studies": "/red-first-48-graphic-tee-shorts-set.jpg",
  "/portfolio": "/black-hoodie-red-back-graphic-model.jpg",
  "/collections": "/custom-hoodies-collection.png",
  "/faq": "/black-red-b-logo-gym-singlets.jpg",
  "/design-studio": "/studio/embroidered-patch-comic-bam.png",
  "/sustainability": "/custom-tees-collection.png",
  "/blog": "/black-hoodie-back-print-concrete-wall.jpg",
  "/privacy": DEFAULT_OG_IMAGE,
  "/terms": DEFAULT_OG_IMAGE,
};

/** Builds the dynamic 1200x630 share-card URL served by src/app/og/route.tsx. */
export function ogImageUrl(title: string, subtitle: string, photo?: string) {
  // Trim the subtitle at a word boundary so the card never ends mid-word
  const sub =
    subtitle.length <= 110 ? subtitle : subtitle.slice(0, 110).replace(/\s+\S*$/, "").replace(/[,.;:]$/, "") + "…";
  const p = new URLSearchParams({ t: title, s: sub });
  // The card generator reads jpg/png only; media covers also exist as .jpg
  const safe = photo?.replace(/\.(webp|avif)$/i, ".jpg");
  if (safe) p.set("img", safe);
  return `/og?${p.toString()}`;
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  /** Photo for the share card. Defaults to a page-relevant image. */
  image?: string;
  noindex?: boolean;
  /** With noindex: still let Google follow links on the page (default true). */
  follow?: boolean;
  type?: "website" | "article";
  /** Extra Open Graph article data (blog posts). */
  article?: { publishedTime?: string; modifiedTime?: string; authors?: string[]; tags?: string[] };
}): Metadata {
  const { title, description, path, noindex, follow = true, type = "website", article } = opts;
  const key = path.split("?")[0];
  const photo = opts.image ?? OG_PHOTOS[key] ?? DEFAULT_OG_IMAGE;
  const suffix = " | Rasheed Clothing";
  // Add the brand suffix only when the title stays within ~65 characters
  const fullTitle = title.length + suffix.length <= 65 ? `${title}${suffix}` : title;
  const shareImage = ogImageUrl(title, description, photo);
  const alt = `${title} - ${SITE_NAME}`;

  return {
    // absolute: works even when an intermediate layout resets the root title template
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: shareImage, width: 1200, height: 630, alt, type: "image/jpeg" }],
      ...(type === "article"
        ? {
            type: "article" as const,
            publishedTime: article?.publishedTime,
            modifiedTime: article?.modifiedTime,
            authors: article?.authors,
            tags: article?.tags,
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: shareImage, alt }],
    },
  };
}
