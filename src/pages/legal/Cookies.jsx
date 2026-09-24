import React from 'react';
import LegalLayout from './_LegalLayout';
import { COMPANY } from '../../config/company';

// This table lists only what the site actually sets. It previously also
// listed Plausible, PostHog, Meta, Google Ads and LinkedIn cookies that were
// never implemented anywhere in the codebase — a cookie policy describing
// trackers that don't exist is itself a transparency problem, not just an
// inconsistency with the (also-fixed) consent banner. If any of these are
// added for real, add a row here (and a matching banner category) at the
// same time so the two can't drift apart again.
// TODO(owner): if/when GTM, PostHog, Meta Pixel, Google Ads or LinkedIn
// Insight Tag are actually added, add their real cookies here.
const cookieTable = [
  { name: 'session_id', type: 'Strictly necessary', purpose: 'Maintains your session across pages.', duration: 'Session', provider: COMPANY.legalName },
  { name: 'cookie_consent', type: 'Strictly necessary', purpose: 'Stores your cookie preferences.', duration: '12 months', provider: COMPANY.legalName },
  { name: '_ga, _ga_*', type: 'Analytics', purpose: 'Google Analytics 4, anonymised usage statistics. Loaded only after you accept analytics cookies below.', duration: '14 months', provider: 'Google LLC' },
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
        173(3) of the Polish Telecommunications Act. Analytics cookies are loaded only after you give
        explicit, informed consent through our cookie banner, in line with the EU ePrivacy Directive
        2002/58/EC. You can withdraw consent at any time by clicking &ldquo;Cookie Preferences&rdquo; in the
        footer.
      </p>
    ),
  },
  {
    title: '3. Cookie categories we use',
    body: (
      <>
        <p>
          We use two categories of cookies. The strictly necessary category is always active; analytics
          requires your consent.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Strictly necessary</strong>: required to operate the website (session, security, consent storage).</li>
          <li><strong>Analytics</strong>: anonymous, aggregated usage statistics (Google Analytics 4 with IP anonymisation).</li>
        </ul>
        <p>
          We don&rsquo;t currently use product-analytics or marketing/remarketing cookies (PostHog, Meta,
          Google Ads, LinkedIn Insight Tag, etc.). If that changes, this page and the cookie banner will be
          updated together before any such cookie is set.
        </p>
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
        Google (our analytics cookie provider) transfers data to the United States. This transfer is
        protected by the EU-US Data Privacy Framework adequacy decision and the 2021 EU Standard Contractual
        Clauses, with supplementary technical measures. See our
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
      description={`How Descale Agency (${COMPANY.legalName}) uses cookies and similar technologies under EU ePrivacy Directive and Polish Telecommunications Law.`}
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
