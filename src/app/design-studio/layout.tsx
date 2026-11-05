import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Custom Clothing Design Studio",
  description:
    "Design your own hoodies and apparel online, then have them manufactured by a trusted Sialkot, Pakistan factory.",
  path: "/design-studio",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/design-studio",
        })}
      />
      {children}
      <PageCopy path="/design-studio" />
    </>
  );
}
