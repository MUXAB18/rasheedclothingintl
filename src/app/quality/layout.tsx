import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Apparel Quality Control Pakistan",
  description:
    "Multi-stage inspection and a 99.5% quality rate make us a trusted, top-tier apparel supplier in Sialkot, Pakistan.",
  path: "/quality",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
