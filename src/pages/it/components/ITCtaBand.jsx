import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ITCtaBand = () => {
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
          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Have a project?{' '}
                <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                  Let's talk.
                </span>
              </h2>
              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                Tell us what you want to ship. We'll come back with a plan, a team, and a timeline.
              </p>
            </div>
            <a
              href="/get-started"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand self-start lg:self-auto"
            >
              Get Started
              <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
                <Icon name="ArrowUpRight" size={16} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITCtaBand;
