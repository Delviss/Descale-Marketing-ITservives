import { useMemo, useRef } from "react";
import { COMPANY } from "config/company";

const CALENDLY_URL = COMPANY.calendlyUrl;
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

let calendlyAssetsPromise = null;

// Loads the Calendly stylesheet + script on demand instead of on every page
// load. Called from hover/focus/touch intent on the badge (so it's ready by
// the time the visitor actually clicks) and, as a fallback, from the click
// handler itself for visitors who tap without a preceding hover/focus.
function ensureCalendlyAssets() {
  if (typeof window === "undefined") return Promise.resolve();
  if (calendlyAssetsPromise) return calendlyAssetsPromise;

  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);
  }

  calendlyAssetsPromise = new Promise((resolve) => {
    if (document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve(); // fall back to the plain <a href> navigation
    document.body.appendChild(script);
  });
  return calendlyAssetsPromise;
}

// Custom, fully controllable "Book a free consultation" CTA pinned to the
// bottom-right of every page. It replaces Calendly's native badge widget so
// clickability and z-index are guaranteed regardless of the host page.
//
// Behaviour:
//  - It is a real <a href> to the Calendly URL, so it ALWAYS navigates to the
//    booking page even if the Calendly script fails to load.
//  - When Calendly's script has loaded, the click instead opens the branded
//    in-page popup (nicer UX) via initPopupWidget.
const CalendlyBadge = () => {
  const loadedRef = useRef(false);

  // Pre-fills the booking form with whatever utm_source/utm_campaign (etc.)
  // the visitor arrived with, so Calendly bookings can still be attributed.
  const prefilledUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_URL;
    const params = new URLSearchParams(window.location.search);
    const passthrough = new URLSearchParams();
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const value = params.get(key);
      if (value) passthrough.set(key, value);
    }
    const query = passthrough.toString();
    return query ? `${CALENDLY_URL}?${query}` : CALENDLY_URL;
  }, []);

  const startLoading = () => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    ensureCalendlyAssets();
  };

  const handleClick = (e) => {
    startLoading();
    // Prefer the branded in-page popup when the widget is already loaded;
    // otherwise let the default anchor navigation to CALENDLY_URL happen
    // (loading was just kicked off above for next time / a fast connection).
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: prefilledUrl });
    }
  };

  return (
    <a
      href={prefilledUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={startLoading}
      onFocus={startLoading}
      onTouchStart={startLoading}
      aria-label="Book a free consultation on Calendly"
      className="fixed bottom-5 right-5 z-[9998] flex flex-col items-center gap-0.5 rounded-full px-6 py-3 text-center text-white shadow-brand-strong transition-transform duration-brand-fast ease-brand hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#913d1b]/40 print:hidden"
      style={{ backgroundColor: "#913d1b" }}
    >
      <span className="text-brand-sm font-bold uppercase tracking-wide leading-none">
        Book a Free Consultation
      </span>
      <span className="text-[10px] font-medium leading-none opacity-80">
        powered by Calendly
      </span>
    </a>
  );
};

export default CalendlyBadge;
