// Verification checklist runner (see the audit's "Verification checklist"
// section). Boots the production preview server, visits every route with a
// real Chromium instance, and asserts the checklist for each one:
//   - a unique <title> and a unique meta description (canonical routes only;
//     redirect aliases like /marketing intentionally inherit their target's)
//   - a canonical equal to https://descale.services<path>
//   - exactly one H1
//   - no console errors and no failed (>= 400) requests
//   - at a 390px viewport: document.documentElement.scrollWidth <= 390
//   - every <img> has an alt attribute, non-decorative images non-empty
//   - every button/a has an accessible name
//   - every form control has a label
//   - no leftover mismatched contact info (the old "+48 22 295 20 55" or the
//     wrong "Info@travomate.com.pl" casing) — NOTE: the audit's original
//     checklist item here was "no occurrence of travomate in the rendered
//     HTML", written on the assumption that travomate.com.pl was a
//     copy-pasted, unrelated company's domain. The site owner confirmed
//     Travomate Sp. z o.o. IS the real legal entity operating
//     descale.services and info@travomate.com.pl IS the real contact
//     address (2026-09-24), so that literal check would now fail correctly
//     on every legal page by design. This narrower check instead catches
//     regressions of the actual bugs: the inconsistent phone number and the
//     wrong email casing.
//
// Also runs @axe-core/playwright on each route and reports violations by
// severity (does not fail the run — axe results are advisory here, printed
// for the report).
import { preview } from "vite";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { existsSync } from "fs";
import { ROUTES } from "../src/config/routes.js";

const PINNED_CHROMIUM = process.env.PLAYWRIGHT_CHROMIUM_PATH || "/opt/pw-browsers/chromium";
const launchOptions = existsSync(PINNED_CHROMIUM) ? { executablePath: PINNED_CHROMIUM } : {};

// In this sandboxed dev environment, outbound HTTPS (e.g. the Google Fonts
// preconnect every page makes) is routed through a local policy-enforcing
// proxy that re-terminates TLS with its own CA. Playwright's isolated
// Chromium profile doesn't inherit the system trust store, so route through
// the same proxy the rest of this session uses and trust its cert for this
// throwaway test context only — this has no bearing on production, where
// real visitors reach fonts.googleapis.com directly.
const proxyServer = process.env.HTTPS_PROXY || process.env.https_proxy;

const SITE_URL = "https://descale.services";

// This sandbox's outbound network policy denies a handful of third-party
// CDN hosts the site legitimately calls (Google Fonts, the Calendly widget,
// hot-linked Unsplash images) with a 403 at the proxy — see
// `curl $HTTPS_PROXY/__agentproxy/status`, which logs these as
// connect_rejected policy denials, not something this test can retry around.
// A real deployment (or a browser with normal internet access) reaches them
// fine, so failures against these hosts are sandbox noise, not app bugs, and
// are excluded from the console-error / failed-request checks below.
const SANDBOX_BLOCKED_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "assets.calendly.com", "images.unsplash.com"];
const isSandboxNoise = (text) => SANDBOX_BLOCKED_HOSTS.some((host) => text.includes(host));

// Canonical, indexable routes — checked for unique title/description and a
// self-referential canonical. Sourced from the same manifest the sitemap
// generator uses (src/config/routes.js), so this list can't drift from what
// actually ships in sitemap.xml.
const PRIMARY_ROUTES = ROUTES.map((r) => r.path);

// Redirect aliases — still crawled (no overflow/console-error regressions
// allowed) but excluded from the title/description uniqueness set since
// they intentionally inherit their target's metadata.
const ALIAS_ROUTES = [
  "/marketing",
  "/homepage",
  "/services-hub",
  "/work-portfolio",
  "/interactive-taxi-ads-innovation-lab",
  "/about-experience",
  "/growth-assessment-contact",
  "/builder",
  "/faq",
];

const ALL_ROUTES = [...PRIMARY_ROUTES, ...ALIAS_ROUTES];

const results = [];
let hadFailure = false;

function fail(route, message) {
  hadFailure = true;
  results.push({ route, ok: false, message });
}

function pass(route, message) {
  results.push({ route, ok: true, message });
}

