import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureShowcase = () => {
  const cultureValues = [
    {
      icon: "Target",
      title: "Exponential Mindset",
      description: "We don't think in increments—we think in multipliers. Every strategy, every campaign, every decision is evaluated for its exponential potential.",
      example: "When a client wanted 20% growth, we delivered 400% by reimagining their entire funnel architecture."
    },
    {
      icon: "Zap",
      title: "Speed of Execution",
      description: "In the world of scaling, timing is everything. We move fast, test faster, and iterate at the speed of opportunity.",
      example: "Launched a client's new product campaign in 48 hours when a competitor stumbled, capturing 60% market share."
    },
    {
      icon: "Users",
      title: "Client-First Partnership",
      description: "We don't just work for our clients—we become an extension of their team, sharing their vision and celebrating their wins.",
      example: "Our team members regularly attend client board meetings and contribute to strategic planning beyond marketing."
    },
    {
      icon: "TrendingUp",
      title: "Data-Driven Creativity",
      description: "Every creative decision is backed by data, and every data insight is expressed through compelling creative execution.",
      example: "Used behavioral psychology data to redesign a client's checkout flow, increasing conversion by 180%."
    },
    {
      icon: "Lightbulb",
      title: "Innovation Obsession",
      description: "We're constantly exploring new channels, technologies, and methodologies to stay ahead of the scaling curve.",
      example: "Pioneered Interactive Taxi Ads technology, creating an entirely new advertising category for our clients."
    },
    {
      icon: "Award",
      title: "Excellence Standard",
      description: "Good enough isn\'t good enough. We hold ourselves to the highest standards because our clients\' success depends on it.",
      example: "Rebuilt a campaign three times until it achieved the 5x ROAS target, even though the client was happy with 3x."
    }
  ];

  const cultureMoments = [
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      title: "Strategy Sessions",
      description: "Weekly growth strategy sessions where every team member contributes insights and challenges assumptions."
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      title: "Innovation Fridays",
      description: "Dedicated time for exploring new technologies, testing wild ideas, and pushing the boundaries of what's possible."
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      title: "Client Celebrations",
      description: "We celebrate every client win as our own, because their exponential growth is what drives our passion."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      title: "Learning Culture",
      description: "Continuous learning through workshops, conferences, and knowledge sharing sessions to stay at the forefront."
    }
  ];

  const trustSignals = [
    {
      icon: "Award",
      title: "Industry Recognition",
      items: [
        "Growth Agency of the Year 2023 - Marketing Excellence Awards",
        "Innovation in Advertising Technology - AdTech Summit 2023",
        "Best Performance Marketing Team - Growth Marketing Awards 2022"
      ]
    },
    {
      icon: "Mic",
      title: "Speaking Engagements",
      items: [
        "Keynote: \'The Future of Exponential Growth\' - Growth Summit 2024",
        "Panel: \'Scaling Strategies for Modern Brands\' - Marketing Week Live",
        "Workshop: \'Interactive Advertising Revolution\' - AdTech Conference"
      ]
    },
    {
      icon: "BookOpen",
      title: "Thought Leadership",
      items: [
        "Featured in Forbes: \'The New Rules of Digital Scaling'",
        "Harvard Business Review: \'Data-Driven Creative Excellence'",
        "TechCrunch: 'The Rise of Interactive Outdoor Advertising'"
      ]
    },
    {
      icon: "Users",
      title: "Advisory Positions",
      items: [
        "Growth Advisor - 15+ Y Combinator startups",
        "Marketing Advisory Board - TechStars Portfolio",
        "Strategic Advisor - Emerging AdTech Companies"
      ]
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle accent glow */}
      <div aria-hidden className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[160px]" />
      <div aria-hidden className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-6">
            <Icon name="Heart" size={14} className="text-accent" />
            <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">Our Culture</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em]">
            Values That Drive
            <span className="block font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              Exponential Results
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our culture isn't just about how we work—it's about how we think, innovate,
            and deliver transformational growth for our clients.
          </p>
        </motion.div>

        {/* Culture Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cultureValues?.map((value, index) => (
            <motion.div
              key={value?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-brand hover:bg-white/[0.07] hover:border-white/20 hover:shadow-brand-strong transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-brand">
                  <Icon name={value?.icon} size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{value?.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{value?.description}</p>

                <div className="bg-accent/10 border border-accent/25 rounded-lg p-3 border-l-4 border-l-accent">
                  <p className="text-sm text-white/80 italic">
                    <strong className="text-accent not-italic">Real Example:</strong> {value?.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Moments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-white mb-4">Behind the Scenes</h3>
            <p className="text-xl text-white/70">
              Authentic moments that showcase our collaborative spirit and passion for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureMoments?.map((moment, index) => (
              <motion.div
                key={moment?.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-brand hover:bg-white/[0.07] hover:border-white/20 hover:shadow-brand-strong transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={moment?.image}
                      alt={moment?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-white mb-2">{moment?.title}</h4>
                    <p className="text-sm text-white/70 leading-relaxed">{moment?.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-white mb-4">Industry Recognition</h3>
            <p className="text-xl text-white/70">
              Our expertise and results have earned recognition from industry leaders and media.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals?.map((signal, index) => (
              <motion.div
                key={signal?.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/15 border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Icon name={signal?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-bold text-white mb-4">{signal?.title}</h4>
                <ul className="space-y-2">
                  {signal?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-white/70 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureShowcase;
