import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Apparel Manufacturing Blog & Guides",
  description:
    "Guides on private label, sourcing, fabrics and clothing export from Pakistan, written by a Sialkot clothing manufacturer.",
  path: "/blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
