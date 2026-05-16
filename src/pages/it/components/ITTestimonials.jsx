import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const testimonials = [
  {
    quote:
      "They didn't ship a website, they shipped a system. Two years later it still scales without us touching it.",
    author: 'CTO',
    company: 'Series-B SaaS',
  },
  {
    quote:
      "The design-engineering loop is so tight it feels like one team. We launched in half the time we'd budgeted.",
    author: 'Head of Product',
    company: 'D2C brand',
  },
];

const ITTestimonials = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            What teams say
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Built with teams who{' '}
            <span className="font-serif-accent italic">ship for a living.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-card p-8 lg:p-10 hover-lift transition-all duration-300"
            >
              <Icon name="Quote" size={28} className="text-primary/40 mb-6" />
              <blockquote className="font-display text-xl md:text-2xl leading-snug tracking-tight mb-8 text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name="User" size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-foreground/60">{t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITTestimonials;