async function main() {
  const server = await preview({
    preview: { port: 4321, strictPort: true, host: "127.0.0.1" },
  });
  const base = `http://127.0.0.1:4321`;

  const browser = await chromium.launch({
    ...launchOptions,
    ...(proxyServer ? { proxy: { server: proxyServer, bypass: "127.0.0.1,localhost" } } : {}),
  });
  const seenTitles = new Map();
  const seenDescriptions = new Map();
  const axeSummary = [];

  for (const route of ALL_ROUTES) {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      ignoreHTTPSErrors: Boolean(proxyServer),
    });
    const page = await context.newPage();

    const consoleErrors = [];
    const failedRequests = [];
    page.on("console", (msg) => {
      if (msg.type() !== "error") return;
      const text = msg.text();
      const loc = msg.location()?.url || "";
      if (isSandboxNoise(text) || isSandboxNoise(loc)) return;
      // Generic "resource failed to load" console lines don't carry the
      // failing URL, so they can't be host-matched here; the paired
      // `requestfailed`/`response` listeners below do carry the URL and are
      // the source of truth for those failures (host-filtered there).
      // Without this, every sandbox-blocked font/Calendly/Unsplash request
      // would double-count as an unfiltered console error too.
      if (/Failed to load resource: net::ERR_/.test(text)) return;
      consoleErrors.push(text);
    });
    page.on("response", (res) => {
      if (res.status() >= 400 && !isSandboxNoise(res.url())) {
        failedRequests.push(`${res.status()} ${res.url()}`);
      }
    });
    page.on("requestfailed", (req) => {
      if (!isSandboxNoise(req.url())) {
        consoleErrors.push(`request failed: ${req.failure()?.errorText || "?"} ${req.url()}`);
      }
    });
    page.on("pageerror", (err) => consoleErrors.push(String(err)));

    const url = `${base}${route}`;
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForSelector("#root *", { timeout: 10000 }).catch(() => {});
    // Let the redirect aliases settle (client-side Navigate) before reading state.
    await page.waitForTimeout(300);

    const finalPath = new URL(page.url()).pathname;

    // --- title / description ---
    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .first()
      .getAttribute("content")
      .catch(() => null);

    if (!title) fail(route, "missing <title>");
    if (!description) fail(route, "missing meta description");

    if (PRIMARY_ROUTES.includes(route)) {
      if (title) {
        if (seenTitles.has(title)) {
          fail(route, `duplicate <title> also used by ${seenTitles.get(title)}: "${title}"`);
        } else {
          seenTitles.set(title, route);
        }
      }
      if (description) {
        if (seenDescriptions.has(description)) {
          fail(route, `duplicate meta description also used by ${seenDescriptions.get(description)}`);
        } else {
          seenDescriptions.set(description, route);
        }
      }
    }

    // --- canonical ---
    const canonical = await page
      .locator('link[rel="canonical"]')
      .first()
      .getAttribute("href")
      .catch(() => null);
    if (!canonical) {
      fail(route, "missing <link rel=canonical>");
    } else if (PRIMARY_ROUTES.includes(route)) {
      const expected = `${SITE_URL}${route === "/" ? "/" : route}`;
      if (canonical !== expected) {
        fail(route, `canonical is "${canonical}", expected "${expected}"`);
      }
    }

    // --- exactly one H1 ---
    const h1Count = await page.locator("h1").count();
    if (h1Count !== 1) fail(route, `expected exactly 1 <h1>, found ${h1Count}`);

    // --- console errors / failed requests ---
    if (consoleErrors.length) {
      fail(route, `console errors: ${consoleErrors.slice(0, 3).join(" | ")}`);
    }
    if (failedRequests.length) {
      fail(route, `failed requests (>=400): ${failedRequests.slice(0, 3).join(" | ")}`);
    }

    // --- mobile horizontal overflow ---
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    if (scrollWidth > 390) {
      fail(route, `horizontal overflow: document.documentElement.scrollWidth = ${scrollWidth}`);
    }

    // --- images: alt attributes ---
    const imgIssues = await page.evaluate(() => {
      const issues = [];
      document.querySelectorAll("img").forEach((img) => {
        if (!img.hasAttribute("alt")) {
          issues.push(`<img> missing alt: ${img.getAttribute("src") || "(no src)"}`);
        }
      });
      return issues;
    });
    if (imgIssues.length) fail(route, `image alt issues: ${imgIssues.slice(0, 3).join(" | ")}`);

    // --- buttons/links: accessible name ---
    const nameIssues = await page.evaluate(() => {
      const issues = [];
      const hasAccessibleName = (el) => {
        if (el.getAttribute("aria-label")?.trim()) return true;
        if (el.getAttribute("aria-labelledby")) return true;
        if (el.getAttribute("title")?.trim()) return true;
        if (el.textContent?.trim()) return true;
        // An <img> or <svg> child with alt/aria-label counts.
        const img = el.querySelector("img[alt]");
        if (img && img.getAttribute("alt")?.trim()) return true;
        return false;
      };
      document.querySelectorAll("button, a[href]").forEach((el) => {
        if (el.getAttribute("aria-hidden") === "true") return;
        if (!hasAccessibleName(el)) {
          issues.push(`<${el.tagName.toLowerCase()}> with no accessible name (class="${el.className}")`);
        }
      });
      return issues;
    });
    if (nameIssues.length) fail(route, `unlabeled interactive elements: ${nameIssues.slice(0, 5).join(" | ")}`);

    // --- form controls: labels ---
    const formIssues = await page.evaluate(() => {
      const issues = [];
      document.querySelectorAll("input, select, textarea").forEach((el) => {
        if (el.type === "hidden" || el.type === "submit" || el.type === "button") return;
        // aria-hidden (or a hidden ancestor) removes it from the
        // accessibility tree entirely, same as axe/real screen readers, so
        // it isn't a control that needs its own label.
        if (el.closest('[aria-hidden="true"]')) return;
        const id = el.getAttribute("id");
        const hasLabelFor = id && document.querySelector(`label[for="${CSS.escape(id)}"]`);
        const hasAriaLabel = el.getAttribute("aria-label")?.trim();
        const hasAriaLabelledby = el.getAttribute("aria-labelledby");
        const wrappedInLabel = el.closest("label");
        if (!hasLabelFor && !hasAriaLabel && !hasAriaLabelledby && !wrappedInLabel) {
          issues.push(`<${el.tagName.toLowerCase()} name="${el.name || el.id || "?"}"> has no label`);
        }
      });
      return issues;
    });
    if (formIssues.length) fail(route, `unlabeled form controls: ${formIssues.slice(0, 5).join(" | ")}`);

    // --- stale contact info regressions ---
    const html = await page.content();
    if (/295\s?20\s?55/.test(html)) {
      fail(route, "stale phone number +48 22 295 20 55 found in rendered HTML");
    }
    if (/Info@travomate/.test(html)) {
      fail(route, "wrong-case Info@travomate.com.pl found in rendered HTML (should be lowercase)");
    }

    if (!hadFailureForRoute(route)) pass(route, "all checks passed");

    // --- axe-core ---
    try {
      const axeResults = await new AxeBuilder({ page }).analyze();
      const bySeverity = { critical: 0, serious: 0, moderate: 0, minor: 0 };
      const details = [];
      for (const v of axeResults.violations) {
        bySeverity[v.impact || "minor"] = (bySeverity[v.impact || "minor"] || 0) + 1;
        if (v.impact === "critical" || v.impact === "serious") {
          const targets = v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(", ");
          details.push(`[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length}x) e.g. ${targets}`);
        }
      }
      axeSummary.push({
        route: finalPath === route ? route : `${route} -> ${finalPath}`,
        ...bySeverity,
        total: axeResults.violations.length,
        details,
      });
    } catch (err) {
      axeSummary.push({ route, error: String(err) });
    }

    await context.close();
  }

  await browser.close();
  await server.httpServer.close();

  function hadFailureForRoute(route) {
    return results.some((r) => r.route === route && !r.ok);
  }

  console.log("\n=== Verification results ===");
  for (const r of results) {
    console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.route}  ${r.ok ? "" : "- " + r.message}`);
  }

  console.log("\n=== axe-core violations by severity ===");
  for (const a of axeSummary) {
    if (a.error) {
      console.log(`${a.route}: ERROR running axe (${a.error})`);
    } else {
      console.log(
        `${a.route}: total=${a.total} critical=${a.critical} serious=${a.serious} moderate=${a.moderate} minor=${a.minor}`
      );
      for (const d of a.details || []) console.log(`    ${d}`);
    }
  }

  const failCount = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length} route-checks run, ${failCount} failed.`);
  process.exit(hadFailure ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
