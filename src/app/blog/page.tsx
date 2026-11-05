import { pageMeta } from "@/lib/seo";
import { BlogIndex, BLOG_TITLE, BLOG_DESC } from "./BlogIndex";

// Statically generated and refreshed every 5 minutes (and on admin save) so it can be CDN-cached
export const revalidate = 300;

export const metadata = pageMeta({ title: BLOG_TITLE, description: BLOG_DESC, path: "/blog" });

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
