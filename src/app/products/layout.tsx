import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Supplier: Hoodies & Activewear",
  description:
    "Best clothes supplier in Sialkot: hoodies, tees, tracksuits, outerwear, gymwear and corporate uniforms made to order and exported worldwide.",
  path: "/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
