import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Rasheed Clothing International website and manufacturing orders.",
  path: "/terms",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={pageSchema({
          type: "WebPage",
          name: String(metadata.title),
          description: String(metadata.description),
          path: "/terms",
        })}
      />
      {children}
    </>
  );
}
