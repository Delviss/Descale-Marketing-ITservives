import React from 'react';
import MoveAdsLegalLayout from './_MoveAdsLegalLayout';

const sections = [
  {
    title: '1. What these terms cover',
    body: (
      <p>
        These QR Offer Terms (&ldquo;Regulamin promocji&rdquo;) govern offers customers unlock by scanning a
        QR code shown on a Descale MoveAds campaign cover. They sit alongside the specific offer terms shown
        at the QR destination page.
      </p>
    ),
  },
  {
    title: '2. Eligibility and redemption',
    body: (
      <p>
        Each offer states its own validity period, redemption method (in-restaurant, online, or via a linked
        ordering platform), and any limits (one per customer, minimum order value, excluded items). Offers
        are void where prohibited and may be withdrawn or changed by the participating restaurant with
        reasonable notice on the offer page.
      </p>
    ),
  },
  {
    title: '3. Data collected at the QR destination',
    body: (
      <>
        <p>
          If a QR destination uses analytics, a retargeting pixel, email capture, WhatsApp marketing, or
          voucher registration, that is disclosed clearly on the landing page itself before any data is
          collected &mdash; not buried in these terms. Where a choice (such as a cookie or marketing consent)
          is required, it is shown on the page, separate from the redemption flow.
        </p>
        <p>
          Scan-level analytics (time, approximate location, device type) may be collected to measure campaign
          performance for the advertiser, in line with our{' '}
          <a className="text-primary hover:underline" href="/privacy">Privacy Policy</a> and{' '}
          <a className="text-primary hover:underline" href="/cookies">Cookie Policy</a>.
        </p>
      </>
    ),
  },
  {
    title: '4. No purchase necessary to scan',
    body: (
      <p>
        Scanning the code and viewing the offer never requires a purchase. Redeeming a specific offer may
        require an order or in-store visit as stated on the offer page.
      </p>
    ),
  },
  {
    title: '5. Fraud and abuse',
    body: (
      <p>
        Offers may not be resold, automated, or claimed through bulk or fraudulent scans. We and participating
        restaurants reserve the right to decline redemption where abuse is reasonably suspected.
      </p>
    ),
  },
  {
    title: '6. Complaints',
    body: (
      <p>
        If an offer did not work as described, use our{' '}
        <a className="text-primary hover:underline" href="/moveads/legal/complaints">Complaint procedure</a>.
      </p>
    ),
  },
];

const QrOfferTerms = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds QR Offer Terms',
  };

  return (
    <MoveAdsLegalLayout
      title="QR Offer Terms"
      description="Redemption rules for the customer-facing QR offers linked from Descale MoveAds campaign covers."
      lastUpdated="24 September 2026"
      jsonLd={jsonLd}
    >
      {sections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">{s.title}</h2>
          <div className="space-y-4">{s.body}</div>
        </section>
      ))}
    </MoveAdsLegalLayout>
  );
};

export default QrOfferTerms;
