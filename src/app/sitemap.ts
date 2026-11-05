import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getPublishedBlogPosts } from "@/lib/api/blog.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.rasheedclothingintl.me";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/products",
    "/manufacturing",
    "/custom-manufacturing",
    "/customization",
    "/private-label",
    "/quality",
    "/fabrics",
    "/lookbook",
    "/request-quote",
    "/faq",
    "/case-studies",
    "/portfolio",
    "/blog",
    "/collections",
    "/export-services",
    "/sustainability",
    "/global",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const dynamicProductRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedBlogPosts();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // DB unavailable at build time: skip blog URLs
  }

  return [...staticRoutes, ...dynamicProductRoutes, ...blogRoutes];
}
