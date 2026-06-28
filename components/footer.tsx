'use client';

import Link from 'next/link';
import { Instagram, Youtube, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/biografia', label: 'Biografia' },
  { href: '/discografia', label: 'Discografia' },
  { href: '/videografia', label: 'Videografia' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/contato', label: 'Contato' },
];

const socialLinks = [
  { href: 'https://instagram.com/0homems0', label: 'Instagram', Icon: Instagram },
  { href: 'https://youtube.com/@igordossantos', label: 'YouTube', Icon: Youtube },
  { href: 'https://open.spotify.com/artist/0homems0', label: 'Spotify', Icon: Music },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-column content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          {/* Column 1 — Brand */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-handwriting text-3xl">OHomemSó</span>
            <p className="mt-2 font-serif italic text-[#F8F6F1]/50 text-sm">
              A voz, o violão e o silêncio entre as notas.
            </p>
          </motion.div>

          {/* Column 2 — Navegação */}
          <motion.div
            className="flex flex-col items-start md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs uppercase tracking-widest font-sans text-[#F8F6F1]/70 mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col items-start md:items-center space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 font-serif text-sm text-[#F8F6F1]/80 hover:text-[#C41E3A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Conectar */}
          <motion.div
            className="flex flex-col items-start md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs uppercase tracking-widest font-sans text-[#F8F6F1]/70 mb-4">
              Conectar
            </h3>
            <ul className="flex flex-col items-start md:items-end space-y-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 text-sm text-[#F8F6F1]/80 hover:text-[#C41E3A] transition-colors duration-200 font-serif"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-[#F8F6F1]/15 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <motion.p
              className="text-[#F8F6F1]/40 text-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              &copy; 2026 OHomemSó. Todos os direitos reservados.
            </motion.p>
            <motion.p
              className="text-[#F8F6F1] text-xs"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Desenvolvido com paixão pela música
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
