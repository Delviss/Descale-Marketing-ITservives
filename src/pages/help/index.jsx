import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: 'LayoutGrid' },
  { id: 'getting-started', label: 'Getting Started', icon: 'Rocket' },
  { id: 'services', label: 'Services & Pricing', icon: 'Tag' },
  { id: 'process', label: 'Process & Delivery', icon: 'Workflow' },
  { id: 'it', label: 'IT & Engineering', icon: 'Cpu' },
  { id: 'billing', label: 'Billing & Contracts', icon: 'Receipt' },
  { id: 'support', label: 'Account & Support', icon: 'LifeBuoy' },
];

const FAQS = [
  {
    category: 'getting-started',
    q: 'How do I start working with DESCALE?',
    a: 'Begin with our free Growth Assessment. Tell us about your goals, current channels, and timeline. Within 24 hours we schedule a strategy call to scope a fit and recommend the right engagement.',
  },
  {
    category: 'getting-started',
    q: 'Do you work with early-stage startups?',
    a: 'Yes. We partner with ambitious teams from seed to Series C, plus established brands. The minimum requirement is product-market signal and the appetite to scale.',
  },
  {
    category: 'services',
    q: 'What services does DESCALE offer?',
    a: 'Marketing: brand strategy, performance marketing, creative & content, social media, analytics & growth engineering. IT: platforms, applications, websites, and product design, fully integrated.',
  },
  {
    category: 'services',
    q: 'How is pricing structured?',
    a: 'Marketing engagements typically start at $6k-$15k per month depending on scope. IT projects are scoped per deliverable. Each proposal includes a fixed scope, milestones, and success metrics.',
  },
  {
    category: 'process',
    q: 'How long does a typical engagement take?',
    a: 'Most marketing campaigns launch within 2-4 weeks. IT builds ship in 8-14 weeks depending on complexity. We share weekly progress and a public roadmap.',
  },
  {
    category: 'process',
    q: 'Who will be on my team?',
    a: 'Every engagement gets a senior strategist, a delivery lead, and dedicated specialists (creative, performance, engineering). No juniors-only teams. No outsourced execution.',
  },
  {
    category: 'it',
    q: 'What stack do you use for IT projects?',
    a: 'Modern, type-safe stacks: Next.js / React, Node.js, Python, Postgres, and managed cloud (AWS/Vercel). We choose the right tool for the problem, never the trendiest one.',
  },
  {
    category: 'it',
    q: 'Can you take over an existing codebase?',
    a: 'Yes. We start with a 1-week audit, document risks, and deliver a stabilization plan. From there we ship in 2-week iterations with full handover documentation.',
  },
  {
    category: 'billing',
    q: 'How do contracts and payments work?',
    a: 'Monthly retainers are net-15 invoiced at the start of each cycle. Project work uses milestone billing. All contracts include a 30-day exit clause, we earn the renewal.',
  },
  {
    category: 'billing',
    q: 'Do you offer refunds?',
    a: 'If you are not satisfied within the first 14 days of an engagement, we refund the unworked portion of the retainer. Our incentives are aligned with your outcomes.',
  },
  {
    category: 'support',
    q: 'How do I reach my team?',
    a: 'Each engagement gets a private Slack channel, a shared async board, and weekly live syncs. Average response time during business hours is under 2 hours.',
  },
  {
    category: 'support',
    q: 'What if I need help outside business hours?',
    a: 'Production-critical issues (IT) get on-call coverage. Marketing inquiries are handled the next business day. Emergency escalation paths are documented in your kickoff doc.',
  },
];

const HelpPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery =
        !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const highlight = (text) => {
    const q = query.trim();
    if (!q) return text;
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
    const parts = text.split(re);
    return parts.map((part, i) =>
      re.test(part) ? (
        <mark key={i} className="bg-accent/25 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <>
      <Helmet>
        <title>Help Center | Descale Agency</title>
        <meta
          name="description"
          content="Find answers about working with Descale Agency, services, pricing, process, IT engineering, billing, and support."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 pt-20">
          {/* Hero + Search */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div aria-hidden className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5"
              >
                <Icon name="LifeBuoy" size={16} />
                <span>Help Center</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.05]"
              >
                How can we help?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto"
              >
                Search our knowledge base or browse common questions about our services,
                process, and engagement model.
              </motion.p>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 sm:mt-10 max-w-2xl mx-auto"
              >
                <label htmlFor="help-search" className="sr-only">
                  Search the help center
                </label>
                <div className="relative">
                  <Icon
                    name="Search"
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
                  />
                  <input
                    id="help-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles, e.g. pricing, IT, process…"
                    className="w-full pl-12 pr-12 py-4 sm:py-5 rounded-2xl border border-border bg-card text-foreground text-base sm:text-lg shadow-brand-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center text-text-secondary"
                      aria-label="Clear search"
                    >
                      <Icon name="X" size={18} />
                    </button>
                  )}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-text-secondary">
                  Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
                  {filtered.length === 1 ? 'result' : 'results'}
                  {activeCategory !== 'all' && (
                    <>
                      {' '}
                      in{' '}
                      <span className="font-semibold text-foreground">
                        {CATEGORIES.find((c) => c.id === activeCategory)?.label}
                      </span>
                    </>
                  )}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="border-y border-border bg-card/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIdx(null);
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                      activeCategory === cat.id
                        ? 'bg-primary text-primary-foreground shadow-brand'
                        : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <Icon name={cat.icon} size={14} />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                    <Icon name="SearchX" size={28} className="text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No matches for "{query}"
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Try a different search term or reach out, we usually reply within 2 business hours.
                  </p>
                  <Button
                    variant="default"
                    iconName="MessageSquare"
                    iconPosition="left"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Support
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {filtered.map((item, i) => {
                    const open = openIdx === i;
                    return (
                      <div
                        key={`${item.category}-${item.q}`}
                        className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIdx(open ? null : i)}
                          className="w-full flex items-start sm:items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-muted/40 transition-colors"
                          aria-expanded={open}
                        >
                          <div className="min-w-0">
                            <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-1">
                              {CATEGORIES.find((c) => c.id === item.category)?.label}
                            </span>
                            <span className="font-display text-base sm:text-lg font-semibold text-foreground">
                              {highlight(item.q)}
                            </span>
                          </div>
                          <Icon
                            name="ChevronDown"
                            size={18}
                            className={`shrink-0 mt-1 sm:mt-0 text-text-secondary transition-transform duration-300 ${
                              open ? 'rotate-180 text-primary' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-text-secondary leading-relaxed">
                                {highlight(item.a)}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="pb-16 sm:pb-20 lg:pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-brand text-white p-6 sm:p-10 lg:p-12 text-center shadow-brand-lg">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                  Still need help?
                </h2>
                <p className="text-white/85 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
                  Our team replies in under 2 business hours. Tell us what you're working on and
                  we'll point you to the right person.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition"
                  >
                    <Icon name="MessageSquare" size={16} />
                    Contact Support
                  </Link>
                  <Link
                    to="/get-started"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
                  >
                    <Icon name="Rocket" size={16} />
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HelpPage;
