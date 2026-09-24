import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../../components/AppIcon';

const RestaurantHero = ({ onPlanCampaign, onRequestProposal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-90" />
      <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Link to="/moveads" className="text-xs font-medium tracking-[0.2em] text-foreground/50 hover:text-foreground/80 uppercase transition-colors">
            Descale MoveAds
          </Link>
          <span className="text-foreground/30">/</span>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/70 uppercase">
            <span className="w-8 h-px bg-foreground/40" />
            Restaurants
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight max-w-4xl"
        >
          Get your restaurant seen where{' '}
          <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
            your next customers already are.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
        >
          Launch a local courier-bag campaign with a QR offer, targeted delivery zones, and clear reporting on
          scans, voucher claims, and redemptions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={onPlanCampaign}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
          >
            Plan my campaign
            <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
              <Icon name="ArrowUpRight" size={16} />
            </span>
          </button>
          <button
            type="button"
            onClick={onRequestProposal}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-foreground/15 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            Request a pilot proposal
            <Icon name="ArrowDown" size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantHero;
