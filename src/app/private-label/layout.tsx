import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private Label Clothing Manufacturer",
  description:
    "Launch your clothing brand with a top private label manufacturer in Sialkot, Pakistan. Low MOQ from 50 units, fast sampling, worldwide export.",
  path: "/private-label",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
