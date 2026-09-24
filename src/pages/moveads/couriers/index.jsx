import React, { useRef, useCallback } from 'react';
import ITPageLayout from '../../it/_shared/ITPageLayout';
import FaqSection from '../../it/_shared/FaqSection';
import CourierHero from './components/CourierHero';
import WhoCanApply from './components/WhoCanApply';
import PaymentSection from './components/PaymentSection';
import CourierApplicationForm from './components/CourierApplicationForm';
import TrustSafetyBlock from '../components/TrustSafetyBlock';

const faq = [
  {
    q: 'Do I need to stop working for Glovo, Wolt, Uber Eats, Bolt Food, or another platform?',
    a: 'No. MoveAds is designed to work alongside your existing deliveries, not replace them. You keep working exactly as you do now.',
  },
  {
    q: 'Do I need to buy a new bag? Can I use a campaign cover on my current bag?',
    a: 'In most cases you can use an approved removable cover on your current bag. We assess bag compatibility before assigning any campaign — no purchase required to apply.',
  },
  {
    q: 'Will the campaign affect food safety?',
    a: 'No. Campaign materials must not interfere with thermal insulation, food safety, or safe operation. If a cover ever compromises food safety, you have the right to refuse it.',
  },
  {
    q: 'How and when am I paid?',
    a: 'You’ll see the payment terms before accepting any campaign. Payment may include a fixed amount for completed verified shifts, a campaign-completion bonus, or both.',
  },
  {
    q: 'Can I choose which campaigns I accept?',
    a: 'Yes. Participation is opt-in at every step — applying, and accepting any specific campaign.',
  },
  {
    q: 'What if my bag is platform-branded?',
    a: 'Only if it is permitted by your agreement with the delivery platform, fleet operator, and bag owner. Descale MoveAds does not authorise use of third-party platform branding or modifications to their equipment. We assess bag compatibility before assigning a campaign.',
  },
  {
    q: 'What happens if the cover is damaged or stolen?',
    a: 'Tell us as soon as it happens. The courier programme terms set out what’s expected and how replacement or reporting works.',
  },
  {
    q: 'What information do I need to share?',
    a: 'Just what’s on the application form — your contact details, city, bag setup, and availability. Nothing beyond what we need to assess and assign a compatible campaign.',
  },
  {
    q: 'Can I leave the programme?',
    a: 'Yes, at any time. Participation is opt-in and you can withdraw whenever you like.',
  },
];

const CourierPage = () => {
  const formRef = useRef(null);
  const paymentRef = useRef(null);

  const scrollTo = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds — Couriers',
    description:
      'Apply to Descale MoveAds and earn extra income carrying approved local advertising campaigns on your delivery bag while you work.',
    url: 'https://descale.services/moveads/couriers',
  };

  return (
    <ITPageLayout
      title="Become a MoveAds Courier | Descale MoveAds | Descale Agency"
      description="Earn extra income carrying approved local ad campaigns on your delivery bag. Opt-in, no selling, transparent payment terms. Kraków pilot opening soon."
      ogTitle="Deliver food. Carry a campaign. Earn more."
      jsonLd={jsonLd}
    >
      <CourierHero onApply={() => scrollTo(formRef)} onSeePayment={() => scrollTo(paymentRef)} />
      <WhoCanApply />
      <PaymentSection ref={paymentRef} />
      <FaqSection eyebrow="Courier FAQ" title="Questions couriers" italicWord="actually ask." items={faq} />
      <TrustSafetyBlock />
      <CourierApplicationForm ref={formRef} />
    </ITPageLayout>
  );
};

export default CourierPage;
