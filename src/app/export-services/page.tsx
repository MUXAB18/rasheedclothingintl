import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExportServicesClient } from "./ExportServicesClient";

export default function ExportServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Global Reach"
          title="Export Services"
          subtitle="Seamless international shipping and logistics support for your apparel manufacturing needs"
        />
        <ExportServicesClient />
      </div>
    </div>
  );
}
