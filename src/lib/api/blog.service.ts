/**
 * Blog API Service
 * CRUD operations for blog posts
 */

import prisma from "@/lib/prisma";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";

export type CreateBlogPostInput = {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  author?: string;
  isPublished?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  publishedAt?: Date;
};

export type UpdateBlogPostInput = Partial<CreateBlogPostInput>;

// ─── READ ────────────────────────────────────────────────────────────────────

export async function getAllBlogPosts() {
  return prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// unstable_cache stores JSON, so Date fields come back as strings: turn them back into Dates
type BlogPostRow = Awaited<ReturnType<typeof prisma.blogPost.findMany>>[number];
const revive = <T extends BlogPostRow | null>(p: T): T =>
  p
    ? ({
        ...p,
        publishedAt: p.publishedAt ? new Date(p.publishedAt) : null,
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt),
      } as T)
    : p;

// Public blog reads are cached for 5 minutes (and cleared immediately when an admin saves),
// so visitors don't wait on a database round trip.
const cachedPublishedPosts = unstable_cache(
  async () =>
    prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: "desc" },
    }),
  ["blog-published-posts"],
  { revalidate: 300, tags: ["blog"] },
);
export async function getPublishedBlogPosts() {
  return (await cachedPublishedPosts()).map((p) => revive(p));
}

export async function getFeaturedBlogPosts(limit = 3) {
  return prisma.blogPost.findMany({
    where: {
      isPublished: true,
      isFeatured: true,
    },
    take: limit,
    orderBy: { publishedAt: "desc" },
  });
}

export async function getBlogPostById(id: string) {
  return prisma.blogPost.findUnique({
    where: { id },
  });
}

export async function getBlogPostBySlug(slug: string) {
  const post = await unstable_cache(
    async () => prisma.blogPost.findUnique({ where: { slug } }),
    ["blog-post", slug],
    { revalidate: 300, tags: ["blog"] },
  )();
  return revive(post);
}

export async function getBlogPostsByTag(tag: string) {
  return prisma.blogPost.findMany({
    where: {
      isPublished: true,
      tags: {
        has: tag,
      },
    },
    orderBy: { publishedAt: "desc" },
  });
}

// ─── CREATE ──────────────────────────────────────────────────────────────────

export async function createBlogPost(data: CreateBlogPostInput) {
  const post = await prisma.blogPost.create({
    data: {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      coverImage: data.coverImage,
      author: data.author || "Admin",
      isPublished: data.isPublished ?? false,
      isFeatured: data.isFeatured ?? false,
      tags: data.tags || [],
      publishedAt: data.publishedAt,
    },
  });
  revalidatePaths();
  return post;
}

// ─── UPDATE ──────────────────────────────────────────────────────────────────

export async function updateBlogPost(id: string, data: UpdateBlogPostInput) {
  const post = await prisma.blogPost.update({
    where: { id },
    data,
  });
  revalidatePaths();
  return post;
}

export async function publishBlogPost(id: string) {
  return updateBlogPost(id, {
    isPublished: true,
    publishedAt: new Date(),
  });
}

export async function unpublishBlogPost(id: string) {
  return updateBlogPost(id, {
    isPublished: false,
  });
}

export async function incrementViews(id: string) {
  // Use atomic increment to avoid race conditions from concurrent requests
  await prisma.blogPost.update({
    where: { id },
    data: { views: { increment: 1 } },
  });
  // Revalidate admin panel so views stay fresh
  revalidatePath("/admin/blog");
}

// ─── DELETE ──────────────────────────────────────────────────────────────────

export async function deleteBlogPost(id: string) {
  await prisma.blogPost.delete({ where: { id } });
  revalidatePaths();
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function revalidatePaths() {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidateTag("blog", "max");
  revalidatePath("/admin/blog");
}

// ─── STATISTICS ──────────────────────────────────────────────────────────────

export async function getBlogStats() {
  const [totalPosts, publishedPosts, draftPosts, totalViews] =
    await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { isPublished: true } }),
      prisma.blogPost.count({ where: { isPublished: false } }),
      prisma.blogPost.aggregate({
        _sum: { views: true },
      }),
    ]);

  return {
    totalPosts,
    publishedPosts,
    draftPosts,
    totalViews: totalViews._sum.views || 0,
  };
}
