import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Export Services Pakistan",
  description:
    "End-to-end export services for apparel: documentation, packaging and worldwide shipping from Sialkot, Pakistan.",
  path: "/export-services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
