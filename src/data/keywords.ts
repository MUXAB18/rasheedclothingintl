/**
 * Keyword map: one PRIMARY target per page (no two pages share a primary, which
 * avoids keyword cannibalization), plus secondary variants and semantic terms that
 * should appear naturally in the copy. Used by scripts/keyword-audit.mjs.
 *
 * primary   -> must be in the title or h1 and in the opening copy
 * secondary -> related searches; use at least 2 per page
 * semantic  -> topical vocabulary Google expects on a page about this subject
 */
export type KeywordTarget = {
  primary: string;
  secondary: string[];
  semantic: string[];
};

export const keywordMap: Record<string, KeywordTarget> = {
  "/": {
    primary: "best clothing manufacturer in Sialkot",
    secondary: ["clothing manufacturer", "Sialkot", "Pakistan", "apparel exporter", "garment manufacturer", "clothing supplier"],
    semantic: ["private label", "OEM", "wholesale", "bulk", "hoodies", "activewear", "export", "MOQ", "Asia"],
  },
  "/clothing-manufacturer-europe": {
    primary: "best clothing manufacturer in Asia",
    secondary: ["UK", "Germany", "France", "Netherlands", "private label", "low MOQ", "made in Pakistan"],
    semantic: ["GSP+", "REACH", "customs", "sea freight", "air freight", "sizing", "labelling", "Brexit"],
  },
  "/apparel-manufacturer-pakistan": {
    primary: "best clothing manufacturer in Pakistan",
    secondary: ["garment factory", "clothing manufacturer", "Pakistan", "hoodies", "uniforms"],
    semantic: ["Sialkot Chamber of Commerce", "cut and sew", "wholesale", "private label", "sportswear", "tech pack"],
  },
  "/clothing-manufacturer-uk": {
    primary: "clothing manufacturer for UK brands",
    secondary: ["UK", "private label", "made in Pakistan", "low MOQ", "hoodies"],
    semantic: ["Developing Countries Trading Scheme", "customs", "VAT", "air freight", "sea freight", "sizing", "labelling"],
  },
  "/hoodie-manufacturer": {
    primary: "custom hoodie manufacturer",
    secondary: ["heavyweight hoodies", "French terry", "puff print", "embroidery", "low MOQ"],
    semantic: ["fleece", "oversized", "streetwear", "merch", "GSM", "private label"],
  },
  "/activewear-manufacturer": {
    primary: "activewear manufacturer",
    secondary: ["gymwear", "sportswear", "singlets", "leggings", "tracksuits"],
    semantic: ["sublimation", "performance fabric", "team kits", "fitness brand", "Sialkot"],
  },
  "/private-label": {
    primary: "private label clothing",
    secondary: ["white label", "start a clothing brand", "clothing line", "low MOQ"],
    semantic: ["labels", "hangtags", "packaging", "tech pack", "sampling", "branding", "fit"],
  },
  "/custom-manufacturing": {
    primary: "custom clothing manufacturer",
    secondary: ["OEM", "cut and sew", "bulk production", "tech pack"],
    semantic: ["sampling", "pattern", "lead time", "fabric", "stitching", "production", "specifications"],
  },
  "/products": {
    primary: "clothing supplier",
    secondary: ["hoodies", "tracksuits", "activewear", "gymwear", "corporate uniforms"],
    semantic: ["streetwear", "heavyweight", "wholesale", "custom", "made to order", "tees"],
  },
  "/customization": {
    primary: "apparel printing",
    secondary: ["embroidery", "screen printing", "sublimation", "heat transfer", "custom labels"],
    semantic: ["logo", "artwork", "puff print", "packaging", "branding", "DTF"],
  },
  "/fabrics": {
    primary: "garment fabric",
    secondary: ["French terry", "fleece", "jersey", "GSM", "cotton"],
    semantic: ["polyester", "organic", "heavyweight", "weight", "sourcing", "performance", "dyeing"],
  },
  "/manufacturing": {
    primary: "garment factory",
    secondary: ["clothing factory", "cut and sew", "production capacity", "Sialkot"],
    semantic: ["cutting", "stitching", "finishing", "quality control", "units", "machines", "per month"],
  },
  "/quality": {
    primary: "quality control",
    secondary: ["inspection", "defect", "quality assurance", "garment testing"],
    semantic: ["AQL", "stitching", "measurements", "fabric", "standards", "pre-shipment", "checks"],
  },
  "/global": {
    primary: "clothing exporter",
    secondary: ["export apparel", "worldwide shipping", "UK", "USA", "Asia"],
    semantic: ["Europe", "Canada", "Australia", "UAE", "DHL", "delivery", "international"],
  },
  "/export-services": {
    primary: "export services",
    secondary: ["shipping", "documentation", "packaging", "DHL", "FedEx"],
    semantic: ["freight", "customs", "international", "delivery", "logistics", "tracking"],
  },
  "/about": {
    primary: "clothing manufacturer in Sialkot",
    secondary: ["Sialkot", "founded", "manufacturer", "since 2017", "Chamber of Commerce"],
    semantic: ["craftsmanship", "values", "mission", "factory", "team", "experience"],
  },
  "/contact": {
    primary: "contact",
    secondary: ["get a quote", "samples", "WhatsApp", "email", "Sialkot"],
    semantic: ["phone", "business hours", "directions", "reply", "24 hours", "message"],
  },
  "/request-quote": {
    primary: "quote",
    secondary: ["bulk", "wholesale", "MOQ", "pricing", "request"],
    semantic: ["quantity", "fabric", "timeline", "budget", "decoration", "category"],
  },
  "/case-studies": {
    primary: "case studies",
    secondary: ["clients", "results", "units delivered", "activewear", "streetwear"],
    semantic: ["timeline", "defect rate", "brand", "production", "delivered"],
  },
  "/portfolio": {
    primary: "clothing manufacturing portfolio",
    secondary: ["hoodies", "tracksuits", "gymwear", "custom garments", "manufactured"],
    semantic: ["projects", "clients", "categories", "premium", "apparel"],
  },
  "/collections": {
    primary: "collections",
    secondary: ["hoodies", "tees", "tracksuits", "gymwear", "made to order"],
    semantic: ["style", "brand", "fabric", "colors", "decoration"],
  },
  "/faq": {
    primary: "FAQ",
    secondary: ["MOQ", "pricing", "lead time", "shipping", "samples"],
    semantic: ["payment", "custom", "bulk", "private label", "production"],
  },
  "/sustainability": {
    primary: "sustainable",
    secondary: ["ethical manufacturing", "eco-friendly", "waste", "responsible sourcing"],
    semantic: ["recycled", "organic cotton", "dyes", "labor", "environment", "water"],
  },
  "/design-studio": {
    primary: "custom clothing design",
    secondary: ["hoodie", "tech pack", "mockup", "custom apparel", "bulk"],
    semantic: ["colors", "decoration", "sample", "production", "brand"],
  },
  "/blog": {
    primary: "blog",
    secondary: ["guides", "apparel manufacturing", "private label", "fabrics", "export"],
    semantic: ["insights", "articles", "industry", "clothing brand", "sourcing"],
  },
};
