import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/", "/track/", "/thank-you"],
    },
    sitemap: "https://www.rasheedclothingintl.me/sitemap.xml",
  };
}
