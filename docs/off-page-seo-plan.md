# Off-page SEO plan: Rasheed Clothing International

Backlinks, mentions and PR have to be earned on other people's sites, so none of this can be
"deployed" from the codebase. This is the working plan. Tick items off as they are done.

## 0. Baseline (do first, 30 min, free)
- [ ] Google Search Console > Links: export top linking sites, top linked pages, anchor text.
- [ ] Bing Webmaster Tools > Backlinks: export the same.
- [ ] Note the count of referring domains today. Re-check monthly.
- [ ] Search `"rasheedclothingintl.me"` and `"Rasheed Clothing International"` (with quotes) for
      unlinked mentions; email each site and ask to add a link.

## 1. Business profiles and directories (fast, relevant, low risk)
Use the exact same Name / Address / Phone everywhere (see `src/data/company.ts`).
- [ ] Google Business Profile (category: Clothing manufacturer)
- [ ] Bing Places, Apple Business Connect
- [ ] LinkedIn company page (exists), Instagram (exists), Facebook, Pinterest, YouTube
- [ ] Crunchbase, Kompass, ExportHub, Global Sources, Alibaba, Made-in-China
- [ ] Pakistan trade bodies: Sialkot Chamber of Commerce & Industry, Pakistan Readymade
      Garments Manufacturers & Exporters Association, TDAP exporter directory
- [ ] After each profile goes live, add its URL to `sameAs` in `src/app/layout.tsx`.

Rule: only join directories that are real, moderated and relevant to apparel / export / Pakistan.
Skip paid "10,000 backlinks" packages and generic link farms.

## 2. Guest posting (only where the site is genuinely relevant)
Target publications that apparel buyers read. Pitch an original article, with no link-for-money.
- Apparel Resources, Fibre2Fashion, Just Style, Sourcing Journal, Apparel Insider,
  Textile Today, Business Recorder (Pakistan), fashion-business and startup blogs.
Article ideas drawn from our real expertise (each can link to the matching page):
1. How to start a clothing brand with low MOQ (50 units) -> `/private-label`
2. Tech pack checklist for first-time brands -> `/custom-manufacturing`
3. Fleece vs French terry vs jersey: choosing hoodie fabric -> `/fabrics`
4. Why Sialkot is Asia's hub for sportswear manufacturing -> `/manufacturing`
5. Shipping and customs for apparel exports to the UK / USA / UAE -> `/export-services`
6. Screen print vs embroidery vs sublimation -> `/customization`
Link naturally, once or twice, with descriptive anchor text. Never exact-match stuff every time.

## 3. Brand mentions and digital PR
- Story angles: low-MOQ private label for indie brands; Sialkot manufacturing heritage;
  sustainability steps at the factory; a client case study (get the client's permission).
- Publish original data worth citing: e.g. "Apparel MOQ and lead-time benchmark" from our own
  orders. Journalists link to data, rarely to sales pages.
- Respond to journalist requests (HARO-style services: Connectively, Qwoted, Featured) as a
  garment-manufacturing source.
- Local and trade press: Sialkot business news, export awards, trade-fair coverage.
- Ask happy clients to mention and link to us, and to tag @rasheedclothingintl.

## 4. Competitor backlink analysis (method)
1. List 5 competitors that rank for "clothing manufacturer Pakistan / Sialkot", "private label
   clothing manufacturer", "custom hoodie manufacturer".
2. In Semrush / Ahrefs / Moz / Bing Webmaster, pull each competitor's referring domains.
3. Intersect: sites linking to 2+ competitors but not to us are the warmest prospects.
4. Sort into: directories (apply), publications (pitch guest post), resource pages (ask to be
   added), forums/communities (participate, do not spam).
5. Track in a sheet: domain, authority, relevance, contact, status, date, link URL.
NOTE: the Semrush connection in this workspace currently has no API units left, so this
analysis could not be run automatically. Add units or export the data manually and it can be
processed here.

## 5. Harmful link removal (only when genuinely necessary)
Google ignores most spam links. Only act if you see a manual action in Search Console, or a
clear pattern of paid / hacked / adult / casino / pharma links pointing to us.
1. Export links from Search Console > Links (and Bing).
2. Flag clearly toxic domains. Email the webmaster asking for removal; keep proof.
3. Only if removal fails AND the links are harmful, add the domains to `docs/disavow.txt` and
   upload at https://search.google.com/search-console/disavow-links
4. Never disavow normal low-authority links, they are harmless and often useful.

## 6. Link-worthy assets on the site (already done or easy wins)
- Done: blog, FAQ, case studies, llms.txt, schema, share images.
- To add: a downloadable "Tech pack template" and "MOQ and lead-time guide" (PDF / page).
  Free, useful resources are what earn natural links.

## 7. Guardrails
- No paid links, link exchanges at scale, PBNs, comment/forum spam, or auto-generated guest posts.
  These risk a Google penalty.
- Vary anchor text; mostly brand name and natural phrases.
- Aim for a steady 5-10 quality links a month, not a spike.
