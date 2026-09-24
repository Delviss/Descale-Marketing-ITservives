import React from 'react';
import { motion } from 'framer-motion';
import ITPageLayout from '../it/_shared/ITPageLayout';
import CtaBand from '../it/_shared/CtaBand';
import VentureCard from './components/VentureCard';

const ventures = [
  {
    name: 'Interactive Taxi Ads',
    pitch: 'Location-based advertising on Kraków taxis, with real-time campaign simulation and audience intelligence.',
    icon: 'Car',
    status: 'Live',
    statusTone: 'live',
    href: '/taxi-ads',
  },
  {
    name: 'Descale MoveAds',
    pitch: 'Delivery-bag advertising that connects restaurants with active couriers through opt-in, QR-powered campaigns.',
    icon: 'ShoppingBag',
    status: 'Kraków pilot opening soon',
    statusTone: 'pilot',
    href: '/moveads',
  },
];

const Projects = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Descale Projects',
    description: "What Descale is building beyond client work — our own ventures and products.",
    url: 'https://www.descale.services/projects',
  };

  return (
    <ITPageLayout
      title="Projects | Descale's Own Ventures | Descale Agency"
      description="What Descale is building beyond client work: our own ventures and products, from Interactive Taxi Ads to Descale MoveAds."
      ogTitle="Projects | What we're building beyond client work"
      jsonLd={jsonLd}
    >
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-90" />
        <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/70 uppercase mb-6"
          >
            <span className="w-8 h-px bg-foreground/40" />
            Our own ventures
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight max-w-4xl"
          >
            What we&rsquo;re building{' '}
            <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              beyond client work.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            Alongside the campaigns and products we build for clients, we put our own ideas into the market.
            These are Descale&rsquo;s own ventures &mdash; distinct from our client{' '}
            <a href="/work" className="text-primary hover:underline">case-study portfolio</a>.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ventures.map((venture, i) => (
              <VentureCard key={venture.name} venture={venture} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a venture in mind,"
        italicWord="or want to partner?"
        description="If you're an investor, operator, or team interested in one of our ventures, we'd like to hear from you."
        ctaLabel="Get in touch"
        ctaTo="/contact"
      />
    </ITPageLayout>
  );
};

export default Projects;
