import { pageMeta } from "@/lib/seo";
import { PillarPage, type PillarProps } from "@/components/seo/PillarPage";

const P: PillarProps = {
  path: "/clothing-manufacturer-europe",
  metaTitle: "Clothing Manufacturer for Europe & UK | Made in Pakistan",
  metaDescription:
    "Custom clothing manufacturer in Sialkot, Pakistan supplying brands in the UK, Germany, France, Netherlands and Europe. Low MOQ from 50 units, private label, fast sampling, air and sea freight.",
  eyebrow: "Clothing Manufacturer for Europe",
  h1: "Clothing Manufacturer for European & UK Brands, Made in Sialkot, Pakistan",
  intro: [
    "Rasheed Clothing International is a clothing manufacturer and apparel exporter in Sialkot, Pakistan, producing custom and private label garments for brands in the UK, Germany, France, the Netherlands, Italy, Spain and across Europe.",
    "From a first 50-piece run for a new label to repeat bulk orders for an established retailer, we manage sampling, cut and sew production, quality control and shipping to your door.",
  ],
  image: {
    src: "/custom-hoodies-collection.png",
    alt: "Custom hoodies made by a Sialkot clothing manufacturer for European brands",
  },
  stats: [
    { value: "50", label: "Minimum order per design" },
    { value: "5-7 days", label: "Sample turnaround" },
    { value: "3-4 weeks", label: "Typical bulk lead time" },
    { value: "10,000+", label: "Units made every month" },
  ],
  sections: [
    {
      heading: "Why European brands source clothing from Sialkot",
      body: [
        "Sialkot is one of Asia's best-known hubs for sportswear and garment exports, with generations of stitching, printing and finishing skill in one city. European brands choose Pakistan for competitive pricing, strong cotton and fleece supply, and factories that are flexible on order size.",
        "Pakistan currently benefits from preferential access to the EU under the GSP+ scheme and to the UK under its Developing Countries Trading Scheme, which can reduce import duty on qualifying garments. Eligibility depends on rules of origin and the current status of the schemes, so always confirm duty and documents with your customs broker before ordering.",
      ],
    },
    {
      heading: "Apparel we manufacture for Europe",
      body: [
        "We make almost any kind of apparel to your specification. Our most requested categories from European customers are:",
      ],
      bullets: [
        { title: "Hoodies and sweatshirts", text: "Heavyweight fleece and French terry in oversized, boxy and standard fits." },
        { title: "T-shirts and polos", text: "Premium cotton jersey with custom labels, prints and embroidery." },
        { title: "Tracksuits and joggers", text: "Matching sets and coordinated streetwear collections." },
        { title: "Gymwear and activewear", text: "Performance fabrics, singlets, leggings, shorts and compression." },
        { title: "Jackets and outerwear", text: "Zip-ups, bomber and track jackets built from your pattern." },
        { title: "Corporate uniforms and teamwear", text: "Branded workwear, club kits and staff uniforms in bulk." },
      ],
    },
    {
      heading: "Private label and custom manufacturing for European markets",
      body: [
        "Start a clothing brand with low minimums, or move an existing line to a more cost-effective factory. We build from your tech pack or reference sample, develop the pattern, make the first sample, and start bulk production only after you approve fit, fabric and stitching.",
        "Your brand is carried through every detail: woven neck labels, care labels, hangtags, polybags and custom packaging, so goods arrive ready to sell.",
      ],
    },
    {
      heading: "Sizing, labelling and compliance for the EU and UK",
      body: [
        "European buyers have specific requirements. Tell us your target market and we will follow your brief for size charts (EU, UK or US), fibre-content and care labelling, country-of-origin marking and any chemical restrictions you need to meet, such as REACH. We can provide test reports if your retail customers ask for them.",
        "Our quality control checks measurements, stitching and finishing at several stages, with a 99.5% quality pass rate across production.",
      ],
    },
    {
      heading: "Shipping from Pakistan to Europe",
      body: [
        "We ship worldwide with DHL, FedEx, UPS and freight partners. Express air takes roughly 3 to 5 days, standard air 7 to 10 days, and sea freight (LCL) 4 to 6 weeks for larger orders. We prepare commercial invoices, packing lists and certificate-of-origin paperwork and share tracking from dispatch.",
        "Tell us whether you want delivery to your warehouse, a fulfilment centre or an Amazon / 3PL address and we will quote door-to-door options, including DDP where available.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the minimum order quantity for European customers?",
      a: "Our MOQ starts at 50 units per design, which suits new brands testing a market. Larger repeat orders get better unit pricing.",
    },
    {
      q: "How long does production and delivery to Europe take?",
      a: "Samples take about 5 to 7 days. Bulk production is typically 3 to 4 weeks, followed by 3 to 10 days by air or 4 to 6 weeks by sea to Europe.",
    },
    {
      q: "Can you make clothing for the UK market after Brexit?",
      a: "Yes. We ship to the UK regularly and prepare the customs paperwork you need. Duty treatment depends on the product and rules of origin, so confirm with your customs broker.",
    },
    {
      q: "Do you offer private label and white label clothing?",
      a: "Yes. We add your labels, hangtags and packaging to our proven silhouettes or build from your own tech pack.",
    },
    {
      q: "Can you follow EU sizing and labelling rules?",
      a: "Yes. Share your size chart and labelling requirements and we will produce to them. We can also supply test reports when your buyers request them.",
    },
    {
      q: "How do I get a quote?",
      a: "Use the quote form with your product, quantity and target delivery date. We reply within 24 hours.",
    },
  ],
  links: [
    { href: "/private-label", label: "Private label clothing", blurb: "Launch your brand from 50 units." },
    { href: "/custom-manufacturing", label: "Custom manufacturing", blurb: "OEM apparel from tech pack to delivery." },
    { href: "/export-services", label: "Export services", blurb: "Documentation, packaging and freight." },
    { href: "/global", label: "Global reach", blurb: "Markets and shipping options." },
    { href: "/apparel-manufacturer-pakistan", label: "Apparel manufacturer in Pakistan", blurb: "Everything we make in Sialkot." },
    { href: "/faq", label: "FAQ", blurb: "MOQ, pricing and lead time answers." },
  ],
};

export const metadata = pageMeta({
  title: P.metaTitle,
  description: P.metaDescription,
  path: P.path,
  image: "/custom-hoodies-collection.png",
});

export default function Page() {
  return <PillarPage {...P} />;
}
