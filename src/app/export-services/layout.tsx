import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Export Services Pakistan",
  description:
    "End-to-end export services for apparel: documentation, packaging and worldwide shipping from Sialkot, Pakistan.",
  path: "/export-services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "Service",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/export-services", serviceType: "Clothing export services",
        })}
      />
      {children}
    </>
  );
}
