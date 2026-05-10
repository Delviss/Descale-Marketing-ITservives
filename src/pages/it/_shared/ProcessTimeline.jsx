import React from 'react';
import { motion } from 'framer-motion';

const ProcessTimeline = ({ eyebrow = 'How we work', title, italicWord, intro, steps }) => {
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

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="text-xs font-mono text-primary mb-4 tracking-widest">STEP {String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm mb-4">{s.description}</p>
              {s.duration && (
                <div className="text-xs text-foreground/50 uppercase tracking-wider pt-4 border-t border-border">
                  {s.duration}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
