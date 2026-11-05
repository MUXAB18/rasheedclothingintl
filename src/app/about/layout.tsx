import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Manufacturer in Sialkot Pakistan",
  description:
    "Rasheed Clothing International is a top clothing manufacturer and exporter in Sialkot, Pakistan, supplying streetwear, activewear and uniforms to brands across Asia and worldwide.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
