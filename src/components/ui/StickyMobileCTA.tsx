import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { companyData } from "@/data/company";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 flex gap-2 p-3 bg-[#0a0a0a]/95 backdrop-blur border-t border-white/10">
      <Link href="/request-quote" className="flex-1 text-center bg-white text-black py-3 rounded-full text-xs font-bold uppercase tracking-widest">
        Get a Quote
      </Link>
      <a
        href={companyData.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 rounded-full bg-green-500 text-white"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
