import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import InteractiveTaxiAdsInnovationLab from './pages/interactive-taxi-ads-innovation-lab';
import ServicesHub from './pages/services-hub';
import AboutExperience from './pages/about-experience';
import Homepage from './pages/homepage';
import WorkPortfolio from './pages/work-portfolio';
import GrowthAssessmentContact from './pages/growth-assessment-contact';

const Routes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        <Route path="/interactive-taxi-ads-innovation-lab" element={<InteractiveTaxiAdsInnovationLab />} />
        <Route path="/services-hub" element={<ServicesHub />} />
        <Route path="/about-experience" element={<AboutExperience />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/work-portfolio" element={<WorkPortfolio />} />
        <Route path="/growth-assessment-contact" element={<GrowthAssessmentContact />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;