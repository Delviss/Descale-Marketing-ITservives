import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FaqSection = ({ eyebrow = 'FAQ', title = 'Frequently asked', italicWord = 'questions.', items }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            {eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            {title}{' '}
            <span className="font-serif-accent italic">{italicWord}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
                  aria-expanded={open}
                >
                  <span className="font-display text-lg font-semibold">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`shrink-0 text-foreground/60 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-foreground/70 leading-relaxed">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
