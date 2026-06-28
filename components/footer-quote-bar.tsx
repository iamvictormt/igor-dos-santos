'use client';

import { motion } from 'framer-motion';

export function FooterQuoteBar() {
  return (
    <div className="bg-[#0D0D0D] py-12 md:py-16 px-4 md:px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-serif italic text-lg md:text-xl text-white/80 leading-relaxed">
          &ldquo;Cada canção é uma carta que o tempo não apaga.&rdquo;
        </p>
        <div className="w-12 h-0.5 bg-[#C41E3A] mx-auto mt-4" />
        <p className="font-sans text-xs text-white/50 mt-3 uppercase tracking-widest">
          — OHomemSó
        </p>
      </motion.div>
    </div>
  );
}
