// Canonical, indexable route manifest — the single source of truth for the
// sitemap generator (scripts/generate-sitemap.mjs) and the verification
// script (scripts/verify-site.mjs). Adding a new indexable page means adding
// one entry here; the sitemap and the verification checklist both pick it
// up automatically, instead of drifting out of sync with src/Routes.jsx by
// hand (the bug this file replaces: /projects, /help, /moveads and its
// children were live routes that had simply been forgotten from
// public/sitemap.xml).
//
// `file` is the page component's path relative to the repo root, used to
// derive a real `lastmod` from that file's last git commit date.
export const ROUTES = [
  { path: "/", file: "src/pages/homepage/index.jsx", changefreq: "weekly", priority: "1.0" },
  { path: "/services", file: "src/pages/services-hub/index.jsx", changefreq: "monthly", priority: "0.9" },
  { path: "/work", file: "src/pages/work-portfolio/index.jsx", changefreq: "monthly", priority: "0.8" },
  { path: "/taxi-ads", file: "src/pages/interactive-taxi-ads-innovation-lab/index.jsx", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", file: "src/pages/projects/index.jsx", changefreq: "monthly", priority: "0.6" },
  { path: "/moveads", file: "src/pages/moveads/index.jsx", changefreq: "monthly", priority: "0.6" },
  { path: "/moveads/couriers", file: "src/pages/moveads/couriers/index.jsx", changefreq: "monthly", priority: "0.6" },
  { path: "/moveads/restaurants", file: "src/pages/moveads/restaurants/index.jsx", changefreq: "monthly", priority: "0.6" },
  { path: "/moveads/results", file: "src/pages/moveads/results/index.jsx", changefreq: "monthly", priority: "0.5" },
  { path: "/moveads/legal/courier-terms", file: "src/pages/moveads/legal/CourierTerms.jsx", changefreq: "yearly", priority: "0.2" },
  { path: "/moveads/legal/campaign-terms", file: "src/pages/moveads/legal/CampaignTerms.jsx", changefreq: "yearly", priority: "0.2" },
  { path: "/moveads/legal/qr-terms", file: "src/pages/moveads/legal/QrOfferTerms.jsx", changefreq: "yearly", priority: "0.2" },
  { path: "/moveads/legal/complaints", file: "src/pages/moveads/legal/Complaints.jsx", changefreq: "yearly", priority: "0.2" },
  { path: "/it", file: "src/pages/it/index.jsx", changefreq: "monthly", priority: "1.0" },
  { path: "/it/platforms", file: "src/pages/it/platforms/index.jsx", changefreq: "monthly", priority: "0.9" },
  { path: "/it/applications", file: "src/pages/it/applications/index.jsx", changefreq: "monthly", priority: "0.9" },
  { path: "/it/websites", file: "src/pages/it/websites/index.jsx", changefreq: "monthly", priority: "0.9" },
  { path: "/it/design", file: "src/pages/it/design/index.jsx", changefreq: "monthly", priority: "0.9" },
  { path: "/builders", file: "src/pages/builders/index.jsx", changefreq: "monthly", priority: "0.7" },
  { path: "/about", file: "src/pages/about-experience/index.jsx", changefreq: "monthly", priority: "0.7" },
  { path: "/get-started", file: "src/pages/growth-assessment-contact/index.jsx", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", file: "src/pages/contact/index.jsx", changefreq: "monthly", priority: "0.7" },
  { path: "/help", file: "src/pages/help/index.jsx", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", file: "src/pages/legal/Privacy.jsx", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", file: "src/pages/legal/Terms.jsx", changefreq: "yearly", priority: "0.3" },
  { path: "/cookies", file: "src/pages/legal/Cookies.jsx", changefreq: "yearly", priority: "0.3" },
];
