import React from 'react';
import ITPageLayout from '../../it/_shared/ITPageLayout';
import SampleDataBanner from './components/SampleDataBanner';
import ResultsHero from './components/ResultsHero';
import StatsGrid from './components/StatsGrid';
import CaseStudy from './components/CaseStudy';
import ResultsTestimonials from './components/ResultsTestimonials';
import ResultsCta from './components/ResultsCta';

// This page ships with illustrative placeholder data (see
// ./data/sampleResults.js) ahead of the real Kraków pilot per the user's
// request to build the front end now. It's marked `noindex` below so search
// engines don't pick up fabricated numbers before the pilot data lands —
// remove that once the sample data is replaced with verified results.
const MoveAdsResults = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds — pilot results',
    description:
      'Verified results from the Descale MoveAds Kraków pilot: campaign hours, QR scans, voucher claims, and confirmed redemptions.',
    url: 'https://www.descale.services/moveads/results',
  };

  return (
    <ITPageLayout
      title="Pilot Results | Descale MoveAds | Descale Agency"
      description="Verified results from the Descale MoveAds Kraków pilot: campaign hours, QR scans, voucher claims, and confirmed redemptions."
      ogTitle="Descale MoveAds | What the pilot proved."
      jsonLd={jsonLd}
      noindex
    >
      <SampleDataBanner />
      <ResultsHero />
      <StatsGrid />
      <CaseStudy />
      <ResultsTestimonials />
      <ResultsCta />
    </ITPageLayout>
  );
};

export default MoveAdsResults;
