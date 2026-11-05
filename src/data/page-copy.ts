/** Supporting copy shown at the bottom of key pages. Facts match src/data/company.ts. */
export type PageCopy = {
  heading: string;
  paragraphs: string[];
  links: { href: string; label: string }[];
};

export const pageCopy: Record<string, PageCopy> = {
  "/about": {
    heading: "A clothing manufacturer in Sialkot since 2017",
    paragraphs: [
      "Rasheed Clothing International is a clothing manufacturer in Sialkot, Pakistan, founded in 2017 and approved as a member of the Sialkot Chamber of Commerce and Industry. Our team brings years of experience in cut and sew production, from heavyweight hoodies to activewear and uniforms.",
      "We work with brands, retailers and teams across Asia, the UK, USA and Europe, combining careful craftsmanship with the speed and low minimums that growing brands need.",
    ],
    links: [
      { href: "/manufacturing", label: "Our garment factory" },
      { href: "/quality", label: "Quality control" },
      { href: "/contact", label: "Contact the team" },
    ],
  },
  "/private-label": {
    heading: "Private label clothing manufacturer in Pakistan",
    paragraphs: [
      "Rasheed Clothing International makes private label clothing for brands that want to start a clothing brand or grow an existing clothing line without owning a factory. We handle white label apparel from sampling to bulk production in Sialkot, with low MOQ from 50 units per style.",
      "Your brand is carried through every detail: woven labels, hangtags, custom packaging and fit adjustments, all built from your tech pack or from one of our proven silhouettes. Ready to launch? Ask for a quote and we will confirm pricing and lead time.",
    ],
    links: [
      { href: "/custom-manufacturing", label: "Custom clothing manufacturing" },
      { href: "/customization", label: "Labels and branding options" },
      { href: "/request-quote", label: "Request a private label quote" },
    ],
  },
  "/custom-manufacturing": {
    heading: "Custom clothing manufacturer in Sialkot, Pakistan",
    paragraphs: [
      "As a custom clothing manufacturer and OEM partner, we turn your specifications into finished garments through cut and sew bulk production. You send a tech pack or reference sample, we develop the pattern and a first sample, and production starts once you approve fit, fabric and stitching.",
      "Typical lead time is 3 to 4 weeks for bulk orders, with samples in 5 to 7 days. Our team works with brands across Asia, the UK, USA and Europe on hoodies, tees, tracksuits, activewear and uniforms.",
    ],
    links: [
      { href: "/private-label", label: "Private label clothing" },
      { href: "/fabrics", label: "Fabric sourcing" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/products": {
    heading: "Clothing supplier for brands, retailers and teams",
    paragraphs: [
      "We are a clothing supplier in Sialkot, Pakistan, making hoodies, tees, tracksuits, gymwear, outerwear and corporate uniforms made to order. Every style can be produced as streetwear, activewear or wholesale basics, in heavyweight fabrics and your own colors and decoration.",
      "Browse the range for ideas, then tell us what you want to make. We will recommend fabric, fit and finishing, and quote custom runs from 50 units.",
    ],
    links: [
      { href: "/private-label", label: "Launch your own label" },
      { href: "/customization", label: "Printing and embroidery" },
      { href: "/request-quote", label: "Get wholesale pricing" },
    ],
  },
  "/customization": {
    heading: "Apparel printing and embroidery for custom clothing",
    paragraphs: [
      "Our apparel printing and embroidery services cover screen printing, puff print, DTF, sublimation and heat transfer, plus custom woven labels and packaging. Send your logo or artwork and we will advise on the best method for the fabric and the look you want.",
      "Decoration is done in-house in Sialkot, so your branding stays consistent across a full production run.",
    ],
    links: [
      { href: "/custom-manufacturing", label: "Custom manufacturing" },
      { href: "/design-studio", label: "Plan your design" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/fabrics": {
    heading: "Garment fabric sourcing for custom apparel",
    paragraphs: [
      "Choosing the right garment fabric decides how a piece looks, feels and lasts. We source heavyweight French terry, fleece, cotton jersey and performance polyester, and help you pick the right GSM weight for hoodies, tees and activewear.",
      "Organic and recycled options are available, and we can match colors through dyeing. Tell us the end use and we will suggest suitable fabrics and quote them with your order.",
    ],
    links: [
      { href: "/sustainability", label: "Sustainable materials" },
      { href: "/custom-manufacturing", label: "Custom manufacturing" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/manufacturing": {
    heading: "Garment factory in Sialkot with 10,000+ units a month",
    paragraphs: [
      "Our garment factory in Sialkot is a full clothing factory for cut and sew production: cutting, stitching, decoration, finishing and packing under one roof. Monthly production capacity is more than 10,000 units across hoodies, tees, tracksuits and activewear.",
      "Quality control runs at every stage, and our team can scale from small first runs to large orders as your brand grows.",
    ],
    links: [
      { href: "/quality", label: "Quality control process" },
      { href: "/global", label: "Export and shipping" },
      { href: "/request-quote", label: "Plan a production run" },
    ],
  },
  "/global": {
    heading: "Clothing exporter from Pakistan to the world",
    paragraphs: [
      "As a clothing exporter in Sialkot, we export apparel to the UK, USA, Canada, Australia, UAE, Europe and across Asia. International customers get clear documentation, careful packaging and worldwide shipping with DHL, FedEx and UPS.",
      "Whether you are importing a first sample order or regular bulk deliveries, we keep you informed from dispatch to delivery.",
    ],
    links: [
      { href: "/export-services", label: "Export services" },
      { href: "/manufacturing", label: "Our factory" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/request-quote": {
    heading: "Request a bulk clothing quote",
    paragraphs: [
      "Use this form to request pricing for bulk and wholesale clothing. Share the category, quantity, fabric, decoration, timeline and budget, and we will reply within 24 hours. Our MOQ starts at 50 units per style.",
      "Not sure yet? Read the FAQ, learn about private label manufacturing, or send us a message.",
    ],
    links: [
      { href: "/faq", label: "MOQ and pricing FAQ" },
      { href: "/private-label", label: "Private label clothing" },
      { href: "/contact", label: "Contact us" },
    ],
  },
  "/portfolio": {
    heading: "Clothing manufacturing portfolio",
    paragraphs: [
      "This clothing manufacturing portfolio shows hoodies, tracksuits, gymwear and custom garments we have produced for clients, across premium streetwear, activewear and uniform projects. Each project was manufactured to the client's specification in Sialkot.",
      "Want something similar for your brand? Browse the categories, then request a quote for your own custom garments.",
    ],
    links: [
      { href: "/case-studies", label: "Read client case studies" },
      { href: "/products", label: "See the product range" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/design-studio": {
    heading: "Custom clothing design to production",
    paragraphs: [
      "Plan your custom clothing design in the studio: pick the hoodie or garment style, colors and decoration, and send us the mockup. We turn it into a tech pack, make a sample, and manufacture your custom apparel in bulk.",
    ],
    links: [
      { href: "/customization", label: "Printing and embroidery" },
      { href: "/private-label", label: "Private label" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/quality": {
    heading: "Quality control at our Sialkot garment factory",
    paragraphs: [
      "Quality control is built into every stage of production, from fabric inspection and cutting to stitching, measurements and pre-shipment checks. Our inspection process keeps the defect rate low and every order consistent with the approved sample.",
      "If you need specific standards or AQL levels for your brand, tell us before production and we will plan the inspection to match.",
    ],
    links: [
      { href: "/manufacturing", label: "Our garment factory" },
      { href: "/case-studies", label: "Client case studies" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/case-studies": {
    heading: "Clothing manufacturing case studies from real projects",
    paragraphs: [
      "These case studies show how brands used our clothing manufacturing to deliver activewear, streetwear and uniforms on time, with low defect rates and consistent quality across large runs.",
      "Each project began with a brief and a sample, then moved to bulk production in Sialkot. Planning something similar? We can scope your timeline and quantities.",
    ],
    links: [
      { href: "/portfolio", label: "Clothing manufacturing portfolio" },
      { href: "/private-label", label: "Private label clothing" },
      { href: "/request-quote", label: "Request a quote" },
    ],
  },
  "/blog": {
    heading: "Apparel manufacturing guides for clothing brands",
    paragraphs: [
      "Our blog shares practical guides on apparel manufacturing, private label clothing, fabrics and export, written by the team that runs a clothing factory in Sialkot. Use the articles to plan your first collection or improve an existing clothing brand.",
    ],
    links: [
      { href: "/private-label", label: "Private label clothing" },
      { href: "/fabrics", label: "Garment fabrics" },
      { href: "/faq", label: "Manufacturing FAQ" },
    ],
  },
};
