import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Rasheed Clothing International collects, uses and protects your personal information.",
  path: "/privacy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/privacy",
        })}
      />
      {children}
    </>
  );
}
