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
    icon: 'Smartphone',
    title: 'Native mobile apps',
    description: 'iOS and Android delivered with React Native or fully native (Swift / Kotlin) when performance demands it. App-Store-ready, with CI builds from day one.',
  },
  {
    icon: 'Globe',
    title: 'Web applications',
    description: 'React and Next.js apps with type-safe APIs, server components, edge rendering, and the kind of UX that converts trial users to paid in week one.',
  },
  {
    icon: 'Plug',
    title: 'API & integrations',
    description: 'REST, GraphQL, and tRPC services with OpenAPI specs, SDKs, and webhook reliability. Stripe, Twilio, HubSpot, Salesforce, and the long tail.',
  },
  {
    icon: 'Zap',
    title: 'Real-time features',
    description: 'Live cursors, collaborative editing, presence, and chat, built on WebSockets, CRDTs, or Liveblocks where it makes sense.',
  },
  {
    icon: 'Bot',
    title: 'AI-powered apps',
    description: 'Copilots, RAG search, agentic flows, and structured-output features that ship as core UX, not a chat widget in the corner.',
  },
  {
    icon: 'Lock',
    title: 'Auth & identity',
    description: 'Email, magic link, OAuth, SSO, SCIM, and passkeys, wired into your tenant model so enterprise procurement is a paperwork problem, not a code one.',
  },
];

const stack = [
  {
    name: 'Web',
    icon: 'Code2',
    items: ['Next.js 14+', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'TanStack Router', 'Vite'],
  },
  {
    name: 'Mobile',
    icon: 'Smartphone',
    items: ['React Native + Expo', 'Swift / SwiftUI', 'Kotlin / Compose', 'Tamagui', 'Reanimated', 'TestFlight + Play Console', 'OTA updates', 'Push notifications'],
  },
  {
    name: 'API & realtime',
    icon: 'Plug',
    items: ['tRPC', 'GraphQL (Apollo)', 'REST + OpenAPI', 'WebSockets', 'Liveblocks / Yjs', 'Inngest', 'Webhooks', 'Stripe / Twilio'],
  },
  {
    name: 'Quality',
    icon: 'CheckCircle2',
    items: ['Playwright', 'Vitest / Jest', 'Storybook', 'ESLint / Prettier', 'Sentry', 'PostHog', 'LaunchDarkly', 'Lighthouse CI'],
  },
];

const steps = [
  { title: 'Discovery & flows', description: 'We map the user journey, the data model, and the must-ship vs nice-to-have features. You leave week one with a clickable prototype.', duration: 'Week 1-2' },
  { title: 'Foundations', description: 'Auth, billing, navigation, design system, and CI/CD. Boring infrastructure, done right, before any feature work.', duration: 'Week 3-4' },
  { title: 'Feature sprints', description: 'Two-week sprints with live demos and a working build behind a feature flag. Every sprint produces something a real user could use.', duration: 'Week 5-10' },
  { title: 'Launch & polish', description: 'Performance pass, accessibility audit, App Store / Play Store submission, and a launch playbook your team executes.', duration: 'Week 11-12' },
];

const faq = [
  {
    q: 'Native or React Native?',
    a: 'Default is React Native + Expo, one codebase, near-native UX, and shared logic with the web app. We go fully native (Swift / Kotlin) when the product needs deep platform APIs, heavy graphics, or sub-16ms responsiveness.',
  },
  {
    q: 'Do you handle the App Store and Play Store submission?',
    a: 'Yes, provisioning, signing, metadata, screenshots, and the actual review process. We have shipped 20+ apps to the App Store and Play Store and know how to get past the common rejection patterns.',
  },
  {
    q: 'Can you migrate or rewrite an existing app?',
    a: 'Yes. We do incremental migrations (strangler-fig style) more often than full rewrites, your users keep getting updates while we move the foundation underneath them.',
  },
  {
    q: 'How do you handle accessibility and i18n?',
    a: 'WCAG 2.2 AA is the baseline, not a stretch goal. Every component lands with proper roles, focus management, and screen-reader copy. i18n is wired in from the design-system level so adding locales later is a content task, not an engineering project.',
  },
  {
    q: 'What about post-launch support?',
    a: 'We offer maintenance retainers covering bug fixes, dependency upgrades, OS-version compatibility, and small feature additions. Most app teams keep us on for the first 12 months.',
  },
];

const ITApplications = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web & Mobile Application Development',
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
      'Web and mobile applications engineered by a senior team. React, Next.js, React Native, native iOS and Android. 12-week median launch.',
  };

  return (
    <ITPageLayout
      title="Web & Mobile Applications | iOS, Android, React, Next.js | Descale Agency"
      description="Web and mobile apps engineered by a senior team. React, Next.js, React Native, native iOS and Android. 12-week median launch. EU + US delivery."
      ogTitle="Application Engineering | Descale Agency"
      jsonLd={jsonLd}
    >
      <SubHero
        eyebrow="Applications"
        title="Apps that ship,"
        italicWord="and keep shipping."
        description="Web, iOS, and Android applications built by senior engineers who treat performance, accessibility, and conversion as engineering problems, not afterthoughts."
        stats={[
          { stat: '12wk', label: 'Median launch' },
          { stat: '90+', label: 'Lighthouse target' },
          { stat: 'WCAG 2.2', label: 'AA by default' },
          { stat: '20+', label: 'Store-published apps' },
        ]}
      />

      <FeatureGrid
        eyebrow="Application surfaces"
        title="One product."
        italicWord="Every screen size."
        intro="We design, engineer, and ship across web and mobile from a single team, no hand-offs between agencies, no UX seams between platforms."
        features={features}
      />

      <StackSection
        title="A sharp,"
        italicWord="opinionated stack."
        intro="We don't reinvent the wheel each engagement. Our reference stack is battle-tested across 40+ launches, and we'll deviate when your context demands it."
        groups={stack}
      />

      <ProcessTimeline
        title="A predictable"
        italicWord="path to launch."
        intro="No surprise deadlines. Every two weeks you see a working build, demoed live, with a sharper plan for the next iteration."
        steps={steps}
      />

      <FaqSection items={faq} />

      <CtaBand
        title="Have an app idea?"
        italicWord="Let's prototype it."
        description="Send us a one-paragraph brief. We'll come back in 48 hours with scope, timeline, and a fixed-price prototype option."
      />
    </ITPageLayout>
  );
};

export default ITApplications;
