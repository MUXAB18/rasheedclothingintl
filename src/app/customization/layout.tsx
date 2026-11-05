import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Apparel Printing & Embroidery Pakistan",
  description:
    "Screen printing, embroidery, sublimation, custom labels and packaging for private label clothing brands, made in Sialkot, Pakistan.",
  path: "/customization",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "Service",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/customization", serviceType: "Apparel printing, embroidery and labeling",
        })}
      />
      {children}
      <PageCopy path="/customization" />
    </>
  );
}
