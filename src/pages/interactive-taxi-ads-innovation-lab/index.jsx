import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import CityVisualization from './components/CityVisualization';
import CampaignControls from './components/CampaignControls';
import MetricsDashboard from './components/MetricsDashboard';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import ROICalculator from './components/ROICalculator';
import TechnologyShowcase from './components/TechnologyShowcase';
import { TAXI_ADS_STATS } from './statsConfig';
import { SITE_URL } from '../../config/company';

const TAXI_ADS_TITLE = 'Interactive Taxi Advertising Campaigns | Descale Agency';
const TAXI_ADS_DESCRIPTION =
  'GPS-triggered, interactive taxi advertising with real-time audience intelligence, dynamic creative, and an ROI calculator to model your campaign.';
const taxiAdsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Interactive Taxi Advertising',
  provider: { '@type': 'Organization', name: 'Descale Agency', url: SITE_URL },
  areaServed: ['EU', 'US', 'UK', 'Poland'],
  description: TAXI_ADS_DESCRIPTION,
};

const InteractiveTaxiAdsInnovationLab = () => {
  const navigate = useNavigate();
  const [selectedAudience, setSelectedAudience] = useState('');
  const [campaignParams, setCampaignParams] = useState({
    budget: 50000,
    duration: 30,
    targetRadius: 5,
    timeSlots: ['peak_hours']
  });
  const [simulationMetrics, setSimulationMetrics] = useState({
    estimatedReach: 0,
    coverageIntensity: 0,
    activeRoutes: 0,
    targetAreas: 0
  });
  const [isSimulating, setIsSimulating] = useState(false);

  const handleAudienceChange = (audience) => {
    setSelectedAudience(audience);
  };

  const handleParamsChange = (params) => {
    setCampaignParams(params);
  };

  const handleMetricsUpdate = (metrics) => {
    setSimulationMetrics(metrics);
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 3000);
  };

  const heroStats = [
    { label: "Cities Covered", value: TAXI_ADS_STATS.citiesCovered, icon: "MapPin" },
    { label: "Daily Impressions", value: TAXI_ADS_STATS.dailyImpressions, icon: "Eye" },
    { label: "Average ROI", value: TAXI_ADS_STATS.averageRoi, icon: "TrendingUp" },
    { label: "Client Satisfaction", value: TAXI_ADS_STATS.clientSatisfaction, icon: "Heart" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{TAXI_ADS_TITLE}</title>
        <meta name="description" content={TAXI_ADS_DESCRIPTION} />
        <meta property="og:title" content={TAXI_ADS_TITLE} />
        <meta property="og:description" content={TAXI_ADS_DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(taxiAdsJsonLd)}</script>
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Icon name="Zap" size={16} className="text-accent" />
                <span className="text-sm font-medium">{TAXI_ADS_STATS.patentPendingLabel}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="block">Interactive Taxi Ads</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  Innovation Lab
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience the future of location-based advertising through immersive city visualizations, 
                real-time campaign simulations, and proprietary audience intelligence that competitors cannot replicate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Launch Interactive Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Calculate ROI
                </Button>
              </div>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {heroStats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg mb-3">
                    <Icon name={stat?.icon} size={20} className="text-accent" />
                  </div>
                  <div className="text-2xl font-bold">{stat?.value}</div>
                  <div className="text-sm text-white/60">{stat?.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Interactive Simulation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-Time Campaign Simulation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Configure your campaign parameters and watch as our AI-powered platform 
                visualizes optimal taxi routes, audience targeting, and performance projections in real-time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Campaign Controls */}
              <div className="lg:col-span-1">
                <CampaignControls
                  onAudienceChange={handleAudienceChange}
                  onParamsChange={handleParamsChange}
                  onSimulate={handleSimulate}
                />
              </div>

              {/* City Visualization */}
              <div className="lg:col-span-2 space-y-6">
                <CityVisualization
                  selectedAudience={selectedAudience}
                  campaignParams={campaignParams}
                  onMetricsUpdate={handleMetricsUpdate}
                />
                
                {/* Quick Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {simulationMetrics?.estimatedReach?.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Estimated Reach</div>
                  </div>
                  <div className="bg-secondary/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">
                      {simulationMetrics?.activeRoutes}
                    </div>
                    <div className="text-sm text-gray-600">Active Routes</div>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">
                      {simulationMetrics?.coverageIntensity}%
                    </div>
                    <div className="text-sm text-gray-600">Coverage Intensity</div>
                  </div>
                  <div className="bg-success/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-success">
                      {simulationMetrics?.targetAreas}
                    </div>
                    <div className="text-sm text-gray-600">Target Areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Analytics Dashboard
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Monitor campaign performance with real-time metrics, audience insights, 
                and geographic analysis powered by our proprietary attribution technology.
              </p>
            </motion.div>

            <MetricsDashboard 
              metrics={simulationMetrics} 
              isLive={isSimulating}
            />
          </div>
        </div>
      </section>
      {/* Technology Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proprietary Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the patent-pending innovations and exclusive partnerships 
                that give DESCALE clients an unmatched competitive advantage.
              </p>
            </motion.div>

            <TechnologyShowcase />
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Breakthrough Campaign Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how leading brands achieved exponential growth through 
                our innovative taxi advertising platform with verified performance metrics.
              </p>
            </motion.div>

            <CaseStudyShowcase />
          </div>
        </div>
      </section>
      {/* ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Campaign ROI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant projections for reach, engagement, and return on investment 
                based on your specific business metrics and campaign parameters.
              </p>
            </motion.div>

            <ROICalculator />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Scale with Interactive Taxi Ads?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the brands already achieving breakthrough results with our patent-pending 
                taxi advertising platform. Book a strategy session to explore your growth potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => navigate('/growth-assessment-contact')}
                >
                  Book Strategy Session
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Download Innovation Report
                </Button>
              </div>

              <div className="mt-8 text-sm text-white/70">
                <p>✓ Free 30-minute consultation ✓ Custom ROI projections ✓ Technology demo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer hideGlobalCta />
    </div>
  );
};

export default InteractiveTaxiAdsInnovationLab;