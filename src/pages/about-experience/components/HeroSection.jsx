import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-32 sm:pb-36 bg-[#050505]">
      {/* Cinematic mesh + aurora orbs */}
      <div aria-hidden className="absolute inset-0 bg-mesh-dark" />
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
        className="absolute top-10 right-10 w-[320px] h-[320px] rounded-full bg-secondary/35 blur-[120px] animate-float-orb"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <Icon name="Users" size={14} className="text-accent" />
              <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
                Meet the Growth Architects
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-[-0.03em]">
              Where Strategy
              <span className="block font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                Meets Boldness
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
              We exist at the intersection of strategic precision and creative boldness,
              <span className="text-white font-semibold"> scaling what truly matters</span> for ambitious brands.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Icon name="Award" size={18} className="text-accent" />
              <span className="font-medium text-white/90">Industry Leaders</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Icon name="TrendingUp" size={18} className="text-accent" />
              <span className="font-medium text-white/90">Proven Results</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <Icon name="Target" size={18} className="text-accent" />
              <span className="font-medium text-white/90">Exponential Growth</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-[10px] tracking-[0.3em] uppercase">Discover Our Story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
