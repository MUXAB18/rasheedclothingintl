import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Rasheed Clothing International website and manufacturing orders.",
  path: "/terms",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
