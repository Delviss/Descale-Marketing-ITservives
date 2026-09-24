import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';
import { testimonials } from '../data/sampleResults';

const ResultsTestimonials = () => {
  return (
    <section className="relative pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.context}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-card p-8 lg:p-10"
            >
              <div className="flex items-center justify-between mb-6">
                <Icon name="Quote" size={28} className="text-primary/40" />
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-foreground/40 border border-border rounded-full px-2.5 py-1">
                  Sample quote
                </span>
              </div>
              <blockquote className="font-display text-xl md:text-2xl leading-snug tracking-tight mb-8 text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={t.role === 'Restaurant owner' ? 'Store' : 'Bike'} size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.role}</div>
                  <div className="text-xs text-foreground/60">{t.context}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsTestimonials;
