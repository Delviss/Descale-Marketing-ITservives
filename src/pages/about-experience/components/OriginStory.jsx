import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OriginStory = () => {
  const storyMilestones = [
    {
      year: "2019",
      title: "The Realization",
      description: `After witnessing countless brands struggle with incremental growth tactics, our founders identified the critical gap between traditional marketing and exponential scaling.`,
      icon: "Lightbulb"
    },
    {
      year: "2020",
      title: "The Formation",
      description: `DESCALE was born from the belief that growth isn't about doing more—it's about amplifying what truly matters through strategic precision and creative boldness.`,
      icon: "Rocket"
    },
    {
      year: "2021",
      title: "The Breakthrough",
      description: `Our first major client achieved 400% revenue growth in 8 months, validating our methodology and establishing our reputation for exponential results.`,
      icon: "TrendingUp"
    },
    {
      year: "2022",
      title: "The Innovation",
      description: `Launched Interactive Taxi Ads platform, revolutionizing outdoor advertising with real-time engagement and geotargeting capabilities.`,
      icon: "Zap"
    },
    {
      year: "2023",
      title: "The Recognition",
      description: `Named 'Growth Agency of the Year' by Marketing Excellence Awards, with clients collectively raising $50M+ in funding.`,
      icon: "Award"
    },
    {
      year: "2024",
      title: "The Evolution",
      description: `Expanded to serve Fortune 500 companies while maintaining our startup agility, proving our methodologies scale across all business sizes.`,
      icon: "Building"
    }
  ];

  const founderStory = {
    challenge: "The Gap We Discovered",
    insight: `Most agencies focus on incremental improvements—5% here, 10% there. But ambitious brands need exponential growth. They need partners who understand that scaling isn't just about more traffic or more leads; it's about fundamental transformation of how brands connect with their markets.`,
    solution: "Our \'Aha Moment'",
    approach: `We realized that true scaling happens at the intersection of three forces: strategic precision (knowing exactly what moves the needle), creative boldness (breaking through market noise), and data-driven execution (measuring what matters). This became our foundation.`
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="BookOpen" size={16} />
            <span>Our Origin Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why DESCALE Exists
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Born from the frustration of watching brilliant brands settle for incremental growth
            when they deserved exponential transformation.
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <Icon name="AlertTriangle" size={24} className="mr-3 text-accent" />
                  {founderStory?.challenge}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {founderStory?.insight}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                  <Icon name="Zap" size={24} className="mr-3 text-accent" />
                  {founderStory?.solution}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {founderStory?.approach}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration and strategic planning session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg">
                <Icon name="Target" size={32} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line on md+, left line on mobile */}
          <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>

          <div className="space-y-10 md:space-y-16">
            {storyMilestones?.map((milestone, index) => (
              <motion.div
                key={milestone?.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card — full width on mobile (with pl-12 to clear left line), half on md+ */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-border hover:shadow-brand transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 sm:mb-4 ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : ''
                    }`}>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={milestone?.icon} size={22} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-primary">{milestone?.year}</span>
                        <h3 className="text-base sm:text-xl font-semibold text-text-primary">{milestone?.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Dot — positioned absolutely on mobile (over left line), centered between halves on md+ */}
                <div className="absolute md:relative md:z-10 left-4 md:left-auto -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg"></div>

                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;