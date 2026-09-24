import React from 'react';
import ITPageLayout from '../it/_shared/ITPageLayout';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import BenefitsGrid from './components/BenefitsGrid';
import TrustSafetyBlock from './components/TrustSafetyBlock';
import PhaseBanner from './components/PhaseBanner';

const MoveAds = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds — local delivery-bag advertising',
    description:
      'Descale MoveAds connects local restaurants with active delivery couriers through QR-powered, opt-in bag-cover campaigns. Launching first in Kraków.',
    url: 'https://descale.services/moveads',
    provider: {
      '@type': 'Organization',
      name: 'Descale Agency',
      url: 'https://descale.services',
    },
  };

  return (
    <ITPageLayout
      title="Descale MoveAds | Turn Delivery Bags Into Local Discovery Media | Descale Agency"
      description="Descale MoveAds connects restaurants with active delivery couriers through opt-in, QR-powered bag-cover campaigns. Kraków pilot opening soon."
      ogTitle="Descale MoveAds | Your city is moving. Your advertising should too."
      jsonLd={jsonLd}
    >
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <BenefitsGrid />
      <TrustSafetyBlock />
      <PhaseBanner />
    </ITPageLayout>
  );
};

export default MoveAds;
