import { pageMeta } from "@/lib/seo";
import { PillarPage, type PillarProps } from "@/components/seo/PillarPage";

const P: PillarProps = {
  "path": "/streetwear-manufacturer",
  "metaTitle": "Streetwear Manufacturer in Pakistan | Custom OEM & ODM",
  "metaDescription": "Custom streetwear manufacturer in Sialkot, Pakistan: hoodies, tees, joggers, varsity and bomber jackets. OEM and private label from 50 units, shipped worldwide.",
  "eyebrow": "Streetwear Manufacturer",
  "h1": "Custom Streetwear Manufacturer in Sialkot, Pakistan: OEM, ODM & Private Label",
  "intro": [
    "Rasheed Clothing International is a streetwear manufacturer in Sialkot, Pakistan, producing hoodies, t-shirts, joggers, tracksuits and varsity, bomber and coach jackets for emerging labels and established brands in Europe, the UK, the USA and Asia.",
    "Work with us as an OEM partner on your own designs and tech packs, or choose from our proven silhouettes and add your branding as private label. Orders start at 50 units per design."
  ],
  "image": {
    "src": "/black-hoodie-red-back-graphic-model.jpg",
    "alt": "Black streetwear hoodie with red back graphic made by a Sialkot streetwear manufacturer"
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
      "value": "3-4 weeks",
      "label": "Typical bulk lead time"
    },
    {
      "value": "10,000+",
      "label": "Units made every month"
    }
  ],
  "sections": [
    {
      "heading": "Streetwear we manufacture",
      "bullets": [
        {
          "title": "Hoodies and sweatshirts",
          "text": "Heavyweight brushed fleece and French terry, oversized and boxy fits."
        },
        {
          "title": "T-shirts and polos",
          "text": "Premium cotton jersey and pique with custom labels."
        },
        {
          "title": "Joggers and tracksuits",
          "text": "Matching co-ords in fleece or jersey."
        },
        {
          "title": "Varsity, bomber and coach jackets",
          "text": "Cut and sew outerwear with rib trims and custom patches."
        },
        {
          "title": "Shorts and graphic sets",
          "text": "Tee and short sets with all-over and placement prints."
        },
        {
          "title": "Custom patches and labels",
          "text": "Woven labels, embroidered patches, hangtags and packaging."
        }
      ]
    },
    {
      "heading": "Decoration: embroidery, puff print, DTF and more",
      "body": [
        "Streetwear lives in the details. We offer flat and 3D puff embroidery, chenille patches, screen printing, puff print, DTF and DTG printing, sublimation and heat transfer, applied in-house or with trusted Sialkot partners."
      ]
    },
    {
      "heading": "OEM, ODM and private label: which is right for you?",
      "body": [
        "OEM: you bring the design or tech pack and we manufacture it. ODM / private label: you choose from our existing patterns and fabrics and add your branding, which is the fastest way to launch. Both start with a sample for approval before bulk production."
      ]
    },
    {
      "heading": "Fabric weights and fit",
      "body": [
        "Tell us your target GSM and fit, for example a 320 to 400 GSM heavyweight fleece hoodie with a boxy cut, and we will source or match the fabric and develop the pattern. We can also copy a reference garment."
      ]
    },
    {
      "heading": "Is this right for your brand?",
      "body": [
        "Best for: new streetwear labels, drop-based brands, merch and creator brands, and retailers wanting a dependable repeat supplier. Not ideal for: single one-off pieces below 50 units."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the minimum order for streetwear?",
      "a": "50 units per design for most products."
    },
    {
      "q": "Can you manufacture from my own tech pack?",
      "a": "Yes. We work from tech packs, sketches or a reference garment and develop the pattern and sample for approval."
    },
    {
      "q": "What is the difference between OEM and private label?",
      "a": "OEM means we make your own design. Private label means you add your brand to one of our existing styles."
    },
    {
      "q": "Which decoration methods do you offer?",
      "a": "Embroidery (flat and 3D puff), chenille, screen print, puff print, DTF, DTG, sublimation and heat transfer."
    },
    {
      "q": "Do you ship to the UK and Europe?",
      "a": "Yes, by DHL, FedEx, UPS or sea freight, with export paperwork prepared for you."
    }
  ],
  "links": [
    {
      "href": "/hoodie-manufacturer",
      "label": "Hoodie manufacturer",
      "blurb": "Heavyweight hoodies."
    },
    {
      "href": "/private-label",
      "label": "Private label clothing",
      "blurb": "Launch from 50 units."
    },
    {
      "href": "/custom-manufacturing",
      "label": "Custom manufacturing",
      "blurb": "OEM from tech pack."
    },
    {
      "href": "/customization",
      "label": "Printing & embroidery",
      "blurb": "All decoration options."
    },
    {
      "href": "/clothing-manufacturer-uk",
      "label": "Manufacturer for UK brands",
      "blurb": "UK shipping and duty notes."
    },
    {
      "href": "/portfolio",
      "label": "Portfolio",
      "blurb": "Garments we have made."
    }
  ]
};

export const metadata = pageMeta({
  title: P.metaTitle,
  description: P.metaDescription,
  path: P.path,
  image: "/black-hoodie-red-back-graphic-model.jpg",
});

export default function Page() {
  return <PillarPage {...P} />;
}
