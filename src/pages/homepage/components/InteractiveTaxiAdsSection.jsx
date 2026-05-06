import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveTaxiAdsSection = () => {
  const navigate = useNavigate();
  const [activeCity, setActiveCity] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const cities = [
    {
      name: "New York",
      campaigns: 1247,
      impressions: "2.4M",
      engagement: "8.7%",
      coordinates: { x: 45, y: 35 }
    },
    {
      name: "Los Angeles",
      campaigns: 892,
      impressions: "1.8M",
      engagement: "9.2%",
      coordinates: { x: 15, y: 55 }
    },
    {
      name: "Chicago",
      campaigns: 634,
      impressions: "1.2M",
      engagement: "7.9%",
      coordinates: { x: 55, y: 40 }
    },
    {
      name: "Miami",
      campaigns: 445,
      impressions: "890K",
      engagement: "10.1%",
      coordinates: { x: 75, y: 75 }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities?.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPlaying, cities?.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Lightbulb" size={16} />
            <span>Flagship Innovation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Interactive
            <span className="block text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
              Taxi Ads
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary geotargeted advertising that transforms city transportation into dynamic, interactive brand experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
              {/* Map Container */}
              <div className="relative w-full h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden mb-6">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20"></div>
                </div>

                {/* City Markers */}
                {cities?.map((city, index) => (
                  <motion.div
                    key={city?.name}
                    className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                      activeCity === index 
                        ? 'bg-accent scale-150 shadow-lg shadow-accent/50' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    style={{
                      left: `${city?.coordinates?.x}%`,
                      top: `${city?.coordinates?.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => {
                      setActiveCity(index);
                      setIsPlaying(false);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Pulse Animation for Active City */}
                    {activeCity === index && (
                      <motion.div
                        className="absolute inset-0 bg-accent rounded-full"
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Active City Info Popup */}
                <motion.div
                  key={activeCity}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 min-w-48"
                >
                  <h4 className="font-bold text-gray-900 mb-2">{cities?.[activeCity]?.name}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Active Campaigns:</span>
                      <span className="font-semibold text-primary">{cities?.[activeCity]?.campaigns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impressions:</span>
                      <span className="font-semibold text-accent">{cities?.[activeCity]?.impressions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Engagement:</span>
                      <span className="font-semibold text-success">{cities?.[activeCity]?.engagement}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent/80 transition-colors"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
                  </button>
                  <span className="text-gray-300 text-sm">
                    {isPlaying ? 'Auto-cycling cities' : 'Paused'}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  Live Campaign Data
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Hyper-Local Targeting</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Precision geofencing that delivers personalized messages based on real-time location, demographics, and behavioral patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Engagement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    QR codes, NFC technology, and AR experiences that transform passive viewing into active brand interaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BarChart3" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Live performance tracking with engagement metrics, conversion attribution, and ROI optimization insights.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => navigate('/get-started')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-brand-lg"
              >
                Explore Innovation Lab
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTaxiAdsSection;