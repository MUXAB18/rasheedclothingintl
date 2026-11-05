import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Manufacturing FAQ: MOQ & Pricing",
  description:
    "Answers on MOQ, pricing, lead times, shipping and custom orders from a B2B clothing manufacturer in Sialkot, Pakistan.",
  path: "/faq",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
