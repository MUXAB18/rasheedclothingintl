import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Rasheed Clothing International collects, uses and protects your personal information.",
  path: "/privacy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
