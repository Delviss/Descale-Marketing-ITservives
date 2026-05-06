import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import ScrollFeatureSection from './components/ScrollFeatureSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import ScrollVideoShowcase from './components/ScrollVideoShowcase';
import InteractiveTaxiAdsSection from './components/InteractiveTaxiAdsSection';
import ClientSuccessSection from './components/ClientSuccessSection';
import GrowthAssessmentSection from './components/GrowthAssessmentSection';

const Homepage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marketing Services — Descale Agency · Descale the noise. Scale the signal.</title>
        <meta
          name="description"
          content="Growth systems, cinematic creative, and interactive taxi-ad campaigns that compound revenue — not ad spend."
        />
        <meta property="og:title" content="Marketing Services — Descale Agency" />
        <meta
          property="og:description"
          content="Growth systems, cinematic creative, and interactive taxi-ad campaigns that compound revenue."
        />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ScrollFeatureSection />
        <ValuePropositionSection />
        <ScrollVideoShowcase />
        <InteractiveTaxiAdsSection />
        <ClientSuccessSection />
        <GrowthAssessmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
