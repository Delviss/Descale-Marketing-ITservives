import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Homepage from './pages/homepage';

// Marketing landing is the default route — keep it in the main bundle so it
// renders without an extra round-trip. Everything else is code-split.
const NotFound = lazy(() => import('pages/NotFound'));
const ITHome = lazy(() => import('./pages/it'));
const ITPlatforms = lazy(() => import('./pages/it/platforms'));
const ITApplications = lazy(() => import('./pages/it/applications'));
const ITWebsites = lazy(() => import('./pages/it/websites'));
const ITDesign = lazy(() => import('./pages/it/design'));
const GrowthAssessmentContact = lazy(() => import('./pages/growth-assessment-contact'));
const AboutExperience = lazy(() => import('./pages/about-experience'));
const ServicesHub = lazy(() => import('./pages/services-hub'));
const WorkPortfolio = lazy(() => import('./pages/work-portfolio'));
const InteractiveTaxiAdsInnovationLab = lazy(() => import('./pages/interactive-taxi-ads-innovation-lab'));
const Contact = lazy(() => import('./pages/contact'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Cookies = lazy(() => import('./pages/legal/Cookies'));
const Help = lazy(() => import('./pages/help'));

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true" />
);

const Routes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
        <ScrollToTop />
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
