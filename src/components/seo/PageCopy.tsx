import Link from "next/link";
import { pageCopy } from "@/data/page-copy";

/** Server-rendered supporting copy with internal links, shown at the end of a page. */
export function PageCopy({ path }: { path: string }) {
  const c = pageCopy[path];
  if (!c) return null;
  return (
    <section className="bg-[#F8F8F8] text-near-black py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-sans font-bold mb-5">{c.heading}</h2>
        {c.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mb-4 leading-relaxed text-near-black/75">
            {p}
          </p>
        ))}
        <ul className="mt-6 flex flex-wrap gap-3">
          {c.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-block px-5 py-2 rounded-full border border-near-black/20 text-sm font-semibold hover:bg-near-black hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
