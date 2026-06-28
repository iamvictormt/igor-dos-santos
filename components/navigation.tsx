'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Biografia', href: '/biografia' },
  { name: 'Discografia', href: '/discografia' },
  { name: 'Videografia', href: '/videografia' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Contato', href: '/contato' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = pathname === '/';
  const shouldUseLightNav = !isHomePage || scrolled; // scrolled/home = solid warm bg

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    if (typeof window !== 'undefined') {
      setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          shouldUseLightNav
            ? 'bg-background/95 backdrop-blur-xl border-b border-amber-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-black/30 backdrop-blur-md border-b border-white/5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/"
                className="font-handwriting text-2xl md:text-3xl text-amber-200 hover:text-amber-300 transition-colors duration-300 gold-glow"
              >
                OHomemSó
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <motion.div
              className="hidden md:flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link key={item.href} href={item.href} className="relative px-4 py-2 group">
                    <motion.span
                      className={`relative z-10 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                        isActive ? 'text-amber-300' : 'text-amber-100/70 hover:text-amber-200'
                      }`}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                    >
                      {item.name}
                    </motion.span>
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full"
                        layoutId="nav-indicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </motion.div>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden text-amber-200 p-2"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Menu"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-20 top-20 z-40 bg-background/98 backdrop-blur-2xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <div className="space-y-4">
                {navItems.map((item, i) => {
                  const isActive =
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-center font-handwriting text-3xl py-2 transition-colors duration-300 ${
                          isActive
                            ? 'text-amber-300 gold-glow'
                            : 'text-amber-100/80 hover:text-amber-200'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="pb-10 text-center">
              <span className="font-mono text-xs text-amber-100/40 tracking-widest uppercase">
                músicas • shows • contato
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
