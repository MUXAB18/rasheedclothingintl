import "./globals.css";
import {
  Inter,
  Playfair_Display,
  DM_Serif_Display,
  Cormorant_Garamond,
} from "next/font/google";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const cormorant = Cormorant_Garamond({
  weight: "500",
  subsets: ["latin"],
  style: "italic",
  variable: "--font-italic",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

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
    "Top clothing manufacturer and apparel supplier in Sialkot, Pakistan. Custom hoodies, activewear, streetwear and uniforms exported to Asia, UK, USA, Europe and worldwide. Private label, OEM, low MOQ 50 units.",
  keywords:
    "best clothing manufacturer in Pakistan, top clothing manufacturer in Asia, clothing manufacturer Sialkot, best clothes supplier Pakistan, Sialkot clothing exporter, apparel exporter Pakistan, garment manufacturer Asia, top apparel supplier, private label clothing manufacturer, OEM clothing Pakistan, wholesale clothing supplier, hoodie manufacturer Pakistan, activewear manufacturer Sialkot, sportswear manufacturer Pakistan, custom clothing manufacturer, streetwear manufacturer, corporate uniform manufacturer, low MOQ clothing manufacturer",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Rasheed Clothing International - Where Imagination Meets Fabrication",
    description:
      "Premium B2B apparel manufacturing from Pakistan. Custom clothing solutions for international brands.",
    url: "https://www.rasheedclothingintl.me",
    siteName: "Rasheed Clothing International",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/custom_hoodie_1.jpg",
        width: 1200,
        height: 630,
        alt: "Custom hoodies manufactured by Rasheed Clothing International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasheed Clothing International",
    description:
      "Premium B2B apparel manufacturing from Sialkot, Pakistan.",
    images: ["/custom_hoodie_1.jpg"],
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
              image: "https://www.rasheedclothingintl.me/custom_hoodie_1.jpg",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZHHWJ6J4G"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JZHHWJ6J4G');
        `}</Script>
        {/* AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6650426189914940"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
