import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ServiceCard from './components/ServiceCard';
import ServiceModal from './components/ServiceModal';
import TrustSignals from './components/TrustSignals';
import ServiceComparison from './components/ServiceComparison';
import ContactForm from './components/ContactForm';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServicesHub = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'brand-strategy',
      title: 'Brand Strategy & Positioning',
      icon: 'Target',
      description: 'Transform your brand into a market-leading force with strategic positioning that resonates with your target audience and drives exponential growth.',
      features: [
        'Comprehensive brand audit and competitive analysis',
        'Strategic positioning framework development',
        'Brand messaging and voice guidelines',
        'Go-to-market strategy optimization'
      ],
      metrics: [
        { value: '340%', label: 'Brand Recognition Increase' },
        { value: '8-12', label: 'Week Timeline' }
      ],
      methodology: [
        {
          title: 'Discovery & Audit',
          description: 'Deep dive into your current brand position, competitive landscape, and market opportunities.'
        },
        {
          title: 'Strategic Framework',
          description: 'Develop positioning strategy, messaging hierarchy, and brand architecture.'
        },
        {
          title: 'Implementation Guide',
          description: 'Create actionable roadmap for brand rollout across all touchpoints.'
        },
        {
          title: 'Performance Tracking',
          description: 'Establish KPIs and monitoring systems to measure brand impact.'
        }
      ],
      deliverables: [
        'Brand Strategy Document (50+ pages)',
        'Positioning Framework & Messaging Guide',
        'Competitive Analysis Report',
        'Brand Guidelines & Style Guide',
        'Go-to-Market Implementation Plan',
        'Performance Measurement Framework'
      ],
      timeline: '8-12 weeks',
      startingPrice: '$15,000',
      caseStudies: [
        {
          client: 'TechFlow SaaS',
          challenge: 'Unclear positioning in crowded market',
          result: '340% increase in brand recognition'
        },
        {
          client: 'GrowthCo Startup',
          challenge: 'Inconsistent brand messaging',
          result: '250% improvement in message clarity'
        }
      ],
      strategyDepth: 'Comprehensive',
      reporting: 'Bi-weekly',
      teamSize: '4-6 experts',
      platforms: 'All channels',
      optimization: 'Quarterly reviews',
      creative: 'Full brand system',
      tracking: 'Brand health metrics'
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      icon: 'TrendingUp',
      description: 'Drive measurable growth through data-driven campaigns across Google, Meta, LinkedIn, and emerging platforms with full attribution modeling.',
      features: [
        'Multi-channel campaign management',
        'Advanced attribution modeling',
        'Conversion rate optimization',
        'Real-time performance tracking'
      ],
      metrics: [
        { value: '450%', label: 'Average ROAS' },
        { value: '2-4', label: 'Week Launch' }
      ],
      methodology: [
        {
          title: 'Account Audit',
          description: 'Comprehensive analysis of existing campaigns, tracking setup, and optimization opportunities.'
        },
        {
          title: 'Strategy Development',
          description: 'Create multi-channel strategy with budget allocation and targeting frameworks.'
        },
        {
          title: 'Campaign Launch',
          description: 'Execute campaigns across platforms with proper tracking and attribution setup.'
        },
        {
          title: 'Optimization Cycles',
          description: 'Continuous testing, optimization, and scaling based on performance data.'
        }
      ],
      deliverables: [
        'Multi-Channel Strategy Document',
        'Campaign Setup & Launch',
        'Attribution Tracking Implementation',
        'Weekly Performance Reports',
        'Monthly Optimization Reviews',
        'Quarterly Strategy Updates'
      ],
      timeline: '2-4 weeks setup, ongoing optimization',
      startingPrice: '$8,000',
      caseStudies: [
        {
          client: 'E-commerce Brand',
          challenge: 'Low ROAS across channels',
          result: '450% ROAS improvement'
        },
        {
          client: 'B2B SaaS Company',
          challenge: 'High customer acquisition costs',
          result: '60% reduction in CAC'
        }
      ],
      strategyDepth: 'Data-driven',
      reporting: 'Weekly',
      teamSize: '3-4 specialists',
      platforms: 'Google, Meta, LinkedIn+',
      optimization: 'Daily monitoring',
      creative: 'Performance-focused',
      tracking: 'Real-time dashboards'
    },
    {
      id: 'creative-content',
      title: 'Creative Content & Storytelling',
      icon: 'Video',
      description: 'Craft compelling narratives and high-converting creative assets that capture attention, drive engagement, and accelerate your growth trajectory.',
      features: [
        'Video production and editing',
        'Social media content creation',
        'Brand storytelling frameworks',
        'Performance creative optimization'
      ],
      metrics: [
        { value: '280%', label: 'Engagement Increase' },
        { value: '4-6', label: 'Week Production' }
      ],
      methodology: [
        {
          title: 'Creative Strategy',
          description: 'Develop content strategy aligned with brand goals and audience preferences.'
        },
        {
          title: 'Content Production',
          description: 'Create high-quality video, graphic, and written content across formats.'
        },
        {
          title: 'Performance Testing',
          description: 'A/B test creative variations to identify top-performing assets.'
        },
        {
          title: 'Scaling & Optimization',
          description: 'Scale winning creative concepts and continuously optimize performance.'
        }
      ],
      deliverables: [
        'Creative Strategy & Content Calendar',
        '20+ Video Assets per Month',
        '50+ Social Media Graphics',
        'Brand Story Framework',
        'Performance Creative Reports',
        'Content Optimization Guidelines'
      ],
      timeline: '4-6 weeks initial, ongoing production',
      startingPrice: '$12,000',
      caseStudies: [
        {
          client: 'Fashion Brand',
          challenge: 'Low social media engagement',
          result: '280% engagement increase'
        },
        {
          client: 'Tech Startup',
          challenge: 'Complex product messaging',
          result: '190% conversion rate improvement'
        }
      ],
      strategyDepth: 'Story-driven',
      reporting: 'Bi-weekly',
      teamSize: '5-7 creatives',
      platforms: 'All social + web',
      optimization: 'Creative testing',
      creative: 'Full production',
      tracking: 'Engagement metrics'
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      icon: 'Share2',
      description: 'Build engaged communities and drive conversions through strategic social media management, influencer partnerships, and viral campaign development.',
      features: [
        'Platform-specific strategy development',
        'Community management and engagement',
        'Influencer partnership coordination',
        'Viral campaign creation and execution'
      ],
      metrics: [
        { value: '520%', label: 'Follower Growth' },
        { value: '1-2', label: 'Week Launch' }
      ],
      methodology: [
        {
          title: 'Social Audit',
          description: 'Analyze current social presence, audience insights, and competitive landscape.'
        },
        {
          title: 'Platform Strategy',
          description: 'Develop platform-specific strategies and content frameworks.'
        },
        {
          title: 'Community Building',
          description: 'Execute engagement strategies and build authentic community connections.'
        },
        {
          title: 'Growth Acceleration',
          description: 'Scale successful tactics and explore new growth opportunities.'
        }
      ],
      deliverables: [
        'Social Media Strategy Document',
        'Platform-Specific Content Calendars',
        'Community Management Guidelines',
        'Influencer Partnership Framework',
        'Weekly Performance Reports',
        'Monthly Growth Analysis'
      ],
      timeline: '1-2 weeks setup, ongoing management',
      startingPrice: '$6,000',
      caseStudies: [
        {
          client: 'Lifestyle Brand',
          challenge: 'Stagnant social growth',
          result: '520% follower increase'
        },
        {
          client: 'B2C Service',
          challenge: 'Low engagement rates',
          result: '340% engagement boost'
        }
      ],
      strategyDepth: 'Community-focused',
      reporting: 'Weekly',
      teamSize: '3-5 managers',
      platforms: 'All major social',
      optimization: 'Content testing',
      creative: 'Social-native',
      tracking: 'Engagement + conversions'
    },
    {
      id: 'analytics-growth',
      title: 'Analytics & Growth Engineering',
      icon: 'BarChart3',
      description: 'Implement advanced analytics infrastructure, growth experimentation frameworks, and data-driven optimization systems for sustainable scaling.',
      features: [
        'Advanced analytics setup and configuration',
        'Growth experimentation frameworks',
        'Custom dashboard development',
        'Predictive modeling and forecasting'
      ],
      metrics: [
        { value: '95%', label: 'Data Accuracy' },
        { value: '3-5', label: 'Week Implementation' }
      ],
      methodology: [
        {
          title: 'Analytics Audit',
          description: 'Evaluate current tracking setup and identify data gaps and opportunities.'
        },
        {
          title: 'Infrastructure Setup',
          description: 'Implement advanced tracking, attribution, and reporting systems.'
        },
        {
          title: 'Experimentation Framework',
          description: 'Establish A/B testing protocols and growth experiment processes.'
        },
        {
          title: 'Optimization Engine',
          description: 'Create automated optimization systems and predictive models.'
        }
      ],
      deliverables: [
        'Analytics Implementation Plan',
        'Custom Dashboard Setup',
        'Attribution Model Configuration',
        'Growth Experimentation Framework',
        'Automated Reporting Systems',
        'Predictive Analytics Models'
      ],
      timeline: '3-5 weeks implementation, ongoing optimization',
      startingPrice: '$10,000',
      caseStudies: [
        {
          client: 'SaaS Platform',
          challenge: 'Incomplete data tracking',
          result: '95% improvement in data accuracy'
        },
        {
          client: 'E-commerce Store',
          challenge: 'Poor attribution visibility',
          result: '300% better ROI visibility'
        }
      ],
      strategyDepth: 'Technical',
      reporting: 'Real-time',
      teamSize: '2-4 engineers',
      platforms: 'All data sources',
      optimization: 'Automated',
      creative: 'Data visualizations',
      tracking: 'Advanced attribution'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Services', icon: 'Grid3X3' },
    { value: 'strategy', label: 'Strategy', icon: 'Target' },
    { value: 'marketing', label: 'Marketing', icon: 'TrendingUp' },
    { value: 'creative', label: 'Creative', icon: 'Video' },
    { value: 'analytics', label: 'Analytics', icon: 'BarChart3' }
  ];

  const filteredServices = services?.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'strategy') return service?.id === 'brand-strategy';
    if (activeFilter === 'marketing') return ['performance-marketing', 'social-media']?.includes(service?.id);
    if (activeFilter === 'creative') return service?.id === 'creative-content';
    if (activeFilter === 'analytics') return service?.id === 'analytics-growth';
    return true;
  });

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleGetStarted = (service) => {
    setSelectedService(service);
    setShowContactForm(true);
  };

  const handleBookCall = (service) => {
    setSelectedService(service);
    setShowModal(false);
    setShowContactForm(true);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowContactForm(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
              Services That Scale
              <span className="block text-accent">What Matters</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Five core offerings designed to transform your growth trajectory through strategic precision and creative boldness. Each service delivers measurable results that compound over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-brand"
                iconName="ArrowDown"
                iconPosition="right"
              >
                Explore Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowContactForm(true)}
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Service Filter */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setActiveFilter(option?.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === option?.value
                    ? 'bg-primary text-white shadow-brand'
                    : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={option?.icon} size={16} />
                <span>{option?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section id="services-grid" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Choose Your Growth Path
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Each service is designed to work independently or as part of an integrated growth system. 
              Select the services that align with your current priorities and scaling objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices?.map((service) => (
              <ServiceCard
                key={service?.id}
                service={service}
                onLearnMore={handleLearnMore}
                onGetStarted={handleGetStarted}
              />
            ))}
          </div>

          {filteredServices?.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                No services found
              </h3>
              <p className="text-text-secondary">
                Try adjusting your filter selection
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Service Comparison */}
      <ServiceComparison 
        services={services} 
        onSelectService={handleSelectService}
      />
      {/* Trust Signals */}
      <TrustSignals />
      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale What Matters?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a strategy call to discuss your specific growth challenges and discover how our services can accelerate your trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowContactForm(true)}
              className="hover-brand"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/growth-assessment-contact'}
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="TrendingUp"
              iconPosition="right"
            >
              Take Growth Assessment
            </Button>
          </div>
        </div>
      </section>
      {/* Modals */}
      <ServiceModal
        service={selectedService}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onBookCall={handleBookCall}
      />
      <ContactForm
        selectedService={selectedService}
        onClose={() => setShowContactForm(false)}
      />
      <Footer />
    </div>
  );
};

export default ServicesHub;