import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Custom Clothing Manufacturer Pakistan",
  description:
    "Custom and OEM clothing manufacturing from tech pack to delivery. Top-rated apparel supplier in Sialkot with MOQ from 50 units.",
  path: "/custom-manufacturing",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "Service",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/custom-manufacturing", serviceType: "Custom OEM clothing manufacturing",
        })}
      />
      {children}
      <PageCopy path="/custom-manufacturing" />
    </>
  );
}
