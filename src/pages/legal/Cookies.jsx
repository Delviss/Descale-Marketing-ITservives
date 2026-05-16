import React from 'react';
import LegalLayout from './_LegalLayout';

const cookieTable = [
  { name: 'session_id', type: 'Strictly necessary', purpose: 'Maintains your session across pages.', duration: 'Session', provider: 'Travomate Sp. z o.o.' },
  { name: 'cookie_consent', type: 'Strictly necessary', purpose: 'Stores your cookie preferences.', duration: '12 months', provider: 'Travomate Sp. z o.o.' },
  { name: '_ga, _ga_*', type: 'Analytics', purpose: 'Google Analytics 4, anonymised usage statistics.', duration: '14 months', provider: 'Google LLC' },
  { name: 'plausible_*', type: 'Analytics', purpose: 'Privacy-friendly aggregated analytics.', duration: '24 hours', provider: 'Plausible Insights' },
  { name: 'ph_*', type: 'Product analytics', purpose: 'PostHog, product usage and funnel measurement.', duration: '12 months', provider: 'PostHog Inc.' },
  { name: '_fbp, _fbc', type: 'Marketing', purpose: 'Meta (Facebook) ad attribution.', duration: '90 days', provider: 'Meta Platforms Ireland Ltd' },
  { name: '_gcl_au', type: 'Marketing', purpose: 'Google Ads conversion linker.', duration: '90 days', provider: 'Google LLC' },
  { name: 'li_at, lidc, bcookie', type: 'Marketing', purpose: 'LinkedIn Insight Tag for B2B campaign measurement.', duration: 'Up to 12 months', provider: 'LinkedIn Ireland' },
];

const sections = [
  {
    title: '1. What cookies are',
    body: (
      <p>
        Cookies are small text files placed on your device when you visit a website. They allow a site to
        recognise your device, store preferences, and measure usage. We also use similar technologies such
        as local storage, pixels, and SDKs, referred to collectively as &ldquo;cookies&rdquo; in this Policy.
      </p>
    ),
  },
  {
    title: '2. Legal basis',
    body: (
      <p>
        Strictly necessary cookies are loaded under our legitimate interest (Art. 6(1)(f) GDPR) and Article
        173(3) of the Polish Telecommunications Act. All other cookies, analytics, product, marketing -
        are loaded only after you give explicit, informed consent through our cookie banner, in line with
        the EU ePrivacy Directive 2002/58/EC and the IAB Europe TCF v2.2 standard. You can withdraw consent
        at any time by clicking &ldquo;Cookie Preferences&rdquo; in the footer.
      </p>
    ),
  },
  {
    title: '3. Cookie categories we use',
    body: (
      <>
        <p>
          We use four categories of cookies. The strictly necessary category is always active; all others
          require your consent.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Strictly necessary</strong>: required to operate the website (session, security, consent storage).</li>
          <li><strong>Analytics</strong>: anonymous, aggregated usage statistics (Google Analytics 4 with IP anonymisation, Plausible).</li>
          <li><strong>Product</strong>: funnel and feature usage (PostHog) used to improve the product.</li>
          <li><strong>Marketing</strong>: attribution and remarketing (Meta, Google Ads, LinkedIn).</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Cookies in detail',
    body: (
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left font-semibold px-4 py-3">Cookie</th>
              <th className="text-left font-semibold px-4 py-3">Type</th>
              <th className="text-left font-semibold px-4 py-3">Purpose</th>
              <th className="text-left font-semibold px-4 py-3">Duration</th>
              <th className="text-left font-semibold px-4 py-3">Provider</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {cookieTable.map((c) => (
              <tr key={c.name}>
                <td className="px-4 py-3 font-mono text-xs">{c.name}</td>
                <td className="px-4 py-3">{c.type}</td>
                <td className="px-4 py-3">{c.purpose}</td>
                <td className="px-4 py-3">{c.duration}</td>
                <td className="px-4 py-3">{c.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: '5. Managing your preferences',
    body: (
      <>
        <p>You can manage cookies in three ways:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Click &ldquo;Cookie Preferences&rdquo; at the bottom of any page to update your consent.</li>
          <li>Configure your browser to block or delete cookies (see help pages for Chrome, Safari, Firefox, Edge).</li>
          <li>Opt out of Google Analytics via the official browser add-on at <a className="text-primary hover:underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.</li>
        </ul>
        <p>Disabling strictly necessary cookies will degrade core website functionality.</p>
      </>
    ),
  },
  {
    title: '6. International transfers',
    body: (
      <p>
        Some cookie providers (Google, Meta, PostHog, LinkedIn) transfer data to the United States. These
        transfers are protected by the EU-US Data Privacy Framework adequacy decision and the 2021 EU
        Standard Contractual Clauses, with supplementary technical measures. See our
        <a className="text-primary hover:underline" href="/privacy"> Privacy Policy</a> for details.
      </p>
    ),
  },
  {
    title: '7. Changes',
    body: (
      <p>
        We update this Policy as we add or remove tools. The effective date at the top of this page reflects
        the latest revision.
      </p>
    ),
  },
];

const Cookies = () => {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="How Descale Agency (Travomate Sp. z o.o.) uses cookies and similar technologies under EU ePrivacy Directive and Polish Telecommunications Law."
      lastUpdated="10 May 2026"
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

export default Cookies;
