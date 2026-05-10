import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StackSection = ({ eyebrow = 'Stack & tooling', title, italicWord, intro, groups }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-card/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={g.icon} size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold">{g.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
