import React from 'react';
import MoveAdsLegalLayout from './_MoveAdsLegalLayout';
import { COMPANY } from '../../../config/company';

const sections = [
  {
    title: '1. Scope',
    body: (
      <p>
        These Advertiser Campaign Terms (&ldquo;Regulamin kampanii&rdquo;) govern a restaurant or business
        (&ldquo;Advertiser&rdquo;) booking a Descale MoveAds courier-bag campaign, operated by {COMPANY.legalName}{' '}
        trading as Descale Agency.
      </p>
    ),
  },
  {
    title: '2. Campaign requests and confirmation',
    body: (
      <p>
        Submitting a campaign request through the{' '}
        <a className="text-primary hover:underline" href="/moveads/restaurants">campaign request form</a> is
        not a booking. A campaign begins only once we confirm a format, zone, duration, and price in writing
        (email is sufficient) and the Advertiser accepts it.
      </p>
    ),
  },
  {
    title: '3. Campaign materials',
    body: (
      <p>
        The Advertiser is responsible for the accuracy and legality of any logo, offer, or campaign asset it
        supplies. Materials must not be misleading, must comply with applicable Polish advertising and
        consumer-protection law, and must not claim affiliation with any delivery platform. We may decline or
        request changes to materials that do not meet food-safety, platform-neutrality, or brand-safety
        requirements described in our{' '}
        <a className="text-primary hover:underline" href="/moveads/legal/courier-terms">Courier Programme Terms</a>.
      </p>
    ),
  },
  {
    title: '4. Pricing and payment',
    body: (
      <p>
        Pricing is quoted per campaign based on duration, zone, and courier volume, and confirmed before the
        campaign starts. Invoices are issued per the agreed terms and payable within the period stated on the
        invoice.
      </p>
    ),
  },
  {
    title: '5. Cancellation',
    body: (
      <p>
        A confirmed campaign may be cancelled or rescheduled by written notice. Cancellation less than 7 days
        before the agreed start date may not be fully refundable where courier assignment has already begun;
        we will confirm any cancellation terms at the time of booking.
      </p>
    ),
  },
  {
    title: '6. Reporting',
    body: (
      <p>
        We report on verifiable outcomes only &mdash; active courier-hours, zones covered, QR scans, voucher
        claims, and redemptions where tracked. We do not fabricate or estimate reach or impressions figures;
        if an estimate is ever provided, the methodology will be explained alongside the number.
      </p>
    ),
  },
  {
    title: '7. No platform affiliation',
    body: (
      <p>
        Descale MoveAds is not affiliated with, endorsed by, or partnered with Wolt, Glovo, Uber Eats, Bolt
        Food, Pyszne.pl, or any other delivery platform, unless a written agreement with that platform states
        otherwise. Campaign materials must not imply such a partnership.
      </p>
    ),
  },
  {
    title: '8. Complaints',
    body: (
      <p>
        For a concern about a campaign&rsquo;s delivery or reporting, see our{' '}
        <a className="text-primary hover:underline" href="/moveads/legal/complaints">Complaint procedure</a>.
      </p>
    ),
  },
];

const CampaignTerms = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds Advertiser Campaign Terms',
  };

  return (
    <MoveAdsLegalLayout
      title="Advertiser Campaign Terms"
      description="Terms for restaurants and businesses booking a Descale MoveAds courier-bag campaign: pricing, cancellation, and reporting."
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

export default CampaignTerms;
