import CalendlyBadge from "./CalendlyBadge";
import WhatsAppWidget from "./WhatsAppWidget";

// Global floating CTAs shown on every page:
//  - Calendly "Schedule time with me" badge (bottom-right)
//  - WhatsApp chat button with a one-time greeting bubble (bottom-left)
const FloatingWidgets = () => (
  <>
    <WhatsAppWidget />
    <CalendlyBadge />
  </>
);

export default FloatingWidgets;
