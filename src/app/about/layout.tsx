import { pageMeta } from "@/lib/seo";
import { PageCopy } from "@/components/seo/PageCopy";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Clothing Manufacturer in Sialkot Pakistan",
  description:
    "Rasheed Clothing International: a Sialkot, Pakistan clothing manufacturer and exporter making streetwear, activewear and uniforms for brands worldwide.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "AboutPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/about",
        })}
      />
      {children}
      <PageCopy path="/about" />
    </>
  );
}
