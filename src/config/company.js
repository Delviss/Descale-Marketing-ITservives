// Single source of truth for Descale Agency's site origin and legal/contact
// identity. Import from here instead of hardcoding any of these values.
//
// The production site is served on the apex domain. https://www.descale.services
// 301-redirects to it, so canonicals/sitemap/JSON-LD must always point at the
// apex — never at the www host — or they conflict with the redirect.
export const SITE_URL = "https://descale.services";

// Confirmed with the site owner (2026-09-24): Travomate Sp. z o.o. is the
// real legal entity operating descale.services, and info@travomate.com.pl is
// the real contact address. +48 506 762 423 is the single site-wide phone
// number (it previously also appeared as +48 22 295 20 55 on /about only;
// that page has been corrected to match).
export const COMPANY = {
  brandName: "Descale Agency",
  legalName: "Travomate Sp. z o.o.",
  taxId: "7011239205", // NIP (Polish tax ID)
  email: "info@travomate.com.pl",
  phone: {
    display: "+48 506 762 423",
    href: "tel:+48506762423",
  },
  address: {
    streetAddress: "ul. Nowogrodzka 31",
    postalCode: "00-511",
    addressLocality: "Warszawa",
    addressRegion: "Mazowieckie",
    addressCountry: "PL",
  },
  // Real Calendly account (confirmed with owner), not a placeholder.
  calendlyUrl: "https://calendly.com/travomate/30min",
  social: {
    linkedin: "https://www.linkedin.com/company/descale-agency/",
    instagram: "https://www.instagram.com/descale_services",
  },
};

export const emailHref = `mailto:${COMPANY.email}`;

// JSON-LD PostalAddress fragment, ready to spread into any schema.org block.
export const addressJsonLd = {
  "@type": "PostalAddress",
  ...COMPANY.address,
};
