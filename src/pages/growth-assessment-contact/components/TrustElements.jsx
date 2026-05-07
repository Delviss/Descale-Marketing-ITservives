import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustElements = () => {
  const trustSignals = [
    {
      icon: 'Clock',
      title: 'Response Time',
      description: 'Strategy calls within 48 hours',
      metric: '< 48hrs'
    },
    {
      icon: 'Shield',
      title: 'Consultation Process',
      description: 'Structured discovery and analysis',
      metric: '5-Step Process'
    },
    {
      icon: 'Users',
      title: 'Expert Team',
      description: 'Growth specialists and strategists',
      metric: '15+ Years Exp'
    },
    {
      icon: 'TrendingUp',
      title: 'Success Rate',
      description: 'Clients achieve growth targets',
      metric: '94% Success'
    }
  ];

  const consultationProcess = [
    {
      step: 1,
      title: 'Initial Discovery',
      description: 'Deep dive into current state, goals, and challenges',
      duration: '15 minutes'
    },
    {
      step: 2,
      title: 'Opportunity Analysis',
      description: 'Identify highest-impact growth opportunities',
      duration: '15 minutes'
    },
    {
      step: 3,
      title: 'Strategic Roadmap',
      description: 'Create prioritized action plan with timelines',
      duration: '10 minutes'
    },
    {
      step: 4,
      title: 'Investment Discussion',
      description: 'Review options and investment requirements',
      duration: '5 minutes'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustSignals?.map((signal, index) => (
            <div key={index} className="bg-card p-6 rounded-lg text-center hover-lift border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={signal?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{signal?.metric}</div>
              <h3 className="font-semibold text-text-primary mb-1">{signal?.title}</h3>
              <p className="text-sm text-text-secondary">{signal?.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Process */}
        <div className="bg-card p-8 rounded-xl shadow-brand border border-border">
          <h3 className="text-2xl font-bold text-center text-text-primary mb-8">
            What to Expect From Your Strategy Call
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationProcess?.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < consultationProcess?.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-border z-0" />
                )}
                
                <div className="relative z-10 bg-muted p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-3">
                    {step?.step}
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{step?.title}</h4>
                  <p className="text-sm text-text-secondary mb-2">{step?.description}</p>
                  <div className="text-xs text-primary font-medium">{step?.duration}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-center mb-2">
              <Icon name="Check" size={20} className="text-success mr-2" />
              <span className="font-semibold text-success">Commitment-Free Discovery</span>
            </div>
            <p className="text-sm text-text-secondary">
              No pressure, no obligations. Our strategy calls are focused on understanding your challenges and providing value regardless of whether we work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;