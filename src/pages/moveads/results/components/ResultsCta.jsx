import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../../components/AppIcon';

const ResultsCta = () => {
  return (
    <section className="relative pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 lg:p-16 text-center"
        >
          <div aria-hidden className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight">
              Want results like this for your restaurant?
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Join the Kraków pilot as a founding restaurant, or apply as a courier to start earning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/moveads/restaurants"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
              >
                Plan my campaign
                <Icon name="ArrowUpRight" size={16} />
              </Link>
              <Link
                to="/moveads/couriers"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-foreground/15 text-foreground hover:border-foreground/40 transition-all duration-300"
              >
                Apply as a courier
                <Icon name="ArrowUpRight" size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsCta;
