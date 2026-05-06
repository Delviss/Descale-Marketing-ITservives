import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CaseStudyShowcase = ({ caseStudies }) => {
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeTab, setActiveTab] = useState('challenge');

  const tabs = [
    { id: 'challenge', label: 'Challenge', icon: 'AlertCircle' },
    { id: 'solution', label: 'Solution', icon: 'Lightbulb' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'timeline', label: 'Timeline', icon: 'Clock' }
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
            CASE STUDIES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore detailed transformation journeys with interactive metrics and strategic breakdowns
          </p>
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies?.map((study, index) => (
            <motion.div
              key={study?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(study)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-accent transition-all duration-300">
                {/* Case Study Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {study?.industry?.charAt(0)}
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-accent/20 rounded-full text-accent text-sm font-semibold">
                        {study?.industry}
                      </span>
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-semibold">
                        {study?.stage}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {study?.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {study?.challenge}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">
                            {study?.results?.growth}
                          </div>
                          <div className="text-xs text-gray-400">Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">
                            {study?.results?.revenue}
                          </div>
                          <div className="text-xs text-gray-400">Revenue</div>
                        </div>
                      </div>
                      <Icon name="ArrowRight" className="text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e?.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative p-8 border-b border-gray-700">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon name="X" size={24} />
                  </button>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedCase?.title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold">
                      {selectedCase?.industry}
                    </span>
                    <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold">
                      {selectedCase?.stage}
                    </span>
                    <span className="px-4 py-2 bg-gray-700 rounded-full text-white font-semibold">
                      {selectedCase?.service}
                    </span>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="px-8 pt-6">
                  <div className="flex space-x-6 border-b border-gray-700">
                    {tabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`flex items-center space-x-2 pb-4 px-2 border-b-2 transition-colors ${
                          activeTab === tab?.id
                            ? 'border-accent text-accent' :'border-transparent text-gray-400 hover:text-white'
                        }`}
                      >
                        <Icon name={tab?.icon} size={20} />
                        <span className="font-semibold">{tab?.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {activeTab === 'challenge' && (
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-6">The Challenge</h4>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          {selectedCase?.challenge}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-gray-800 rounded-lg p-6">
                            <div className="text-3xl font-bold text-red-400 mb-2">
                              Before
                            </div>
                            <div className="space-y-2">
                              {Object?.entries(selectedCase?.beforeMetrics || {})?.map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-gray-400 capitalize">{key}:</span>
                                  <span className="text-white font-semibold">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'solution' && (
                      <motion.div
                        key="solution"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-6">Our Solution</h4>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          {selectedCase?.solution}
                        </p>
                      </motion.div>
                    )}

                    {activeTab === 'results' && (
                      <motion.div
                        key="results"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-6">The Results</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">
                              {selectedCase?.results?.growth}
                            </div>
                            <div className="text-gray-400">Growth</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">
                              {selectedCase?.results?.cac}
                            </div>
                            <div className="text-gray-400">CAC Reduction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">
                              {selectedCase?.results?.ltv}
                            </div>
                            <div className="text-gray-400">LTV Increase</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">
                              {selectedCase?.results?.revenue}
                            </div>
                            <div className="text-gray-400">Revenue</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-gray-800 rounded-lg p-6 md:col-span-2">
                            <div className="text-3xl font-bold text-accent mb-2">
                              After
                            </div>
                            <div className="space-y-2">
                              {Object?.entries(selectedCase?.afterMetrics || {})?.map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-gray-400 capitalize">{key}:</span>
                                  <span className="text-white font-semibold">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'timeline' && (
                      <motion.div
                        key="timeline"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-6">Project Timeline</h4>
                        <div className="text-center">
                          <div className="text-6xl font-bold text-accent mb-4">
                            {selectedCase?.timeline}
                          </div>
                          <p className="text-gray-300 text-lg">
                            From initial strategy to final implementation
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Modal Footer */}
                <div className="px-8 pb-8">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                    onClick={() => navigate('/growth-assessment-contact')}
                  >
                    Start Your Transformation
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;