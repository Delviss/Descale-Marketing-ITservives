import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';

const campaignTypes = [
  { icon: 'Rocket', title: 'New opening campaign', description: 'Introduce your restaurant to a neighbourhood the moment you open.' },
  { icon: 'Tag', title: 'First-order offer', description: 'Convert nearby scans into a first order with a simple, redeemable incentive.' },
  { icon: 'Coffee', title: 'Lunch and office campaign', description: 'Reach office workers and lunch crowds during your busiest hours.' },
  { icon: 'GraduationCap', title: 'Student campaign', description: 'Target student neighbourhoods with an offer built for budget-conscious regulars.' },
  { icon: 'PartyPopper', title: 'Event or weekend campaign', description: 'Spike visibility around a specific event, weekend, or seasonal push.' },
  { icon: 'ShoppingCart', title: 'Direct-order campaign', description: 'Drive orders straight to your own site or app, no marketplace commission.' },
];

const OfferSection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            The offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            More than a logo{' '}
            <span className="font-serif-accent italic">on a bag.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Every Descale MoveAds campaign is built around a simple customer action: scan, unlock an offer, and
            visit, order, or redeem. We combine street-level visibility with QR attribution so your campaign
            has a measurable purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {campaignTypes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-8 hover-lift hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Icon name={c.icon} size={22} />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{c.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
