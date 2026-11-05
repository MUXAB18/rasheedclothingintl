import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Garment Fabrics & Fabric Sourcing",
  description:
    "Heavyweight fleece, jersey, French terry and performance fabrics sourced for custom apparel by a Sialkot clothing manufacturer.",
  path: "/fabrics",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "Service",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/fabrics", serviceType: "Garment fabric sourcing",
        })}
      />
      {children}
      <PageCopy path="/fabrics" />
    </>
  );
}
