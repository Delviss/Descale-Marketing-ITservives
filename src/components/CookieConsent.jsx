import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  readConsent,
  grantAnalyticsConsent,
  denyAnalyticsConsent,
} from "utils/analytics";

// Custom event other components (e.g. the footer "Cookie Preferences" link)
// dispatch to re-open the banner after an initial choice.
export const OPEN_PREFERENCES_EVENT = "open-cookie-preferences";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show on first visit (no choice stored yet).
    if (readConsent() === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  if (!open) return null;

  const accept = () => {
    grantAnalyticsConsent();
    setOpen(false);
  };

  const decline = () => {
    denyAnalyticsConsent();
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0B0B0F]/95 backdrop-blur-md p-5 sm:p-6 shadow-2xl text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80 leading-relaxed">
            We use strictly necessary cookies to run this site, and{" "}
            analytics cookies (Google Analytics 4) only if you agree. See our{" "}
            <Link to="/cookies" className="underline hover:text-accent">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={decline}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
