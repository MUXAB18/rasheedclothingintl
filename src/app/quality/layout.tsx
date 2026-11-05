import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Apparel Quality Control Pakistan",
  description:
    "Multi-stage inspection and a 99.5% quality rate make us a trusted, top-tier apparel supplier in Sialkot, Pakistan.",
  path: "/quality",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/quality",
        })}
      />
      {children}
      <PageCopy path="/quality" />
    </>
  );
}
