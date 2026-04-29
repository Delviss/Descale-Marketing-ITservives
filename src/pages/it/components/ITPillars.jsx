import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const pillars = [
  {
    name: 'Platforms',
    icon: 'LayoutDashboard',
    description: 'SaaS, internal tools, and data platforms engineered to scale with your business.',
    bullets: ['Multi-tenant SaaS', 'Admin & ops tools', 'Data + analytics platforms'],
  },
  {
    name: 'Applications',
    icon: 'Smartphone',
    description: 'Web and mobile apps that turn product ideas into shipped, measurable revenue.',
    bullets: ['React / Next.js web apps', 'iOS & Android (React Native)', 'API + backend services'],
  },
  {
    name: 'Design',
    icon: 'PenTool',
    description: 'Product UX, interface systems, and brand-in-product that compound retention.',
    bullets: ['Product UX / UI', 'Design systems', 'Motion + interaction design'],
  },
  {
    name: 'Websites',
    icon: 'Globe',
    description: 'Marketing sites, e-commerce, and CMS builds with cinematic motion and speed.',
    bullets: ['High-conversion landing pages', 'Headless e-commerce', 'CMS + content ops'],
  },
];

const ITPillars = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
            <span className="w-8 h-px bg-foreground/40" />
            What we build
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Four pillars. One{' '}
            <span className="font-serif-accent italic">delivery team.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10 hover-lift hover:border-primary/40 transition-all duration-300"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={p.icon} size={26} />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">{p.name}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITPillars;
