import { useEffect } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

// Matches the brand-supplied badge snippet. The Calendly badge widget
// pins itself to the bottom-right of the viewport on every page.
const BADGE_OPTIONS = {
  url: "https://calendly.com/travomate/30min",
  text: "Schedule time with me",
  color: "#913d1b",
  textColor: "#ffffff",
  branding: true,
};

// Loads the official Calendly badge widget once (CSS + JS) and initialises
// the "Schedule time with me" CTA. Guarded so it never double-injects across
// route changes or fast refresh.
const CalendlyBadge = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__descaleCalendlyBadgeInit) return;

    const initBadge = () => {
      if (window.__descaleCalendlyBadgeInit) return;
      if (!window.Calendly || typeof window.Calendly.initBadgeWidget !== "function") return;
      window.Calendly.initBadgeWidget(BADGE_OPTIONS);
      window.__descaleCalendlyBadgeInit = true;
    };

    // Stylesheet — inject only if not already present.
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    // Script — reuse an existing tag if the widget was loaded elsewhere.
    const existing = document.querySelector(`script[src="${CALENDLY_JS}"]`);
    if (existing) {
      if (window.Calendly) initBadge();
      else existing.addEventListener("load", initBadge, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.addEventListener("load", initBadge, { once: true });
    document.body.appendChild(script);
  }, []);

  return null;
};

export default CalendlyBadge;
