import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ITHero from './components/ITHero';
import ITPillars from './components/ITPillars';
import ITTechStack from './components/ITTechStack';
import ITProcess from './components/ITProcess';
import ITCapabilities from './components/ITCapabilities';
import ITCaseStudies from './components/ITCaseStudies';
import ITTestimonials from './components/ITTestimonials';
import ITCtaBand from './components/ITCtaBand';

const ITHome = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.setAttribute('data-domain', 'it');
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.removeAttribute('data-domain');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>IT Services — Descale Agency · Platforms, apps, design, websites.</title>
        <meta
          name="description"
          content="End-to-end IT solutions: platforms, applications, design systems, and websites engineered to scale. Built by a senior team, shipped in 14 weeks."
        />
        <meta property="og:title" content="IT Services — Descale Agency" />
        <meta
          property="og:description"
          content="Platforms, applications, design, and websites — engineered to scale."
        />
      </Helmet>
      <Header />
      <main>
        <ITHero />
        <ITTechStack />
        <ITPillars />
        <ITProcess />
        <ITCapabilities />
        <ITCaseStudies />
        <ITTestimonials />
        <ITCtaBand />
      </main>
      <Footer />
    </div>
  );
};

export default ITHome;
