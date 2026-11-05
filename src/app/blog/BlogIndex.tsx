import React from "react";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPublishedBlogPosts } from "@/lib/api/blog.service";
import { BlogList } from "@/components/blog/BlogList";
import { Pagination } from "@/components/ui/Pagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageCopy } from "@/components/seo/PageCopy";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { BUSINESS_ID, WEBSITE_ID } from "@/lib/schema";

export const PAGE_SIZE = 9;
export const BLOG_TITLE = "Apparel Manufacturing Blog & Guides";
export const BLOG_DESC =
  "Guides on private label, sourcing, fabrics and clothing export from Pakistan, written by a Sialkot clothing manufacturer.";

export async function getBlogPageData(page: number) {
  const all = await getPublishedBlogPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  return { totalPages, posts: all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) };
}

export async function BlogIndex({ page }: { page: number }) {
  const { totalPages, posts } = await getBlogPageData(page);
  if (page > totalPages) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Rasheed Clothing International Blog",
    description: BLOG_DESC,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": BUSINESS_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: (p.publishedAt ?? p.createdAt).toISOString(),
    })),
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <JsonLd data={schema} />
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Insights & News"
          title="Apparel Manufacturing Blog & Guides"
          subtitle="Thoughts, trends, and technical knowledge from the forefront of global apparel manufacturing."
          align="center"
        />
        <BlogList posts={posts} />
        <Pagination basePath="/blog" page={page} totalPages={totalPages} />
      </div>
      {page === 1 && <PageCopy path="/blog" />}
    </div>
  );
}
