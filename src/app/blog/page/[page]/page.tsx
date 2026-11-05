import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { BlogIndex, BLOG_TITLE, BLOG_DESC, getBlogPageData } from "../../BlogIndex";

export const revalidate = 300;

export async function generateStaticParams() {
  const { totalPages } = await getBlogPageData(1);
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({ page: String(i + 2) }));
}

const parse = (raw: string) => (/^\d+$/.test(raw) ? parseInt(raw, 10) : NaN);

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const page = parse((await params).page);
  if (!(page >= 2)) return pageMeta({ title: "Page Not Found", description: "", path: "/blog", noindex: true });
  return pageMeta({
    title: `${BLOG_TITLE} - Page ${page}`,
    description: `${BLOG_DESC} Page ${page}.`,
    path: `/blog/page/${page}`,
  });
}

export default async function BlogPageN({ params }: { params: Promise<{ page: string }> }) {
  const page = parse((await params).page);
  if (Number.isNaN(page) || page < 1) notFound();
  if (page === 1) permanentRedirect("/blog");
  return <BlogIndex page={page} />;
}
