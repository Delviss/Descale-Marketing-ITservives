import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const reels = [
  {
    title: 'FinTech Series A → IPO',
    tag: 'Performance',
    hue: 'from-primary/80 to-accent/60',
    metric: '12×',
    metricLabel: 'ARR growth',
  },
  {
    title: 'D2C Scale to $100M',
    tag: 'Brand',
    hue: 'from-secondary/80 to-primary/60',
    metric: '8×',
    metricLabel: 'Revenue',
  },
  {
    title: 'Taxi Lab · NYC',
    tag: 'Innovation',
    hue: 'from-accent/80 to-secondary/60',
    metric: '3.4M',
    metricLabel: 'Live interactions',
  },
];

const ScrollVideoShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#FBFAF7] py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-black/60 uppercase mb-6">
              <span className="w-8 h-px bg-black/40" /> Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-black">
              Stories that{' '}
              <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                compound.
              </span>
            </h2>
          </div>
          <a
            href="/work-portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-primary transition-colors"
          >
            View all case studies <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>

        {/* Scroll-scale video reel */}
        <motion.div
          style={{ scale, rotate }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {reels.map((r, i) => (
            <motion.a
              key={r.title}
              href="/work-portfolio"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-black/5 shadow-xl"
            >
              {/* Animated gradient poster */}
              <div className={`absolute inset-0 bg-gradient-to-br ${r.hue}`} />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%)]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.45),transparent_55%)]"
              />
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/30 blur-3xl"
              />

              {/* Play icon */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <Icon name="Play" size={18} />
              </div>

              {/* Footer label */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase px-2 py-1 rounded-full bg-white/15 border border-white/20">
                    {r.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4">
                  {r.title}
                </h3>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-display text-3xl font-bold">{r.metric}</div>
                    <div className="text-xs text-white/70">{r.metricLabel}</div>
                  </div>
                  <Icon
                    name="ArrowUpRight"
                    size={22}
                    className="opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollVideoShowcase;
