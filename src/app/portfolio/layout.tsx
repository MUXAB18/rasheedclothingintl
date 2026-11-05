import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Manufacturing Portfolio",
  description:
    "Selected hoodies, activewear and custom garments produced for international brands by our Sialkot factory.",
  path: "/portfolio",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
