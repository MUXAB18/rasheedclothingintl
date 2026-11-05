import { redirectRules } from "./src/data/redirects.mjs";
import { imageRedirects } from "./src/data/image-redirects.mjs";

const ONE_MONTH = 60 * 60 * 24 * 30;

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 96, 128, 160, 256, 384, 512],
    minimumCacheTTL: ONE_MONTH,
  },
  async redirects() {
    return [...redirectRules, ...imageRedirects];
  },
  async headers() {
    const immutable = `public, max-age=${ONE_MONTH}, stale-while-revalidate=86400`;
    return [
      {
        source: "/llms.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=86400" }],
      },
      {
        // Static images/fonts in /public: cache for a month
        source: "/:path*.(png|jpg|jpeg|webp|avif|svg|ico|woff2)",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
      // Listed last so it wins over the generic font/image rule for hashed build assets
      {
        // Hashed build output never changes: cache for a year
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
