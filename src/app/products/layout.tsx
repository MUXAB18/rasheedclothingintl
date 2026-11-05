import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Supplier: Hoodies & Activewear",
  description:
    "Best clothes supplier in Sialkot: hoodies, tees, tracksuits, outerwear, gymwear and corporate uniforms made to order and exported worldwide.",
  path: "/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "CollectionPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/products",
        })}
      />
      {children}
      <PageCopy path="/products" />
    </>
  );
}
