"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { RelatedLinks } from "./RelatedLinks";
import { Breadcrumbs } from "./Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ConditionalLayout({
  children,
  footer,
}: {
  children: React.ReactNode;
  /** Server-rendered (no client JS): passed in from the root layout */
  footer: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current route is admin or track
  const isPlainRoute =
    pathname?.startsWith("/admin") || pathname?.startsWith("/track");

  // Admin/Track routes: no navbar/footer, just return children
  if (isPlainRoute) {
    return <>{children}</>;
  }

  // Regular routes: wrap with navbar, footer, and WhatsApp button
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow">{children}</main>
      <RelatedLinks />
      {footer}
      <WhatsAppButton />
    </>
  );
}
