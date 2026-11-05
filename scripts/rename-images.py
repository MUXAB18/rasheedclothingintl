#!/usr/bin/env python3
"""
SEO image renamer. Usage:
  python3 scripts/rename-images.py plan        # print the rename map, change nothing
  python3 scripts/rename-images.py apply       # git mv files, rewrite code refs, write redirects + db-map.json
Then apply DB paths with: node scripts/update-db-image-paths.cjs --apply
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
PORTFOLIO_JSON = os.environ.get("PORTFOLIO_JSON")  # exported DB rows (title, category, imageUrl)

def slug(s):
    s = s.lower().replace("&", "and")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")

CAT = {"Hoodies": "hoodie", "Tees & Essentials": "tee", "Tracksuits": "tracksuit",
       "Gymwear": "gymwear", "Corporate Uniforms": "uniform", "Outerwear & Jackets": "jacket"}

mapping = {}  # "dir/oldstem" -> "dir/newstem"

# 1) portfolio items: name from title + category
rows = json.load(open(PORTFOLIO_JSON))
for r in rows:
    m = re.match(r"/portfolio/(.+)\.\w+$", r["imageUrl"])
    if not m: continue
    word = CAT.get(r["category"], slug(r["category"]))
    base = slug(r["title"])
    new = base if word in base.split("-") else f"{base}-{word}"
    mapping[f"portfolio/{m.group(1)}"] = f"portfolio/{new}"

# 2) root-level referenced images
mapping.update({
    "custom_hoodie_1": "blue-zip-up-hoodie-puff-print-model",
    "IMG_5463": "black-red-b-logo-gym-singlets",
    "IMG_5464": "black-red-racerback-gym-tank-tops",
    "about_img": "rasheed-clothing-showroom-design-table",
    "media__1775818866466": "black-first-48-graphic-tee-shorts-set",
    "media__1775818869472": "red-first-48-graphic-tee-shorts-set",
    "media__1775817925946": "grey-zip-hoodie-tracksuit-models",
    "media__1775817915164": "grey-zip-hoodie-joggers-model",
    "media__1775818888792": "black-hoodie-red-back-graphic-model",
    "media__1775817922243": "black-hoodie-back-print-concrete-wall",
    "hoodie-new": "custom-hoodies-collection",
    "tees-essential": "custom-tees-collection",
    "tracksuit": "custom-tracksuits-collection",
    "gymwear": "custom-gymwear-collection",
    "corporate-uniform": "corporate-uniforms-collection",
    "outerwear": "outerwear-jackets-collection",
})

# 3) factory photos
F = "rasheed-clothing-factory-sialkot-"
for old, new in {
    "factory-image": "sewing-machine-operator-grey-fabric",
    "factory-image-2": "overlock-machine-black-garment-seams",
    "factory-image-3": "multi-head-embroidery-machines-red-garments",
    "factory-image-4": "industrial-sewing-machine-black-fabric-closeup",
    "factory-image-5": "overlock-sewing-machine-black-garment-assembly",
    "factory-image-6": "sewing-workstation-thread-cones-black-garment",
}.items():
    mapping[f"aboutus/{old}"] = f"aboutus/{F}{new}"

# 4) design-studio patches (explicit paths in DesignStudio.tsx; base_* are built dynamically, so untouched)
for n in ["anchor","bear","dagger","dragon","eagle","flames","motorcycle","panther","rose","skull_rose","snake","spider","wolf"]:
    stem = [f for f in os.listdir(os.path.join(PUB, "studio")) if f.startswith(f"patch_{n}_")][0].rsplit(".", 1)[0]
    mapping[f"studio/{stem}"] = f"studio/embroidered-patch-{n.replace('_','-')}"
mapping["studio/patch_tiger"] = "studio/embroidered-patch-comic-bam"
mapping["studio/patch_vintage"] = "studio/embroidered-patch-vintage-tiger"

assert len(set(mapping.values())) == len(mapping), "duplicate target names"

# collect files per stem
files = []  # (old_rel, new_rel)
for old, new in mapping.items():
    d, base = os.path.split(old)
    folder = os.path.join(PUB, d)
    for f in sorted(os.listdir(folder)):
        m = re.match(rf"^{re.escape(base)}((?:_(?:400|800)w)?)\.(\w+)$", f)
        if m:
            nf = f"{os.path.basename(new)}{m.group(1)}.{m.group(2).lower()}"
            files.append((os.path.join(d, f), os.path.join(os.path.dirname(new), nf)))

if sys.argv[1:] == ["plan"] or not sys.argv[1:]:
    for o, n in files[:400]: print(f"{o:70} -> {n}")
    print(len(mapping), "stems,", len(files), "files"); sys.exit()

# ---- apply ----
for o, n in files:
    subprocess.check_call(["git", "mv", os.path.join("public", o), os.path.join("public", n)], cwd=ROOT)

# rewrite code references (src + config); root stems only match when preceded by a quote/backtick
code_files = []
for base in ["src", "scripts"]:
    for r, _, fs in os.walk(os.path.join(ROOT, base)):
        for f in fs:
            if f.endswith((".ts", ".tsx", ".mjs", ".css")): code_files.append(os.path.join(r, f))
for cf in code_files:
    s = open(cf).read(); orig = s
    for old, new in mapping.items():
        pat = (r"(?<=[\"'`(])/" if "/" not in old else r"/") + re.escape(old) + r"(?=[._])"
        s = re.sub(pat, "/" + new, s)
    # extension case (.PNG -> .png) for renamed portfolio refs
    s = re.sub(r"(/portfolio/[a-z0-9-]+)\.PNG", r"\1.png", s)
    if s != orig: open(cf, "w").write(s)

# DB path map + redirects (old public URL -> new URL), originals only
db_map, redirects = {}, []
for o, n in files:
    if re.search(r"_(400|800)w\.", o): continue
    db_map["/" + o] = "/" + n
    redirects.append({"source": "/" + o, "destination": "/" + n, "statusCode": 301})
json.dump(db_map, open(os.path.join(ROOT, "scripts", "image-path-map.json"), "w"), indent=1)
with open(os.path.join(ROOT, "src", "data", "image-redirects.mjs"), "w") as fh:
    fh.write("// Generated by scripts/rename-images.py: old image URLs -> new SEO-friendly URLs (301).\n")
    fh.write("export const imageRedirects = " + json.dumps(redirects, indent=1) + ";\n")
print("renamed", len(files), "files;", len(redirects), "redirects")
