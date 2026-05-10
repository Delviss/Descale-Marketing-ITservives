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
    icon: 'LayoutDashboard',
    title: 'Multi-tenant SaaS',
    description: 'Workspaces, roles, billing, and audit logs — production-ready from week one. We design the schema, the auth, and the seat economics so you can charge from day one.',
  },
  {
    icon: 'Database',
    title: 'Data platforms',
    description: 'Postgres, ClickHouse, and event pipelines that turn raw activity into dashboards your operators trust. Built to query, not just to store.',
  },
  {
    icon: 'Sparkles',
    title: 'Internal tools',
    description: 'Admin panels, ops consoles, and back-office tooling that replace spreadsheets and Slack threads. Faster than Retool. Owned by you.',
  },
  {
    icon: 'Workflow',
    title: 'Workflow automation',
    description: 'Approval flows, queues, and state machines wired to your existing systems. Less manual ops, more compounding throughput.',
  },
  {
    icon: 'Brain',
    title: 'AI-native features',
    description: 'LLM workflows, semantic search, RAG pipelines, and agentic tools — embedded in the product, not bolted on as a chatbot.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Enterprise-ready',
    description: 'SSO, SCIM, SOC 2 trail, audit logs, and granular permissions. Pass procurement, not just demos.',
  },
];

const stack = [
  {
    name: 'Backend',
    icon: 'Server',
    items: ['Node.js / NestJS', 'Python / FastAPI', 'Go services', 'PostgreSQL', 'Redis', 'BullMQ / Temporal', 'tRPC / GraphQL', 'REST APIs'],
  },
  {
    name: 'Frontend',
    icon: 'Code2',
    items: ['React + TypeScript', 'Next.js (App Router)', 'TanStack Query', 'Zustand / Redux', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Playwright'],
  },
  {
    name: 'Data & AI',
    icon: 'Brain',
    items: ['ClickHouse', 'Snowflake', 'dbt', 'pgvector', 'OpenAI / Anthropic', 'LangChain', 'Pinecone / Weaviate', 'Airbyte / Fivetran'],
  },
  {
    name: 'Infrastructure',
    icon: 'Cloud',
    items: ['AWS / GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog', 'Sentry', 'Cloudflare'],
  },
];

const steps = [
  { title: 'Architecture sprint', description: 'Two weeks to map the domain, the data model, and the integration surface. You leave with diagrams, not just decks.', duration: 'Weeks 1–2' },
  { title: 'Vertical slice', description: 'One thin slice through the whole stack — auth, data, UI, deploy — proved end-to-end before we expand.', duration: 'Weeks 3–5' },
  { title: 'Build & ship', description: 'Two-week iterations, demoed live. Production behind a feature flag from sprint one. No big-bang launches.', duration: 'Weeks 6–12' },
  { title: 'Scale & hand-off', description: 'Load testing, runbooks, on-call rotation, and a knowledge transfer your team can actually run with.', duration: 'Weeks 13–14+' },
];

const faq = [
  {
    q: 'How long does a typical platform build take?',
    a: 'Median MVP timeline is 12 weeks from kickoff to a production launch behind a feature flag. Larger platforms (multi-tenant, regulated, or with deep integrations) typically run 16–24 weeks to general availability.',
  },
  {
    q: 'Do you handle ongoing maintenance?',
    a: 'Yes. After launch we offer a maintenance retainer that covers security patches, dependency updates, observability, on-call response, and feature additions. Most clients keep us on for 12+ months post-launch.',
  },
  {
    q: 'Can you work alongside our internal engineering team?',
    a: 'That is our default. We embed with your team, use your tools (GitHub, Linear, Slack), follow your code-review standards, and pair on the parts of the system you want to own long-term.',
  },
  {
    q: 'Where is the team based?',
    a: 'Senior delivery is split between EU and US time zones — primarily Warsaw, Poland, and remote-first across Europe. We do live-overlap hours with US East Coast clients daily.',
  },
  {
    q: 'Who owns the code and IP?',
    a: 'You do. All source, infrastructure, and IP transfer to your organisation under the engagement contract. No vendor lock-in, no hidden licensing.',
  },
];

const ITPlatforms = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SaaS Platform Development',
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
      'End-to-end SaaS platform engineering: multi-tenant architecture, data platforms, internal tools, and AI-native features. Built by senior engineers, shipped in 12–14 weeks.',
  };

  return (
    <ITPageLayout
      title="Platform Engineering — SaaS, Data & Internal Tools | Descale Agency"
      description="Multi-tenant SaaS, data platforms, internal tools, and AI-native features engineered to scale. Senior team. 12–14 week MVP. EU + US delivery."
      ogTitle="Platform Engineering — Descale Agency"
      jsonLd={jsonLd}
    >
      <SubHero
        eyebrow="Platforms"
        title="Platforms that"
        italicWord="compound revenue."
        description="Multi-tenant SaaS, data platforms, and internal tools — engineered by senior teams and shipped in 14 weeks. We don't ship MVPs that need a rewrite. We ship the architecture you scale on."
        stats={[
          { stat: '14wk', label: 'Median MVP timeline' },
          { stat: '99.9%', label: 'Production uptime' },
          { stat: '40+', label: 'Platforms shipped' },
          { stat: 'SOC 2', label: 'Audit-ready by default' },
        ]}
      />

      <FeatureGrid
        eyebrow="What we build"
        title="One team."
        italicWord="Six platform shapes."
        intro="From a single-tenant admin tool to a multi-region SaaS, we ship the same way: with senior engineers, real architecture, and production discipline from sprint one."
        features={features}
      />

      <StackSection
        title="The stack we ship"
        italicWord="every week."
        intro="We pick boring tech where it matters and sharp tech where it pays off. Every decision is reversible — we tell you why we picked it and what we'd swap to next."
        groups={stack}
      />

      <ProcessTimeline
        title="From kickoff to"
        italicWord="production in 14 weeks."
        intro="A predictable rhythm: architecture first, vertical slice next, then iterate to launch. You see working software in week three, not month three."
        steps={steps}
      />

      <FaqSection items={faq} />

      <CtaBand
        title="Ready to build a platform that"
        italicWord="scales without rewrites?"
        description="Tell us what you want to ship. We'll come back with an architecture, a team, and a 14-week plan."
      />
    </ITPageLayout>
  );
};

export default ITPlatforms;
