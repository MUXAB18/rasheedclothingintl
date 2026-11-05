import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sustainable Clothing Manufacturing",
  description:
    "Responsible sourcing, waste reduction and ethical garment manufacturing at our Sialkot, Pakistan factory.",
  path: "/sustainability",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
