import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const footerLinks = {
  marketing: [
    { name: 'Marketing Home', href: '/marketing' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/work' },
    { name: 'Interactive Taxi Ads', href: '/taxi-ads' },
  ],
  it: [
    { name: 'IT Home', href: '/it' },
    { name: 'Platforms', href: '/it' },
    { name: 'Applications', href: '/it' },
    { name: 'Websites', href: '/it' },
  ],
  resources: [
    { name: 'About', href: '/about' },
    { name: 'Get Started', href: '/get-started' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/get-started' },
  ],
};

const socials = [
  { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' },
  { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
  { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com' },
  { name: 'GitHub', icon: 'Github', href: 'https://github.com' },
];

const Footer = () => {
  const location = useLocation();
  const onIT = location?.pathname?.startsWith('/it');
  const switchTarget = onIT
    ? { href: '/marketing', label: 'Switch to Marketing Services' }
    : { href: '/it', label: 'Switch to IT Services' };

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Gradient mesh backdrop */}
      <div aria-hidden className="absolute inset-0 bg-mesh-dark opacity-90" />
      <div aria-hidden className="absolute -top-48 left-1/2 -translate-x-1/2 w-[120%] h-[420px] bg-gradient-to-b from-primary/30 via-accent/10 to-transparent blur-3xl rounded-full" />
      <div aria-hidden className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-accent/20 blur-[120px] rounded-full animate-float-orb" />

      {/* Giant brand word on the bottom */}
      <div aria-hidden className="absolute inset-x-0 bottom-[-2.5rem] flex justify-center pointer-events-none select-none">
        <span className="font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/0 text-[18vw] leading-none">
          DESCALE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-16 border-b border-white/10"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/60 uppercase mb-6">
              <span className="w-8 h-px bg-white/40" />
              Let's build what compounds
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white">
              Ready to{' '}
              <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                descale the noise?
              </span>
            </h2>
          </div>
          <Link
            to="/get-started"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
          >
            Get Started
            <span className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <Icon name="ArrowUpRight" size={16} />
            </span>
          </Link>
        </motion.div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5" aria-label="Descale Agency home">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/logo-mark.svg`}
                alt=""
                aria-hidden="true"
                className="h-11 w-auto drop-shadow-[0_4px_20px_rgba(198,90,46,0.45)]"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg tracking-tight text-white">DESCALE</span>
                <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase font-semibold">Agency</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Growth systems, cinematic creative, and analytics infrastructure that compound revenue — not ad spend.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">Marketing</h4>
            <ul className="space-y-3">
              {footerLinks.marketing.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-white/80 hover:text-accent transition-colors inline-flex items-center gap-1.5 group">
                    {l.name}
                    <Icon name="ArrowUpRight" size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">IT Services</h4>
            <ul className="space-y-3">
              {footerLinks.it.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-white/80 hover:text-accent transition-colors inline-flex items-center gap-1.5 group">
                    {l.name}
                    <Icon name="ArrowUpRight" size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-white/80 hover:text-accent transition-colors inline-flex items-center gap-1.5 group">
                    {l.name}
                    <Icon name="ArrowUpRight" size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/50">
            <span>© {new Date().getFullYear()} DESCALE Agency. All rights reserved.</span>
            <Link
              to={switchTarget.href}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors group"
            >
              {switchTarget.label}
              <Icon name="ArrowUpRight" size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/get-started" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/get-started" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/get-started" className="hover:text-white transition-colors">Cookies</Link>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-accent hover:bg-accent/10 hover:text-accent flex items-center justify-center text-white/70 transition-all duration-300"
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
