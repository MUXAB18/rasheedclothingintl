import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Collections | Sialkot Supplier",
  description:
    "Browse apparel collections from formal wear to everyday luxury, manufactured to order in Sialkot, Pakistan.",
  path: "/collections",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "CollectionPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/collections",
        })}
      />
      {children}
    </>
  );
}
