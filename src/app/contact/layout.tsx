import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Contact Sialkot Clothing Manufacturer",
  description:
    "Contact our Sialkot, Pakistan clothing factory for samples, pricing and bulk export orders. We reply within 24 hours, Monday to Saturday.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "ContactPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/contact",
        })}
      />
      {children}
    </>
  );
}
