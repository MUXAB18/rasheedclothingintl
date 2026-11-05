import React from "react";
import { CollectionsSection } from "@/components/home/collections/CollectionsSection";
import { getPublishedCollections } from "@/lib/api/collection.service";

// Refresh DB-backed content hourly instead of freezing it at build time
export const revalidate = 3600;

export default async function CollectionsPage() {
  // Fetch collections from database
  const collections = await getPublishedCollections();

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F0]">
      <div className="pt-16">
        <CollectionsSection collections={collections} headingAs="h1" />
        <section className="max-w-3xl mx-auto px-6 pb-24 text-near-black/75">
          <h2 className="text-2xl font-bold mb-4 text-near-black">
            Apparel collections made to order in Sialkot
          </h2>
          <p className="mb-4 leading-relaxed">
            Each collection groups garments by style, from heavyweight hoodies and
            everyday tees to tracksuits and gymwear. Every piece is manufactured to
            your specification at our Sialkot, Pakistan factory, with fabric,
            fit, colors and decoration chosen for your brand.
          </p>
          <p className="leading-relaxed">
            Want something specific? Compare options on our{" "}
            <a className="underline" href="/products">products page</a>, launch your
            label with <a className="underline" href="/private-label">private label manufacturing</a>,
            or <a className="underline" href="/request-quote">request a quote</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
