import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const studies = [
  {
    type: 'Platform',
    title: 'Multi-tenant SaaS dashboard',
    summary:
      'A finance ops platform with role-based access, real-time charts, and 99.9% uptime — built and shipped in 14 weeks.',
    accent: 'from-primary/30 to-accent/20',
    icon: 'LayoutDashboard',
  },
  {
    type: 'Application',
    title: 'Cross-platform mobile app',
    summary:
      'React Native app reaching iOS + Android from one codebase, with offline-first sync and biometric auth.',
    accent: 'from-accent/30 to-primary/20',
    icon: 'Smartphone',
  },
  {
    type: 'Website',
    title: 'Headless e-commerce flagship',
    summary:
      'Next.js + Shopify storefront with cinematic motion, sub-second TTFB, and a 38% conversion lift over the legacy build.',
    accent: 'from-primary/20 to-accent/30',
    icon: 'Globe',
  },
];

const ITCaseStudies = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
              <span className="w-8 h-px bg-foreground/40" />
              Selected work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Shipped, measured,{' '}
              <span className="font-serif-accent italic">scaled.</span>
            </h2>
          </div>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Discuss your project <Icon name="ArrowUpRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {studies.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card hover-lift hover:border-primary/40 transition-all duration-500"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${s.accent} overflow-hidden`}>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    color: 'var(--color-foreground)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center shadow-brand-md group-hover:scale-110 transition-transform">
                    <Icon name={s.icon} size={36} className="text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-medium tracking-wide text-foreground/70 border border-border">
                  Coming soon
                </div>
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">
                  {s.type}
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{s.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITCaseStudies;
