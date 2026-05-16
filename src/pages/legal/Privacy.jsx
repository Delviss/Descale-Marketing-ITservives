import React from 'react';
import LegalLayout from './_LegalLayout';

const sections = [
  {
    title: '1. Who we are',
    body: (
      <>
        <p>
          Descale Agency is a brand and trading name operated by <strong>Travomate Sp. z o.o.</strong>,
          a limited liability company registered in Poland at ul. Nowogrodzka 31, 00-511 Warszawa,
          NIP 7011239205 (the &ldquo;Controller&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p>
          This Privacy Policy explains how we collect, use, share and protect your personal data when you
          visit our websites, contact us, or engage our marketing and IT services. We act as a data controller
          within the meaning of Article 4(7) of the EU General Data Protection Regulation 2016/679 (&ldquo;GDPR&rdquo;)
          and the Polish Personal Data Protection Act of 10 May 2018 (Ustawa o ochronie danych osobowych).
        </p>
      </>
    ),
  },
  {
    title: '2. What data we collect',
    body: (
      <>
        <p>We process the following categories of personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identification &amp; contact data</strong>: name, business email, phone number, company name, role.</li>
          <li><strong>Engagement data</strong>: messages you send through forms, calendar bookings, project briefs, and call recordings (with consent).</li>
          <li><strong>Technical data</strong>: IP address, device, browser, operating system, referrer, pages viewed, time on page, and similar telemetry collected via cookies and analytics.</li>
          <li><strong>Marketing data</strong>: newsletter subscriptions, event registrations, communication preferences.</li>
          <li><strong>Contractual &amp; billing data</strong>: invoicing details, VAT IDs, bank or payment information when you become a client.</li>
        </ul>
        <p>We do not knowingly collect special categories of personal data (Art. 9 GDPR) or data of children under 16.</p>
      </>
    ),
  },
  {
    title: '3. Why we process your data (legal bases)',
    body: (
      <>
        <p>We rely on the following legal bases under Article 6 GDPR:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Consent (Art. 6(1)(a))</strong>: for non-essential cookies, marketing emails, and call recordings.</li>
          <li><strong>Contract performance (Art. 6(1)(b))</strong>: to respond to enquiries, deliver services, and invoice clients.</li>
          <li><strong>Legal obligation (Art. 6(1)(c))</strong>: to comply with Polish accounting, tax (Ustawa o rachunkowości) and AML obligations.</li>
          <li><strong>Legitimate interest (Art. 6(1)(f))</strong>: to operate, secure and improve our website, prevent fraud, and pursue lawful business interests, having balanced these against your rights.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. How long we keep it',
    body: (
      <>
        <p>Retention periods are limited to what is necessary for the purpose:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact form submissions and pre-sales correspondence: up to <strong>24 months</strong> after last contact.</li>
          <li>Client contracts and project deliverables: <strong>10 years</strong> from end of engagement (Polish accounting and statute-of-limitations requirements).</li>
          <li>Accounting and invoicing records: <strong>5 full calendar years</strong> from end of fiscal year (Art. 86 of the Polish Tax Ordinance / Ordynacja podatkowa).</li>
          <li>Marketing data: until you withdraw consent or object.</li>
          <li>Server logs and analytics: typically <strong>14 months</strong> in pseudonymised form.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Who we share data with',
    body: (
      <>
        <p>We share personal data only with carefully selected processors and recipients:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Hosting &amp; infrastructure</strong>: Amazon Web Services (EU regions), Cloudflare, Vercel, Google Cloud.</li>
          <li><strong>Productivity &amp; communication</strong>: Google Workspace, Slack, Notion, Linear, Calendly.</li>
          <li><strong>Analytics &amp; product</strong>: Google Analytics 4, Plausible, PostHog (with IP anonymisation).</li>
          <li><strong>Email &amp; CRM</strong>: HubSpot, Resend, Postmark.</li>
          <li><strong>Payments &amp; accounting</strong>: Stripe, our certified Polish accounting office, banks.</li>
          <li><strong>Legal &amp; advisors</strong>: lawyers, auditors, tax advisors bound by professional secrecy.</li>
          <li><strong>Public authorities</strong>: when legally required (e.g. tax office, court order).</li>
        </ul>
        <p>
          Where a recipient is located outside the European Economic Area, transfers are protected by
          Standard Contractual Clauses (SCCs) approved by the European Commission, supplementary technical
          measures, and where applicable an adequacy decision.
        </p>
      </>
    ),
  },
  {
    title: '6. Your rights under GDPR',
    body: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your data (Art. 15) and receive a copy.</li>
          <li>Rectify inaccurate or incomplete data (Art. 16).</li>
          <li>Erasure / be forgotten (Art. 17), where applicable.</li>
          <li>Restrict processing (Art. 18).</li>
          <li>Data portability (Art. 20), receive your data in a structured, machine-readable format.</li>
          <li>Object to processing based on legitimate interest, including profiling and direct marketing (Art. 21).</li>
          <li>Withdraw consent at any time without affecting prior lawful processing (Art. 7(3)).</li>
          <li>Lodge a complaint with the Polish Data Protection Authority, <strong>Prezes Urzędu Ochrony Danych Osobowych (UODO)</strong>, ul. Stawki 2, 00-193 Warszawa, www.uodo.gov.pl.</li>
        </ul>
        <p>To exercise any right, write to <a className="text-primary hover:underline" href="mailto:Info@travomate.com.pl">Info@travomate.com.pl</a>. We respond within one month (Art. 12(3) GDPR).</p>
      </>
    ),
  },
  {
    title: '7. Security',
    body: (
      <p>
        We implement appropriate technical and organisational measures (Art. 32 GDPR) including encryption
        in transit (TLS 1.2+) and at rest, role-based access controls, hardened cloud configuration,
        background checks on staff, signed Data Processing Agreements with all sub-processors, regular
        penetration tests, and an incident response procedure aligned with the 72-hour breach notification
        requirement (Art. 33).
      </p>
    ),
  },
  {
    title: '8. International transfers',
    body: (
      <p>
        Some of our processors are based in the United States or the United Kingdom. Where the European
        Commission has issued an adequacy decision (e.g. UK, EU-US Data Privacy Framework), transfers rely
        on that decision. In all other cases, transfers are governed by the 2021 EU Standard Contractual
        Clauses with supplementary measures (encryption, pseudonymisation, transfer impact assessments).
      </p>
    ),
  },
  {
    title: '9. Cookies and similar technologies',
    body: (
      <p>
        Our use of cookies is described in our <a className="text-primary hover:underline" href="/cookies">Cookie Policy</a>.
        Non-essential cookies are loaded only after you provide consent through the cookie banner, in line
        with Article 173 of the Polish Telecommunications Law (Prawo telekomunicacyjne) and the EU ePrivacy
        Directive 2002/58/EC.
      </p>
    ),
  },
  {
    title: '10. Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy to reflect changes in law or our practices. The effective date at
        the top of this page indicates when it was last revised. Material changes will be communicated by
        email or prominent website notice.
      </p>
    ),
  },
];

const Privacy = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: 'Privacy Policy',
    publisher: {
      '@type': 'Organization',
      name: 'Travomate Sp. z o.o.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Nowogrodzka 31',
        postalCode: '00-511',
        addressLocality: 'Warsaw',
        addressCountry: 'PL',
      },
      email: 'Info@travomate.com.pl',
      telephone: '+48 506 762 423',
    },
  };

  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Descale Agency (Travomate Sp. z o.o.) collects, uses and protects your personal data, under the EU GDPR and Polish law."
      lastUpdated="10 May 2026"
      jsonLd={jsonLd}
    >
      {sections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">{s.title}</h2>
          <div className="space-y-4">{s.body}</div>
        </section>
      ))}
    </LegalLayout>
  );
};

export default Privacy;
