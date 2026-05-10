import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ services, onSelectService }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleServiceSelection = (serviceId) => {
    setSelectedServices(prev => {
      if (prev?.includes(serviceId)) {
        return prev?.filter(id => id !== serviceId);
      } else if (prev?.length < 3) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const comparisonFeatures = [
    "Strategy Development",
    "Implementation Timeline",
    "Reporting Frequency",
    "Team Size",
    "Platform Coverage",
    "Optimization Cycles",
    "Creative Assets",
    "Performance Tracking"
  ];

  const getFeatureValue = (service, feature) => {
    const featureMap = {
      "Strategy Development": service?.strategyDepth || "Comprehensive",
      "Implementation Timeline": service?.timeline || "8-12 weeks",
      "Reporting Frequency": service?.reporting || "Weekly",
      "Team Size": service?.teamSize || "3-5 experts",
      "Platform Coverage": service?.platforms || "Multi-platform",
      "Optimization Cycles": service?.optimization || "Continuous",
      "Creative Assets": service?.creative || "Custom",
      "Performance Tracking": service?.tracking || "Real-time"
    };
    return featureMap?.[feature];
  };

  return (
    <section className="relative py-20 overflow-hidden border-y border-white/10">
      <div aria-hidden className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[160px]" />
      <div aria-hidden className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-6">
            <Icon name="GitCompare" size={14} className="text-accent" />
            <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">Compare</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.02em]">
            Compare Our <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">Services</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
            Select up to 3 services to compare features, timelines, and deliverables
          </p>
          <div className="text-sm text-white/60">
            Selected: <span className="text-accent font-semibold">{selectedServices?.length}</span>/3 services
          </div>
        </div>

        {/* Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {services?.map((service) => {
            const isSelected = selectedServices?.includes(service?.id);
            return (
              <div
                key={service?.id}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 backdrop-blur-md ${
                  isSelected
                    ? 'border-accent/50 bg-accent/10 shadow-brand'
                    : 'border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]'
                }`}
                onClick={() => toggleServiceSelection(service?.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-br from-accent to-primary shadow-brand'
                      : 'bg-white/[0.07] border border-white/10'
                  }`}>
                    <Icon
                      name={service?.icon}
                      size={22}
                      className={isSelected ? 'text-white' : 'text-accent'}
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-white mb-3 leading-tight">{service?.title}</h3>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-accent border-accent'
                      : 'border-white/30 bg-transparent'
                  }`}>
                    {isSelected && <Icon name="Check" size={12} className="text-white" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        {selectedServices?.length > 0 && (
          <div className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl p-6 overflow-x-auto shadow-brand">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold text-white">Features</th>
                  {selectedServices?.map(serviceId => {
                    const service = services?.find(s => s?.id === serviceId);
                    return (
                      <th key={serviceId} className="text-center py-4 px-4 font-semibold text-white min-w-[200px]">
                        <div className="flex flex-col items-center">
                          <div className="w-9 h-9 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-2 shadow-brand">
                            <Icon name={service?.icon} size={16} className="text-white" />
                          </div>
                          <span className="text-sm leading-tight">{service?.title}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures?.map((feature, index) => (
                  <tr key={feature} className={`${index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} border-b border-white/5`}>
                    <td className="py-4 px-4 font-medium text-white/90">{feature}</td>
                    {selectedServices?.map(serviceId => {
                      const service = services?.find(s => s?.id === serviceId);
                      return (
                        <td key={serviceId} className="py-4 px-4 text-center text-white/70">
                          {getFeatureValue(service, feature)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="border-t border-white/10">
                  <td className="py-5 px-4 font-medium text-white/90">Starting Investment</td>
                  {selectedServices?.map(serviceId => {
                    const service = services?.find(s => s?.id === serviceId);
                    return (
                      <td key={serviceId} className="py-5 px-4 text-center">
                        <div className="font-display text-xl font-bold text-accent">{service?.startingPrice}</div>
                        <div className="text-xs text-white/60">per month</div>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="py-4 px-4"></td>
                  {selectedServices?.map(serviceId => {
                    const service = services?.find(s => s?.id === serviceId);
                    return (
                      <td key={serviceId} className="py-4 px-4 text-center">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => onSelectService(service)}
                          className="bg-accent text-white hover:bg-accent/90 hover-brand"
                          iconName="ArrowRight"
                          iconPosition="right"
                        >
                          Select Service
                        </Button>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {selectedServices?.length === 0 && (
          <div className="text-center py-12 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl">
            <Icon name="MousePointer" size={48} className="text-white/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Select Services to Compare
            </h3>
            <p className="text-white/60">
              Click on the service cards above to start comparing features and pricing
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceComparison;
