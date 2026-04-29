import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const pillars = [
  {
    name: 'Platforms',
    icon: 'LayoutDashboard',
    description: 'SaaS, internal tools, and data platforms engineered to scale with your business.',
  },
  {
    name: 'Applications',
    icon: 'Smartphone',
    description: 'Web and mobile apps that turn product ideas into shipped, measurable revenue.',
  },
  {
    name: 'Design',
    icon: 'PenTool',
    description: 'Product UX, interface systems, and brand-in-product that compound retention.',
  },
  {
    name: 'Websites',
    icon: 'Globe',
    description: 'Marketing sites, e-commerce, and CMS builds with cinematic motion and speed.',
  },
];

const ITHome = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Descale Agency — IT Services. Platforms, apps, design, websites.</title>
        <meta
          name="description"
          content="End-to-end IT solutions: platforms, applications, design systems, and websites engineered to scale."
        />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full" />
          <div aria-hidden className="absolute top-40 left-[-10%] w-[420px] h-[420px] bg-accent/10 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-6"
            >
              <span className="w-8 h-px bg-foreground/40" />
              IT Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight max-w-5xl"
            >
              End-to-end IT,{' '}
              <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                engineered to scale.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
            >
              Platforms, applications, design systems, and websites — built by a team that ships
              cinematic experiences and revenue-grade engineering in the same sprint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="/get-started"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
              >
                Get Started
                <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
                  <Icon name="ArrowUpRight" size={16} />
                </span>
              </a>
              <a
                href="/marketing"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-foreground/15 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
              >
                Looking for marketing?
                <Icon name="ArrowRight" size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Service pillars */}
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
                  className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 hover-lift hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={p.icon} size={26} />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">{p.name}</h3>
                  <p className="text-foreground/70 leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="relative py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 lg:p-20"
            >
              <div aria-hidden className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-primary/10 blur-[120px] rounded-full" />
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                    Have a project?{' '}
                    <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                      Let's talk.
                    </span>
                  </h2>
                  <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                    Tell us what you want to ship. We'll come back with a plan, a team, and a timeline.
                  </p>
                </div>
                <a
                  href="/get-started"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand self-start lg:self-auto"
                >
                  Get Started
                  <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
                    <Icon name="ArrowUpRight" size={16} />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITHome;
