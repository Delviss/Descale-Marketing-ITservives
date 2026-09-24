import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const restaurantBenefits = [
  { icon: 'MapPin', title: 'Local reach', description: 'Get seen by people who are physically near your restaurant, right now.' },
  { icon: 'Tag', title: 'A reason to act', description: 'Every campaign is built around a QR offer, not just a logo on a bag.' },
  { icon: 'LineChart', title: 'Measurable outcomes', description: 'Track scans, claims, and redemptions instead of guessing at reach.' },
  { icon: 'Zap', title: 'Fast activation', description: 'Launch a local campaign in days, not weeks of media buying.' },
  { icon: 'FlaskConical', title: 'Flexible testing', description: 'Try a short campaign, a zone, or an offer before committing further.' },
];

const courierBenefits = [
  { icon: 'Banknote', title: 'Extra earnings', description: 'Get paid for carrying an approved campaign on top of your regular shifts.' },
  { icon: 'ShoppingCart', title: 'No selling required', description: 'You carry the campaign. You never sell, pitch, or collect payment from customers.' },
  { icon: 'Clock', title: 'Choose your availability', description: 'Work the shifts and zones that already fit your schedule.' },
  { icon: 'Scale', title: 'Transparent conditions', description: 'See payment terms before you accept any campaign. No surprises.' },
  { icon: 'Users', title: 'Community opportunity', description: 'Be part of Kraków’s first delivery-bag advertising pilot from day one.' },
];

const Column = ({ label, icon, items, delay }) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
        <Icon name={icon} size={18} />
      </div>
      <h3 className="font-display text-xl font-bold">{label}</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: delay + i * 0.04 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <Icon name={item.icon} size={18} className="text-primary mb-3" />
          <div className="font-semibold text-sm mb-1.5">{item.title}</div>
          <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const BenefitsGrid = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Benefits
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Built to work for{' '}
            <span className="font-serif-accent italic">both sides.</span>
          </h2>
        </div>

        <div className="space-y-14">
          <Column label="For restaurants" icon="Store" items={restaurantBenefits} delay={0} />
          <Column label="For couriers" icon="Bike" items={courierBenefits} delay={0.1} />
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
