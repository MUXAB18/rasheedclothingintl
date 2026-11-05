import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Lookbook | Custom Garments",
  description:
    "A visual lookbook of hoodies, streetwear and activewear crafted by Rasheed Clothing International in Sialkot, Pakistan.",
  path: "/lookbook",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
