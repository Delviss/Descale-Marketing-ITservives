import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientSuccessSection = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: "Blitzon Consulting",
      logo: "https://logo.clearbit.com/blitzon.de",
      industry: "D2D Sales — Munich",
      growth: "#1",
      metric: "D2D Sales Company",
      timeframe: "Munich",
      website: "https://blitzon.de/",
      description: "Munich's leading door-to-door sales consultancy, driving field-sales performance for ambitious brands."
    },
    {
      id: 2,
      name: "Klaxo GmbH",
      logo: "https://logo.clearbit.com/klaxo.eu",
      industry: "Car Rental & Daytrips",
      growth: "#1",
      metric: "Car Rental & Daytrips",
      timeframe: "Munich",
      website: "https://www.klaxo.eu/",
      description: "Munich's #1 car rental and day-trip experience, delivering premium mobility for locals and tourists alike."
    },
    {
      id: 3,
      name: "Woodfellas",
      logo: "https://logo.clearbit.com/wood-fellas.com",
      industry: "Accessories",
      growth: "DTC",
      metric: "Lifestyle Accessories",
      timeframe: "Europe",
      website: "https://www.wood-fellas.com/en/",
      description: "Design-led wood & lifestyle accessories, scaled across European DTC channels with bold brand storytelling."
    }
  ];

  const testimonials = [
    {
      quote: "DESCALE didn\'t just scale our campaigns—they transformed our entire approach to growth. The results speak for themselves.",
      author: "Blitzon Consulting",
      position: "#1 D2D Sales Company, Munich",
      avatar: "https://logo.clearbit.com/blitzon.de"
    },
    {
      quote: "The strategic depth and execution excellence is unmatched. They understand scaling at a level most agencies never reach.",
      author: "Klaxo GmbH",
      position: "#1 Car Rental & Daytrips, Munich",
      avatar: "https://logo.clearbit.com/klaxo.eu"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#A72906" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Scaling
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with market leaders who choose exponential growth over incremental improvement. Here's how we transformed their market position.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {clients?.map((client, index) => (
            <motion.a
              key={client?.id}
              href={client?.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer block"
              onMouseEnter={() => setHoveredClient(client?.id)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className="flex items-center justify-center mb-6 h-20">
                  <Image
                    src={client?.logo}
                    alt={`${client?.name} logo`}
                    className="max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{client?.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{client?.industry}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">{client?.description}</p>

                  {/* Hover Metrics */}
                  {hoveredClient === client?.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-primary/95 rounded-xl p-6 flex flex-col justify-center items-center text-white z-10"
                    >
                      <div className="text-5xl font-bold text-accent mb-2">
                        {client?.growth}
                      </div>
                      <div className="text-base opacity-90 mb-2 text-center">
                        {client?.metric}
                      </div>
                      <div className="text-sm opacity-75 mb-4">
                        {client?.timeframe}
                      </div>
                      <div className="text-xs opacity-90 inline-flex items-center gap-1">
                        Visit site
                        <Icon name="ExternalLink" size={12} />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">340%</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Average ROI Increase</div>
            <div className="text-gray-600">Across all client campaigns</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">50+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Brands Scaled to 8-Figures</div>
            <div className="text-gray-600">From startup to market leader</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-secondary mb-2">2.5x</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Faster Growth Velocity</div>
            <div className="text-gray-600">Compared to industry average</div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
                    "{testimonial?.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial?.author}</div>
                    <div className="text-gray-500">{testimonial?.position}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => window.location.href = '/work-portfolio'}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center space-x-2 shadow-brand-lg hover-brand"
          >
            <span>View All Case Studies</span>
            <Icon name="ArrowRight" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;