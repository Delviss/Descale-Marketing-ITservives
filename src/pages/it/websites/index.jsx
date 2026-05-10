import React from 'react';
import ITPageLayout from '../_shared/ITPageLayout';
import SubHero from '../_shared/SubHero';
import FeatureGrid from '../_shared/FeatureGrid';
import StackSection from '../_shared/StackSection';
import ProcessTimeline from '../_shared/ProcessTimeline';
import FaqSection from '../_shared/FaqSection';
import CtaBand from '../_shared/CtaBand';

const features = [
  {
    icon: 'Sparkles',
    title: 'Marketing sites',
    description: 'Cinematic motion, sub-2s LCP, perfect Core Web Vitals — and copy that converts. Built to rank in Google and to be quoted by ChatGPT.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Headless e-commerce',
    description: 'Shopify, Stripe, and Medusa stores with custom storefronts. PDPs that load in under a second and checkouts that survive Black Friday.',
  },
  {
    icon: 'PenSquare',
    title: 'Content & CMS',
    description: 'Sanity, Contentful, or self-hosted Payload — wired into a workflow your marketing team actually uses. No tickets to publish a blog post.',
  },
  {
    icon: 'Search',
    title: 'SEO & GEO engineering',
    description: 'Technical SEO, structured data, and LLM-readable content. We ship sites that rank in classic search and get cited by AI search.',
  },
  {
    icon: 'Globe2',
    title: 'i18n & multi-region',
    description: 'Locale routing, translated content workflows, and edge delivery — so a site in Warsaw loads as fast in São Paulo and Singapore.',
  },
  {
    icon: 'Gauge',
    title: 'Performance budgets',
    description: 'Lighthouse 95+ as a CI gate, not a launch goal. Bundle budgets, image pipelines, and edge caching baked into the build.',
  },
];

const stack = [
  {
    name: 'Frameworks',
    icon: 'Code2',
    items: ['Next.js (App Router)', 'Astro', 'Remix', 'Vite', 'React 18+', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'CMS',
    icon: 'PenSquare',
    items: ['Sanity', 'Contentful', 'Payload CMS', 'Storyblok', 'Strapi', 'Hygraph', 'WordPress (headless)', 'Builder.io'],
  },
  {
    name: 'Commerce',
    icon: 'ShoppingBag',
    items: ['Shopify Hydrogen', 'Medusa', 'Stripe Checkout', 'Stripe Billing', 'Snipcart', 'Commerce.js', 'Klaviyo', 'Postscript'],
  },
  {
    name: 'Edge & analytics',
    icon: 'Cloud',
    items: ['Vercel', 'Cloudflare', 'Netlify', 'GA4', 'Plausible', 'PostHog', 'GTM', 'Hotjar / Clarity'],
  },
];

const steps = [
  { title: 'Strategy & narrative', description: 'Positioning, message hierarchy, and the three soundbites your audience will repeat. Story before pixels.', duration: 'Week 1' },
  { title: 'Design & motion', description: 'Art direction, component library, and motion language. We ship a Figma file and a living Storybook in parallel.', duration: 'Week 2–3' },
  { title: 'Build & integrate', description: 'Engineering against a real CMS with real content. SEO, structured data, and analytics are not a phase-two concern.', duration: 'Week 4–6' },
  { title: 'Launch & optimise', description: 'A/B tests, heatmaps, and a 30-day optimisation sprint after go-live. Sites compound when you treat them like products.', duration: 'Week 7–8' },
];

const faq = [
  {
    q: 'How long does a marketing site take?',
    a: 'A high-end marketing site or product page lands in 6–8 weeks. A larger marketing platform with multi-locale, blog, customer stories, and product pages typically takes 10–12 weeks.',
  },
  {
    q: 'Will my site rank in ChatGPT, Perplexity, and Google?',
    a: 'Yes — we engineer for both. Classic SEO (technical hygiene, schema.org, content depth) plus GEO (Generative Engine Optimization): clean semantic HTML, factual answer blocks, JSON-LD, and content structured for LLM citation. Most clients see AI-search traffic within 60 days.',
  },
  {
    q: 'Can I edit content myself?',
    a: 'Yes. Every site ships with a CMS your marketing team owns. Sanity is our default for structured content; Payload when you need a self-hosted, code-first CMS; Contentful or WordPress when your team already uses them.',
  },
  {
    q: 'What about Webflow or Framer?',
    a: 'Great for speed and simple sites. We build Webflow and Framer too — but if you need custom motion, deep integrations, multi-locale, or commerce, Next.js + Sanity is faster long-term and cheaper to maintain.',
  },
  {
    q: 'Do you do redesigns of existing sites?',
    a: 'Yes — we audit your current site, preserve the URLs and SEO equity, and ship a redesign in phases so you do not nuke organic traffic on launch day.',
  },
];

const ITWebsites = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design & Development',
    provider: {
      '@type': 'Organization',
      name: 'Descale Agency',
      url: 'https://descale.agency',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Travomate Sp. z o.o.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Nowogrodzka 31',
          postalCode: '00-511',
          addressLocality: 'Warsaw',
          addressCountry: 'PL',
        },
      },
    },
    areaServed: ['EU', 'US', 'UK', 'Poland'],
    description:
      'Marketing sites, e-commerce, and CMS builds engineered for performance and AI search. Next.js, Sanity, Shopify. 6–8 week launch.',
  };

  return (
    <ITPageLayout
      title="Websites — High-conversion Marketing Sites & Headless E-commerce | Descale Agency"
      description="Marketing sites, e-commerce, and CMS builds engineered for performance, SEO, and GEO. Next.js, Sanity, Shopify. 6–8 week launch."
      ogTitle="Website Engineering — Descale Agency"
      jsonLd={jsonLd}
    >
      <SubHero
        eyebrow="Websites"
        title="Sites that rank,"
        italicWord="convert and compound."
        description="Marketing sites, e-commerce, and CMS builds with cinematic motion and sub-2-second LCP. Engineered to rank in Google — and to be quoted by ChatGPT and Perplexity."
        stats={[
          { stat: '6–8wk', label: 'Marketing site launch' },
          { stat: '95+', label: 'Lighthouse score' },
          { stat: '<2s', label: 'Largest contentful paint' },
          { stat: 'GEO', label: 'AI-search ready' },
        ]}
      />

      <FeatureGrid
        eyebrow="What we ship"
        title="Six site shapes."
        italicWord="One delivery team."
        intro="From a one-page launch site to a multi-locale e-commerce flagship, every build is engineered to the same standard: fast, accessible, indexable, and beautiful."
        features={features}
      />

      <StackSection
        title="Tooling that"
        italicWord="ages well."
        intro="We pick stacks your team can actually maintain in three years — not the framework that won Twitter this month."
        groups={stack}
      />

      <ProcessTimeline
        title="From brief"
        italicWord="to launch in 8 weeks."
        intro="A focused, low-overhead engagement model: strategy, design, build, ship — with content and SEO baked in from week one, not bolted on at the end."
        steps={steps}
      />

      <FaqSection items={faq} />

      <CtaBand
        title="Need a site that"
        italicWord="ranks and converts?"
        description="Send us your current site (or a Notion brief). We'll come back with an audit, a redesign direction, and a fixed-price scope."
      />
    </ITPageLayout>
  );
};

export default ITWebsites;
