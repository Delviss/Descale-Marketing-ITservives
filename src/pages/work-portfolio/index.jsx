import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import FilterControls from './components/FilterControls';
import MetricsReveal from './components/MetricsReveal';
import VideoTestimonials from './components/VideoTestimonials';
import MethodologyBreakdown from './components/MethodologyBreakdown';

const WorkPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);

  const caseStudies = [
    {
      id: 1,
      title: 'FinTech Startup: Series A to IPO Journey',
      industry: 'FinTech',
      stage: 'Scale',
      service: 'Performance',
      challenge: 'Plateau at $50M ARR with declining user acquisition',
      solution: 'Multi-channel growth strategy with performance optimization',
      results: {
        growth: '12x',
        cac: '-67%',
        ltv: '+245%',
        revenue: '$600M ARR'
      },
      timeline: '18 months',
      image: '/assets/images/case-fintech.jpg',
      video: '/assets/videos/fintech-testimonial.mp4',
      founder: 'Sarah Chen, CEO',
      testimonial: 'DESCALE transformed our entire growth trajectory. Their strategic approach helped us break through our plateau and achieve exponential scale.',
      beforeMetrics: { users: '500K', revenue: '$50M', cac: '$450' },
      afterMetrics: { users: '6M', revenue: '$600M', cac: '$150' }
    },
    {
      id: 2,
      title: 'E-commerce Brand: Breaking Through $100M',
      industry: 'E-commerce',
      stage: 'Enterprise',
      service: 'Brand',
      challenge: 'Commodity positioning in saturated market',
      solution: 'Premium brand transformation with creative differentiation',
      results: {
        growth: '8x',
        cac: '-45%',
        ltv: '+180%',
        revenue: '$850M'
      },
      timeline: '24 months',
      image: '/assets/images/case-ecommerce.jpg',
      video: '/assets/videos/ecommerce-testimonial.mp4',
      founder: 'Marcus Rodriguez, Founder',
      testimonial: 'The brand transformation was incredible. We went from being just another player to the premium choice in our category.',
      beforeMetrics: { revenue: '$100M', margins: '12%', brandValue: '$50M' },
      afterMetrics: { revenue: '$850M', margins: '28%', brandValue: '$400M' }
    },
    {
      id: 3,
      title: 'SaaS Platform: Early Stage Acceleration',
      industry: 'SaaS',
      stage: 'Early',
      service: 'Analytics',
      challenge: 'Low product-market fit signals and poor retention',
      solution: 'Data-driven product optimization and growth loops',
      results: {
        growth: '15x',
        cac: '-58%',
        ltv: '+320%',
        revenue: '$45M ARR'
      },
      timeline: '12 months',
      image: '/assets/images/case-saas.jpg',
      video: '/assets/videos/saas-testimonial.mp4',
      founder: 'Alex Kim, CTO & Co-founder',
      testimonial: 'Their analytical approach uncovered growth opportunities we never saw. The results speak for themselves.',
      beforeMetrics: { mrr: '$250K', churn: '8%', nps: 25 },
      afterMetrics: { mrr: '$3.75M', churn: '2%', nps: 78 }
    },
    {
      id: 4,
      title: 'HealthTech Innovation: Series B Success',
      industry: 'HealthTech',
      stage: 'Scale',
      service: 'Creative',
      challenge: 'Complex product messaging and regulatory constraints',
      solution: 'Cinematic storytelling with compliance-first creative',
      results: {
        growth: '10x',
        cac: '-52%',
        ltv: '+190%',
        revenue: '$120M ARR'
      },
      timeline: '20 months',
      image: '/assets/images/case-healthtech.jpg',
      video: '/assets/videos/healthtech-testimonial.mp4',
      founder: 'Dr. Emily Watson, CEO',
      testimonial: 'They made our complex technology accessible and compelling. The creative work exceeded all expectations.',
      beforeMetrics: { patients: '50K', revenue: '$12M', satisfaction: 7.2 },
      afterMetrics: { patients: '500K', revenue: '$120M', satisfaction: 9.1 }
    }
  ];

  useEffect(() => {
    let filtered = caseStudies;

    if (activeFilter !== 'all') {
      filtered = filtered?.filter(study => study?.industry?.toLowerCase() === activeFilter);
    }

    if (selectedStage !== 'all') {
      filtered = filtered?.filter(study => study?.stage?.toLowerCase() === selectedStage);
    }

    if (selectedService !== 'all') {
      filtered = filtered?.filter(study => study?.service?.toLowerCase() === selectedService);
    }

    setFilteredCaseStudies(filtered);
  }, [activeFilter, selectedStage, selectedService]);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight">
              TRANSFORMATION
              <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                STORIES
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Cinematic case studies showcasing exponential growth journeys. From Series A startups to enterprise brands, discover the strategic frameworks that drive 10x results.
            </p>
          </motion.div>

          <MetricsReveal />
        </div>
      </section>
      {/* Filter Controls */}
      <FilterControls 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        selectedStage={selectedStage}
        setSelectedStage={setSelectedStage}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      {/* Case Studies Showcase */}
      <CaseStudyShowcase caseStudies={filteredCaseStudies} />
      {/* Video Testimonials */}
      <VideoTestimonials caseStudies={filteredCaseStudies} />
      {/* Methodology Breakdown */}
      <MethodologyBreakdown />
      <Footer />
    </div>
  );
};

export default WorkPortfolio;