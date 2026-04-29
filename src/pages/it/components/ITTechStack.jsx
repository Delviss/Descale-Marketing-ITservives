import React from 'react';

const stack = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go',
  'Postgres', 'Prisma', 'GraphQL', 'AWS', 'Vercel', 'Supabase',
  'Tailwind', 'Figma', 'Framer', 'Docker', 'Kubernetes', 'Terraform',
];

const ITTechStack = () => {
  return (
    <section className="relative bg-muted border-y border-black/5 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-[0.3em] text-foreground/50 uppercase mb-8">
          A modern stack — opinionated, but never dogmatic
        </p>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted to-transparent z-10"
        />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stack, ...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="mx-10 font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground/30 hover:text-foreground transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITTechStack;
