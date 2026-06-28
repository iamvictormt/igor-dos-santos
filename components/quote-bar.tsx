'use client';

import { motion } from 'framer-motion';

export function QuoteBar() {
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-16 h-[2px] bg-[#C41E3A] mx-auto mb-8" />
          <blockquote className="font-serif italic text-2xl md:text-4xl font-light text-white leading-snug max-w-3xl mx-auto text-center">
            &ldquo;A música como emissor e receptor de emoções. O que eu sinto, alguém vai sentir ouvindo.&rdquo;
          </blockquote>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mt-6">
            OHomemSó
          </p>
        </motion.div>
      </div>
    </section>
  );
}
