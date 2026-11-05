import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Custom Clothing Manufacturer Pakistan",
  description:
    "Custom and OEM clothing manufacturing from tech pack to delivery. Top-rated apparel supplier in Sialkot with MOQ from 50 units.",
  path: "/custom-manufacturing",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
