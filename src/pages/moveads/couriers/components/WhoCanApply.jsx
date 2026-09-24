import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';

const eligibility = [
  { icon: 'UserCheck', text: '18 or older' },
  { icon: 'Bike', text: 'Actively delivering on a courier platform or fleet' },
  { icon: 'ShoppingBag', text: 'A suitable thermal bag, or permission to use an approved cover' },
  { icon: 'ShieldCheck', text: 'Follows campaign, safety, hygiene, and platform rules' },
  { icon: 'Clock', text: 'Available for agreed shifts' },
  { icon: 'Wallet', text: 'Polish bank account or an agreed payment method' },
  { icon: 'Smartphone', text: 'Smartphone with WhatsApp or Telegram' },
];

const WhoCanApply = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Who can apply
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            We&rsquo;re currently looking for active delivery{' '}
            <span className="font-serif-accent italic">couriers in Kraków and Warsaw.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {eligibility.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <Icon name={item.icon} size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground/80 leading-relaxed">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-foreground/70 leading-relaxed max-w-2xl">
          Applications are reviewed based on city, availability, equipment compatibility, campaign demand, and
          verification. Applying does not guarantee acceptance — we&rsquo;re starting small, on purpose.
        </p>
      </div>
    </section>
  );
};

export default WhoCanApply;
