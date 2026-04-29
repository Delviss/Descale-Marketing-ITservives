import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage';
import ITHome from './pages/it';
import GrowthAssessmentContact from './pages/growth-assessment-contact';
import AboutExperience from './pages/about-experience';
import ServicesHub from './pages/services-hub';
import WorkPortfolio from './pages/work-portfolio';
import InteractiveTaxiAdsInnovationLab from './pages/interactive-taxi-ads-innovation-lab';

const Routes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/marketing" element={<Homepage />} />
          <Route path="/it" element={<ITHome />} />
          <Route path="/get-started" element={<GrowthAssessmentContact />} />
          <Route path="/about" element={<AboutExperience />} />
          <Route path="/about-experience" element={<AboutExperience />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services-hub" element={<ServicesHub />} />
          <Route path="/work" element={<WorkPortfolio />} />
          <Route path="/work-portfolio" element={<WorkPortfolio />} />
          <Route path="/taxi-ads" element={<InteractiveTaxiAdsInnovationLab />} />
          <Route path="/interactive-taxi-ads-innovation-lab" element={<InteractiveTaxiAdsInnovationLab />} />

          <Route path="/homepage" element={<Navigate to="/marketing" replace />} />
          <Route path="/growth-assessment-contact" element={<Navigate to="/get-started" replace />} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
