"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-[#c5a172]/25 bg-[#1b110c] px-4 py-8 text-[#d2b98d] md:px-8">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-3 border border-[#c5a172]/25 p-5 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="type-label text-[10px]">© {new Date().getFullYear()} OHomemSó. Todos os direitos reservados.</p>
        <p className="font-handwriting text-2xl text-[#f2deb0]">Desenvolvido com paixão pela música</p>
      </motion.div>
    </footer>
  );
}
