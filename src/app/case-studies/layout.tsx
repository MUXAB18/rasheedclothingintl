import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Apparel Manufacturing Case Studies",
  description:
    "See how global brands scaled activewear, streetwear and uniform production with a trusted Sialkot, Pakistan clothing manufacturer.",
  path: "/case-studies",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "CollectionPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/case-studies",
        })}
      />
      {children}
      <PageCopy path="/case-studies" />
    </>
  );
}
