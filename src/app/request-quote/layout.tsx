import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Request a Bulk Clothing Quote",
  description:
    "Get a quote from a top clothing manufacturer and exporter in Sialkot, Pakistan. MOQ from 50 units, reply within 24 hours.",
  path: "/request-quote",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
