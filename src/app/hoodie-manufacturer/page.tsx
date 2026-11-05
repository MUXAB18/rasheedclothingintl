import { pageMeta } from "@/lib/seo";
import { PillarPage, type PillarProps } from "@/components/seo/PillarPage";

const P: PillarProps = {
  "path": "/hoodie-manufacturer",
  "metaTitle": "Custom Hoodie Manufacturer in Pakistan | Low MOQ",
  "metaDescription": "Custom hoodie manufacturer in Sialkot, Pakistan. Heavyweight fleece and French terry hoodies with puff print and embroidery, low MOQ from 50 units, shipped worldwide.",
  "eyebrow": "Hoodie Manufacturer",
  "h1": "Custom Hoodie Manufacturer in Sialkot, Pakistan",
  "intro": [
    "Hoodies are our best-known product. Rasheed Clothing International manufactures custom and private label hoodies in Sialkot, Pakistan for streetwear labels, merch brands, teams and retailers in Europe, the UK, the USA and Asia.",
    "Choose heavyweight fleece or French terry, pick your fit, and add embroidery, screen print, puff print or woven labels. Orders start at 50 units per design."
  ],
  "image": {
    "src": "/custom-hoodies-collection.png",
    "alt": "Custom heavyweight hoodies manufactured in Sialkot, Pakistan"
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
      "value": "99.5%",
      "label": "Quality pass rate"
    }
  ],
  "sections": [
    {
      "heading": "Hoodie styles we manufacture",
      "bullets": [
        {
          "title": "Pullover and zip-up hoodies",
          "text": "Classic kangaroo pocket pullovers and full-zip styles."
        },
        {
          "title": "Oversized and boxy fits",
          "text": "Dropped shoulders and cropped lengths for streetwear."
        },
        {
          "title": "Heavyweight fleece",
          "text": "Dense brushed-back fleece for a premium, structured feel."
        },
        {
          "title": "French terry",
          "text": "Lighter, breathable loopback for spring and layering."
        },
        {
          "title": "Hoodie and jogger sets",
          "text": "Matching co-ords built from the same fabric and dye lot."
        },
        {
          "title": "Team and merch hoodies",
          "text": "Consistent bulk runs for clubs, events and brands."
        }
      ]
    },
    {
      "heading": "Decoration and branding options",
      "body": [
        "We decorate in-house or with trusted Sialkot partners: embroidery, screen printing, puff print, sublimation and heat transfer, plus woven neck labels, care labels and hangtags so your hoodies arrive retail-ready."
      ]
    },
    {
      "heading": "How a hoodie order works",
      "body": [
        "Send your design or tech pack. We develop the pattern and a sample in 5 to 7 days. After you approve fit, fabric and print, bulk production takes about 3 to 4 weeks with multi-stage quality checks, then we ship by air or sea."
      ]
    },
    {
      "heading": "Is this right for your brand?",
      "body": [
        "Best for: new and growing clothing brands, merch and team orders, retailers wanting a reliable repeat supplier. Not ideal for: single one-off pieces below 50 units, where print-on-demand suits better."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the MOQ for custom hoodies?",
      "a": "50 units per design. Larger orders lower the price per piece."
    },
    {
      "q": "What hoodie fabric weights do you offer?",
      "a": "Heavyweight fleece and French terry in a range of weights. Tell us your target GSM and we will match it or suggest a close option."
    },
    {
      "q": "Can you copy a hoodie I already like?",
      "a": "Yes. Send a reference sample or measurements and we will develop the pattern and make a first sample for approval."
    },
    {
      "q": "Do you ship hoodies to Europe and the UK?",
      "a": "Yes, by DHL, FedEx, UPS or sea freight, with export paperwork prepared for you."
    }
  ],
  "links": [
    {
      "href": "/private-label",
      "label": "Private label clothing",
      "blurb": "Launch your brand from 50 units."
    },
    {
      "href": "/customization",
      "label": "Printing & embroidery",
      "blurb": "Decoration options explained."
    },
    {
      "href": "/fabrics",
      "label": "Fabric sourcing",
      "blurb": "Fleece, jersey, French terry."
    },
    {
      "href": "/clothing-manufacturer-europe",
      "label": "Manufacturer for Europe",
      "blurb": "UK and EU shipping."
    },
    {
      "href": "/products",
      "label": "All products",
      "blurb": "Tees, tracksuits, gymwear."
    },
    {
      "href": "/portfolio",
      "label": "Portfolio",
      "blurb": "Hoodies we have made."
    }
  ]
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
