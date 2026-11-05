import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Garment Factory in Sialkot Pakistan",
  description:
    "Inside our Sialkot garment factory: cutting, stitching, finishing and quality control for 10,000+ units a month, exported worldwide.",
  path: "/manufacturing",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "Service",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/manufacturing", serviceType: "Garment manufacturing",
        })}
      />
      {children}
      <PageCopy path="/manufacturing" />
    </>
  );
}
