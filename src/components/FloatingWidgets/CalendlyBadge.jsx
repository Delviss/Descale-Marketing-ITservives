import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/travomate/30min";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

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
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Stylesheet — required for the popup modal to render correctly.
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    // Script — powers the in-page popup. If it never loads, the anchor's href
    // still takes the visitor straight to Calendly.
    if (!document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_JS;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleClick = (e) => {
    // Prefer the branded in-page popup when the widget is available;
    // otherwise let the default anchor navigation to CALENDLY_URL happen.
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
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
