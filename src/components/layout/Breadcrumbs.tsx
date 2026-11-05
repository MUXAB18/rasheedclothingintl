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
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-28 -mb-24 relative z-10 text-xs text-neutral-500">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-neutral-400">{c.name}</span>
            ) : (
              <Link href={c.href} className="hover:text-neutral-300">{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
