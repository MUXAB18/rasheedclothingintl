import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Garment Factory in Sialkot Pakistan",
  description:
    "Inside our Sialkot garment factory: cutting, stitching, finishing and quality control for 10,000+ units a month, exported worldwide.",
  path: "/manufacturing",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
