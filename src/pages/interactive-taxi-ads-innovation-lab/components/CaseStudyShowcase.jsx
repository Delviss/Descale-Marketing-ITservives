import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CaseStudyShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge: "Low brand awareness in competitive enterprise software market",
      solution: "Targeted taxi ads in business districts with QR code integration",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      results: {
        brandAwareness: "+127%",
        leadGeneration: "+89%",
        costPerLead: "-34%",
        campaignROI: "340%"
      },
      metrics: [
        { label: "Campaign Duration", value: "8 weeks" },
        { label: "Total Impressions", value: "2.4M" },
        { label: "Unique Reach", value: "450K" },
        { label: "QR Code Scans", value: "12,400" }
      ],
      testimonial: {
        quote: "The taxi ad campaign exceeded all our expectations. We saw immediate impact on brand recognition and lead quality improved dramatically.",
        author: "Sarah Chen",
        position: "CMO, TechFlow Solutions"
      }
    },
    {
      id: 2,
      client: "Urban Eats",
      industry: "Food Delivery",
      challenge: "Expanding market share in saturated food delivery space",
      solution: "Dynamic route-based targeting during meal times with app download incentives",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      results: {
        brandAwareness: "+95%",
        appDownloads: "+156%",
        orderVolume: "+78%",
        campaignROI: "280%"
      },
      metrics: [
        { label: "Campaign Duration", value: "12 weeks" },
        { label: "Total Impressions", value: "3.8M" },
        { label: "Unique Reach", value: "680K" },
        { label: "App Downloads", value: "28,900" }
      ],
      testimonial: {
        quote: "Taxi ads helped us break through the noise in a crowded market. The location-based targeting was incredibly effective.",
        author: "Marcus Rodriguez",
        position: "Growth Director, Urban Eats"
      }
    },
    {
      id: 3,
      client: "FitLife Gym",
      industry: "Fitness & Wellness",
      challenge: "Attracting new members in post-pandemic fitness market",
      solution: "Geo-targeted campaigns near residential areas with membership trial offers",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      results: {
        brandAwareness: "+112%",
        memberSignups: "+203%",
        trialConversions: "+67%",
        campaignROI: "420%"
      },
      metrics: [
        { label: "Campaign Duration", value: "6 weeks" },
        { label: "Total Impressions", value: "1.9M" },
        { label: "Unique Reach", value: "320K" },
        { label: "Trial Signups", value: "1,850" }
      ],
      testimonial: {
        quote: "The taxi campaign brought us exactly the local audience we needed. Membership growth exceeded our annual targets in just 6 weeks.",
        author: "Jennifer Walsh",
        position: "Marketing Manager, FitLife Gym"
      }
    }
  ];

  const currentCase = caseStudies?.[activeCase];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-brand text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Success Stories</h3>
            <p className="text-white/80 mt-1">Real results from real campaigns</p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={24} />
            <span className="text-sm font-medium">Verified Results</span>
          </div>
        </div>
      </div>
      {/* Case Study Navigation */}
      <div className="flex border-b border-gray-200">
        {caseStudies?.map((study, index) => (
          <button
            key={study?.id}
            onClick={() => setActiveCase(index)}
            className={`flex-1 p-4 text-center transition-all ${
              activeCase === index
                ? 'bg-primary text-white border-b-2 border-primary' :'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="font-semibold text-sm">{study?.client}</div>
            <div className="text-xs">{study?.industry}</div>
          </button>
        ))}
      </div>
      {/* Case Study Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Overview */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={currentCase?.image}
                  alt={`${currentCase?.client} campaign`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-lg font-bold">{currentCase?.client}</div>
                  <div className="text-sm opacity-90">{currentCase?.industry}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-2 text-error" />
                    Challenge
                  </h4>
                  <p className="text-gray-600">{currentCase?.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                    Solution
                  </h4>
                  <p className="text-gray-600">{currentCase?.solution}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Results and Metrics */}
            <div className="space-y-6">
              {/* Key Results */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="TrendingUp" size={16} className="mr-2 text-success" />
                  Key Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentCase?.results)?.map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Metrics */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="BarChart3" size={16} className="mr-2 text-secondary" />
                  Campaign Metrics
                </h4>
                <div className="space-y-3">
                  {currentCase?.metrics?.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">{metric?.label}</span>
                      <span className="font-semibold text-gray-900">{metric?.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Icon name="Quote" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 italic mb-3">"{currentCase?.testimonial?.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{currentCase?.testimonial?.author}</div>
                      <div className="text-sm text-gray-600">{currentCase?.testimonial?.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="default"
              iconName="FileText"
              iconPosition="left"
              className="flex-1"
            >
              Download Full Case Study
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              className="flex-1"
            >
              Discuss Similar Campaign
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CaseStudyShowcase;