import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./Routes";
import { useTheme } from "./hooks/useTheme";
import { initAnalytics, initCtaTracking, initCalendlyLeadTracking } from "./utils/analytics";

function App() {
  useTheme();
  useEffect(() => {
    // Boots GA4 only if the visitor already granted consent previously.
    initAnalytics();
    initCtaTracking();
    initCalendlyLeadTracking();
  }, []);
  return (
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  );
}

export default App;
