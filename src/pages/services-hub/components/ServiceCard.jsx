import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore, onGetStarted }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl shadow-brand hover:shadow-brand-strong transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft gradient glow on hover */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/0 group-hover:bg-accent/15 blur-3xl transition-colors duration-500 pointer-events-none"
      />

      {/* Service Icon */}
      <div className="relative p-8 pb-6">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
          isHovered
            ? 'bg-gradient-to-br from-accent to-primary shadow-brand'
            : 'bg-white/[0.07] border border-white/10'
        }`}>
          <Icon
            name={service?.icon}
            size={30}
            className={`transition-colors duration-500 ${
              isHovered ? 'text-white' : 'text-accent'
            }`}
          />
        </div>

        {/* Service Title */}
        <h3 className="font-display text-2xl font-bold text-white mb-4 leading-tight tracking-tight">
          {service?.title}
        </h3>

        {/* Service Description */}
        <p className="text-white/70 leading-relaxed mb-6">
          {service?.description}
        </p>

        {/* Key Features */}
        <div className="space-y-3 mb-8">
          {service?.features?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Icon name="Check" size={11} className="text-accent" />
              </div>
              <span className="text-sm text-white/75 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-white/[0.04] border border-white/10 rounded-xl">
          {service?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-2xl font-bold text-accent mb-1">{metric?.value}</div>
              <div className="text-xs text-white/60 leading-tight">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLearnMore(service)}
            className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Learn More
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onGetStarted(service)}
            className="flex-1 bg-accent text-white hover:bg-accent/90 hover-brand"
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/40 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default ServiceCard;
