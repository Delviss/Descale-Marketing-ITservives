import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import CanonicalTag from "components/CanonicalTag";
import ErrorBoundary from "components/ErrorBoundary";
import FloatingWidgets from "components/FloatingWidgets";
import Homepage from './pages/homepage';

// Define lazy imports as named factories so we can also expose them for
// prefetching (PrefetchLink + IdleWarmup below).
const importNotFound = () => import('pages/NotFound');
const importIT = () => import('./pages/it');
const importITPlatforms = () => import('./pages/it/platforms');
const importITApplications = () => import('./pages/it/applications');
const importITWebsites = () => import('./pages/it/websites');
const importITDesign = () => import('./pages/it/design');
const importBuilders = () => import('./pages/builders');
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
const importProjects = () => import('./pages/projects');
const importMoveAds = () => import('./pages/moveads');
const importMoveAdsCouriers = () => import('./pages/moveads/couriers');
const importMoveAdsRestaurants = () => import('./pages/moveads/restaurants');
const importMoveAdsResults = () => import('./pages/moveads/results');
const importMoveAdsCourierTerms = () => import('./pages/moveads/legal/CourierTerms');
const importMoveAdsCampaignTerms = () => import('./pages/moveads/legal/CampaignTerms');
const importMoveAdsQrTerms = () => import('./pages/moveads/legal/QrOfferTerms');
const importMoveAdsComplaints = () => import('./pages/moveads/legal/Complaints');

const NotFound = lazy(importNotFound);
const ITHome = lazy(importIT);
const ITPlatforms = lazy(importITPlatforms);
const ITApplications = lazy(importITApplications);
const ITWebsites = lazy(importITWebsites);
const ITDesign = lazy(importITDesign);
const Builders = lazy(importBuilders);
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
const Projects = lazy(importProjects);
const MoveAds = lazy(importMoveAds);
const MoveAdsCouriers = lazy(importMoveAdsCouriers);
const MoveAdsRestaurants = lazy(importMoveAdsRestaurants);
const MoveAdsResults = lazy(importMoveAdsResults);
const MoveAdsCourierTerms = lazy(importMoveAdsCourierTerms);
const MoveAdsCampaignTerms = lazy(importMoveAdsCampaignTerms);
const MoveAdsQrTerms = lazy(importMoveAdsQrTerms);
const MoveAdsComplaints = lazy(importMoveAdsComplaints);

export const routePrefetch = {
  '/it': importIT,
  '/it/platforms': importITPlatforms,
  '/it/applications': importITApplications,
  '/it/websites': importITWebsites,
  '/it/design': importITDesign,
  '/builders': importBuilders,
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
  '/projects': importProjects,
  '/moveads': importMoveAds,
  '/moveads/couriers': importMoveAdsCouriers,
  '/moveads/restaurants': importMoveAdsRestaurants,
  '/moveads/results': importMoveAdsResults,
  '/moveads/legal/courier-terms': importMoveAdsCourierTerms,
  '/moveads/legal/campaign-terms': importMoveAdsCampaignTerms,
  '/moveads/legal/qr-terms': importMoveAdsQrTerms,
  '/moveads/legal/complaints': importMoveAdsComplaints,
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
        <CanonicalTag />
        <IdleWarmup />
        <Suspense fallback={<RouteFallback />}>
          <RouterRoutes>
            {/* Marketing homepage lives at "/" itself (not a redirect target)
                so it isn't a duplicate of /marketing for SEO purposes. */}
            <Route path="/" element={<Homepage />} />
            <Route path="/marketing" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services-hub" element={<ServicesHub />} />
            <Route path="/work" element={<WorkPortfolio />} />
            <Route path="/work-portfolio" element={<WorkPortfolio />} />
            <Route path="/taxi-ads" element={<InteractiveTaxiAdsInnovationLab />} />
            <Route path="/interactive-taxi-ads-innovation-lab" element={<InteractiveTaxiAdsInnovationLab />} />

            {/* Projects (own ventures, distinct from /work client case studies) */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/moveads" element={<MoveAds />} />
            <Route path="/moveads/couriers" element={<MoveAdsCouriers />} />
            <Route path="/moveads/restaurants" element={<MoveAdsRestaurants />} />
            <Route path="/moveads/results" element={<MoveAdsResults />} />
            <Route path="/moveads/legal/courier-terms" element={<MoveAdsCourierTerms />} />
            <Route path="/moveads/legal/campaign-terms" element={<MoveAdsCampaignTerms />} />
            <Route path="/moveads/legal/qr-terms" element={<MoveAdsQrTerms />} />
            <Route path="/moveads/legal/complaints" element={<MoveAdsComplaints />} />

            {/* IT Services */}
            <Route path="/it" element={<ITHome />} />
            <Route path="/it/platforms" element={<ITPlatforms />} />
            <Route path="/it/applications" element={<ITApplications />} />
            <Route path="/it/websites" element={<ITWebsites />} />
            <Route path="/it/design" element={<ITDesign />} />

            {/* Builder Network */}
            <Route path="/builders" element={<Builders />} />
            <Route path="/builder" element={<Navigate to="/builders" replace />} />

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
            <Route path="/homepage" element={<Navigate to="/" replace />} />
            <Route path="/growth-assessment-contact" element={<Navigate to="/get-started" replace />} />

            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
        <FloatingWidgets />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
