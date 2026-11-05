import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Sustainable Clothing Manufacturing",
  description:
    "Responsible sourcing, waste reduction and ethical garment manufacturing at our Sialkot, Pakistan factory.",
  path: "/sustainability",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/sustainability",
        })}
      />
      {children}
    </>
  );
}
