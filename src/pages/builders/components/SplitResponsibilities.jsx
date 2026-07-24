import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const youDo = ['Build', 'Create', 'Ship', 'Keep what you earn'];
const weHandle = ['Clients', 'Contracts', 'Sales', 'Marketing', 'Legal', 'Payments', 'Project management'];

const Column = ({ eyebrow, title, italicWord, items, icon, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className={`relative overflow-hidden rounded-3xl border p-8 lg:p-10 ${
      highlight ? 'border-primary/40 bg-card' : 'border-border bg-card'
    }`}
  >
    {highlight && (
      <div aria-hidden className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
    )}
    <div className="relative">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
        <Icon name={icon} size={22} />
      </div>
      <span className="text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase">{eyebrow}</span>
      <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold leading-tight">
        {title}{' '}
        <span className="font-serif-accent italic">{italicWord}</span>
      </h3>
      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-foreground/80">
            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Icon name="Check" size={14} />
            </span>
            <span className="text-base md:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const SplitResponsibilities = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            The deal
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            You build.{' '}
            <span className="font-serif-accent italic">We run the company.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            The same platform, a different story. You do the part you love. We absorb everything
            that makes running a business a headache.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Column eyebrow="What you do" title="You" italicWord="build." items={youDo} icon="Hammer" highlight />
          <Column eyebrow="What we handle" title="We" italicWord="handle the rest." items={weHandle} icon="Building2" />
        </div>
      </div>
    </section>
  );
};

export default SplitResponsibilities;
