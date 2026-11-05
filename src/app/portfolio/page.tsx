import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPublishedProjects } from "@/lib/api/portfolio.service";
import { PortfolioClient } from "./PortfolioClient";

// Refresh DB-backed content hourly instead of freezing it at build time
export const revalidate = 3600;

// Define the portfolio categories
const portfolioCategories = [
  "Hoodies",
  "Tees & Essentials",
  "Tracksuits",
  "Gymwear",
  "Corporate Uniforms",
  "Outerwear & Jackets",
];

export default async function PortfolioPage() {
  // Fetch portfolio projects from database
  const portfolioProjects = await getPublishedProjects();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <SectionHeading
          as="h1"
          eyebrow="Our Work"
          title="Clothing Manufacturing Portfolio"
          subtitle="Explore our extensive catalog of premium manufactured apparel."
        />

        <PortfolioClient
            projects={portfolioProjects}
            categories={portfolioCategories}
          />
      </div>
    </div>
  );
}
