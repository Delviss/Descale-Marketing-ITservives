import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MetricsReveal = () => {
  const [currentMetricSet, setCurrentMetricSet] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  const metricSets = [
    {
      title: 'Portfolio Performance',
      metrics: [
        { label: 'Average Growth', value: '12x', suffix: 'Multiplier' },
        { label: 'CAC Reduction', value: '55%', suffix: 'Average' },
        { label: 'Revenue Generated', value: '$2.1B+', suffix: 'Total' }
      ]
    },
    {
      title: 'Client Success Rate',
      metrics: [
        { label: 'Success Rate', value: '96%', suffix: 'Clients' },
        { label: 'Repeat Business', value: '87%', suffix: 'Rate' },
        { label: 'Referrals', value: '73%', suffix: 'New Clients' }
      ]
    },
    {
      title: 'Innovation Impact',
      metrics: [
        { label: 'Industries Disrupted', value: '12+', suffix: 'Sectors' },
        { label: 'Awards Won', value: '47', suffix: 'Recognition' },
        { label: 'Market Leaders Created', value: '23', suffix: 'Brands' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRevealing(true);
      setTimeout(() => {
        setCurrentMetricSet((prev) => (prev + 1) % metricSets?.length);
        setIsRevealing(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="relative"
    >
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMetricSet}
            initial={{ opacity: 0, y: 30, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -30, rotateX: -90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {metricSets?.[currentMetricSet]?.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metricSets?.[currentMetricSet]?.metrics?.map((metric, index) => (
                <motion.div
                  key={`${currentMetricSet}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-black/40 rounded-2xl p-6 border border-white/10 group-hover:border-accent/30 transition-all duration-300">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="space-y-2"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
                        {metric?.value}
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {metric?.label}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {metric?.suffix}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {metricSets?.map((set, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentMetricSet(index)}
              aria-label={`Show metric set ${index + 1}: ${set?.title || ''}`.trim()}
              aria-current={index === currentMetricSet ? 'true' : undefined}
              className="p-2.5 flex items-center justify-center"
            >
              <motion.span
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentMetricSet
                    ? 'bg-accent' :'bg-white/20 hover:bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </button>
          ))}
        </div>

        {/* Revealing Animation Overlay */}
        <AnimatePresence>
          {isRevealing && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 rounded-3xl"
              style={{ originY: 0 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MetricsReveal;