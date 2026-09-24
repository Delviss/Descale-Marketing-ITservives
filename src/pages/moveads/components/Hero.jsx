import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-90" />
      <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />
      <div aria-hidden className="absolute top-40 left-[-10%] w-[420px] h-[420px] bg-accent/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/70 uppercase mb-6"
        >
          <span className="w-8 h-px bg-foreground/40" />
          Descale MoveAds &middot; Kraków pilot
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight max-w-5xl"
        >
          Your city is moving.{' '}
          <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
            Your advertising should too.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
        >
          Descale MoveAds connects local restaurants with active delivery couriers. Run QR-powered campaigns
          across Kraków and Warsaw, while couriers earn extra income for carrying approved campaign covers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        >
          <Link
            to="/moveads/couriers"
            className="group inline-flex items-center justify-between gap-3 px-7 py-5 rounded-2xl bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
          >
            <span>I&rsquo;m a courier &mdash; earn extra</span>
            <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors shrink-0">
              <Icon name="ArrowUpRight" size={16} />
            </span>
          </Link>
          <Link
            to="/moveads/restaurants"
            className="group inline-flex items-center justify-between gap-3 px-7 py-5 rounded-2xl border border-foreground/15 text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            <span>I&rsquo;m a restaurant &mdash; get customers</span>
            <span className="w-8 h-8 rounded-full bg-foreground/5 group-hover:bg-foreground/10 flex items-center justify-center transition-colors shrink-0">
              <Icon name="ArrowUpRight" size={16} />
            </span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-6 text-sm text-foreground/60 max-w-2xl"
        >
          Opt-in courier network. Food-safe bag-cover concept. Trackable QR offers. Starting in Kraków.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-16 rounded-[2rem] border border-border bg-card p-8 md:p-12 overflow-hidden"
        >
          <div aria-hidden className="absolute -bottom-24 -right-24 w-[360px] h-[360px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Icon name="ShoppingBag" size={28} />
            </div>
            <div>
              <div className="text-xs font-medium tracking-[0.2em] text-foreground/50 uppercase mb-2">Pilot campaign visual</div>
              <p className="text-foreground/70 leading-relaxed max-w-2xl">
                A courier seen from behind in normal delivery clothing, a clean removable bag cover carrying a
                fictional restaurant campaign, a visible (non-scannable) QR code, and Kraków visual context
                &mdash; Kazimierz, Zabłocie, Grzegórzki, trams. No delivery-platform branding, no claimed
                partnership, no real restaurant without consent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
