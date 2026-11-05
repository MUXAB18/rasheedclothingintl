import React from "react";
import dynamic from "next/dynamic";

import { Hero } from "@/components/home/hero/Hero";
import { TrustBadgesSection } from "@/components/home/trust/TrustBadgesSection";
import { CollectionsSection } from "@/components/home/collections/CollectionsSection";
import { SeoIntroSection } from "@/components/home/seo/SeoIntroSection";

import { getPublishedCollections } from "@/lib/api/collection.service";


// Below-the-fold sections are split into their own chunks (still server-rendered for SEO)
// so the first screen hydrates sooner.
const CapabilitiesSection = dynamic(() =>
  import("@/components/home/capabilities/CapabilitiesSection").then((m) => m.CapabilitiesSection),
);
const ProcessTimelineSection = dynamic(() =>
  import("@/components/home/process/ProcessTimelineSection").then((m) => m.ProcessTimelineSection),
);
const PortfolioPreviewWrapper = dynamic(() =>
  import("@/components/home/portfolio/PortfolioPreviewWrapper").then((m) => m.PortfolioPreviewWrapper),
);
const HomeFaqSection = dynamic(() =>
  import("@/components/home/faq/HomeFaqSection").then((m) => m.HomeFaqSection),
);
const HomeCtaSection = dynamic(() =>
  import("@/components/home/cta/HomeCtaSection").then((m) => m.HomeCtaSection),
);

// Refresh DB-backed content hourly instead of freezing it at build time
export const revalidate = 3600;

export const metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const collections = await getPublishedCollections();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION - ULTRA PREMIUM */}
      <Hero />

      {/* 2. TRUST BADGES - Build immediate credibility */}
      <TrustBadgesSection />

      {/* 4. OUR COLLECTIONS (New Premium Layout) */}
      <CollectionsSection collections={collections} />

      {/* 6. CAPABILITIES (Premium Sticky Editorial Layout) */}
      <CapabilitiesSection />

      {/* 7. PROCESS TIMELINE */}
      <ProcessTimelineSection />

      {/* 8. PORTFOLIO HIGHLIGHTS */}
      <PortfolioPreviewWrapper />

      <SeoIntroSection />

      {/* 9. FAQs */}
      <HomeFaqSection />

      {/* 10. CTA SECTION */}
      <HomeCtaSection />
    </div>
  );
}
