import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ChamberBadge } from "@/components/ui/ChamberBadge";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import { BUSINESS_ID, WEBSITE_ID } from "@/lib/schema";

export type PillarSection = {
  heading: string;
  body?: string[];
  bullets?: { title: string; text: string }[];
};

export type PillarProps = {
  path: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  image: { src: string; alt: string };
  stats: { value: string; label: string }[];
  sections: PillarSection[];
  faqs: { q: string; a: string }[];
  links: { href: string; label: string; blurb: string }[];
  metaTitle: string;
  metaDescription: string;
};

/** Server-rendered long-form pillar page: one h1, h2 sections, FAQ with schema, internal links. */
export function PillarPage(p: PillarProps) {
  const url = `${SITE_URL}${p.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: p.metaTitle,
        description: p.metaDescription,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        mainEntity: { "@id": `${url}#faq` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: p.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white text-near-black">
      <JsonLd data={schema} />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <header className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div>
            <p className="eyebrow mb-5">{p.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-balance mb-6">
              {p.h1}
            </h1>
            {p.intro.map((t) => (
              <p key={t.slice(0, 30)} className="text-lg leading-relaxed text-near-black/70 mb-4">
                {t}
              </p>
            ))}
            <Link
              href="/request-quote"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-near-black text-white px-7 py-3.5 text-sm font-semibold hover:bg-black/80 transition-colors"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F8F8F8]">
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-4">
          <ChamberBadge className="!bg-[#F8F8F8]" />
          <p className="text-sm text-near-black/60 max-w-md">
            Rasheed Clothing International is a verified member of the Sialkot Chamber of Commerce &amp; Industry.
          </p>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {p.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#F8F8F8] p-6">
              <dd className="text-3xl font-sans font-black tracking-tight mb-1">{s.value}</dd>
              <dt className="text-sm text-near-black/60">{s.label}</dt>
            </div>
          ))}
        </dl>

        <div className="space-y-16 max-w-4xl">
          {p.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tight text-balance mb-5">
                {s.heading}
              </h2>
              {s.body?.map((t) => (
                <p key={t.slice(0, 30)} className="text-base md:text-lg leading-relaxed text-near-black/70 mb-4">
                  {t}
                </p>
              ))}
              {s.bullets && (
                <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                  {s.bullets.map((b) => (
                    <li key={b.title} className="flex gap-3 rounded-2xl border border-near-black/10 p-5">
                      <Check className="w-5 h-5 mt-0.5 shrink-0 text-[#A67C52]" aria-hidden />
                      <div>
                        <h3 className="font-bold mb-1">{b.title}</h3>
                        <p className="text-sm text-near-black/65 leading-relaxed">{b.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tight mb-6">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-near-black/10 border-y border-near-black/10">
              {p.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none flex justify-between gap-4 font-bold text-lg">
                    <h3 className="font-bold text-lg">{f.q}</h3>
                    <span className="text-[#A67C52] group-open:rotate-45 transition-transform text-2xl leading-none" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-near-black/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="mt-20 rounded-3xl bg-near-black text-white p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-sans font-black tracking-tight mb-3">
            Ready to start your order?
          </h2>
          <p className="text-white/65 mb-8 max-w-2xl">
            Send your tech pack, a reference sample or just an idea. We reply within 24 hours with
            pricing, MOQ and lead time.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {p.links.map((l) => (
              <li key={l.href} className="rounded-2xl border border-white/10 p-5 hover:border-white/40 transition-colors">
                <Link href={l.href} className="font-bold block mb-1">
                  {l.label}
                </Link>
                <p className="text-sm text-white/55">{l.blurb}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold"
          >
            Request a quote <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </div>
  );
}
