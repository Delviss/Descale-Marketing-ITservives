import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';
import { stats } from '../data/sampleResults';

const StatsGrid = () => {
  return (
    <section className="relative pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name={stat.icon} size={18} />
              </div>
              <div className="font-display text-3xl font-bold tracking-tight">
                {stat.value}
                {stat.unit && <span className="text-lg font-medium text-foreground/60 ml-1">{stat.unit}</span>}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-foreground/90">{stat.label}</div>
              <p className="mt-1.5 text-xs text-foreground/60 leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
