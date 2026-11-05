import "./globals.css";
import { ogImageUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import {
  Inter,
  Playfair_Display,
  DM_Serif_Display,
  Cormorant_Garamond,
} from "next/font/google";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { DeferredScripts } from "@/components/seo/DeferredScripts";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"], display: "optional", variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-serif",
});
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
const cormorant = Cormorant_Garamond({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  style: "italic",
  variable: "--font-italic",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const HOME_TITLE = "Top Clothing Manufacturer in Sialkot, Pakistan | Rasheed Clothing";
const HOME_DESC =
  "Top clothing manufacturer and exporter in Sialkot, Pakistan. Custom hoodies, activewear and uniforms, private label and OEM, MOQ 50. Export to Asia, UK and USA.";

export const metadata = {
  applicationName: "Rasheed Clothing International",
  category: "business",
  metadataBase: new URL("https://www.rasheedclothingintl.me"),
  title: {
    default:
      "Top Clothing Manufacturer in Sialkot, Pakistan | Rasheed Clothing",
    template: "%s | Rasheed Clothing",
  },
  description:
    "Top clothing manufacturer and exporter in Sialkot, Pakistan. Custom hoodies, activewear and uniforms, private label and OEM, MOQ 50. Export to Asia, UK and USA.",
  keywords:
    "best clothing manufacturer in Pakistan, top clothing manufacturer in Asia, clothing manufacturer Sialkot, best clothes supplier Pakistan, Sialkot clothing exporter, apparel exporter Pakistan, garment manufacturer Asia, top apparel supplier, private label clothing manufacturer, OEM clothing Pakistan, wholesale clothing supplier, hoodie manufacturer Pakistan, activewear manufacturer Sialkot, sportswear manufacturer Pakistan, custom clothing manufacturer, streetwear manufacturer, corporate uniform manufacturer, low MOQ clothing manufacturer",
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESC,
    url: "/",
    siteName: "Rasheed Clothing International",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl("Top Clothing Manufacturer in Sialkot, Pakistan", HOME_DESC, DEFAULT_OG_IMAGE),
        width: 1200,
        height: 630,
        alt: "Top Clothing Manufacturer in Sialkot, Pakistan - Rasheed Clothing International",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESC,
    images: [
      ogImageUrl("Top Clothing Manufacturer in Sialkot, Pakistan", HOME_DESC, DEFAULT_OG_IMAGE),
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dmSerif.variable} ${cormorant.variable}`}
    >
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "ClothingStore"],
              "@id": "https://www.rasheedclothingintl.me/#business",
              name: "Rasheed Clothing International",
              url: "https://www.rasheedclothingintl.me/",
              logo: "https://www.rasheedclothingintl.me/logo-512.png",
              description:
                "Premium apparel manufacturing and private-label clothing solutions in Pakistan.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sialkot",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.4945,
                longitude: 74.5229,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              image: "https://www.rasheedclothingintl.me/blue-zip-up-hoodie-puff-print-model.jpg",
              areaServed: [
                "Pakistan", "Asia", "United Kingdom", "United States", "Canada",
                "Australia", "United Arab Emirates", "Europe", "Worldwide",
              ],
              knowsAbout: [
                "Clothing manufacturing", "Apparel export", "Private label clothing",
                "OEM garment production", "Hoodie manufacturing", "Activewear manufacturing",
                "Streetwear manufacturing", "Corporate uniforms",
              ],
              sameAs: [
                "https://instagram.com/rasheedclothingintl",
                "https://www.linkedin.com/company/rasheed-clothing-international/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+923496014611",
                contactType: "customer service",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.rasheedclothingintl.me/#website",
              name: "Rasheed Clothing International",
              alternateName: ["RCI Clothing", "Rasheed Clothing Sialkot"],
              url: "https://www.rasheedclothingintl.me/",
              inLanguage: "en",
              publisher: { "@id": "https://www.rasheedclothingintl.me/#business" },
            }),
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-near-black antialiased overflow-x-hidden flex flex-col min-h-screen">
        <DeferredScripts />

        <ConditionalLayout footer={<Footer />} stickyCta={<StickyMobileCTA />}>
          {children}
        </ConditionalLayout>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
