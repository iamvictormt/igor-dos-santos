'use client';

import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Inline equalizer — sits between copyright and tagline             */
/* ------------------------------------------------------------------ */
const MiniEqualizer = () => (
  <div className="flex items-end gap-[2px] h-3">
    <span className="eq-bar h-full" style={{ animationDelay: '0s' }} />
    <span className="eq-bar h-full" style={{ animationDelay:  '0.15s' }} />
    <span className="eq-bar h-full" style={{ animationDelay: '0.3s' }} />
    <span className="eq-bar h-full" style={{ animationDelay: '0.1s' }} />
  </div>
);

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-amber-400/20">
      {/* Warm glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="font-handwriting text-xl text-amber-200/90 gold-glow">
            OHomemSó
          </div>

          {/* Center equalizer */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.65rem] text-amber-200/40 tracking-widest uppercase">
              feito com som
            </span>
            <MiniEqualizer />
          </div>

          {/* Copyright */}
          <p className="font-mono text-[0.65rem] text-amber-200/40 tracking-wider">
            © {new Date().getFullYear()} OHomemSó · todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
