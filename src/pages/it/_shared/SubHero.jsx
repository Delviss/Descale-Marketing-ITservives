import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const SubHero = ({ eyebrow, title, italicWord, description, stats = [], primaryCta = { label: 'Get Started', to: '/get-started' } }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-90" />
      <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />
      <div aria-hidden className="absolute top-40 left-[-10%] w-[420px] h-[420px] bg-accent/10 blur-[120px] rounded-full" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Link to="/it" className="text-xs font-medium tracking-[0.2em] text-foreground/50 hover:text-foreground/80 uppercase transition-colors">
            IT Services
          </Link>
          <span className="text-foreground/30">/</span>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/70 uppercase">
            <span className="w-8 h-px bg-foreground/40" />
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight max-w-5xl"
        >
          {title}{' '}
          <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
            {italicWord}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to={primaryCta.to}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
          >
            {primaryCta.label}
            <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
              <Icon name="ArrowUpRight" size={16} />
            </span>
          </Link>
          <Link
            to="/it"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-foreground/15 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            All IT services
            <Icon name="ArrowRight" size={16} />
          </Link>
        </motion.div>

        {stats?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-foreground/10 pl-4">
                <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">{s.stat}</div>
                <div className="text-xs text-foreground/60 mt-1 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SubHero;
