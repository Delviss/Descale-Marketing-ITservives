import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const marqueeWords = [
  'Scale', 'Signal', 'Growth', 'Performance', 'Creative', 'Analytics',
  'Revenue', 'Compound', 'Velocity', 'Strategy',
];

const metrics = [
  { value: 340, suffix: '%', label: 'Avg ROI Increase' },
  { value: 50, suffix: '+', label: 'Brands Scaled 8-Figures' },
  { value: 2.5, suffix: 'x', label: 'Faster Growth Velocity' },
];

function CountUp({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setVal(v);
      },
    });
    return () => controls.stop();
  }, [to]);
  const formatted = Number.isInteger(to) ? Math.round(val) : val.toFixed(1);
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-[#0B0B0F] noise-overlay"
    >
      {/* Animated gradient mesh — video-style ambient background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 bg-mesh-dark"
      />
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        aria-hidden
        className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-primary/40 blur-[140px] animate-aurora"
      />
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        aria-hidden
        className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full bg-accent/35 blur-[160px] animate-aurora"
      />
      <motion.div
        aria-hidden
        className="absolute top-10 right-10 w-[320px] h-[320px] rounded-full bg-secondary/40 blur-[120px] animate-float-orb"
      />

      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* SVG growth curve */}
      <motion.svg
        style={{ opacity }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroLine" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A72906" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,820 C320,760 560,720 800,520 C1040,320 1240,160 1600,60"
          stroke="url(#heroLine)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        />
      </motion.svg>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-32 flex flex-col min-h-[100dvh]"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-px bg-white/40" />
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Growth Agency · Est. 2021
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] font-black leading-[0.95] tracking-[-0.04em] text-white max-w-6xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Descale the noise.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Scale the{' '}
            <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              signal.
            </span>
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
        >
          We build growth systems, cinematic creative, and interactive taxi-ad campaigns
          that compound revenue — not ad spend. Premium marketing for ambitious brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/get-started"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl"
          >
            Get Started
            <span className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <Icon name="ArrowRight" size={16} />
            </span>
          </Link>
          <Link
            to="/it"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            <Icon name="ArrowRight" size={16} />
            Explore IT Services
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-auto pt-20 grid grid-cols-3 gap-4 md:gap-10 max-w-3xl"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="relative">
              {i > 0 && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10 hidden md:block" />}
              <div className="md:pl-6">
                <div className="font-display text-4xl md:text-5xl font-bold text-white">
                  <CountUp to={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/50 tracking-wide">{m.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon name="ChevronDown" size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="mx-6 font-display text-sm font-medium tracking-[0.2em] uppercase text-white/40 flex items-center gap-6"
            >
              {w}
              <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
