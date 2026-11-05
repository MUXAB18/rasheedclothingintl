import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ChamberBadge } from "@/components/ui/ChamberBadge";

const STATS = [
  { value: "10,000+", label: "Units made every month" },
  { value: "50", label: "Minimum order per design" },
  { value: "99.5%", label: "Quality pass rate" },
  { value: "7+", label: "Export regions served" },
];

const LINKS = [
  { href: "/private-label", label: "Private label clothing" },
  { href: "/custom-manufacturing", label: "Custom manufacturing" },
  { href: "/global", label: "Export services" },
  { href: "/clothing-manufacturer-europe", label: "Manufacturer for Europe" },
  { href: "/products", label: "Product range" },
];

export function SeoIntroSection() {
  return (
    <section className="relative overflow-hidden bg-near-black text-white py-20 md:py-28 border-t border-white/10">
      {/* Same ambient glow as the footer so the two read as one surface */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start [&>*]:min-w-0">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="font-sans text-[11px] font-bold tracking-[3px] uppercase text-white/60 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              Sialkot · Pakistan · Worldwide
            </p>
            <h2 className="text-4xl md:text-5xl font-sans font-black tracking-tight leading-[1.05] text-balance mb-8">
              Best Clothing Manufacturer in Sialkot, Pakistan &amp; Asia
            </h2>
            <div className="space-y-5 text-[15px] md:text-base text-white/65 leading-relaxed max-w-2xl">
              <p>
                Rasheed Clothing International is a clothing manufacturer, garment manufacturer and
                apparel exporter based in Sialkot, Pakistan, serving brands across Asia, the UK,
                USA, Canada, Australia, the UAE and Europe. We produce hoodies, tees, tracksuits,
                activewear, streetwear and corporate uniforms with low minimums from 50 units per
                design.
              </p>
              <p>
                Sialkot is one of Asia&apos;s best-known hubs for sportswear and garment exports.
                Our factory combines that heritage with strict quality control, fast sampling and
                reliable worldwide shipping, so you get a dependable clothing supplier and export
                partner from first sample to bulk delivery.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Explore our services">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-[13px] font-medium text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={14}
                      className="text-white/40 group-hover:text-white transition-colors"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats + CTA */}
          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 transition-colors"
                >
                  <dd className="text-3xl md:text-4xl font-sans font-black tracking-tight text-white mb-2">{s.value}</dd>
                  <dt className="text-[12px] text-white/55 leading-snug">{s.label}</dt>
                </div>
              ))}
            </dl>

            <ChamberBadge className="mt-4 w-full justify-center" />

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-white mb-1">Ready to start your order?</p>
                <p className="text-[13px] text-white/55">Samples in days, bulk shipped worldwide.</p>
              </div>
              <Link
                href="/request-quote"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-[13px] font-semibold hover:bg-white/90 transition-colors"
              >
                Request a quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
