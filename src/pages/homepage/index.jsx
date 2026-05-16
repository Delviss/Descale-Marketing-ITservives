import React, { useEffect, lazy, Suspense, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';

// Below-the-fold sections are heavy (motion, charts, video posters).
// Defer them until the user scrolls near them so initial paint stays fast.
const ScrollFeatureSection = lazy(() => import('./components/ScrollFeatureSection'));
const ValuePropositionSection = lazy(() => import('./components/ValuePropositionSection'));
const ScrollVideoShowcase = lazy(() => import('./components/ScrollVideoShowcase'));
const InteractiveTaxiAdsSection = lazy(() => import('./components/InteractiveTaxiAdsSection'));
const ClientSuccessSection = lazy(() => import('./components/ClientSuccessSection'));
const GrowthAssessmentSection = lazy(() => import('./components/GrowthAssessmentSection'));
const Footer = lazy(() => import('../../components/ui/Footer'));

const SectionPlaceholder = ({ minH = 'min-h-[40vh]' }) => (
  <div className={`${minH} bg-background`} aria-hidden="true" />
);

const LazyOnVisible = ({ children, rootMargin = '300px', minH = 'min-h-[40vh]' }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShow(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, show]);

  return (
    <div ref={ref}>
      {show ? (
        <Suspense fallback={<SectionPlaceholder minH={minH} />}>{children}</Suspense>
      ) : (
        <SectionPlaceholder minH={minH} />
      )}
    </div>
  );
};

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
        <title>Marketing Services | Descale Agency · Descale the noise. Scale the signal.</title>
        <meta
          name="description"
          content="Growth systems, cinematic creative, and interactive taxi-ad campaigns that compound revenue, not ad spend."
        />
        <meta property="og:title" content="Marketing Services | Descale Agency" />
        <meta
          property="og:description"
          content="Growth systems, cinematic creative, and interactive taxi-ad campaigns that compound revenue."
        />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <LogoMarquee />
        <LazyOnVisible><ScrollFeatureSection /></LazyOnVisible>
        <LazyOnVisible><ValuePropositionSection /></LazyOnVisible>
        <LazyOnVisible><ScrollVideoShowcase /></LazyOnVisible>
        <LazyOnVisible><InteractiveTaxiAdsSection /></LazyOnVisible>
        <LazyOnVisible><ClientSuccessSection /></LazyOnVisible>
        <LazyOnVisible><GrowthAssessmentSection /></LazyOnVisible>
      </main>
      <Suspense fallback={<div className="min-h-[20vh] bg-[#050505]" aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Homepage;
