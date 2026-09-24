import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { TAXI_ADS_STATS } from '../statsConfig';

// TODO(owner): the "Strategic Partnerships" section used to show Uber,
// Lyft, Yellow Cab Co. and Via Transportation as verified partners, all
// four rendered with the SAME stock photo and no real, authorized logos or
// partnership agreements behind them. That implied trademark-infringing,
// fabricated partnerships and has been removed. Populate this array with
// real partner names + logos you're authorized to display (or leave it
// empty to keep the section hidden) before re-enabling it.
const PARTNERSHIPS = [];

const TechnologyShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const technologies = [
    {
      id: 1,
      title: "GPS Precision Tracking",
      description: "Real-time location data with 99.9% accuracy for optimal ad placement timing",
      icon: "MapPin",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Sub-meter GPS accuracy",
        "Real-time route optimization",
        "Traffic pattern analysis",
        "Geofence trigger automation"
      ],
      techSpecs: {
        accuracy: "±1 meter",
        updateFrequency: "1 second",
        coverage: "99.8% urban areas",
        latency: "<50ms"
      }
    },
    {
      id: 2,
      title: "AI Audience Intelligence",
      description: "Machine learning algorithms analyze demographic patterns and behavior data",
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      features: [
        "Demographic prediction models",
        "Behavioral pattern recognition",
        "Real-time audience scoring",
        "Predictive targeting optimization"
      ],
      techSpecs: {
        accuracy: "94% prediction rate",
        dataPoints: "500+ variables",
        processing: "Real-time ML",
        learning: "Continuous optimization"
      }
    },
    {
      id: 3,
      title: "Dynamic Content Engine",
      description: "Automated creative optimization based on location, time, and audience data",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      features: [
        "Context-aware creative selection",
        "A/B testing automation",
        "Weather-responsive content",
        "Time-of-day optimization"
      ],
      techSpecs: {
        variants: "Unlimited creative versions",
        switching: "<2 second transitions",
        testing: "Multi-variate optimization",
        personalization: "Individual-level targeting"
      }
    },
    {
      id: 4,
      title: "Attribution Analytics",
      description: "Advanced tracking connects taxi ad exposure to digital actions and conversions",
      icon: "BarChart3",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Cross-device tracking",
        "Offline-to-online attribution",
        "Incremental lift measurement",
        "Multi-touch attribution modeling"
      ],
      techSpecs: {
        attribution: "7-day view-through",
        tracking: "Cross-platform unified",
        reporting: "Real-time dashboards",
        integration: "20+ marketing platforms"
      }
    }
  ];


  const currentTech = technologies?.[activeFeature];

  return (
    <div className="space-y-8">
      {/* Technology Features */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-secondary to-primary text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Patent-Pending Technology</h3>
              <p className="text-white/80 mt-1">Proprietary innovations that deliver unmatched results</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={24} />
              <span className="text-sm font-medium">IP Protected</span>
            </div>
          </div>
        </div>

        {/* Technology Navigation */}
        <div className="flex overflow-x-auto snap-x snap-mandatory border-b border-gray-200">
          {technologies?.map((tech, index) => (
            <button
              key={tech?.id}
              onClick={() => setActiveFeature(index)}
              className={`flex items-center space-x-3 px-6 py-4 whitespace-nowrap transition-all snap-start shrink-0 ${
                activeFeature === index
                  ? 'bg-primary text-white border-b-2 border-primary' :'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon name={tech?.icon} size={20} />
              <span className="font-medium">{tech?.title}</span>
            </button>
          ))}
        </div>

        {/* Technology Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Description and Features */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{currentTech?.title}</h4>
                  <p className="text-gray-600 text-lg">{currentTech?.description}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
                  <div className="space-y-2">
                    {currentTech?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-3">Technical Specifications</h5>
                  <div className="space-y-2">
                    {Object.entries(currentTech?.techSpecs)?.map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-600 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={currentTech?.image}
                    alt={currentTech?.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Icon name={currentTech?.icon} size={20} />
                      <span className="font-semibold">{currentTech?.title}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Demo Button */}
                <Button
                  variant="outline"
                  iconName="Play"
                  iconPosition="left"
                  className="w-full"
                >
                  View Interactive Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Strategic Partnerships — hidden until PARTNERSHIPS has real,
          authorized entries (see TODO(owner) above). Previously rendered
          four "verified partners" that were all the same stock photo. */}
      {PARTNERSHIPS.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Strategic Partnerships</h3>
              <p className="text-gray-600 mt-1">Exclusive access to premium taxi networks</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-success">
              <Icon name="Shield" size={16} />
              <span>Verified Partners</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERSHIPS.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                whileHover={{ y: -2 }}
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner?.logo}
                    alt={partner?.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{partner?.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{partner?.description}</p>
                <div className="text-xs text-primary font-medium">{partner?.coverage}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Total Network Coverage</h4>
                <p className="text-sm text-gray-600">Combined reach across all partnerships</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{TAXI_ADS_STATS.citiesCovered}</div>
                <div className="text-sm text-gray-600">Cities & Markets</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Innovation Pipeline */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold">Innovation Pipeline</h3>
            <p className="text-white/80 mt-1">Coming soon to the DESCALE platform</p>
          </div>
          <Icon name="Rocket" size={24} className="text-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Eye" size={20} className="text-accent" />
              <h4 className="font-semibold">AR Integration</h4>
            </div>
            <p className="text-white/80 text-sm">Augmented reality overlays for enhanced passenger engagement</p>
            <div className="mt-3 text-xs text-accent">Q2 2025</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Smartphone" size={20} className="text-accent" />
              <h4 className="font-semibold">Voice Activation</h4>
            </div>
            <p className="text-white/80 text-sm">Voice-controlled ad interactions and instant response capture</p>
            <div className="mt-3 text-xs text-accent">Q3 2025</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Zap" size={20} className="text-accent" />
              <h4 className="font-semibold">IoT Sensors</h4>
            </div>
            <p className="text-white/80 text-sm">Environmental sensors for context-aware advertising triggers</p>
            <div className="mt-3 text-xs text-accent">Q4 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyShowcase;