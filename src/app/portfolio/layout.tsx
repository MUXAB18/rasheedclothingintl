import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Manufacturing Portfolio",
  description:
    "Selected hoodies, activewear and custom garments produced for international brands by our Sialkot factory.",
  path: "/portfolio",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "CollectionPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/portfolio",
        })}
      />
      {children}
      <PageCopy path="/portfolio" />
    </>
  );
}
