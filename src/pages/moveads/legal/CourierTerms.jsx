import React from 'react';
import MoveAdsLegalLayout from './_MoveAdsLegalLayout';
import { COMPANY } from '../../../config/company';

const sections = [
  {
    title: '1. Scope',
    body: (
      <p>
        These Courier Programme Terms (&ldquo;Regulamin dla kuriera dla programu Descale MoveAds&rdquo;)
        govern participation in the Descale MoveAds courier programme, operated by {COMPANY.legalName}{' '}
        trading as Descale Agency. They apply in addition to, and do not replace, your existing agreements
        with any delivery platform, fleet operator, or employer.
      </p>
    ),
  },
  {
    title: '2. Opt-in participation',
    body: (
      <p>
        Participation is entirely voluntary. Applying does not guarantee acceptance, and acceptance of one
        campaign does not obligate you to accept another. You may decline any individual campaign offered to
        you, and you may withdraw from the programme at any time (see &sect;8).
      </p>
    ),
  },
  {
    title: '3. Equipment and campaign materials',
    body: (
      <>
        <p>
          Campaign covers must be compatible with your existing delivery bag and must not compromise thermal
          insulation, food safety, structural integrity, or your ability to operate safely. We assess bag
          compatibility before assigning any campaign.
        </p>
        <p>
          You must not use a campaign cover in a way that conflicts with your delivery platform&rsquo;s,
          fleet operator&rsquo;s, or employer&rsquo;s equipment policies. If your bag is platform-branded, a
          campaign cover may only be used where your platform, fleet operator, and bag owner permit it.
          Descale MoveAds does not authorise modifications to third-party equipment or use of third-party
          platform branding.
        </p>
        <p>
          If a campaign cover is ever damaged, defective, or in your judgement compromises food safety, you
          have the right to refuse or remove it and must notify us as soon as reasonably possible.
        </p>
      </>
    ),
  },
  {
    title: '4. Payment',
    body: (
      <p>
        You will see the specific payment terms for a campaign &mdash; which may include a fixed amount for
        completed verified shifts, a campaign-completion bonus, or both &mdash; before you accept it. We do
        not require you to sell products, collect payments from customers, or guarantee a number of QR scans.
        Payment is made to the bank account or payment method you provide, subject to verification of
        completed, eligible shifts.
      </p>
    ),
  },
  {
    title: '5. Your responsibilities',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Follow your delivery platform&rsquo;s, fleet operator&rsquo;s, and employer&rsquo;s applicable policies at all times.</li>
        <li>Carry the campaign cover only during the agreed shifts and zones.</li>
        <li>Report damage, loss, or theft of a cover promptly.</li>
        <li>Keep the information on your application current (contact details, city, availability).</li>
        <li>Not represent Descale MoveAds as affiliated with any delivery platform.</li>
      </ul>
    ),
  },
  {
    title: '6. Data we collect for the programme',
    body: (
      <p>
        We collect the information provided on your application (contact details, city, working zones, bag
        details, availability) and, once accepted, shift-verification and payment data needed to run the
        programme. Communication about campaigns takes place by email, WhatsApp, or Telegram at the contact
        details you provide, only where you have separately opted in (see the application form). This is
        processed as described in our general <a className="text-primary hover:underline" href="/privacy">Privacy Policy</a>, which continues to apply alongside these terms.
      </p>
    ),
  },
  {
    title: '7. Liability',
    body: (
      <p>
        Descale MoveAds equipment and instructions are provided in addition to, not instead of, your delivery
        platform&rsquo;s or employer&rsquo;s safety rules. You remain responsible for complying with those
        rules at all times. We are not liable for consequences arising from a failure to follow your
        platform&rsquo;s or employer&rsquo;s own policies.
      </p>
    ),
  },
  {
    title: '8. Withdrawal',
    body: (
      <p>
        You may leave the programme at any time by notifying us through the contact details on the{' '}
        <a className="text-primary hover:underline" href="/contact">Contact</a> page. Withdrawal takes effect
        once any active, accepted campaign is wound down and any campaign materials are returned or disposed
        of as instructed.
      </p>
    ),
  },
  {
    title: '9. Complaints',
    body: (
      <p>
        If you have a concern about a campaign, payment, or a cover, see our{' '}
        <a className="text-primary hover:underline" href="/moveads/legal/complaints">Complaint procedure</a>.
      </p>
    ),
  },
];

const CourierTerms = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds Courier Programme Terms',
  };

  return (
    <MoveAdsLegalLayout
      title="Courier Programme Terms"
      description="Participation terms for the Descale MoveAds courier programme: opt-in nature, equipment requirements, payment terms, and how to withdraw."
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

export default CourierTerms;
