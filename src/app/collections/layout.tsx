import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clothing Collections | Sialkot Supplier",
  description:
    "Browse apparel collections from formal wear to everyday luxury, manufactured to order in Sialkot, Pakistan.",
  path: "/collections",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
