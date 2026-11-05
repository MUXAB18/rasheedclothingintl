export type Capability = {
  id: string;
  num: string;
  title: string;
  desc: string;
  image: string;
};

export const capabilities: Capability[] = [
  {
    id: "cut-and-sew",
    num: "01",
    title: "CUT & SEW",
    desc: "Precision craftsmanship from pattern to finished garment.",
    image: "/red-first-48-graphic-tee-shorts-set.webp", // factory image
  },
  {
    id: "embroidery",
    num: "02",
    title: "EMBROIDERY",
    desc: "Detailed embroidery and branded garment finishing.",
    image: "/grey-zip-hoodie-tracksuit-models.webp",
  },
  {
    id: "printing",
    num: "03",
    title: "PRINTING",
    desc: "Modern printing techniques for high-quality visual identity.",
    image: "/grey-zip-hoodie-joggers-model.webp",
  },
  {
    id: "fabric-sourcing",
    num: "04",
    title: "FABRIC SOURCING",
    desc: "Materials selected around performance, comfort and brand requirements.",
    image: "/media__1775818876935.webp", // factory image
  },
  {
    id: "private-label",
    num: "05",
    title: "PRIVATE LABEL",
    desc: "Custom labels, tags, packaging and complete brand identity.",
    image: "/black-first-48-graphic-tee-shorts-set.webp",
  },
  {
    id: "packaging",
    num: "06",
    title: "PACKAGING",
    desc: "Finished garments prepared according to brand requirements.",
    image: "/media__1775818871661.webp",
  },
  {
    id: "quality-control",
    num: "07",
    title: "QUALITY CONTROL",
    desc: "Inspection throughout the production process.",
    image: "/black-hoodie-red-back-graphic-model.webp",
  },
  {
    id: "global-shipping",
    num: "08",
    title: "GLOBAL SHIPPING",
    desc: "Reliable delivery and export support.",
    image: "/media__1775818899078.webp",
  },
];
