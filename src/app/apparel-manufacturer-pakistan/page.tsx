import { pageMeta } from "@/lib/seo";
import { PillarPage, type PillarProps } from "@/components/seo/PillarPage";

const P: PillarProps = {
  path: "/apparel-manufacturer-pakistan",
  metaTitle: "Apparel Manufacturer in Sialkot, Pakistan | Any Garment",
  metaDescription:
    "Apparel manufacturer in Sialkot, Pakistan making hoodies, tees, tracksuits, activewear, jackets and uniforms to order. Low MOQ from 50 units, for Pakistani and export brands.",
  eyebrow: "Apparel Manufacturer in Pakistan",
  h1: "Apparel Manufacturer in Sialkot, Pakistan: Any Garment, Made to Order",
  intro: [
    "Rasheed Clothing International is a garment factory and apparel manufacturer in Sialkot, Pakistan, founded in 2017 and an approved member of the Sialkot Chamber of Commerce and Industry.",
    "We manufacture hoodies, t-shirts, tracksuits, gymwear, jackets, uniforms and custom garments for Pakistani brands, wholesalers and international customers, with low minimums and fast sampling.",
  ],
  image: {
    src: "/aboutus/rasheed-clothing-factory-sialkot-sewing-machine-operator-grey-fabric.jpeg",
    alt: "Sewing machine operator at the Rasheed Clothing garment factory in Sialkot, Pakistan",
  },
  stats: [
    { value: "2017", label: "Founded in Sialkot" },
    { value: "50", label: "Minimum order per design" },
    { value: "10,000+", label: "Units made every month" },
    { value: "99.5%", label: "Quality pass rate" },
  ],
  sections: [
    {
      heading: "A clothing manufacturer in Sialkot, a global garment hub",
      body: [
        "Sialkot is known worldwide for sportswear, leather goods and garment exports, and its skilled workforce is the reason brands from Europe, the UK and the USA source here. Our factory combines that heritage with strict quality control and reliable delivery.",
        "Being based in the city means short supply chains for fabric, trims, printing and embroidery, and quick communication when you need to approve a sample or change a detail.",
      ],
    },
    {
      heading: "What we manufacture",
      body: ["If you can design it, we can usually make it. Our core categories are:"],
      bullets: [
        { title: "Hoodies and sweatshirts", text: "Heavyweight fleece, French terry, zip-ups and pullovers." },
        { title: "T-shirts, polos and essentials", text: "Cotton jersey in regular, boxy and oversized fits." },
        { title: "Tracksuits and joggers", text: "Co-ord sets and loungewear in fleece or jersey." },
        { title: "Gymwear and sportswear", text: "Singlets, tank tops, shorts, leggings and team kits." },
        { title: "Jackets and outerwear", text: "Track, bomber, windbreaker and varsity styles." },
        { title: "Corporate uniforms and workwear", text: "Branded staff, school and club uniforms in bulk." },
      ],
    },
    {
      heading: "How custom clothing manufacturing works",
      body: [
        "1. Share your design: a tech pack, sketch or reference garment. 2. We develop the pattern and a sample in 5 to 7 days. 3. You approve fit, fabric and stitching. 4. Bulk production takes about 3 to 4 weeks with multi-stage quality checks. 5. We pack to your specification and ship locally or worldwide.",
        "Decoration options include screen printing, embroidery, sublimation, puff print and custom woven labels, all handled in-house or with trusted Sialkot partners.",
      ],
    },
    {
      heading: "For Pakistani brands, wholesalers and export buyers",
      body: [
        "Local brands and wholesalers use us for private label ranges, seasonal drops and repeat orders with domestic delivery. Export customers get commercial invoices, packing lists and shipping with DHL, FedEx, UPS or freight partners to the UK, Europe, USA, Canada, Australia and the UAE.",
        "Whether you are starting a clothing brand in Lahore or Karachi or restocking a store in London, the process and quality standard are the same.",
      ],
    },
  ],
  faqs: [
    {
      q: "Are you a factory or a trading company?",
      a: "We are a clothing manufacturer based in Sialkot, producing cut and sew garments to order with our own quality control.",
    },
    {
      q: "What is your minimum order quantity?",
      a: "50 units per design for most products. Larger orders reduce the cost per piece.",
    },
    {
      q: "Can you make any type of clothing?",
      a: "We specialise in hoodies, t-shirts, tracksuits, activewear, jackets and uniforms, and can quote other garments on request.",
    },
    {
      q: "Do you supply Pakistani brands as well as exports?",
      a: "Yes. We work with brands and wholesalers inside Pakistan and with customers across Asia, the UK, USA, Canada, Australia, the UAE and Europe.",
    },
    {
      q: "Where is the factory?",
      a: "In Sialkot, Punjab, Pakistan. Contact us for visiting arrangements and directions.",
    },
  ],
  links: [
    { href: "/manufacturing", label: "Our Sialkot factory", blurb: "Capacity, machines and process." },
    { href: "/quality", label: "Quality control", blurb: "Multi-stage inspection." },
    { href: "/private-label", label: "Private label clothing", blurb: "Your brand, our production." },
    { href: "/clothing-manufacturer-europe", label: "Manufacturer for Europe", blurb: "UK and EU brands." },
    { href: "/products", label: "Clothing products", blurb: "Hoodies, tees, tracksuits and more." },
    { href: "/contact", label: "Contact us", blurb: "We reply within 24 hours." },
  ],
};

export const metadata = pageMeta({
  title: P.metaTitle,
  description: P.metaDescription,
  path: P.path,
  image: "/aboutus/rasheed-clothing-factory-sialkot-sewing-machine-operator-grey-fabric.jpeg",
});

export default function Page() {
  return <PillarPage {...P} />;
}
