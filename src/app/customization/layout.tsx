import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Apparel Printing & Embroidery Pakistan",
  description:
    "Screen printing, embroidery, sublimation, custom labels and packaging for private label clothing brands, made in Sialkot, Pakistan.",
  path: "/customization",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
