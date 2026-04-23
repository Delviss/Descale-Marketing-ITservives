import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientSuccessSection = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const base = import.meta.env.BASE_URL;

  const clients = [
    {
      id: 1,
      name: "Blitzon Consulting",
      logo: `${base}assets/images/partners/blitzon.svg`,
      industry: "D2D Sales — Munich",
      growth: "#1",
      metric: "D2D Sales Company",
      timeframe: "Munich",
      website: "https://blitzon.de/",
      description: "Munich's leading door-to-door sales consultancy, driving field-sales performance for ambitious brands.",
      accent: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      name: "Klaxo GmbH",
      logo: `${base}assets/images/partners/klaxo.svg`,
      industry: "Car Rental & Daytrips",
      growth: "#1",
      metric: "Car Rental & Daytrips",
      timeframe: "Munich",
      website: "https://www.klaxo.eu/",
      description: "Munich's #1 car rental and day-trip experience, delivering premium mobility for locals and tourists alike.",
      accent: "from-sky-400 to-blue-600"
    },
    {
      id: 3,
      name: "Woodfellas",
      logo: `${base}assets/images/partners/woodfellas.svg`,
      industry: "Accessories",
      growth: "DTC",
      metric: "Lifestyle Accessories",
      timeframe: "Europe",
      website: "https://www.wood-fellas.com/en/",
      description: "Design-led wood & lifestyle accessories, scaled across European DTC channels with bold brand storytelling.",
      accent: "from-amber-700 to-stone-800"
    }
  ];

  const testimonials = [
    {
      quote: "DESCALE didn\'t just scale our campaigns—they transformed our entire approach to growth. The results speak for themselves.",
      author: "Blitzon Consulting",
      position: "#1 D2D Sales Company, Munich",
      avatar: `${base}assets/images/partners/blitzon.svg`
    },
    {
      quote: "The strategic depth and execution excellence is unmatched. They understand scaling at a level most agencies never reach.",
      author: "Klaxo GmbH",
      position: "#1 Car Rental & Daytrips, Munich",
      avatar: `${base}assets/images/partners/klaxo.svg`
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {clients?.map((client, index) => (
            <motion.a
              key={client?.id}
              href={client?.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.35, ease: "easeOut" } }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer block"
              style={{ perspective: 1000 }}
              onMouseEnter={() => setHoveredClient(client?.id)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              {/* Animated gradient glow */}
              <motion.div
                aria-hidden
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${client?.accent} opacity-0 blur-lg group-hover:opacity-60 transition-opacity duration-500`}
                animate={hoveredClient === client?.id ? { opacity: [0.4, 0.8, 0.4] } : { opacity: 0 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-md group-hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full overflow-hidden">
                {/* Decorative corner accent */}
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${client?.accent} opacity-[0.08] group-hover:opacity-20 group-hover:scale-125 transition-all duration-700`} />

                <motion.div
                  className="relative flex items-center justify-center mb-6 h-28 w-full"
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <img
                    src={client?.logo}
                    alt={`${client?.name} logo`}
                    className="max-h-28 w-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_8px_20px_rgba(192,55,10,0.30)]"
                    loading="lazy"
                  />
                </motion.div>

                <div className="relative text-center">
                  <h3 className="font-bold text-gray-900 mb-1 text-xl tracking-tight">{client?.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3 tracking-wide uppercase">{client?.industry}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{client?.description}</p>

                  <motion.div
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.18 }}
                    viewport={{ once: true }}
                  >
                    <span>Visit site</span>
                    <motion.span
                      animate={hoveredClient === client?.id ? { x: [0, 6, 0] } : { x: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon name="ArrowUpRight" size={16} />
                    </motion.span>
                  </motion.div>
                </div>

                {/* Hover Metrics Overlay */}
                {hoveredClient === client?.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-center text-white z-10 bg-gradient-to-br ${client?.accent}`}
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 220 }}
                      className="text-6xl font-extrabold mb-2 drop-shadow-lg"
                    >
                      {client?.growth}
                    </motion.div>
                    <motion.div
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.18 }}
                      className="text-base font-semibold mb-1 text-center"
                    >
                      {client?.metric}
                    </motion.div>
                    <motion.div
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.9 }}
                      transition={{ delay: 0.24 }}
                      className="text-sm mb-5"
                    >
                      {client?.timeframe}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.32 }}
                      className="text-xs font-semibold inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full"
                    >
                      Visit site
                      <Icon name="ExternalLink" size={12} />
                    </motion.div>
                  </motion.div>
                )}
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
                <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 p-2">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.author}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
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