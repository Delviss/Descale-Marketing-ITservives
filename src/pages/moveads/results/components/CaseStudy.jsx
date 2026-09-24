import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';
import { caseStudy } from '../data/sampleResults';

const Column = ({ column, tone }) => (
  <div className={`rounded-2xl border p-8 bg-card ${tone === 'after' ? 'border-primary' : 'border-border'}`}>
    <div className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/60 mb-5">
      {column.label}
    </div>
    <dl className="space-y-4">
      {column.items.map((item) => (
        <div key={item.metric} className="flex items-baseline justify-between gap-4">
          <dt className="text-sm text-foreground/70">{item.metric}</dt>
          <dd className="text-lg font-semibold whitespace-nowrap">{item.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const CaseStudy = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Before / after
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            {caseStudy.restaurantLabel}
          </h2>
        </div>

        <div className="flex items-start gap-2 mb-8 text-xs text-foreground/60 max-w-2xl">
          <Icon name="AlertTriangle" size={14} className="text-warning mt-0.5 shrink-0" />
          <p>{caseStudy.note}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Column column={caseStudy.before} tone="before" />
          <Column column={caseStudy.after} tone="after" />
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
