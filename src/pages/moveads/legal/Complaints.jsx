import React from 'react';
import MoveAdsLegalLayout from './_MoveAdsLegalLayout';
import { COMPANY, emailHref } from '../../../config/company';

const sections = [
  {
    title: '1. Who can complain',
    body: (
      <p>
        Couriers, restaurant advertisers, and customers can raise a complaint about any part of Descale
        MoveAds &mdash; a campaign, a payment, a cover, a QR offer, or how data was handled.
      </p>
    ),
  },
  {
    title: '2. How to raise a complaint',
    body: (
      <p>
        Send details (your name, your role &mdash; courier, restaurant, or customer &mdash; and what
        happened) via the <a className="text-primary hover:underline" href="/contact">Contact</a> page or to{' '}
        <a className="text-primary hover:underline" href={emailHref}>{COMPANY.email}</a>.
        Include any reference (campaign name, order or voucher reference) if you have one.
      </p>
    ),
  },
  {
    title: '3. What happens next',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>We acknowledge receipt of your complaint.</li>
        <li>We review the complaint against the relevant terms (Courier Programme Terms, Advertiser Campaign Terms, or QR Offer Terms).</li>
        <li>We respond with the outcome and, where applicable, a resolution &mdash; correction, replacement, refund, or another remedy appropriate to the issue.</li>
      </ul>
    ),
  },
  {
    title: '4. Data protection complaints',
    body: (
      <p>
        A complaint about how your personal data was handled is treated under our{' '}
        <a className="text-primary hover:underline" href="/privacy">Privacy Policy</a>. You also have the
        right to lodge a complaint directly with the Polish Data Protection Authority (Prezes Urzędu Ochrony
        Danych Osobowych, UODO), ul. Stawki 2, 00-193 Warszawa, www.uodo.gov.pl.
      </p>
    ),
  },
  {
    title: '5. Out-of-court resolution',
    body: (
      <p>
        Where a complaint cannot be resolved directly, EU consumers may also use the European Commission&rsquo;s
        Online Dispute Resolution platform at ec.europa.eu/consumers/odr.
      </p>
    ),
  },
];

const Complaints = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds Complaint Procedure',
  };

  return (
    <MoveAdsLegalLayout
      title="Complaint Procedure"
      description="How couriers, restaurants, and customers can raise a complaint about Descale MoveAds, and what happens next."
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

export default Complaints;
