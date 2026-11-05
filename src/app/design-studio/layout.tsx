import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Custom Clothing Design Studio",
  description:
    "Design your own hoodies and apparel online, then have them manufactured by a trusted Sialkot, Pakistan factory.",
  path: "/design-studio",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
