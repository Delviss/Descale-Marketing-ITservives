import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage';
import ITHome from './pages/it';
import GrowthAssessmentContact from './pages/growth-assessment-contact';

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

          <Route path="/homepage" element={<Navigate to="/marketing" replace />} />
          <Route path="/growth-assessment-contact" element={<Navigate to="/get-started" replace />} />
          <Route path="/services-hub" element={<Navigate to="/" replace />} />
          <Route path="/work-portfolio" element={<Navigate to="/" replace />} />
          <Route path="/about-experience" element={<Navigate to="/" replace />} />
          <Route path="/interactive-taxi-ads-innovation-lab" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
