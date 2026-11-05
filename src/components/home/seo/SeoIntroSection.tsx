import Link from "next/link";

export function SeoIntroSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display mb-8">
          Top Clothing Manufacturer &amp; Exporter in Sialkot, Pakistan
        </h2>
        <div className="space-y-5 text-white/65 leading-relaxed">
          <p>
            Rasheed Clothing International is a clothing manufacturer and supplier based in
            Sialkot, Pakistan, serving brands across Asia, the UK, USA, Canada, Australia, the
            UAE and Europe. We produce hoodies, tees, tracksuits, activewear, streetwear and
            corporate uniforms with low minimums from 50 units per design.
          </p>
          <p>
            Sialkot is one of Asia&apos;s best-known hubs for sportswear and garment exports. Our
            factory combines that heritage with strict quality control, fast sampling and
            reliable worldwide shipping, so you get a dependable clothes supplier and export
            partner from first sample to bulk delivery.
          </p>
          <p>
            Explore our <Link className="underline" href="/private-label">private label clothing</Link>,{" "}
            <Link className="underline" href="/custom-manufacturing">custom manufacturing</Link>,{" "}
            <Link className="underline" href="/global">export services</Link> and{" "}
            <Link className="underline" href="/products">product range</Link>, or{" "}
            <Link className="underline" href="/request-quote">request a quote</Link> today.
          </p>
        </div>
      </div>
    </section>
  );
}
