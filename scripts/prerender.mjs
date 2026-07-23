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

  await browser.close();
  await server.httpServer.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
