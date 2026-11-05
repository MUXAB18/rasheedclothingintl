import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Sialkot Clothing Manufacturer",
  description:
    "Contact our Sialkot, Pakistan clothing factory for samples, pricing and bulk export orders. We reply within 24 hours, Monday to Saturday.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
