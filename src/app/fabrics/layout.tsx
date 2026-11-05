import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Garment Fabrics & Fabric Sourcing",
  description:
    "Heavyweight fleece, jersey, French terry and performance fabrics sourced for custom apparel by a Sialkot clothing manufacturer.",
  path: "/fabrics",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
