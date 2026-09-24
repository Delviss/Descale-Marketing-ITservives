import React, { useRef, useCallback } from 'react';
import ITPageLayout from '../../it/_shared/ITPageLayout';
import RestaurantHero from './components/RestaurantHero';
import OfferSection from './components/OfferSection';
import RestaurantCampaignForm from './components/RestaurantCampaignForm';
import TrustSafetyBlock from '../components/TrustSafetyBlock';

const RestaurantPage = () => {
  const formRef = useRef(null);

  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale MoveAds — Restaurants',
    description:
      'Launch a local courier-bag advertising campaign with a QR offer, targeted delivery zones, and clear reporting on scans, claims, and redemptions.',
    url: 'https://www.descale.services/moveads/restaurants',
  };

  return (
    <ITPageLayout
      title="Launch a MoveAds Campaign | Descale MoveAds | Descale Agency"
      description="Launch a local courier-bag campaign with a QR offer, targeted delivery zones, and clear reporting on scans, voucher claims, and redemptions. Kraków pilot opening soon."
      ogTitle="Get your restaurant seen where your next customers already are."
      jsonLd={jsonLd}
    >
      <RestaurantHero onPlanCampaign={scrollToForm} onRequestProposal={scrollToForm} />
      <OfferSection />
      <TrustSafetyBlock />
      <RestaurantCampaignForm ref={formRef} />
    </ITPageLayout>
  );
};

export default RestaurantPage;
