import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Exporter from Pakistan",
  description:
    "Top apparel exporter from Sialkot, Pakistan. Reliable shipping to Asia, UK, USA, Canada, Australia, UAE and Europe via DHL, FedEx and UPS.",
  path: "/global",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
