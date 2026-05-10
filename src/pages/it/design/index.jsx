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
    icon: 'PenTool',
    title: 'Product UX & UI',
    description: 'Onboarding, core flows, dashboards, and settings — designed by people who have shipped product, not just dribbble shots.',
  },
  {
    icon: 'Layers',
    title: 'Design systems',
    description: 'Tokens, primitives, and patterns shipped as a real component library — not a Figma file the engineers ignore.',
  },
  {
    icon: 'Wand2',
    title: 'Brand-in-product',
    description: 'Extending brand identity into the product UX so trial users feel the brand from sign-up to power-use.',
  },
  {
    icon: 'MousePointer2',
    title: 'Interaction design',
    description: 'Micro-interactions, transitions, and motion language that signal quality the moment a user clicks.',
  },
  {
    icon: 'Accessibility',
    title: 'Accessibility (WCAG 2.2)',
    description: 'AA-compliant by default. Every component lands with proper roles, focus management, and screen-reader copy.',
  },
  {
    icon: 'FlaskConical',
    title: 'Research & validation',
    description: 'Lightweight user testing, usability studies, and analytics-driven design decisions — so you ship what users actually use.',
  },
];

const stack = [
  {
    name: 'Design tooling',
    icon: 'PenTool',
    items: ['Figma + Variables', 'FigJam', 'Framer', 'Principle', 'Lottie', 'After Effects', 'Spline', 'Rive'],
  },
  {
    name: 'Component systems',
    icon: 'Layers',
    items: ['Storybook', 'Radix UI', 'shadcn/ui', 'Tailwind tokens', 'Style Dictionary', 'Chromatic', 'Tokens Studio', 'Zeroheight'],
  },
  {
    name: 'Motion',
    icon: 'Wand2',
    items: ['Framer Motion', 'GSAP', 'Lottie', 'Rive', 'Reanimated', 'CSS scroll-driven', 'Web Animations API', 'Three.js'],
  },
  {
    name: 'Research',
    icon: 'FlaskConical',
    items: ['Maze', 'Useberry', 'Hotjar', 'PostHog', 'Dovetail', 'Lookback', 'UserTesting', 'Survey design'],
  },
];

const steps = [
  { title: 'Audit & art direction', description: 'We audit the current product, define an art direction, and align on the visual language before pushing pixels.', duration: 'Week 1' },
  { title: 'System foundations', description: 'Tokens, type scale, color, spacing, and the first ten components — shipped as a Figma library and a Storybook in parallel.', duration: 'Week 2–3' },
  { title: 'Flows & screens', description: 'High-fidelity designs for every shipped flow, prototyped to click-through. Engineering joins the design reviews.', duration: 'Week 4–6' },
  { title: 'Hand-off & QA', description: 'Designers stay through implementation — pixel pairing, motion review, and accessibility QA before launch.', duration: 'Week 7–8' },
];

const faq = [
  {
    q: 'Do you only design, or do you implement too?',
    a: 'We do both. Most engagements include design, engineering, and a Storybook implementation under one team. Design-only engagements are available when you have an internal engineering team to ship with.',
  },
  {
    q: 'Will the design system actually get used?',
    a: 'Yes — because we ship it as code, not just Figma. Components land in Storybook, are versioned in your repo, and engineering review is part of the design process.',
  },
  {
    q: 'How do you handle accessibility?',
    a: 'WCAG 2.2 AA is the baseline. Color contrast, focus order, keyboard navigation, and screen-reader semantics are checked in design and re-checked in code. We can do a third-party audit pre-launch on request.',
  },
  {
    q: 'Can you work with our existing design system?',
    a: 'Of course. We extend Material, Polaris, Carbon, or your custom system — and where the system has gaps, we propose patterns rather than fork it.',
  },
  {
    q: 'What about user research?',
    a: 'Light by default — we run unmoderated tests, usability studies, and post-launch analytics reviews. Heavier qualitative research can be scoped on request.',
  },
];

const ITDesign = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Product Design & Design Systems',
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
      'Product design, design systems, and brand-in-product UX. Figma + Storybook + accessibility from day one.',
  };

  return (
    <ITPageLayout
      title="Product Design & Design Systems — Figma to Storybook | Descale Agency"
      description="Product UX, design systems, and brand-in-product UX. WCAG 2.2 AA by default. Figma + Storybook shipped together."
      ogTitle="Product Design — Descale Agency"
      jsonLd={jsonLd}
    >
      <SubHero
        eyebrow="Design"
        title="Design that"
        italicWord="ships in code."
        description="Product UX, design systems, and brand-in-product motion — built by designers who think in components, not screens, and who stay through the implementation."
        stats={[
          { stat: '8wk', label: 'System foundations' },
          { stat: 'WCAG 2.2', label: 'AA by default' },
          { stat: '100%', label: 'Storybook coverage' },
          { stat: 'EU/US', label: 'Senior design team' },
        ]}
      />

      <FeatureGrid
        eyebrow="What we design"
        title="Design that"
        italicWord="shows up in revenue."
        intro="Pretty design is table stakes. Design that lifts activation, retention, and pricing-page conversion is the brief — and the only one we accept."
        features={features}
      />

      <StackSection
        title="Tools we"
        italicWord="actually ship in."
        intro="Figma is the source of truth for visual design. Storybook is the source of truth for shipped components. We keep them in lockstep, not in conflict."
        groups={stack}
      />

      <ProcessTimeline
        title="From audit"
        italicWord="to system in 8 weeks."
        intro="Design and engineering working in the same sprint cadence — so the gap between Figma and production is measured in days, not months."
        steps={steps}
      />

      <FaqSection items={faq} />

      <CtaBand
        title="Want a design system"
        italicWord="that engineers actually use?"
        description="Send us your product and we'll come back with an audit, a system roadmap, and an 8-week scope."
      />
    </ITPageLayout>
  );
};

export default ITDesign;
