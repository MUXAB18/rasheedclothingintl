import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Exporter from Pakistan",
  description:
    "Top apparel exporter from Sialkot, Pakistan. Reliable shipping to Asia, UK, USA, Canada, Australia, UAE and Europe via DHL, FedEx and UPS.",
  path: "/global",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/global",
        })}
      />
      {children}
      <PageCopy path="/global" />
    </>
  );
}
