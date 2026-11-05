import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { findProduct, productSlug } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const product = findProduct(category);
  if (!product) return pageMeta({ title: "Product Not Found", description: "", path: `/products/${category}`, noindex: true });
  return pageMeta({
    title: `${product.title} Manufacturer Pakistan`,
    description: `${product.title} made to order in Sialkot, Pakistan. ${product.desc}`.slice(0, 160),
    path: `/products/${productSlug(product)}`,
    image: product.img,
    // Thin, near-identical item pages: keep out of the index, let /products rank
    noindex: true,
  });
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const product = findProduct(category);
  // Old numeric URLs (/products/101) permanently redirect to the slug URL
  if (product && category !== productSlug(product)) {
    permanentRedirect(`/products/${productSlug(product)}`);
  }
  return <>{children}</>;
}
