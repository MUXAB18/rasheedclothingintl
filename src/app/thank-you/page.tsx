import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { CheckCircle2 } from "lucide-react";

export const metadata = pageMeta({
  title: "Thank You",
  description: "Thanks for contacting Rasheed Clothing International. Our team will reply to your enquiry within 24 hours.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-32 text-center text-white">
      <div className="max-w-xl">
        <CheckCircle2 className="w-14 h-14 mx-auto mb-6 text-green-400" />
        <h1 className="text-4xl md:text-5xl font-display mb-5">Thank you, we got your request</h1>
        <p className="text-white/60 mb-3">
          Our team replies within 24 hours, Monday to Saturday, 9 AM to 7 PM PKT.
        </p>
        <p className="text-white/60 mb-10">
          While you wait, explore our work or read the FAQ.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/portfolio" className="px-6 py-3 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors">View Portfolio</Link>
          <Link href="/faq" className="px-6 py-3 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors">Read FAQ</Link>
          <Link href="/" className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
