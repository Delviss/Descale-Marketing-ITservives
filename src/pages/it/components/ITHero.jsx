import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ITHero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-90" />
      <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />
      <div aria-hidden className="absolute top-40 left-[-10%] w-[420px] h-[420px] bg-accent/10 blur-[120px] rounded-full" />

      {/* Subtle code grid behind hero */}
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
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-6"
        >
          <span className="w-8 h-px bg-foreground/40" />
          IT Services
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight max-w-5xl"
        >
          End-to-end IT,{' '}
          <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
            engineered to scale.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
        >
          Platforms, applications, design systems, and websites — built by a team that ships
          cinematic experiences and revenue-grade engineering in the same sprint.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/get-started"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
          >
            Get Started
            <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
              <Icon name="ArrowUpRight" size={16} />
            </span>
          </Link>
          <Link
            to="/marketing"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-foreground/15 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            Looking for marketing?
            <Icon name="ArrowRight" size={16} />
          </Link>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {[
            { stat: '40+', label: 'Products shipped' },
            { stat: '12wk', label: 'Median MVP timeline' },
            { stat: '99.9%', label: 'Production uptime' },
            { stat: 'EU/US', label: 'Senior delivery team' },
          ].map((s) => (
            <div key={s.label} className="border-l border-foreground/10 pl-4">
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">{s.stat}</div>
              <div className="text-xs text-foreground/60 mt-1 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ITHero;
