import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const statusStyles = {
  live: 'bg-success/10 text-success border-success/20',
  pilot: 'bg-accent/10 text-accent border-accent/20',
};

const VentureCard = ({ venture, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-card"
    >
      <div aria-hidden className="absolute -top-24 -right-24 w-[320px] h-[320px] bg-primary/10 opacity-0 group-hover:opacity-100 blur-3xl rounded-full transition-opacity duration-700" />

      <div className="relative p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Icon name={venture.icon} size={26} />
          </div>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${statusStyles[venture.statusTone] || statusStyles.pilot}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {venture.status}
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{venture.name}</h3>
        <p className="text-foreground/70 leading-relaxed mb-8">{venture.pitch}</p>

        <Link
          to={venture.href}
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Explore {venture.name}
          <Icon name="ArrowUpRight" size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default VentureCard;
