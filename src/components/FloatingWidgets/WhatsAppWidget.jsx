import { useEffect, useState } from "react";

const PHONE_DISPLAY = "+48 506 762 423";
const PHONE_E164 = "48506762423";
const PREFILLED = "Hi Descale team, I'd like to know more about your services.";
const WA_LINK = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(PREFILLED)}`;

// Remembers that the greeting bubble has already popped up so it only
// auto-appears once per visitor (persisted across sessions).
const POPUP_SEEN_KEY = "descale_wa_popup_seen";

const WhatsAppIcon = ({ size = 30, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Floating WhatsApp CTA pinned to the bottom-left of every page. A greeting
// bubble pops up automatically once per visitor; after that only the button
// stays. Clicking either opens a WhatsApp chat with the sales number.
const WhatsAppWidget = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let seen = false;
    try {
      seen = window.localStorage.getItem(POPUP_SEEN_KEY) === "1";
    } catch (_) {
      // localStorage may be unavailable (private mode) — fail open, no popup.
      seen = true;
    }
    if (seen) return;

    const timer = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const markSeen = () => {
    try {
      window.localStorage.setItem(POPUP_SEEN_KEY, "1");
    } catch (_) {
      /* ignore */
    }
  };

  const dismissPopup = () => {
    setShowPopup(false);
    markSeen();
  };

  return (
    <div className="fixed bottom-5 left-5 z-[9998] flex flex-col items-start gap-3 print:hidden">
      {showPopup && (
        <div
          role="dialog"
          aria-label="WhatsApp chat"
          className="relative w-64 rounded-xl border border-border bg-surface p-4 pr-8 shadow-brand-strong animate-scale-in"
        >
          <button
            type="button"
            onClick={dismissPopup}
            aria-label="Dismiss"
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-border/60 hover:text-text-primary"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <p className="text-brand-sm font-semibold text-text-primary">
            👋 Need a hand?
          </p>
          <p className="mt-1 text-brand-sm text-text-secondary">
            Message us on WhatsApp — we usually reply within minutes.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={markSeen}
            className="mt-3 inline-flex items-center gap-2 text-brand-sm font-semibold text-[#25D366] hover:underline"
          >
            <WhatsAppIcon size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={markSeen}
        aria-label={`Chat with us on WhatsApp at ${PHONE_DISPLAY}`}
        title="Write us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand-strong transition-transform duration-brand-fast ease-brand hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
