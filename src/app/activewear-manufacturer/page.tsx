import { pageMeta } from "@/lib/seo";
import { PillarPage, type PillarProps } from "@/components/seo/PillarPage";

const P: PillarProps = {
  "path": "/activewear-manufacturer",
  "metaTitle": "Activewear & Gymwear Manufacturer in Pakistan",
  "metaDescription": "Activewear and gymwear manufacturer in Sialkot, Pakistan. Custom singlets, leggings, shorts and tracksuits with sublimation and embroidery. Low MOQ, worldwide shipping.",
  "eyebrow": "Activewear Manufacturer",
  "h1": "Activewear & Gymwear Manufacturer in Sialkot, Pakistan",
  "intro": [
    "Sialkot is world-famous for sportswear, and Rasheed Clothing International builds custom activewear and gymwear for fitness brands, gyms, teams and retailers across Asia, the UK, Europe and the USA.",
    "We make singlets, tank tops, shorts, leggings, tracksuits and team kits to your design, with low minimums from 50 units."
  ],
  "image": {
    "src": "/custom-gymwear-collection.png",
    "alt": "Custom gymwear and activewear manufactured in Sialkot, Pakistan"
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
      "heading": "Activewear we manufacture",
      "bullets": [
        {
          "title": "Singlets and tank tops",
          "text": "Racerback and classic gym singlets with custom logos."
        },
        {
          "title": "Shorts and joggers",
          "text": "Training shorts, joggers and track pants."
        },
        {
          "title": "Tracksuits",
          "text": "Matching jacket and pant sets in performance or fleece fabric."
        },
        {
          "title": "Leggings and compression",
          "text": "Stretch fabrics for training and yoga lines."
        },
        {
          "title": "Team kits and jerseys",
          "text": "Sublimated kits for clubs and academies."
        },
        {
          "title": "Fitness sets",
          "text": "Coordinated collections for fitness brands."
        }
      ]
    },
    {
      "heading": "Performance fabrics and decoration",
      "body": [
        "We source polyester blends, stretch jersey and moisture-wicking fabrics, and decorate with sublimation, screen print, heat transfer and embroidery so graphics stay sharp after repeated washing."
      ]
    },
    {
      "heading": "Why fitness brands choose Sialkot",
      "body": [
        "Sialkot has decades of sportswear know-how and short supply chains for fabric, trims and printing, which means faster sampling and reliable repeat production. Our quality team checks measurements and stitching at several stages before packing."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the minimum order for gymwear?",
      "a": "50 units per design for most styles."
    },
    {
      "q": "Can you do full sublimation prints?",
      "a": "Yes. Send artwork and we advise on print placement and fabric to get the best result."
    },
    {
      "q": "Do you make private label activewear?",
      "a": "Yes. We add your labels, hangtags and packaging."
    },
    {
      "q": "How fast can I get samples?",
      "a": "Typically 5 to 7 days after we confirm the design and fabric."
    }
  ],
  "links": [
    {
      "href": "/private-label",
      "label": "Private label clothing",
      "blurb": "Launch your fitness brand."
    },
    {
      "href": "/customization",
      "label": "Printing & embroidery",
      "blurb": "Sublimation and more."
    },
    {
      "href": "/fabrics",
      "label": "Fabric sourcing",
      "blurb": "Performance fabrics."
    },
    {
      "href": "/hoodie-manufacturer",
      "label": "Hoodie manufacturer",
      "blurb": "Heavyweight hoodies."
    },
    {
      "href": "/manufacturing",
      "label": "Our factory",
      "blurb": "Capacity and process."
    },
    {
      "href": "/request-quote",
      "label": "Request a quote",
      "blurb": "Pricing within 24 hours."
    }
  ]
};

export const metadata = pageMeta({
  title: P.metaTitle,
  description: P.metaDescription,
  path: P.path,
  image: "/custom-gymwear-collection.png",
});

export default function Page() {
  return <PillarPage {...P} />;
}
