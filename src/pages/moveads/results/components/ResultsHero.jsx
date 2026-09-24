import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';
import { pilotMeta } from '../data/sampleResults';

const ResultsHero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <Icon name="MapPin" size={14} />
            {pilotMeta.zoneName} · {pilotMeta.windowLabel}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            What the{' '}
            <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              pilot proved.
            </span>
          </h1>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            No estimated impressions, no invented reach. Just the numbers we can verify: campaign
            hours carried, scans, claims, and redemptions confirmed in-store.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsHero;
