import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Request a Bulk Clothing Quote",
  description:
    "Get a quote from a top clothing manufacturer and exporter in Sialkot, Pakistan. MOQ from 50 units, reply within 24 hours.",
  path: "/request-quote",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/request-quote",
        })}
      />
      {children}
      <PageCopy path="/request-quote" />
    </>
  );
}
