import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const points = [
  { icon: 'Check', title: 'Opt-in participation', description: 'Couriers choose whether to apply and whether to accept a campaign. Nothing is assigned without consent.' },
  { icon: 'ShieldCheck', title: 'Food-safety conscious', description: 'Campaign materials must not interfere with thermal insulation, food safety, or safe operation.' },
  { icon: 'Scale', title: 'Platform and fleet rules respected', description: 'We do not authorise use of third-party platform branding or modifications to platform equipment.' },
  { icon: 'Receipt', title: 'Transparent payments and reporting', description: 'Clear payment terms before any campaign is accepted, and clear reporting on what a campaign delivered.' },
];

const TrustSafetyBlock = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            Trust &amp; Safety
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Designed to respect couriers, customers,{' '}
            <span className="font-serif-accent italic">and delivery standards.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Descale MoveAds is opt-in. Couriers choose whether to apply and whether to accept a campaign.
            Campaign materials must not interfere with thermal insulation, food safety, safe operation,
            visibility, or the rules of the delivery platform, fleet operator, or bag owner. We do not claim
            affiliation with any delivery platform unless formally stated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Icon name={p.icon} size={22} />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSafetyBlock;
