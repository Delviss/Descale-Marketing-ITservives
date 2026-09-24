import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const restaurantSteps = [
  { icon: 'Target', title: 'Choose your audience', description: 'Pick your zone, campaign goal, and offer — new opening, first order, lunch rush, or an event.' },
  { icon: 'Zap', title: 'Activate your campaign', description: 'We assign it to approved couriers carrying compatible bags in your target area.' },
  { icon: 'QrCode', title: 'Customers scan & redeem', description: 'Passersby scan the QR on the bag cover, unlock your offer, and visit, order, or redeem.' },
];

const courierSteps = [
  { icon: 'ClipboardCheck', title: 'Apply', description: 'Tell us your city, working zones, and the bag or cover you use while delivering.' },
  { icon: 'BadgeCheck', title: 'Get approved', description: 'We check bag compatibility and campaign demand, then confirm your participation.' },
  { icon: 'Banknote', title: 'Deliver and earn', description: 'Carry the approved cover on your shifts and earn extra income on top of your regular deliveries.' },
];

const Track = ({ label, icon, steps, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay }}
    className="rounded-3xl border border-border bg-card p-8 lg:p-10"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
        <Icon name={icon} size={18} />
      </div>
      <h3 className="font-display text-xl font-bold">{label}</h3>
    </div>
    <div className="space-y-6">
      {steps.map((s, i) => (
        <div key={s.title} className="flex gap-4">
          <div className="text-xs font-mono text-primary pt-1 shrink-0 w-6">{String(i + 1).padStart(2, '0')}</div>
          <div>
            <div className="font-semibold mb-1">{s.title}</div>
            <p className="text-sm text-foreground/70 leading-relaxed">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Two sides.{' '}
            <span className="font-serif-accent italic">One simple loop.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Track label="For restaurants" icon="Store" steps={restaurantSteps} delay={0} />
          <Track label="For couriers" icon="Bike" steps={courierSteps} delay={0.1} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
