import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, productSlug } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Our Catalog"
          title="Clothing Supplier: Our Products"
          subtitle="Explore our core product categories, engineered for premium brands worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={product.id} className={`group relative h-[500px] overflow-hidden bg-[#F8F8F8] ${i >= 3 ? "[content-visibility:auto] [contain-intrinsic-size:auto_500px]" : ""}`}>
              <Image
                src={product.img}
                alt={`${product.title}: ${product.desc}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority={i < 2}
                fetchPriority={i === 0 ? "high" : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h2 className="text-3xl font-display mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {product.title}
                </h2>
                <div className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-3">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.desc}
                  </p>
                </div>
                <Link
                  href={`/products/${productSlug(product)}`}
                  className="inline-block mt-2 font-medium text-black hover:underline underline-offset-4"
                >
                  Explore Category <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
