import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  const links = [
    { href: "/products", label: "Products" },
    { href: "/private-label", label: "Private Label" },
    { href: "/request-quote", label: "Request a Quote" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-32 text-center text-white">
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Error 404</p>
        <h1 className="text-5xl md:text-6xl font-display mb-6">This page has unravelled</h1>
        <p className="text-white/60 mb-10">
          The page you are looking for does not exist or has moved. Try one of the links below or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
