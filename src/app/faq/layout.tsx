import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Manufacturing FAQ: MOQ & Pricing",
  description:
    "Answers on MOQ, pricing, lead times, shipping and custom orders from a B2B clothing manufacturer in Sialkot, Pakistan.",
  path: "/faq",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/faq",
        })}
      />
      {children}
    </>
  );
}
