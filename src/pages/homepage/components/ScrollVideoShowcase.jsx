import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const MotionLink = motion(Link);

const reels = [
  {
    title: 'FinTech Series A → IPO',
    tag: 'Performance',
    hue: 'from-primary/70 to-accent/40',
    metric: '12×',
    metricLabel: 'ARR growth',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=1600&q=80',
    video:
      'https://videos.pexels.com/video-files/7989205/7989205-uhd_1440_2732_25fps.mp4',
    accent: '#C65A2E',
  },
  {
    title: 'D2C Scale to $100M',
    tag: 'Brand',
    hue: 'from-secondary/70 to-primary/40',
    metric: '8×',
    metricLabel: 'Revenue',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=1600&q=80',
    video:
      'https://videos.pexels.com/video-files/5717437/5717437-uhd_1440_2732_25fps.mp4',
    accent: '#2563EB',
  },
  {
    title: 'Taxi Lab · NYC',
    tag: 'Innovation',
    hue: 'from-accent/70 to-secondary/40',
    metric: '3.4M',
    metricLabel: 'Live interactions',
    image:
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&h=1600&q=80',
    video:
      'https://videos.pexels.com/video-files/4434242/4434242-uhd_1440_2732_30fps.mp4',
    accent: '#A8431C',
  },
];

const ReelCard = ({ reel, index, onOpen }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) {
      v.play().catch(() => {});
    } else {
      v.pause();
      try {
        v.currentTime = 0;
      } catch {}
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(reel)}
      className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-black/5 shadow-xl cursor-pointer"
    >
      {/* Poster image, Ken Burns zoom on hover */}
      <motion.img
        src={reel.image}
        alt={reel.title}
        loading="lazy"
        animate={hovered ? { scale: 1.12 } : { scale: 1.02 }}
        transition={{ duration: 6, ease: 'linear' }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Looping video, fades in on hover */}
      <video
        ref={videoRef}
        src={reel.video}
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          hovered && videoReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Color tint overlay */}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br ${reel.hue} mix-blend-multiply opacity-70 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Top highlight */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.25),transparent_50%)]"
      />

      {/* Bottom darken vignette for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
      />

      {/* Animated breathing orb */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/30 blur-3xl"
      />

      {/* Subtle scanline / film grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* Live tag (pulses on hover) */}
      <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/15">
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full rounded-full bg-accent ${
              hovered ? 'animate-ping' : ''
            } opacity-75`}
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/90 font-medium">
          {hovered ? 'Playing' : 'Reel'}
        </span>
      </div>

      {/* Play icon, grows on hover */}
      <motion.div
        animate={hovered ? { scale: 1.18 } : { scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-black shadow-lg"
      >
        <Icon name="Play" size={18} />
      </motion.div>

      {/* Footer label */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] tracking-[0.3em] uppercase px-2 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm">
            {reel.tag}
          </span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-4 drop-shadow-lg">
          {reel.title}
        </h3>
        <div className="flex items-end justify-between">
          <div>
            <div className="font-display text-3xl font-bold drop-shadow-lg">
              {reel.metric}
            </div>
            <div className="text-xs text-white/80">{reel.metricLabel}</div>
          </div>
          <Icon
            name="ArrowUpRight"
            size={22}
            className="opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>
      </div>

      {/* Border glow on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500"
      />
    </motion.div>
  );
};

const ReelLightbox = ({ reel, onClose }) => {
  useEffect(() => {
    if (!reel) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [reel, onClose]);

  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
          >
            <video
              src={reel.video}
              poster={reel.image}
              autoPlay
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/70 to-transparent flex items-start justify-between">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">
                  {reel.tag}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white drop-shadow">
                  {reel.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between text-white">
              <div>
                <div className="font-display text-3xl font-bold">
                  {reel.metric}
                </div>
                <div className="text-xs text-white/70">{reel.metricLabel}</div>
              </div>
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-accent hover:text-white transition-colors"
              >
                See full case <Icon name="ArrowUpRight" size={14} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollVideoShowcase = () => {
  const containerRef = useRef(null);
  const [openReel, setOpenReel] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#FBFAF7] py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-black/60 uppercase mb-6">
              <span className="w-8 h-px bg-black/40" /> Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-black">
              Stories that{' '}
              <span className="font-serif-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                compound.
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-black/60 max-w-xl leading-relaxed">
              Three short reels, three different industries, one shared playbook.
              Hover to preview, click to watch the full story.
            </p>
          </div>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-primary transition-colors"
          >
            View all case studies <Icon name="ArrowUpRight" size={16} />
          </Link>
        </div>

        {/* Scroll-scale video reel */}
        <motion.div
          style={{ scale, rotate }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {reels.map((r, i) => (
            <ReelCard key={r.title} reel={r} index={i} onOpen={setOpenReel} />
          ))}
        </motion.div>
      </div>

      <ReelLightbox reel={openReel} onClose={() => setOpenReel(null)} />
    </section>
  );
};

export default ScrollVideoShowcase;
