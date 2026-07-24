import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

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
