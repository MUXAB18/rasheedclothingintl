import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Apparel Manufacturing Case Studies",
  description:
    "See how global brands scaled activewear, streetwear and uniform production with a trusted Sialkot, Pakistan clothing manufacturer.",
  path: "/case-studies",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
