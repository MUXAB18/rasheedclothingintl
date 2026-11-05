import { ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

/** ISO certification badges. Add `number` / `issuer` in company.ts to show them. */
export function IsoBadges({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="ISO certifications">
      {companyData.isoCertifications.map((c) => (
        <li
          key={c.code}
          title={[c.name, c.issuer, c.number && `No. ${c.number}`].filter(Boolean).join(" | ")}
          className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 ${
            dark ? "border-white/15 bg-white/[0.04] text-white" : "border-black/10 bg-[#F8F8F8] text-black"
          }`}
        >
          <ShieldCheck size={16} className="text-green-500 shrink-0" aria-hidden />
          <span className="leading-tight">
            <span className="block text-[12px] font-bold">{c.code}</span>
            <span className={`block text-[10px] ${dark ? "text-white/60" : "text-black/55"}`}>
              {c.short}
              {c.number ? ` · No. ${c.number}` : ""}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
