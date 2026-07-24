import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { trackPageview } from "utils/analytics";

// Canonical origin for the production site. Absolute URLs are required for
// canonical/og:url so crawlers resolve them unambiguously.
const SITE_ORIGIN = "https://www.descale.services";

// Map alias / duplicate routes to their single canonical path so every
// variant points search engines at one authoritative URL.
const CANONICAL_ALIASES = {
  "/": "/marketing",
  "/homepage": "/marketing",
  "/services-hub": "/services",
  "/work-portfolio": "/work",
  "/interactive-taxi-ads-innovation-lab": "/taxi-ads",
  "/about-experience": "/about",
  "/growth-assessment-contact": "/get-started",
  "/builder": "/builders",
  "/faq": "/help",
};

const CanonicalTag = () => {
  const { pathname, search } = useLocation();

  // SPA route changes don't trigger GA4's automatic page_view, so send one
  // manually on every navigation (no-ops until GA4 is loaded post-consent).
  useEffect(() => {
    trackPageview(pathname + search);
  }, [pathname, search]);

  // Normalise: strip trailing slash (except root), then resolve aliases.
  let path = pathname.replace(/\/+$/, "") || "/";
  path = CANONICAL_ALIASES[path] || path;

  const href = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
    </Helmet>
  );
};

export default CanonicalTag;
