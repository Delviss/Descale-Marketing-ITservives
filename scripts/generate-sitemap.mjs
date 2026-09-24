// Regenerates public/sitemap.xml from the single route manifest in
// src/config/routes.js, with each entry's <lastmod> taken from that page's
// own last git commit date — not one shared build timestamp — so the
// sitemap reflects when each page actually last changed.
import { execFileSync } from "child_process";
import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { ROUTES } from "../src/config/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://descale.services";
const OUT_FILE = path.join(REPO_ROOT, "public", "sitemap.xml");

function lastCommitDate(file) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cd", "--date=short", "--", file], {
      cwd: REPO_ROOT,
      encoding: "utf8",
    }).trim();
    return out || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function buildEntry({ path: routePath, file, changefreq, priority }) {
  const loc = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
  const lastmod = lastCommitDate(file);
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

async function main() {
  const body = ROUTES.map(buildEntry).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  await writeFile(OUT_FILE, xml, "utf8");
  console.log(`Wrote ${ROUTES.length} routes to ${path.relative(REPO_ROOT, OUT_FILE)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
