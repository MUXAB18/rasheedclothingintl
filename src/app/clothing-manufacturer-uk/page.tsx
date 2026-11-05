import { pageMeta } from "@/lib/seo";
import { PillarPage, type PillarProps } from "@/components/seo/PillarPage";

const P: PillarProps = {
  "path": "/clothing-manufacturer-uk",
  "metaTitle": "Clothing Manufacturer for UK Brands | Made in Pakistan",
  "metaDescription": "Custom clothing manufacturer in Sialkot, Pakistan supplying UK brands. Private label hoodies, tees, tracksuits and activewear from 50 units, shipped to the UK by air or sea.",
  "eyebrow": "Clothing Manufacturer for the UK",
  "h1": "Clothing Manufacturer for UK Brands, Made in Sialkot, Pakistan",
  "intro": [
    "Rasheed Clothing International manufactures custom and private label clothing for UK brands, retailers and teams. We handle sampling, production, quality control and shipping from Sialkot, Pakistan to your UK address.",
    "Our team already ships to the UK and offers a UK contact line, so questions get answered quickly."
  ],
  "image": {
    "src": "/grey-zip-hoodie-tracksuit-models.jpg",
    "alt": "Grey zip hoodie and tracksuit set manufactured for UK brands in Pakistan"
  },
  "stats": [
    {
      "value": "50",
      "label": "Minimum order per design"
    },
    {
      "value": "5-7 days",
      "label": "Sample turnaround"
    },
    {
      "value": "3-10 days",
      "label": "Air freight to the UK"
    },
    {
      "value": "4-6 weeks",
      "label": "Sea freight (LCL)"
    }
  ],
  "sections": [
    {
      "heading": "Why UK brands manufacture in Pakistan",
      "body": [
        "Pakistan offers competitive pricing, strong cotton and fleece supply and flexible minimums, which suits UK start-ups and growing labels. Pakistan is also covered by the UK's Developing Countries Trading Scheme, which can reduce duty on qualifying garments. Eligibility depends on the product and rules of origin, so confirm with your customs broker."
      ]
    },
    {
      "heading": "What we make for UK customers",
      "bullets": [
        {
          "title": "Hoodies and sweatshirts",
          "text": "Heavyweight fleece and French terry."
        },
        {
          "title": "T-shirts and polos",
          "text": "Premium cotton jersey with custom labels."
        },
        {
          "title": "Tracksuits and joggers",
          "text": "Streetwear and loungewear sets."
        },
        {
          "title": "Gymwear and activewear",
          "text": "Singlets, shorts and leggings."
        },
        {
          "title": "Uniforms and workwear",
          "text": "Branded staff and club uniforms."
        },
        {
          "title": "Jackets",
          "text": "Track, bomber and zip-up styles."
        }
      ]
    },
    {
      "heading": "Sizing, labelling and delivery to the UK",
      "body": [
        "Send your UK size chart and labelling requirements (fibre content, care and country of origin) and we produce to them. We ship by DHL, FedEx, UPS or sea freight and prepare the commercial invoice and packing list for UK customs."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the MOQ for UK orders?",
      "a": "50 units per design."
    },
    {
      "q": "How long does delivery to the UK take?",
      "a": "Production is about 3 to 4 weeks, then 3 to 10 days by air or 4 to 6 weeks by sea."
    },
    {
      "q": "Will I pay import duty and VAT?",
      "a": "UK VAT applies to imports and duty depends on the product and origin. Your customs broker can confirm exact charges."
    },
    {
      "q": "Do you do private label for UK start-ups?",
      "a": "Yes. We add your labels, hangtags and packaging and can start from a simple sketch or tech pack."
    }
  ],
  "links": [
    {
      "href": "/clothing-manufacturer-europe",
      "label": "Manufacturer for Europe",
      "blurb": "EU markets and compliance."
    },
    {
      "href": "/private-label",
      "label": "Private label clothing",
      "blurb": "Start from 50 units."
    },
    {
      "href": "/export-services",
      "label": "Export services",
      "blurb": "Documents and freight."
    },
    {
      "href": "/hoodie-manufacturer",
      "label": "Hoodie manufacturer",
      "blurb": "Our best-known product."
    },
    {
      "href": "/contact",
      "label": "Contact us",
      "blurb": "UK line and WhatsApp."
    },
    {
      "href": "/faq",
      "label": "FAQ",
      "blurb": "MOQ, pricing, lead time."
    }
  ]
};

export const metadata = pageMeta({
  title: P.metaTitle,
  description: P.metaDescription,
  path: P.path,
  image: "/grey-zip-hoodie-tracksuit-models.jpg",
});

export default function Page() {
  return <PillarPage {...P} />;
}
