import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../../components/AppIcon';

const PaymentSection = forwardRef((_props, ref) => {
  return (
    <section id="payment" ref={ref} className="relative py-24 lg:py-32 bg-muted/30 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-8 lg:p-12"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
            <Icon name="Wallet" size={22} />
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            How payment works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight mb-5">
            You&rsquo;ll see the terms{' '}
            <span className="font-serif-accent italic">before you accept anything.</span>
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            We don&rsquo;t publish a single earnings figure, because payment depends on the campaign. You will
            see the payment terms before accepting any campaign. Payment may include a fixed amount for
            completed verified shifts, a campaign-completion bonus, or both. We do not require couriers to
            sell, collect payments from customers, or guarantee QR scans.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

PaymentSection.displayName = 'PaymentSection';

export default PaymentSection;
