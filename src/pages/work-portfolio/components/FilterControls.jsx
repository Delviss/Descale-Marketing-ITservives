import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FilterControls = ({
  activeFilter,
  setActiveFilter,
  selectedStage,
  setSelectedStage,
  selectedService,
  setSelectedService
}) => {
  const industries = [
    { id: 'all', label: 'All Industries', icon: 'Grid3x3' },
    { id: 'saas', label: 'SaaS', icon: 'Cloud' },
    { id: 'e-commerce', label: 'E-commerce', icon: 'ShoppingCart' },
    { id: 'fintech', label: 'FinTech', icon: 'CreditCard' },
    { id: 'healthtech', label: 'HealthTech', icon: 'Heart' }
  ];

  const stages = [
    { id: 'all', label: 'All Stages', icon: 'Target' },
    { id: 'early', label: 'Early', icon: 'Rocket' },
    { id: 'scale', label: 'Scale', icon: 'TrendingUp' },
    { id: 'enterprise', label: 'Enterprise', icon: 'Building2' }
  ];

  const services = [
    { id: 'all', label: 'All Services', icon: 'Settings' },
    { id: 'brand', label: 'Brand', icon: 'Palette' },
    { id: 'performance', label: 'Performance', icon: 'BarChart3' },
    { id: 'creative', label: 'Creative', icon: 'Lightbulb' },
    { id: 'social', label: 'Social', icon: 'Users' },
    { id: 'analytics', label: 'Analytics', icon: 'LineChart' }
  ];

  const FilterButton = ({ item, isActive, onClick }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-primary text-white shadow-lg'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
      }`}
    >
      <Icon name={item?.icon} size={18} />
      <span>{item?.label}</span>
    </motion.button>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Filter Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore case studies by industry vertical, growth stage, and service focus
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Industry Filter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Icon name="Building" className="mr-2" />
              Industry Vertical
            </h3>
            <div className="flex flex-wrap gap-3">
              {industries?.map((industry) => (
                <FilterButton
                  key={industry?.id}
                  item={industry}
                  isActive={activeFilter === industry?.id}
                  onClick={() => setActiveFilter(industry?.id)}
                />
              ))}
            </div>
          </div>

          {/* Stage Filter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Icon name="TrendingUp" className="mr-2" />
              Growth Stage
            </h3>
            <div className="flex flex-wrap gap-3">
              {stages?.map((stage) => (
                <FilterButton
                  key={stage?.id}
                  item={stage}
                  isActive={selectedStage === stage?.id}
                  onClick={() => setSelectedStage(stage?.id)}
                />
              ))}
            </div>
          </div>

          {/* Service Filter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Icon name="Briefcase" className="mr-2" />
              Service Focus
            </h3>
            <div className="flex flex-wrap gap-3">
              {services?.map((service) => (
                <FilterButton
                  key={service?.id}
                  item={service}
                  isActive={selectedService === service?.id}
                  onClick={() => setSelectedService(service?.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <span className="text-gray-400">Active filters:</span>
          {activeFilter !== 'all' && (
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
              {industries?.find(i => i?.id === activeFilter)?.label}
            </span>
          )}
          {selectedStage !== 'all' && (
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {stages?.find(s => s?.id === selectedStage)?.label}
            </span>
          )}
          {selectedService !== 'all' && (
            <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm font-medium">
              {services?.find(s => s?.id === selectedService)?.label}
            </span>
          )}
          {(activeFilter !== 'all' || selectedStage !== 'all' || selectedService !== 'all') && (
            <button
              onClick={() => {
                setActiveFilter('all');
                setSelectedStage('all');
                setSelectedService('all');
              }}
              className="text-gray-400 hover:text-accent transition-colors text-sm underline"
            >
              Clear all filters
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FilterControls;