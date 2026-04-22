import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./Routes";
import { useTheme } from "./hooks/useTheme";

function App() {
  useTheme();
  return (
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  );
}

export default App;
