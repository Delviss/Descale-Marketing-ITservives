import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore, onGetStarted }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-md hover:shadow-brand-lg transition-all duration-500 overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      {/* Service Icon */}
      <div className="relative p-8 pb-6">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 ${
          isHovered ? 'bg-primary shadow-brand' : 'bg-surface'
        }`}>
          <Icon 
            name={service?.icon} 
            size={32} 
            className={`transition-colors duration-500 ${
              isHovered ? 'text-white' : 'text-primary'
            }`}
          />
        </div>

        {/* Service Title */}
        <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
          {service?.title}
        </h3>

        {/* Service Description */}
        <p className="text-text-secondary leading-relaxed mb-6">
          {service?.description}
        </p>

        {/* Key Features */}
        <div className="space-y-3 mb-8">
          {service?.features?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Icon name="Check" size={12} className="text-success" />
              </div>
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-surface rounded-lg">
          {service?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
              <div className="text-xs text-text-secondary">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLearnMore(service)}
            className="flex-1 hover-brand"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Learn More
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onGetStarted(service)}
            className="flex-1 hover-brand"
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
        </div>
      </div>
      {/* Hover Effect Border */}
      <div className={`absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
};

export default ServiceCard;