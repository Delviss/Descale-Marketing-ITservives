import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const perks = [
  'Locked-in founding rate for your first campaign',
  'First pick of launch zones and dates',
  'Direct line to the team shaping the pilot',
  'Case-study feature once results are in',
];

const PhaseBanner = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 lg:p-20"
        >
          <div aria-hidden className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />
          <div aria-hidden className="absolute -bottom-24 -left-24 w-[360px] h-[360px] bg-accent/10 blur-[120px] rounded-full" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase mb-6">
              <Icon name="MapPin" size={14} />
              Kraków pilot opening soon
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Phase one is{' '}
                  <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                    the waitlist.
                  </span>
                </h2>
                <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                  We&rsquo;re opening the Kraków pilot with a small group of couriers and founding restaurants.
                  Join now to be first in line when campaigns go live.
                </p>
                <ul className="mt-6 space-y-2">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0">
                <Link
                  to="/moveads/couriers"
                  className="group inline-flex items-center justify-between gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
                >
                  Join the courier waitlist
                  <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
                    <Icon name="ArrowUpRight" size={16} />
                  </span>
                </Link>
                <Link
                  to="/moveads/restaurants"
                  className="group inline-flex items-center justify-between gap-3 px-7 py-4 rounded-full border border-foreground/15 text-foreground hover:border-foreground/40 transition-all duration-300"
                >
                  Become a founding restaurant
                  <span className="w-8 h-8 rounded-full bg-foreground/5 group-hover:bg-foreground/10 flex items-center justify-center transition-colors">
                    <Icon name="ArrowUpRight" size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhaseBanner;
