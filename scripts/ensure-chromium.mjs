// Skips the download on sandboxes/CI images that already ship a Chromium
// binary for Playwright; everywhere else (e.g. Netlify/Vercel build
// containers) triggers Playwright's own one-time browser download so
// scripts/prerender.mjs has something to launch.
import { existsSync } from "fs";
import { execSync } from "child_process";

const PINNED_CHROMIUM = process.env.PLAYWRIGHT_CHROMIUM_PATH || "/opt/pw-browsers/chromium";

if (!existsSync(PINNED_CHROMIUM)) {
  execSync("npx playwright install --with-deps chromium", { stdio: "inherit" });
}
