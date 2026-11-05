import React from "react";
import { CollectionsSection } from "@/components/home/collections/CollectionsSection";
import { getPublishedCollections } from "@/lib/api/collection.service";

export default async function CollectionsPage() {
  // Fetch collections from database
  const collections = await getPublishedCollections();

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F0]">
      <div className="pt-16">
        <CollectionsSection collections={collections} />
      </div>
    </div>
  );
}
