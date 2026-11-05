import type { Metadata } from "next";

export const SITE_URL = "https://www.rasheedclothingintl.me";
export const DEFAULT_OG_IMAGE = "/custom_hoodie_1.jpg";

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const { title, description, path, image = DEFAULT_OG_IMAGE, noindex, type = "website" } = opts;
  const fullTitle = `${title} | Rasheed Clothing`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Rasheed Clothing International",
      type,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
