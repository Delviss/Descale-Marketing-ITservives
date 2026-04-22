import React from 'react';

const brands = [
  'Stripe', 'Ramp', 'Linear', 'Notion', 'Vercel', 'Figma',
  'Arc', 'Raycast', 'Framer', 'Airtable', 'Loom', 'Clay',
];

const LogoMarquee = () => {
  return (
    <section className="relative bg-[#FBFAF7] border-y border-black/5 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-[0.3em] text-black/50 uppercase mb-8">
          Trusted by growth-stage brands across fintech, SaaS, and commerce
        </p>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBFAF7] to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FBFAF7] to-transparent z-10"
        />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="mx-10 font-display text-3xl md:text-4xl font-semibold tracking-tight text-black/30 hover:text-black transition-colors"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
