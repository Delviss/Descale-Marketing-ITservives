import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MethodologyBreakdown = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState(0);

  const methodology = [
    {
      phase: 'Discovery & Analysis',
      icon: 'Search',
      duration: '2-4 weeks',
      description: 'Deep dive into your market position, competitive landscape, and growth opportunities',
      frameworks: [
        'Market Positioning Audit',
        'Competitive Intelligence',
        'Customer Journey Mapping',
        'Growth Opportunity Matrix'
      ],
      deliverables: [
        'Strategic Growth Roadmap',
        'Competitive Analysis Report',
        'Customer Persona Framework',
        'Channel Optimization Plan'
      ],
      color: 'from-[#C65A2E] to-[#2563EB]'
    },
    {
      phase: 'Strategy Development',
      icon: 'Target',
      duration: '3-5 weeks',
      description: 'Craft a comprehensive growth strategy tailored to your specific market and objectives',
      frameworks: [
        'DESCALE Growth Framework',
        'Channel Strategy Matrix',
        'Brand Positioning Canvas',
        'Performance Metrics Dashboard'
      ],
      deliverables: [
        'Integrated Growth Strategy',
        'Brand Positioning Guidelines',
        'Marketing Channel Plan',
        'KPI Tracking Framework'
      ],
      color: 'from-[#A8431C] to-[#C65A2E]'
    },
    {
      phase: 'Creative Execution',
      icon: 'Palette',
      duration: '4-8 weeks',
      description: 'Develop cinematic creative assets that capture attention and drive conversion',
      frameworks: [
        'Cinematic Storytelling Method',
        'Multi-Format Creative System',
        'A/B Testing Protocol',
        'Creative Performance Analytics'
      ],
      deliverables: [
        'Creative Asset Library',
        'Brand Style Guide',
        'Video Content Series',
        'Performance Creative Variants'
      ],
      color: 'from-[#C65A2E] to-[#A8431C]'
    },
    {
      phase: 'Performance Optimization',
      icon: 'TrendingUp',
      duration: '6-12 weeks',
      description: 'Launch, monitor, and optimize campaigns for maximum ROI and scalable growth',
      frameworks: [
        'Performance Monitoring Dashboard',
        'Conversion Rate Optimization',
        'Attribution Modeling',
        'Scale Factor Analysis'
      ],
      deliverables: [
        'Campaign Performance Reports',
        'Optimization Recommendations',
        'Scale Readiness Assessment',
        'ROI Improvement Roadmap'
      ],
      color: 'from-[#C65A2E] to-[#A8431C]'
    },
    {
      phase: 'Scale & Expansion',
      icon: 'Rocket',
      duration: 'Ongoing',
      description: 'Expand successful strategies across channels and markets for exponential growth',
      frameworks: [
        'Multi-Channel Expansion',
        'Market Penetration Strategy',
        'Retention & Loyalty Programs',
        'International Growth Planning'
      ],
      deliverables: [
        'Expansion Strategy Plan',
        'New Channel Integration',
        'Retention Optimization',
        'Long-term Growth Forecast'
      ],
      color: 'from-[#A8431C] to-[#2563EB]'
    }
  ];

  const challengeSolutionFrameworks = [
    {
      title: 'Challenge Identification Matrix',
      description: 'Systematic approach to identifying and prioritizing growth blockers',
      steps: [
        'Market Position Assessment',
        'Competitive Gap Analysis',
        'Customer Pain Point Mapping',
        'Internal Capability Audit'
      ]
    },
    {
      title: 'Solution Architecture Framework',
      description: 'Structured methodology for developing targeted solutions',
      steps: [
        'Strategic Solution Design',
        'Resource Allocation Planning',
        'Implementation Timeline',
        'Success Metrics Definition'
      ]
    },
    {
      title: 'Results Amplification System',
      description: 'Framework for maximizing and scaling successful outcomes',
      steps: [
        'Performance Measurement',
        'Optimization Iteration',
        'Success Replication',
        'Market Expansion Strategy'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            OUR METHODOLOGY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The systematic approach behind every 10x transformation, combining strategic frameworks with creative execution
          </p>
        </motion.div>

        {/* Phase Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {methodology?.map((phase, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activePhase === index
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <Icon name={phase?.icon} size={20} />
                <span className="hidden sm:inline">Phase {index + 1}</span>
                <span className="sm:hidden">{index + 1}</span>
              </motion.button>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700"></div>
            <div className="flex justify-between items-center">
              {methodology?.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ 
                    scale: activePhase === index ? 1.2 : 0.8,
                    opacity: activePhase === index ? 1 : 0.5
                  }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${
                    activePhase === index ? phase?.color : 'from-gray-600 to-gray-700'
                  }`}>
                    <Icon name={phase?.icon} className="text-white" size={20} />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 text-center max-w-20">
                    {phase?.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Phase Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 rounded-2xl p-8 md:p-12 border border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Phase Overview */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${methodology?.[activePhase]?.color}`}>
                    <Icon name={methodology?.[activePhase]?.icon} className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {methodology?.[activePhase]?.phase}
                    </h3>
                    <p className="text-accent font-semibold">
                      {methodology?.[activePhase]?.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {methodology?.[activePhase]?.description}
                </p>

                {/* Frameworks */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Frameworks</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {methodology?.[activePhase]?.frameworks?.map((framework, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                      >
                        <Icon name="CheckCircle" className="text-accent" size={20} />
                        <span className="text-gray-300">{framework}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Phase Deliverables</h4>
                <div className="space-y-4">
                  {methodology?.[activePhase]?.deliverables?.map((deliverable, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-accent/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r ${methodology?.[activePhase]?.color}`}>
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-white font-medium">{deliverable}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Phase Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                    disabled={activePhase === 0}
                    iconName="ChevronLeft"
                    iconPosition="left"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActivePhase(Math.min(methodology?.length - 1, activePhase + 1))}
                    disabled={activePhase === methodology?.length - 1}
                    iconName="ChevronRight"
                    iconPosition="right"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Challenge-Solution Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Challenge-Solution Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challengeSolutionFrameworks?.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  {framework?.title}
                </h4>
                <p className="text-gray-300 mb-6">
                  {framework?.description}
                </p>
                <div className="space-y-3">
                  {framework?.steps?.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-semibold text-sm">{stepIndex + 1}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold"
            onClick={() => navigate('/growth-assessment-contact')}
          >
            Apply Our Methodology to Your Brand
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyBreakdown;