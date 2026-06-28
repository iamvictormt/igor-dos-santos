'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { Disc3 } from 'lucide-react';

const EQ = () => (
  <div className="flex items-end gap-[3px] h-5">
    <span className="eq-bar h-full" style={{ animationDelay: '0s' }} />
    <span className="eq-bar h-full" style={{ animationDelay: '0.18s' }} />
    <span className="eq-bar h-full" style={{ animationDelay: '0.36s' }} />
    <span className="eq-bar h-full" style={{ animationDelay: '0.12s' }} />
    <span className="eq-bar h-full" style={{ animationDelay: '0.28s' }} />
  </div>
);

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yMid = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const yFront = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacityFront = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.6, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* ----- Layer 1: bg photo (slow parallax) ----- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <img
          src="/igor-bg.jpg"
          alt="OHomemSó"
          className="w-full h-[140%] object-cover object-center"
        />
      </motion.div>

      {/* ----- Layer 2: bokeh / light spots (mid parallax) ----- */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ y: yMid }}
      >
        <img
          src="/igor-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'blur(60px) saturate(1.5) brightness(1.1)' }}
        />
      </motion.div>

      {/* ----- Stage overlay ----- */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.09 0.005 65 / 0.78) 0%, oklch(0.09 0.005 65 / 0.55) 35%, oklch(0.09 0.005 65 / 0.95) 100%),' +
            'radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.78 0.16 70 / 0.22), transparent 70%)',
        }}
      />

      {/* ----- Layer 3: front content (fastest parallax) ----- */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ y: yFront, opacity: opacityFront }}
      >
        {/* Eyebrow */}
        <motion.div
          className="text-[0.65rem] md:text-xs tracking-[0.4em] uppercase font-mono text-amber-300/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Músico · Compositor · OHomemSó
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-handwriting text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] text-amber-100 gold-glow tracking-wide mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        >
          OHomemSó
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-handwriting text-2xl md:text-4xl text-amber-200/80 italic mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          mensagens em forma de canção
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#faixas"
              className="inline-flex items-center justify-center bg-amber-300 text-black px-9 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] shadow-lg shadow-amber-500/40 hover:bg-amber-200 transition-all duration-300"
            >
              <Disc3 className="w-4 h-4 mr-2" />
              Ouvir Faixas
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/agenda"
              className="inline-flex items-center justify-center border border-amber-400/40 text-amber-200 px-9 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-amber-400/10 hover:border-amber-300/70 transition-all duration-300"
            >
              Ver Agenda
            </Link>
          </motion.div>
        </motion.div>

        {/* Big spinning vinyl icon — ambient */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4 text-amber-200/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full vinyl-spin vinyl-rings opacity-40" />
          <EQ />
          <Disc3 className="w-5 h-5 text-amber-300/50" />
          <EQ />
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full vinyl-spin vinyl-rings opacity-40" style={{ animationDirection: 'reverse' }} />
        </motion.div>
      </motion.div>

      {/* ----- Bottom stage edge ----- */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-[5]" />
    </section>
  );
}
