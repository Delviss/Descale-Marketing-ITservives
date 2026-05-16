import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Homepage from './pages/homepage';

// Define lazy imports as named factories so we can also expose them for
// prefetching (PrefetchLink + IdleWarmup below).
const importNotFound = () => import('pages/NotFound');
const importIT = () => import('./pages/it');
const importITPlatforms = () => import('./pages/it/platforms');
const importITApplications = () => import('./pages/it/applications');
const importITWebsites = () => import('./pages/it/websites');
const importITDesign = () => import('./pages/it/design');
const importGrowthAssessment = () => import('./pages/growth-assessment-contact');
const importAbout = () => import('./pages/about-experience');
const importServices = () => import('./pages/services-hub');
const importWork = () => import('./pages/work-portfolio');
const importTaxiAds = () => import('./pages/interactive-taxi-ads-innovation-lab');
const importContact = () => import('./pages/contact');
const importPrivacy = () => import('./pages/legal/Privacy');
const importTerms = () => import('./pages/legal/Terms');
const importCookies = () => import('./pages/legal/Cookies');
const importHelp = () => import('./pages/help');

const NotFound = lazy(importNotFound);
const ITHome = lazy(importIT);
const ITPlatforms = lazy(importITPlatforms);
const ITApplications = lazy(importITApplications);
const ITWebsites = lazy(importITWebsites);
const ITDesign = lazy(importITDesign);
const GrowthAssessmentContact = lazy(importGrowthAssessment);
const AboutExperience = lazy(importAbout);
const ServicesHub = lazy(importServices);
const WorkPortfolio = lazy(importWork);
const InteractiveTaxiAdsInnovationLab = lazy(importTaxiAds);
const Contact = lazy(importContact);
const Privacy = lazy(importPrivacy);
const Terms = lazy(importTerms);
const Cookies = lazy(importCookies);
const Help = lazy(importHelp);

export const routePrefetch = {
  '/it': importIT,
  '/it/platforms': importITPlatforms,
  '/it/applications': importITApplications,
  '/it/websites': importITWebsites,
  '/it/design': importITDesign,
  '/get-started': importGrowthAssessment,
  '/about': importAbout,
  '/about-experience': importAbout,
  '/services': importServices,
  '/services-hub': importServices,
  '/work': importWork,
  '/work-portfolio': importWork,
  '/taxi-ads': importTaxiAds,
  '/interactive-taxi-ads-innovation-lab': importTaxiAds,
  '/contact': importContact,
  '/help': importHelp,
  '/privacy': importPrivacy,
  '/terms': importTerms,
  '/cookies': importCookies,
};

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true" />
);

const IdleWarmup = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const queue = [importIT, importGrowthAssessment, importAbout, importHelp, importContact];
    const run = () => {
      for (const fn of queue) {
        try { fn(); } catch (_) {}
      }
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(run, { timeout: 2500 });
    } else {
      setTimeout(run, 1500);
    }
  }, []);
  return null;
};

const Routes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
        <ScrollToTop />
        <IdleWarmup />
        <Suspense fallback={<RouteFallback />}>
          <RouterRoutes>
            <Route path="/" element={<Navigate to="/marketing" replace />} />

            {/* Marketing */}
            <Route path="/marketing" element={<Homepage />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services-hub" element={<ServicesHub />} />
            <Route path="/work" element={<WorkPortfolio />} />
            <Route path="/work-portfolio" element={<WorkPortfolio />} />
            <Route path="/taxi-ads" element={<InteractiveTaxiAdsInnovationLab />} />
            <Route path="/interactive-taxi-ads-innovation-lab" element={<InteractiveTaxiAdsInnovationLab />} />

            {/* IT Services */}
            <Route path="/it" element={<ITHome />} />
            <Route path="/it/platforms" element={<ITPlatforms />} />
            <Route path="/it/applications" element={<ITApplications />} />
            <Route path="/it/websites" element={<ITWebsites />} />
            <Route path="/it/design" element={<ITDesign />} />

            {/* Resources */}
            <Route path="/about" element={<AboutExperience />} />
            <Route path="/about-experience" element={<AboutExperience />} />
            <Route path="/get-started" element={<GrowthAssessmentContact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<Navigate to="/help" replace />} />

            {/* Legal */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />

            {/* Legacy redirects */}
            <Route path="/homepage" element={<Navigate to="/marketing" replace />} />
            <Route path="/growth-assessment-contact" element={<Navigate to="/get-started" replace />} />

            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
