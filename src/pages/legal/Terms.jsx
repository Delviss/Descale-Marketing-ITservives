import React from 'react';
import LegalLayout from './_LegalLayout';

const sections = [
  {
    title: '1. Provider',
    body: (
      <p>
        These Terms govern access to and use of the Descale Agency website and services. The provider is
        <strong> Travomate Sp. z o.o.</strong>, a limited liability company registered in Poland, with its
        registered office at ul. Nowogrodzka 31, 00-511 Warszawa, NIP 7011239205 (the &ldquo;Provider&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). Contact: <a className="text-primary hover:underline" href="mailto:Info@travomate.com.pl">Info@travomate.com.pl</a>,
        +48 506 762 423.
      </p>
    ),
  },
  {
    title: '2. Acceptance of terms',
    body: (
      <p>
        By accessing this website or engaging our services you accept these Terms in full. If you do not
        accept them, do not use the website. These Terms are governed by the laws of the Republic of Poland
        and applicable EU regulations, in particular Regulation (EU) 2016/679 (GDPR), Regulation (EU)
        2022/2065 (Digital Services Act) and Directive 2000/31/EC on electronic commerce as implemented by
        the Polish Act on Provision of Services by Electronic Means (Ustawa o świadczeniu usług drogą
        elektroniczną of 18 July 2002).
      </p>
    ),
  },
  {
    title: '3. Services',
    body: (
      <>
        <p>We provide marketing and IT services including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Brand strategy, performance marketing, creative content production, social media, analytics.</li>
          <li>Software platforms, web and mobile application development.</li>
          <li>Product design, design systems, and brand-in-product UX.</li>
          <li>Marketing and e-commerce websites, headless CMS implementations.</li>
          <li>Interactive taxi-ad campaigns and out-of-home media production.</li>
        </ul>
        <p>
          The website itself is provided as informational and lead-generation content. The exact scope, fees,
          deliverables and timeline of any engagement are governed by a separate written agreement (Statement
          of Work or Master Services Agreement) signed by both parties.
        </p>
      </>
    ),
  },
  {
    title: '4. Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the website in violation of any applicable Polish, EU or international law.</li>
          <li>Attempt to gain unauthorised access, scrape, reverse engineer, or interfere with the service.</li>
          <li>Upload malicious code, conduct denial-of-service attacks, or probe for vulnerabilities without authorisation.</li>
          <li>Use the website to send spam or unsolicited commercial communications.</li>
          <li>Submit false, misleading or unlawful content through forms.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Intellectual property',
    body: (
      <p>
        All content on the website — including text, graphics, logos, the &ldquo;Descale&rdquo; mark, source
        code, layouts and motion design — is owned by or licensed to Travomate Sp. z o.o. and is protected
        by Polish and international copyright law (Ustawa o prawie autorskim i prawach pokrewnych of 4
        February 1994), trademark law, and the EU Copyright Directive (EU) 2019/790. You may view and share
        content for personal, non-commercial purposes with attribution. Any other use requires our prior
        written consent.
      </p>
    ),
  },
  {
    title: '6. User-submitted content',
    body: (
      <p>
        By submitting content (briefs, messages, feedback) through our website you grant us a non-exclusive,
        worldwide, royalty-free licence to use that content for the purpose of responding to your enquiry
        and delivering services. You confirm you have the right to share that content and that it does not
        infringe third-party rights.
      </p>
    ),
  },
  {
    title: '7. Consumer rights (B2C)',
    body: (
      <>
        <p>
          If you are a consumer within the meaning of Article 22<sup>1</sup> of the Polish Civil Code (Kodeks cywilny),
          you have the following statutory rights:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to withdraw from a distance contract within 14 days without giving any reason, under the Polish Consumer Rights Act of 30 May 2014 (Ustawa o prawach konsumenta) and EU Directive 2011/83/EU.</li>
          <li>Statutory warranty (rękojmia) for non-conformity of services with the contract under Articles 556–576 of the Polish Civil Code.</li>
          <li>The right to use out-of-court dispute resolution via the EU Online Dispute Resolution platform at <a className="text-primary hover:underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</li>
        </ul>
        <p>
          Most engagements are with business clients (B2B), in which case Polish Civil Code provisions on
          contracts between entrepreneurs apply, including Article 558 §1 (statutory warranty exclusions).
        </p>
      </>
    ),
  },
  {
    title: '8. Liability',
    body: (
      <p>
        To the maximum extent permitted by law, our aggregate liability arising out of or in connection
        with the use of the website or services is limited to the amount paid by you to us in the twelve
        months preceding the claim. We do not exclude liability for death, personal injury caused by
        negligence, fraud, fraudulent misrepresentation, or any liability that cannot be excluded under
        Polish or EU law (in particular Article 473 §2 of the Polish Civil Code).
      </p>
    ),
  },
  {
    title: '9. Out-of-court dispute resolution',
    body: (
      <p>
        Disputes will be resolved primarily through good-faith negotiation. Consumers may use the European
        Commission's Online Dispute Resolution platform. Any dispute not resolved through negotiation will
        be subject to the exclusive jurisdiction of the competent court in Warsaw, Poland — except for
        consumer disputes, which follow Polish jurisdictional rules in favour of the consumer.
      </p>
    ),
  },
  {
    title: '10. Changes',
    body: (
      <p>
        We may update these Terms to reflect changes in law or our services. Material changes are
        communicated via email or a website notice. Continued use of the website after a change constitutes
        acceptance.
      </p>
    ),
  },
  {
    title: '11. Governing law and jurisdiction',
    body: (
      <p>
        These Terms are governed by the laws of the Republic of Poland. The competent court for any dispute
        arising out of or in connection with these Terms is the court competent for the registered office of
        the Provider, save for mandatory consumer protection rules.
      </p>
    ),
  },
];

const Terms = () => {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The terms governing the use of the Descale Agency website and services, operated by Travomate Sp. z o.o. under Polish and EU law."
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

export default Terms;
