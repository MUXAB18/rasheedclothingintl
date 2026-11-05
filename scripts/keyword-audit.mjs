// Usage: node scripts/keyword-audit.mjs [baseUrl]
// Checks each page in src/data/keywords.ts for primary/secondary/semantic coverage.
import { keywordMap } from "../src/data/keywords.ts";

const base = process.argv[2] || "http://localhost:3000";
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/\s+/g, " ").trim();
const count = (t, k) => (t.toLowerCase().match(new RegExp(k.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;

let weak = 0;
for (const [path, kw] of Object.entries(keywordMap)) {
  const html = await (await fetch(base + path)).text();
  const title = (html.match(/<title>([^<]*)/) || [])[1] || "";
  const desc = (html.match(/name="description" content="([^"]*)/) || [])[1] || "";
  const h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "");
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1])).join(" | ");
  const body = strip(html.split("<footer")[0]);
  const intro = body.split(" ").slice(0, 200).join(" ");
  const inTitleH1 = count(title + " " + h1, kw.primary) > 0;
  const inDesc = count(desc, kw.primary) > 0 || kw.secondary.some((s) => count(desc, s) > 0);
  const primaryBody = count(body, kw.primary);
  const secHit = kw.secondary.filter((s) => count(body, s) > 0);
  const semHit = kw.semantic.filter((s) => count(body, s) > 0);
  const words = body.split(" ").length;
  const issues = [];
  if (!inTitleH1) issues.push("primary not in title/h1");
  if (!inDesc) issues.push("no keyword in meta description");
  if (primaryBody < 2) issues.push(`primary only ${primaryBody}x in body`);
  if (secHit.length < 2) issues.push(`secondary ${secHit.length}/${kw.secondary.length}`);
  if (semHit.length < 3) issues.push(`semantic ${semHit.length}/${kw.semantic.length}`);
  if (primaryBody / words > 0.03) issues.push(`possible stuffing ${(100 * primaryBody / words).toFixed(1)}%`);
  if (issues.length) weak++;
  console.log(`${issues.length ? "FIX " : "ok  "} ${path.padEnd(22)} primary="${kw.primary}" x${primaryBody} sec ${secHit.length}/${kw.secondary.length} sem ${semHit.length}/${kw.semantic.length}`, issues.length ? issues : "");
}
console.log(weak, "of", Object.keys(keywordMap).length, "pages need work");
