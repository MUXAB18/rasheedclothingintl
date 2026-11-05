import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Private Label Clothing Manufacturer",
  description:
    "Launch your clothing brand with a top private label manufacturer in Sialkot, Pakistan. Low MOQ from 50 units, fast sampling, worldwide export.",
  path: "/private-label",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "Service",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/private-label", serviceType: "Private label clothing manufacturing",
        })}
      />
      {children}
      <PageCopy path="/private-label" />
    </>
  );
}
