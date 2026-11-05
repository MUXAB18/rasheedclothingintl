import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import sharp from "sharp";

/**
 * Social share image (1200x630) generated per page:
 *   /og?t=<title>&s=<subtitle>&img=<public image path>
 * Used for og:image / twitter:image so every page gets a relevant, correctly sized preview.
 */
export const runtime = "nodejs";

const clamp = (v: string | null, max: number) => (v ?? "").slice(0, max);

// Only same-site public paths are allowed for the photo (no external URLs).
function safeImagePath(v: string | null) {
  if (!v || !v.startsWith("/") || v.startsWith("//") || v.includes("..")) return null;
  if (!/\.(png|jpe?g|webp|avif)$/i.test(v)) return null;
  return v;
}

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const title = clamp(searchParams.get("t"), 90) || "Rasheed Clothing International";
  const subtitle = clamp(searchParams.get("s"), 120);
  const img = safeImagePath(searchParams.get("img"));

  let photo: string | null = null;
  if (img) {
    try {
      const res = await fetch(origin + img);
      if (res.ok) {
        // sharp normalises any source format (jpg/png/webp/avif) to a small JPEG the card renderer accepts
        const jpeg = await sharp(Buffer.from(await res.arrayBuffer()))
          .resize(500, 630, { fit: "cover", position: "centre" })
          .flatten({ background: "#ffffff" })
          .jpeg({ quality: 82 })
          .toBuffer();
        photo = `data:image/jpeg;base64,${jpeg.toString("base64")}`;
      }
    } catch {
      photo = null;
    }
  }

  const titleSize = title.length > 60 ? 52 : title.length > 40 ? 60 : 70;

  const card = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 56px 48px 64px",
            width: photo ? 700 : 1200,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#9a9a9a",
            }}
          >
            Rasheed Clothing International
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
            {subtitle ? (
              <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#c9c9c9", lineHeight: 1.35 }}>
                {subtitle}
              </div>
            ) : null}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#9a9a9a" }}>
            Clothing manufacturer · Sialkot, Pakistan
          </div>
        </div>
        {photo ? (
          <div style={{ display: "flex", width: 500, height: 630 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="" width={500} height={630} style={{ objectFit: "cover", width: 500, height: 630 }} />
          </div>
        ) : null}
      </div>
    ),
    { width: 1200, height: 630 },
  );

  // Re-encode as JPEG: ~5x smaller than PNG, so previews stay under WhatsApp's ~300KB limit
  const jpeg = await sharp(Buffer.from(await card.arrayBuffer()))
    .flatten({ background: "#0a0a0a" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(jpeg), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
    },
  });
}
