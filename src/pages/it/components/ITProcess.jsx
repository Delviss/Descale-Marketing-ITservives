import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const steps = [
  {
    index: '01',
    title: 'Discover',
    description:
      'We map the problem before the product. Stakeholder interviews, technical audit, and a sharp brief that everyone signs.',
    icon: 'Search',
    deliverables: ['Discovery doc', 'Technical scope', 'Roadmap proposal'],
  },
  {
    index: '02',
    title: 'Design',
    description:
      'High-fidelity prototypes wired to a design system. Motion, states, edge cases, designed before a line of code is written.',
    icon: 'PenTool',
    deliverables: ['UX flows', 'Design system', 'Interactive prototype'],
  },
  {
    index: '03',
    title: 'Build',
    description:
      'Two-week sprints, weekly demos, production-grade code from day one. You get access to the staging environment immediately.',
    icon: 'Code2',
    deliverables: ['Sprint demos', 'Staging environment', 'Production deploy'],
  },
  {
    index: '04',
    title: 'Scale',
    description:
      'Observability, performance, and a maintenance retainer that keeps shipping after launch. We stay on as your fractional engineering team.',
    icon: 'TrendingUp',
    deliverables: ['Monitoring setup', 'Performance audit', 'Retainer support'],
  },
];

const ITProcess = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#050505] text-white py-32 noise-overlay"
    >
      <div aria-hidden className="absolute inset-0 bg-mesh-dark opacity-60" />
      <div aria-hidden className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/30 blur-[140px]" />
      <div aria-hidden className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-accent/30 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div style={{ y: titleY }} className="max-w-4xl mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-white/60 uppercase mb-6">
            <span className="w-8 h-px bg-white/40" /> How we work
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            Four steps from{' '}
            <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              brief to scale.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {steps.map((s, i) => (
            <motion.article
              key={s.index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700"
              />

              <div className="relative flex items-start justify-between gap-6 mb-8">
                <span className="font-mono text-xs tracking-[0.3em] text-white/40">
                  {s.index}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {s.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">{s.description}</p>

              <div className="pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Deliverables</div>
                <ul className="flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/70"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITProcess;
