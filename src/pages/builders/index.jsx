import React, { useRef, useCallback } from 'react';
import ITPageLayout from '../it/_shared/ITPageLayout';
import FeatureGrid from '../it/_shared/FeatureGrid';
import ProcessTimeline from '../it/_shared/ProcessTimeline';
import FaqSection from '../it/_shared/FaqSection';
import BuildersHero from './components/BuildersHero';
import SplitResponsibilities from './components/SplitResponsibilities';
import BuildersApplicationForm from './components/BuildersApplicationForm';

const steps = [
  { title: 'Join', description: 'Apply to the Builder Network and tell us what you build. We match you to the work, not the other way around.', duration: 'Step one' },
  { title: 'Pick projects', description: 'Choose the products you want to work on. Real briefs, real clients, zero sales calls on your side.', duration: 'On your terms' },
  { title: 'Build', description: 'Do the part you love. We handle contracts, project management, and the client relationship end to end.', duration: 'Your craft' },
  { title: 'Get paid', description: 'Ship, invoice-free. We chase the payments and the paperwork. You keep what you earn. Then repeat.', duration: 'Repeat' },
];

const audience = [
  { icon: 'Code2', title: 'Developers', description: 'Frontend, full-stack, or backend. Ship real products without ever writing a proposal.' },
  { icon: 'PenTool', title: 'UI / Product Designers', description: 'Design interfaces that ship. We bring the clients and the scope, you bring the craft.' },
  { icon: 'BrainCircuit', title: 'AI Engineers', description: 'Build LLM apps, agents, and automations for clients who actually want them.' },
  { icon: 'Blocks', title: 'No-Code Builders', description: 'Bubble, Webflow, Framer, Airtable. Turn tools into shipped products.' },
  { icon: 'Smartphone', title: 'Flutter & Mobile', description: 'Native and cross-platform apps, delivered to real users, without the client hunt.' },
  { icon: 'Server', title: 'Backend Engineers', description: 'APIs, infrastructure, and data. The plumbing that makes products work.' },
  { icon: 'Megaphone', title: 'Marketing', description: 'Growth, content, and performance work that connects to shipped product.' },
  { icon: 'Workflow', title: 'Automation', description: 'Wire systems together and remove the manual work from a business.' },
  { icon: 'ShieldCheck', title: 'Cybersecurity', description: 'Secure the products we build and the clients who depend on them.' },
  { icon: 'Search', title: 'SEO', description: 'Technical and content SEO that makes the products we ship discoverable.' },
  { icon: 'ClipboardList', title: 'Product Managers', description: 'Shape what gets built and keep delivery on track across a build.' },
];

const benefits = [
  { icon: 'UserX', title: 'No client hunting', description: 'We bring the clients. You never send a cold email or sit through a sales call.' },
  { icon: 'FileX', title: 'No paperwork', description: 'Contracts, scoping docs, and legal terms are handled. You just build.' },
  { icon: 'CircleDollarSign', title: 'No chasing invoices', description: 'We manage payments and collections. You get paid, we do the follow-up.' },
  { icon: 'Scale', title: 'No legal stress', description: 'IP, liability, and terms sit with the business, not with you.' },
  { icon: 'Sparkles', title: 'No self-marketing', description: 'No personal brand grind required. Your work speaks; we do the selling.' },
  { icon: 'Globe', title: 'Remote', description: 'Work from anywhere. The network is built for distributed builders.' },
  { icon: 'Clock', title: 'Flexible', description: 'Full-time, side project, or two hours after work. You set the pace.' },
  { icon: 'Award', title: 'Real ownership', description: 'You build products that matter and keep what you earn. This is your next company.' },
];

const faq = [
  {
    q: 'How does pay work?',
    a: 'You keep what you earn on the work you deliver. Descale takes care of client billing, collections, and payment processing, so there are no invoices for you to chase. Rates and terms are agreed per project before you start.',
  },
  {
    q: 'What is the time commitment?',
    a: 'Whatever you want it to be. Build full-time, take on a single project, or ship two hours after work. You pick the projects and the pace that fit your life.',
  },
  {
    q: 'Who owns the IP of what I build?',
    a: 'IP for client work sits with the business and the client, as with any agency engagement, and it is spelled out in the project terms up front. You keep your reputation, your portfolio rights where agreed, and the craft you take to the next build.',
  },
  {
    q: 'How are projects matched to me?',
    a: 'When you join, you tell us your primary skills and what you want to build. We match you to briefs that fit, so you spend your time building the products you actually want to work on, not bidding for scraps.',
  },
];

const Builders = () => {
  const formRef = useRef(null);

  const scrollToForm = useCallback(() => {
    const el = formRef.current || document.getElementById('join');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Descale Builders — Join the Builder Network',
    description:
      'Join Descale Builders and turn your skills into products. You build websites, AI, apps, SaaS, and automations. Descale handles clients, contracts, sales, marketing, legal, payments, and project management.',
    url: 'https://descale.agency/builders',
    provider: {
      '@type': 'Organization',
      name: 'Descale Agency',
      url: 'https://descale.agency',
    },
  };

  return (
    <ITPageLayout
      title="Descale Builders | Join the Builder Network | Descale Agency"
      description="Turn your skills into products. You build; Descale handles clients, contracts, sales, marketing, legal, payments, and project management. Join the Builder Network."
      ogTitle="Descale Builders | You build the products. We build the business."
      jsonLd={jsonLd}
    >
      <BuildersHero onJoin={scrollToForm} />

      <SplitResponsibilities />

      <div id="how-it-works" className="scroll-mt-24">
        <ProcessTimeline
          eyebrow="How it works"
          title="From skills"
          italicWord="to shipped products."
          intro="A simple loop with none of the overhead of running a company. Join once, then keep building."
          steps={steps}
        />
      </div>

      <FeatureGrid
        eyebrow="Who this is for"
        title="Every kind of"
        italicWord="builder."
        intro="If you make things people use, there's a place for you in the network."
        features={audience}
      />

      <FeatureGrid
        eyebrow="Why join"
        title="All the building."
        italicWord="None of the headache."
        intro="Everything that makes freelancing exhausting, we take off your plate."
        features={benefits}
      />

      <FaqSection items={faq} />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 lg:p-20">
            <div aria-hidden className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />
            <div aria-hidden className="absolute -bottom-24 -left-24 w-[360px] h-[360px] bg-accent/10 blur-[120px] rounded-full" />
            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Your next company{' '}
                  <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                    starts tonight.
                  </span>
                </h2>
                <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                  Build after work — two hours can change your life. We handle the business, you build the products.
                </p>
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand self-start lg:self-auto"
              >
                Join Builders
                <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
                  <span className="sr-only">Scroll to application form</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BuildersApplicationForm ref={formRef} />
    </ITPageLayout>
  );
};

export default Builders;
