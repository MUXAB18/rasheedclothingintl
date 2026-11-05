import { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/api/blog.service";
import { SITE_URL } from "@/lib/seo";

// Refresh DB-backed content hourly instead of freezing it at build time
export const revalidate = 3600;

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

// Bump a date when that page's content meaningfully changes.
// Honest lastModified dates help Google decide when to re-crawl.
const SITE_UPDATED = "2026-11-05";

const staticRoutes: {
  path: string;
  priority: number;
  freq: Freq;
  updated?: string;
  images?: string[];
}[] = [
  { path: "", priority: 1.0, freq: "weekly", images: ["/blue-zip-up-hoodie-puff-print-model.jpg", "/rasheed-clothing-showroom-design-table.jpg"] },
  // Money pages: services & conversion
  { path: "/private-label", priority: 0.95, freq: "weekly" },
  { path: "/custom-manufacturing", priority: 0.95, freq: "weekly" },
  { path: "/products", priority: 0.9, freq: "weekly", images: ["/custom-hoodies-collection.png", "/custom-tracksuits-collection.png", "/custom-gymwear-collection.png"] },
  { path: "/request-quote", priority: 0.9, freq: "monthly" },
  { path: "/contact", priority: 0.85, freq: "monthly" },
  // Trust & capability
  { path: "/manufacturing", priority: 0.85, freq: "monthly", images: ["/aboutus/rasheed-clothing-factory-sialkot-sewing-machine-operator-grey-fabric.jpeg"] },
  { path: "/global", priority: 0.8, freq: "monthly" },
  { path: "/export-services", priority: 0.8, freq: "monthly" },
  { path: "/customization", priority: 0.8, freq: "monthly" },
  { path: "/fabrics", priority: 0.75, freq: "monthly" },
  { path: "/quality", priority: 0.75, freq: "monthly" },
  { path: "/about", priority: 0.75, freq: "monthly" },
  { path: "/case-studies", priority: 0.75, freq: "monthly" },
  { path: "/portfolio", priority: 0.7, freq: "weekly" },
  { path: "/collections", priority: 0.7, freq: "weekly" },
  { path: "/faq", priority: 0.7, freq: "monthly" },
  { path: "/design-studio", priority: 0.65, freq: "monthly" },
  { path: "/sustainability", priority: 0.6, freq: "monthly" },
  { path: "/blog", priority: 0.7, freq: "daily" },
  // Legal: indexable but low priority
  { path: "/privacy", priority: 0.2, freq: "yearly" },
  { path: "/terms", priority: 0.2, freq: "yearly" },
];

const abs = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: r.updated ?? SITE_UPDATED,
    changeFrequency: r.freq,
    priority: r.priority,
    ...(r.images ? { images: r.images.map(abs) } : {}),
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedBlogPosts();
    blogPages = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt.toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      ...(post.coverImage ? { images: [abs(post.coverImage)] } : {}),
    }));
  } catch {
    // DB unavailable at build time: skip blog URLs rather than fail the sitemap
  }

  return [...pages, ...blogPages];
}
