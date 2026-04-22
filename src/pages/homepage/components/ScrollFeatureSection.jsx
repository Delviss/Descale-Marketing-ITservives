import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const features = [
  {
    index: '01',
    title: 'Growth Systems',
    description:
      'We architect revenue engines — not just campaigns. Positioning, activation, and retention loops wired into a single compounding system.',
    icon: 'LineChart',
    stat: '12x',
    statLabel: 'Median ARR growth',
  },
  {
    index: '02',
    title: 'Cinematic Creative',
    description:
      'Premium visual storytelling that cuts through paid-media fatigue. Every frame engineered to move a specific metric, not just look good.',
    icon: 'Film',
    stat: '+68%',
    statLabel: 'Avg engagement lift',
  },
  {
    index: '03',
    title: 'Interactive Taxi Ads',
    description:
      'The first truly interactive OOH format. Live audience response, geo-triggered creative, and attribution down to the ride.',
    icon: 'Car',
    stat: '3.4M',
    statLabel: 'Interactions / month',
  },
  {
    index: '04',
    title: 'Analytics Infrastructure',
    description:
      'Server-side attribution, LTV models, and unit economics dashboards built in-house. Your growth decisions, finally legible.',
    icon: 'Database',
    stat: '-54%',
    statLabel: 'Blended CAC',
  },
];

const ScrollFeatureSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0B0B0F] text-white py-32 noise-overlay"
    >
      {/* Ambient glow */}
      <div aria-hidden className="absolute inset-0 bg-mesh-dark opacity-60" />
      <div aria-hidden className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/30 blur-[140px]" />
      <div aria-hidden className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-accent/30 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div style={{ y: titleY }} className="max-w-4xl mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-white/60 uppercase mb-6">
            <span className="w-8 h-px bg-white/40" /> Featured Capabilities
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            Everything you need to{' '}
            <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              compound revenue.
            </span>
          </h2>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Hover gradient */}
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"
              />

              <div className="relative flex items-start justify-between gap-6 mb-8">
                <span className="font-mono text-xs tracking-[0.3em] text-white/40">
                  {f.index}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                  <Icon name={f.icon} size={22} className="text-white" />
                </div>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {f.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-10">{f.description}</p>

              <div className="flex items-end justify-between pt-6 border-t border-white/10">
                <div>
                  <div className="font-display text-4xl font-bold text-white">
                    {f.stat}
                  </div>
                  <div className="text-xs text-white/50 mt-1 tracking-wide">
                    {f.statLabel}
                  </div>
                </div>
                <a
                  href="/services-hub"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
                >
                  Learn more
                  <Icon name="ArrowUpRight" size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollFeatureSection;
