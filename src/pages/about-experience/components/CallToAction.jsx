import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const navigate = useNavigate();
  const stats = [
    {
      number: "400%",
      label: "Average Revenue Growth",
      icon: "TrendingUp"
    },
    {
      number: "50+",
      label: "Brands Scaled",
      icon: "Building"
    },
    {
      number: "$50M+",
      label: "Client Funding Raised",
      icon: "DollarSign"
    },
    {
      number: "98%",
      label: "Client Retention Rate",
      icon: "Heart"
    }
  ];

  const nextSteps = [
    {
      step: "01",
      title: "Growth Assessment",
      description: "Complete our comprehensive growth diagnostic to identify your scaling opportunities and challenges.",
      icon: "Search",
      action: "Start Assessment"
    },
    {
      step: "02",
      title: "Strategy Call",
      description: "Schedule a 30-minute call with our team to discuss your goals and explore how we can help you scale.",
      icon: "Phone",
      action: "Book Call"
    },
    {
      step: "03",
      title: "Custom Proposal",
      description: "Receive a detailed proposal with our recommended strategy, timeline, and investment for your growth.",
      icon: "FileText",
      action: "Get Proposal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Icon name={stat?.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat?.number}</div>
                <div className="text-white/80 text-sm">{stat?.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Scale
            <span className="block text-accent">What Matters?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Join the ambitious brands who chose exponential growth over incremental improvements.
            Let's build your scaling strategy together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="secondary"
              size="lg"
              iconName="TrendingUp"
              iconPosition="left"
              onClick={() => navigate('/growth-assessment-contact')}
              className="bg-white text-primary hover:bg-white/90 shadow-brand-lg"
            >
              Start Growth Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => navigate('/growth-assessment-contact')}
              className="border-white text-white hover:bg-white/10"
            >
              Schedule Strategy Call
            </Button>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Your Path to Exponential Growth</h3>
            <p className="text-white/80 text-lg">
              Three simple steps to transform your brand's scaling trajectory
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps?.map((step, index) => (
              <motion.div
                key={step?.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step?.icon} size={24} className="text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-accent mb-2">{step?.step}</div>
                  <h4 className="text-xl font-bold mb-3">{step?.title}</h4>
                  <p className="text-white/80 mb-6 leading-relaxed">{step?.description}</p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => navigate('/growth-assessment-contact')}
                    className="text-white hover:bg-white/10 border border-white/20"
                  >
                    {step?.action}
                  </Button>
                </div>

                {/* Connector Line */}
                {index < nextSteps?.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-white/20"
        >
          <p className="text-white/80 mb-4">
            Questions about our approach or want to discuss your specific challenges?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:hello@descaleagency.com"
              className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300"
            >
              <Icon name="Mail" size={20} />
              <span>hello@descaleagency.com</span>
            </a>
            <a
              href="tel:+1-555-DESCALE"
              className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300"
            >
              <Icon name="Phone" size={20} />
              <span>+1 (555) DESCALE</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;