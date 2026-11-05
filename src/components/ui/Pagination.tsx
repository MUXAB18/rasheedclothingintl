import Link from "next/link";

/**
 * Crawlable pagination: real links (not buttons), rel=prev/next, aria-current.
 * Page 1 links to the bare base path; later pages use /page/N paths (cacheable, no query strings) so there is one canonical URL per page.
 */
export function Pagination({
  basePath,
  page,
  totalPages,
}: {
  basePath: string;
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;
  const href = (n: number) => (n === 1 ? basePath : `${basePath}/page/${n}`);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base =
    "min-w-10 h-10 px-3 inline-flex items-center justify-center rounded-full border text-sm font-bold transition-colors";

  return (
    <nav aria-label="Pagination" className="mt-16 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={href(page - 1)} rel="prev" className={`${base} border-gray-300 hover:bg-black hover:text-white`}>
          Previous
        </Link>
      )}
      {pages.map((n) => (
        <Link
          key={n}
          href={href(n)}
          aria-current={n === page ? "page" : undefined}
          aria-label={`Page ${n}`}
          className={`${base} ${n === page ? "bg-black text-white border-black" : "border-gray-300 hover:bg-black hover:text-white"}`}
        >
          {n}
        </Link>
      ))}
      {page < totalPages && (
        <Link href={href(page + 1)} rel="next" className={`${base} border-gray-300 hover:bg-black hover:text-white`}>
          Next
        </Link>
      )}
    </nav>
  );
}
