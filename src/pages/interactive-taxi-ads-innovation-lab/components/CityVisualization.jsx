import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CityVisualization = ({ selectedAudience, campaignParams, onMetricsUpdate }) => {
  const [activeRoutes, setActiveRoutes] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const cityAreas = [
    { id: 1, name: "Financial District", x: 20, y: 30, density: 85, demographics: "Business Professionals" },
    { id: 2, name: "Shopping Center", x: 60, y: 45, density: 92, demographics: "Retail Shoppers" },
    { id: 3, name: "University Area", x: 40, y: 70, density: 78, demographics: "Students & Young Adults" },
    { id: 4, name: "Residential Zone", x: 75, y: 25, density: 65, demographics: "Families" },
    { id: 5, name: "Entertainment District", x: 30, y: 55, density: 88, demographics: "Nightlife & Dining" },
    { id: 6, name: "Tech Hub", x: 80, y: 60, density: 90, demographics: "Tech Workers" }
  ];

  const taxiRoutes = [
    { id: 1, path: "M20,30 Q40,20 60,45", active: false, frequency: 12 },
    { id: 2, path: "M60,45 Q70,55 75,25", active: false, frequency: 8 },
    { id: 3, path: "M40,70 Q50,50 30,55", active: false, frequency: 15 },
    { id: 4, path: "M75,25 Q85,40 80,60", active: false, frequency: 10 },
    { id: 5, path: "M30,55 Q25,40 20,30", active: false, frequency: 14 },
    { id: 6, path: "M80,60 Q60,65 40,70", active: false, frequency: 11 }
  ];

  useEffect(() => {
    if (selectedAudience && campaignParams?.budget > 0) {
      simulateCampaign();
    }
  }, [selectedAudience, campaignParams]);

  const simulateCampaign = () => {
    setIsSimulating(true);
    
    // Filter areas based on selected audience
    const relevantAreas = cityAreas?.filter(area => 
      area?.demographics?.toLowerCase()?.includes(selectedAudience?.toLowerCase()) ||
      selectedAudience === "All Demographics"
    );

    // Activate routes connecting relevant areas
    const newActiveRoutes = taxiRoutes?.filter(route => 
      relevantAreas?.length > 0 ? Math.random() > 0.3 : Math.random() > 0.7
    );

    setActiveRoutes(newActiveRoutes);
    
    // Generate heatmap data
    const heatmap = relevantAreas?.map(area => ({
      ...area,
      intensity: Math.min(100, area?.density + (campaignParams?.budget / 1000) * 5),
      estimatedReach: Math.floor(area?.density * (campaignParams?.budget / 10000) * 100)
    }));

    setHeatmapData(heatmap);

    // Update parent metrics
    const totalReach = heatmap?.reduce((sum, area) => sum + area?.estimatedReach, 0);
    const avgIntensity = heatmap?.reduce((sum, area) => sum + area?.intensity, 0) / heatmap?.length;
    
    onMetricsUpdate({
      estimatedReach: totalReach,
      coverageIntensity: Math.round(avgIntensity),
      activeRoutes: newActiveRoutes?.length,
      targetAreas: heatmap?.length
    });

    setTimeout(() => setIsSimulating(false), 2000);
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
      {/* City Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* City Grid */}
          <defs>
            <pattern id="cityGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cityGrid)" />
        </svg>
      </div>
      {/* Heatmap Areas */}
      {heatmapData?.map((area) => (
        <motion.div
          key={area?.id}
          className="absolute w-8 h-8 rounded-full"
          style={{
            left: `${area?.x}%`,
            top: `${area?.y}%`,
            backgroundColor: `rgba(168, 67, 28, ${area?.intensity / 100})`,
            boxShadow: `0 0 ${area?.intensity / 5}px rgba(168, 67, 28, 0.6)`
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: area?.id * 0.1 }}
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
            {area?.name}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-accent font-bold">
            {area?.estimatedReach}
          </div>
        </motion.div>
      ))}
      {/* Taxi Routes */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {activeRoutes?.map((route) => (
          <g key={route?.id}>
            <motion.path
              d={route?.path}
              fill="none"
              stroke="rgba(198, 90, 46, 0.85)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Moving taxi icon */}
            <motion.circle
              r="1"
              fill="#C65A2E"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: route?.frequency, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: `path('${route?.path}')` }}
            />
          </g>
        ))}
      </svg>
      {/* Control Panel */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
        <div className="flex items-center space-x-2 text-white text-sm">
          <Icon name="MapPin" size={16} className="text-accent" />
          <span>Live Tracking</span>
          {isSimulating && (
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          )}
        </div>
      </div>
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
        <div className="space-y-2 text-xs text-white">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full opacity-80"></div>
            <span>High Density</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Active Route</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span>Target Area</span>
          </div>
        </div>
      </div>
      {/* Simulation Overlay */}
      {isSimulating && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
            <div className="animate-spin">
              <Icon name="RefreshCw" size={20} className="text-primary" />
            </div>
            <span className="text-sm font-medium">Simulating Campaign...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityVisualization;