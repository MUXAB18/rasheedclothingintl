// Updates image paths stored in the database after scripts/rename-images.py.
// Dry run by default. Backs up every row it will change to scripts/db-image-backup-<ts>.json first.
//   node scripts/update-db-image-paths.cjs           # dry run
//   node scripts/update-db-image-paths.cjs --apply   # backup, then update in one transaction
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
require("dotenv").config({ path: path.join(__dirname, "../.env.local"), quiet: true });
require("dotenv").config({ path: path.join(__dirname, "../.env"), quiet: true });

const map = JSON.parse(fs.readFileSync(path.join(__dirname, "image-path-map.json"), "utf8"));
const apply = process.argv.includes("--apply");
const swap = (v) => (typeof v === "string" ? (map[v] ?? v) : v);
const swapText = (t) => {
  let out = t;
  for (const [from, to] of Object.entries(map)) out = out.split(from).join(to);
  return out;
};

const targets = [
  { table: "PortfolioProject", scalar: ["imageUrl"], arrays: ["images"], text: [] },
  { table: "Product", scalar: [], arrays: ["images"], text: [] },
  { table: "Collection", scalar: ["imageUrl"], arrays: [], text: [] },
  { table: "Category", scalar: ["imageUrl"], arrays: [], text: [] },
  { table: "BlogPost", scalar: ["coverImage"], arrays: [], text: ["content"] },
];

(async () => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const client = await pool.connect();
  const changes = [];
  const backup = [];
  try {
    for (const t of targets) {
      const { rows } = await client.query(`select * from "${t.table}"`);
      for (const row of rows) {
        const set = {};
        for (const c of t.scalar) if (row[c] && swap(row[c]) !== row[c]) set[c] = swap(row[c]);
        for (const c of t.arrays)
          if (Array.isArray(row[c]) && row[c].some((x) => swap(x) !== x)) set[c] = row[c].map(swap);
        for (const c of t.text) if (row[c] && swapText(row[c]) !== row[c]) set[c] = swapText(row[c]);
        if (Object.keys(set).length) {
          changes.push({ table: t.table, id: row.id, set });
          backup.push({ table: t.table, row });
        }
      }
    }
    const byTable = {};
    for (const c of changes) byTable[c.table] = (byTable[c.table] || 0) + 1;
    console.log(apply ? "APPLYING" : "DRY RUN", "rows to change:", byTable);
    if (!apply) {
      changes.slice(0, 5).forEach((c) => console.log(c.table, c.id, JSON.stringify(c.set).slice(0, 140)));
      return;
    }
    const file = path.join(__dirname, `db-image-backup-${Date.now()}.json`);
    fs.writeFileSync(file, JSON.stringify(backup, null, 1));
    console.log("backup written:", file);
    await client.query("begin");
    for (const c of changes) {
      const cols = Object.keys(c.set);
      const sql = `update "${c.table}" set ${cols.map((k, i) => `"${k}" = $${i + 1}`).join(", ")} where id = $${cols.length + 1}`;
      await client.query(sql, [...cols.map((k) => c.set[k]), c.id]);
    }
    await client.query("commit");
    console.log("updated", changes.length, "rows");
  } catch (e) {
    await client.query("rollback").catch(() => {});
    console.error("FAILED, rolled back:", e.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
})();
