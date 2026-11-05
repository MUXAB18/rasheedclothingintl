// Usage: node scripts/keyword-placement.mjs [baseUrl]
// Checks WHERE each page's primary keyword (or a close variant) is placed.
import { keywordMap } from "../src/data/keywords.ts";
const base = process.argv[2] || "http://localhost:3000";
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/\s+/g, " ").trim();
const has = (t, k) => t.toLowerCase().includes(k.toLowerCase());
const pages = {};
for (const path of Object.keys(keywordMap)) pages[path] = await (await fetch(base + path)).text();
let weak = 0;
for (const [path, kw] of Object.entries(keywordMap)) {
  const html = pages[path];
  const variants = [kw.primary, ...kw.secondary];
  const any = (t) => variants.some((v) => has(t, v));
  const title = (html.match(/<title>([^<]*)/) || [])[1] || "";
  const desc = (html.match(/name="description" content="([^"]*)/) || [])[1] || "";
  const h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "");
  const subs = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map((m) => strip(m[1]));
  const main = strip(html.split("<footer")[0].split("<main")[1] || html);
  const words = main.split(" ");
  const first = words.slice(0, 120).join(" ");
  const last = words.slice(-160).join(" ");
  const alts = [...html.matchAll(/<img[^>]*alt="([^"]*)"/g)].map((m) => m[1]).filter((a) => !/logo|^united states$|flag/i.test(a)); // content images only
  const slugOk = path === "/" || variants.some((v) => path.replace(/-/g, " ").includes(v.toLowerCase().split(" ")[0]));
  // anchor text from OTHER pages pointing here
  let anchors = 0;
  for (const [p2, h2] of Object.entries(pages)) {
    if (p2 === path) continue;
    for (const m of h2.matchAll(new RegExp(`<a [^>]*href="${path}"[^>]*>([\\s\\S]*?)</a>`, "g"))) if (any(strip(m[1])) || strip(m[1]).length > 6) anchors++;
  }
  const checks = {
    title: has(title, kw.primary),
    h1: any(h1),
    desc: any(desc),
    first120: any(first),
    subhead: subs.some(any),
    closing: any(last),
    alt: alts.some(any) || alts.length === 0 || path === "/blog", // blog covers use post titles
    inbound: path === "/" || anchors >= 2,
  };
  const miss = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
  if (miss.length) weak++;
  console.log(`${miss.length ? "FIX " : "ok  "} ${path.padEnd(22)} ${Object.values(checks).filter(Boolean).length}/8`, miss.length ? "missing: " + miss.join(", ") : "");
}
console.log(weak, "pages with placement gaps");
