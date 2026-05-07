import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ValuePropositionSection = () => {
  const navigate = useNavigate();
  const propositions = [
    {
      id: 1,
      title: "Exponential, Not Incremental",
      description: "We don't chase 10% improvements. Our strategies are designed for 10x growth that transforms market position and business trajectory.",
      icon: "TrendingUp",
      color: "from-primary to-accent",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "Growth, Not Just Campaigns",
      description: "Beyond marketing tactics, we architect comprehensive growth ecosystems that scale every aspect of your brand's market presence.",
      icon: "Zap",
      color: "from-secondary to-primary",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "Proven, Not Experimental",
      description: "Every strategy is backed by data from 50+ successful scaling journeys. We minimize risk while maximizing exponential outcomes.",
      icon: "Shield",
      color: "from-accent to-secondary",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            The DESCALE
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Difference
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three core principles that separate exponential growth from incremental improvement
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {propositions?.map((prop, index) => (
            <motion.div
              key={prop?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-brand-lg transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden">
                {/* Visual header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={prop?.image}
                    alt={prop?.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br ${prop?.color} opacity-70 mix-blend-multiply group-hover:opacity-55 transition-opacity duration-500`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent"
                  />
                  {/* Floating icon badge */}
                  <div
                    className={`absolute -bottom-7 left-8 w-16 h-16 rounded-xl bg-gradient-to-br ${prop?.color} flex items-center justify-center shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={prop?.icon} size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {prop?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {prop?.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`h-1 bg-gradient-to-r ${prop?.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Scale What Matters?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join 50+ brands that chose exponential growth over incremental improvement
            </p>
            <button
              onClick={() => navigate('/get-started')}
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Explore Our Services</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;