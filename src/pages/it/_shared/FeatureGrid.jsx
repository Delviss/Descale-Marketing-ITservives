import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FeatureGrid = ({ eyebrow, title, italicWord, intro, features }) => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            {eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            {title}{' '}
            {italicWord && <span className="font-serif-accent italic">{italicWord}</span>}
          </h2>
          {intro && (
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">{intro}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift hover:border-primary/40 transition-all duration-300"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
