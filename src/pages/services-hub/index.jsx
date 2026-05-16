import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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

  // The "Get Started" inside a service card opens the detailed service modal
  // (NOT the generic contact form). The modal then offers a "Book Strategy Call"
  // CTA for users who want to engage further.
  const handleGetStarted = (service) => {
    setSelectedService(service);
    setShowModal(true);
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
    <div className="min-h-screen bg-[#050505] text-white noise-overlay relative">
      <Header />
      {/* Hero Section, cinematic dark */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-mesh-dark" />
        <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/30 blur-[140px] rounded-full animate-aurora" />
        <div aria-hidden className="absolute bottom-0 left-[-10%] w-[460px] h-[460px] bg-accent/30 blur-[140px] rounded-full animate-aurora" />
        <div aria-hidden className="absolute top-40 right-1/3 w-[280px] h-[280px] bg-secondary/25 blur-[120px] rounded-full animate-float-orb" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-medium tracking-[0.25em] text-white/80 uppercase">
                Services
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.02] tracking-[-0.03em] animate-fade-in">
              Services That Scale
              <span className="block font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                What Matters
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed animate-slide-up max-w-3xl mx-auto">
              Five core offerings designed to transform your growth trajectory through strategic precision and creative boldness. Each service delivers measurable results that compound over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <button
                type="button"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white text-black font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl"
              >
                Explore Services
                <span className="w-7 h-7 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="ArrowDown" size={14} />
                </span>
              </button>
              <button
                type="button"
                onClick={() => setShowContactForm(true)}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-white/20 text-white hover:border-white hover:bg-white/[0.05] transition-all duration-300"
              >
                <Icon name="Calendar" size={16} />
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Filter */}
      <section className="relative py-8 border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setActiveFilter(option?.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === option?.value
                    ? 'bg-accent text-white border border-accent shadow-brand'
                    : 'bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white hover:border-white/20'
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
      <section id="services-grid" className="relative py-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[160px]" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-6">
              <Icon name="Layers" size={14} className="text-accent" />
              <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">Our Offerings</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.02em]">
              Choose Your <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">Growth Path</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
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
              <Icon name="Search" size={48} className="text-white/40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                No services found
              </h3>
              <p className="text-white/60">
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
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-[-0.02em]">
            Ready to Scale <span className="font-serif-accent italic font-normal">What Matters?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Book a strategy call to discuss your specific growth challenges and discover how our services can accelerate your trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowContactForm(true)}
              className="hover-brand bg-white text-primary hover:bg-white/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/growth-assessment-contact')}
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
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
      <Footer />
    </div>
  );
};

export default ServicesHub;