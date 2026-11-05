"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE = "https://www.rasheedclothingintl.me";

export function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/" || pathname === "/thank-you") return null;

  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", href: "/" }].concat(
    parts.map((p, i) => ({
      name: decodeURIComponent(p).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: "/" + parts.slice(0, i + 1).join("/"),
    })),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: BASE + (c.href === "/" ? "" : c.href),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-28 -mb-24 relative z-10 text-xs">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Dark pill: readable on both light and dark pages. Vertical padding gives ~36px touch targets
          while negative margins keep the page layout exactly as before. */}
      <ol className="inline-flex flex-wrap items-center gap-x-2 rounded-full bg-[#0a0a0a]/85 px-4 -my-2.5 text-white/70 shadow-sm">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="py-2.5 text-white">{c.name}</span>
            ) : (
              <Link href={c.href} className="py-2.5 hover:text-white">{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
