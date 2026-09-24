// Build-time prerender: boots the production preview server, visits every
// route in the SPA, and writes the fully-rendered HTML (including the
// react-helmet-async head tags) to build/<route>/index.html. This gives
// crawlers and social-card scrapers real markup instead of the bare
// <div id="root"></div> shell, without switching the app to an SSR framework.
import { preview } from "vite";
import { chromium } from "playwright";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

// Sandboxes/CI images that pre-bundle Chromium (and skip Playwright's own
// download) expose it at this path; everywhere else, let Playwright resolve
// its own managed browser install.
const PINNED_CHROMIUM = process.env.PLAYWRIGHT_CHROMIUM_PATH || "/opt/pw-browsers/chromium";
const launchOptions = existsSync(PINNED_CHROMIUM) ? { executablePath: PINNED_CHROMIUM } : {};

const ROUTES = [
  "/",
  "/marketing",
  "/services",
  "/work",
  "/taxi-ads",
  "/projects",
  "/moveads",
  "/moveads/couriers",
  "/moveads/restaurants",
  "/moveads/results",
  "/moveads/legal/courier-terms",
  "/moveads/legal/campaign-terms",
  "/moveads/legal/qr-terms",
  "/moveads/legal/complaints",
  "/it",
  "/it/platforms",
  "/it/applications",
  "/it/websites",
  "/it/design",
  "/builders",
  "/about",
  "/get-started",
  "/contact",
  "/help",
  "/privacy",
  "/terms",
  "/cookies",
];

const OUT_DIR = path.resolve(process.cwd(), "build");

async function main() {
  const server = await preview({
    preview: { port: 4321, strictPort: true, host: "127.0.0.1" },
  });
  const base = `http://127.0.0.1:4321`;

  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `${base}${route}`;
    await page.goto(url, { waitUntil: "networkidle" });
    // Let lazy-loaded route chunks + Helmet finish committing to the DOM.
    await page.waitForSelector("#root *", { timeout: 10000 }).catch(() => {});
    const html = await page.content();
    const finalHtml = `<!doctype html>\n${html}`;

    const targetDir =
      route === "/" ? OUT_DIR : path.join(OUT_DIR, route.replace(/^\//, ""));
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, "index.html"), finalHtml, "utf8");
    console.log(`prerendered ${route} -> ${path.relative(OUT_DIR, path.join(targetDir, "index.html"))}`);
  }

  // GitHub Pages serves build/404.html verbatim (as a real HTTP 404) for any
  // unmatched path, and needs an actual file at that exact path — not
  // build/404/index.html. Render it from the router's real catch-all route
  // (any path that doesn't match one of ROUTES) so the *initial* HTML is the
  // branded NotFound page with noindex, not a copy of the homepage.
  const notFoundUrl = `${base}/this-page-does-not-exist-404`;
  await page.goto(notFoundUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#root *", { timeout: 10000 }).catch(() => {});
  const notFoundHtml = `<!doctype html>\n${await page.content()}`;
  await writeFile(path.join(OUT_DIR, "404.html"), notFoundHtml, "utf8");
  console.log("prerendered 404 -> 404.html");

  await browser.close();
  await server.httpServer.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
