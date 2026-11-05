import { companyData } from "@/data/company";

const sections = [
  ["Quotes and orders", "Quotes are estimates based on the specifications you provide and remain valid for the period stated. Orders start production once specifications are approved and the agreed deposit is received."],
  ["Samples", "Samples are produced to confirm fit, fabric and finish. Sample fees may be credited against a confirmed bulk order."],
  ["Production and delivery", "Lead times are estimates and begin after sample and artwork approval. We will communicate any delay promptly."],
  ["Payment", "Accepted methods are bank transfer, PayPal, Western Union and Wise. Payment terms are confirmed in each quote."],
  ["Intellectual property", "Your designs and tech packs remain your property. We do not reproduce or share them with third parties."],
  ["Liability", "Our liability is limited to the value of the affected order. Claims about quality must be raised within 7 days of delivery."],
];

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-36 pb-24 text-white">
      <h1 className="text-4xl md:text-5xl font-display mb-3">Terms &amp; Conditions</h1>
      <p className="text-white/40 text-sm mb-10">Last updated: November 2026</p>
      {sections.map(([h, b]) => (
        <div key={h} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{h}</h2>
          <p className="text-white/65 leading-relaxed">{b}</p>
        </div>
      ))}
      <p className="text-white/65">
        Contact: <a className="underline" href={`mailto:${companyData.emails.primary}`}>{companyData.emails.primary}</a>
      </p>
    </section>
  );
}
