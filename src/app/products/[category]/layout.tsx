import type { Metadata } from "next";
import { products } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const product = products.find((p) => String(p.id) === category);
  if (!product) return pageMeta({ title: "Product Not Found", description: "", path: `/products/${category}`, noindex: true });
  return pageMeta({
    title: `${product.title} Manufacturer Pakistan`,
    description: `${product.title} made to order in Sialkot, Pakistan. ${product.desc}`.slice(0, 160),
    path: `/products/${category}`,
    image: product.img,
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
