import CalendlyBadge from "./CalendlyBadge";
import WhatsAppWidget from "./WhatsAppWidget";
import CookieConsent from "../CookieConsent";

// Global floating CTAs shown on every page:
//  - Calendly "Schedule time with me" badge (bottom-right)
//  - WhatsApp chat button with a one-time greeting bubble (bottom-left)
//  - Cookie consent banner (bottom, first visit / on request)
const FloatingWidgets = () => (
  <>
    <WhatsAppWidget />
    <CalendlyBadge />
    <CookieConsent />
  </>
);

export default FloatingWidgets;
