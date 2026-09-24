// Google Analytics 4 — consent-gated loader.
//
// GA4 is loaded ONLY after the visitor grants analytics consent through the
// cookie banner, in line with the EU ePrivacy Directive and the commitments
// in our Cookie Policy. Nothing is sent to Google before consent.
//
// The Measurement ID comes from VITE_GA4_MEASUREMENT_ID so it can differ per
// environment; if unset, analytics is silently disabled.

const GA_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;
export const CONSENT_COOKIE = "cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 12 months (matches Cookie Policy)

let gaLoaded = false;

// --- consent cookie helpers -------------------------------------------------

export function readConsent() {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function writeConsent(value) {
  if (typeof document === "undefined") return;
  document.cookie =
    `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; ` +
    `SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
}

export function hasAnalyticsConsent() {
  return readConsent() === "granted";
}

// --- gtag plumbing ----------------------------------------------------------

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

// Consent Mode v2 — declare a denied-by-default baseline as early as possible
// so any future Google tag respects it until the visitor opts in.
export function initConsentMode() {
  if (typeof window === "undefined" || !GA_ID) return;
  ensureGtagStub();
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
}

function loadGA4Script() {
  if (gaLoaded || !GA_ID) return;
  gaLoaded = true;
  ensureGtagStub();

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    // SPA: we send page_view manually on each route change instead.
    send_page_view: false,
    anonymize_ip: true,
  });
}

// --- public API -------------------------------------------------------------

// Called on app boot: if consent was granted in a previous visit, boot GA4.
export function initAnalytics() {
  if (!GA_ID) return;
  initConsentMode();
  if (hasAnalyticsConsent()) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    loadGA4Script();
  }
}

export function grantAnalyticsConsent() {
  writeConsent("granted");
  if (!GA_ID) return;
  ensureGtagStub();
  window.gtag("consent", "update", { analytics_storage: "granted" });
  loadGA4Script();
  trackPageview(window.location.pathname + window.location.search);
}

export function denyAnalyticsConsent() {
  writeConsent("denied");
}

export function trackPageview(path) {
  if (!GA_ID || !gaLoaded || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

// Generic event push. No-ops until GA4 has actually loaded (i.e. consent was
// granted), same as trackPageview above.
export function trackEvent(name, params = {}) {
  if (!GA_ID || !gaLoaded || !window.gtag) return;
  window.gtag("event", name, params);
}

// CTA phrases the cookie policy / analytics spec calls out for cta_click
// tracking. Matched against a clicked element's own text (not its
// descendants', so a "Get Started" link inside a bigger card doesn't also
// fire for the card's outer wrapper).
const CTA_LABELS = ["get started", "contact", "discuss your project", "join builders"];

function ownText(el) {
  let text = "";
  for (const node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
  }
  return text.trim();
}

// Delegated click tracking for cta_click: fires once per app lifetime,
// listens on the whole document, so every current and future CTA whose
// visible text matches one of CTA_LABELS is tracked with zero per-component
// wiring. Matches on the closest <a>/<button> ancestor's own text (falling
// back to its full textContent for buttons that wrap the label in a span).
let ctaTrackingInitialized = false;
export function initCtaTracking() {
  if (typeof document === "undefined" || ctaTrackingInitialized) return;
  ctaTrackingInitialized = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target.closest?.("a, button");
      if (!target) return;
      const label = (ownText(target) || target.textContent || "").trim();
      const normalized = label.toLowerCase();
      if (!CTA_LABELS.some((candidate) => normalized === candidate || normalized.startsWith(candidate))) return;
      trackEvent("cta_click", {
        cta_label: label,
        page_path: window.location.pathname,
      });
    },
    { capture: true }
  );
}

// Listens for Calendly's postMessage events and fires generate_lead when a
// visitor actually books a slot (event_scheduled), not just opens the widget.
let calendlyLeadTrackingInitialized = false;
export function initCalendlyLeadTracking() {
  if (typeof window === "undefined" || calendlyLeadTrackingInitialized) return;
  calendlyLeadTrackingInitialized = true;

  window.addEventListener("message", (event) => {
    const data = event?.data;
    if (typeof data?.event !== "string" || !data.event.startsWith("calendly.")) return;
    if (data.event === "calendly.event_scheduled") {
      trackEvent("generate_lead", {
        source: "calendly",
        page_path: window.location.pathname,
      });
    }
  });
}
