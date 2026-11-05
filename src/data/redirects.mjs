/**
 * Central redirect table. Add a row, deploy, done.
 *
 * 301 = permanent (page moved for good; Google passes ranking to the new URL)
 * 302 = temporary (campaign, seasonal or A/B; Google keeps the old URL indexed)
 *
 * (Plain .mjs so next.config can import it on any Node version.)
 * Never redirect to a URL that itself redirects (no chains), and never to a 404.
 */
/** @typedef {{ source: string, destination: string, statusCode: 301 | 302 }} RedirectRule */

/** @returns {RedirectRule} */
const permanent = (source, destination) => ({
  source,
  destination,
  statusCode: 301,
});
/** @returns {RedirectRule} */
const temporary = (source, destination) => ({
  source,
  destination,
  statusCode: 302,
});

/** @type {RedirectRule[]} */
/** Old query-string pagination -> path pagination (cacheable) */
const blogPaginationRedirects = [
  {
    source: "/blog",
    has: [{ type: "query", key: "page", value: "(?<page>[2-9]|[1-9][0-9]+)" }],
    destination: "/blog/page/:page",
    statusCode: 301,
  },
];

export const redirectRules = [
  // ── Legacy / alternate spellings of existing pages (301) ──
  permanent("/index.html", "/"),
  permanent("/home", "/"),
  permanent("/about-us", "/about"),
  permanent("/aboutus", "/about"),
  permanent("/contact-us", "/contact"),
  permanent("/contactus", "/contact"),
  permanent("/privacy-policy", "/privacy"),
  permanent("/terms-and-conditions", "/terms"),
  permanent("/terms-conditions", "/terms"),
  permanent("/terms-of-service", "/terms"),
  permanent("/quote", "/request-quote"),
  permanent("/get-quote", "/request-quote"),
  permanent("/request-a-quote", "/request-quote"),
  permanent("/faqs", "/faq"),
  permanent("/gallery", "/portfolio"),
  permanent("/work", "/portfolio"),
  permanent("/our-work", "/portfolio"),
  permanent("/shop", "/products"),
  permanent("/catalog", "/products"),
  permanent("/catalogue", "/products"),
  permanent("/product", "/products"),
  permanent("/collection", "/collections"),
  permanent("/services", "/private-label"),
  permanent("/private-labelling", "/private-label"),
  permanent("/custom-clothing", "/custom-manufacturing"),
  permanent("/oem", "/custom-manufacturing"),
  permanent("/printing", "/customization"),
  permanent("/embroidery", "/customization"),
  permanent("/export", "/export-services"),
  permanent("/exports", "/export-services"),
  permanent("/shipping", "/global"),
  permanent("/factory", "/manufacturing"),
  permanent("/quality-control", "/quality"),
  permanent("/news", "/blog"),
  permanent("/resources", "/blog"),
  permanent("/studio", "/design-studio"),
  permanent("/lookbook", "/collections"), // placeholder page removed (thin content)

  // ── Old product-category slugs (product pages use numeric ids) ──
  permanent("/products/hoodies", "/products"),
  permanent("/products/tracksuits", "/products"),
  permanent("/products/activewear", "/products"),
  permanent("/products/gymwear", "/products"),
  permanent("/products/uniforms", "/products"),
  permanent("/products/outerwear", "/products"),
  permanent("/products/tees", "/products"),

  // ── Temporary redirects (302): flip to a campaign page when needed ──
  // temporary("/sale", "/products"),

  ...blogPaginationRedirects,
];
