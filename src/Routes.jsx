import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage';
import ITHome from './pages/it';
import ITPlatforms from './pages/it/platforms';
import ITApplications from './pages/it/applications';
import ITWebsites from './pages/it/websites';
import ITDesign from './pages/it/design';
import GrowthAssessmentContact from './pages/growth-assessment-contact';
import AboutExperience from './pages/about-experience';
import ServicesHub from './pages/services-hub';
import WorkPortfolio from './pages/work-portfolio';
import InteractiveTaxiAdsInnovationLab from './pages/interactive-taxi-ads-innovation-lab';
import Contact from './pages/contact';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import Help from './pages/help';

const Routes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
        <ScrollToTop />
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
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
