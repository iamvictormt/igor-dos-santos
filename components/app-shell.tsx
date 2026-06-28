'use client';

import { type ReactNode, createContext, useContext, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Disc3, CalendarDays, User, Menu, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ------------------------------------------------------------------ */
/*  Sidebar nav (desktop) — vertical, fixed                           */
/* ------------------------------------------------------------------ */
function SideBar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const items = [
    { icon: Home,      label: 'Home',        href: '/' },
    { icon: Disc3,     label: 'Músicas',     href: '/discografia' },
    { icon: CalendarDays, label: 'Shows',    href: '/agenda' },
    { icon: User,      label: 'Eu',          href: '/biografia' },
  ];

  return (
    <aside className="hidden md:flex flex-col fixed top-1/2 -translate-y-1/2 left-6 lg:left-8 z-50 gap-3">
      {items.map((it) => {
        const active = pathname === it.href || (it.href !== '/' && pathname.startsWith(it.href));
        return (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNavigate}
            aria-label={it.label}
            className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 ${
              active
                ? 'bg-amber-300 text-black shadow-lg shadow-amber-500/40'
                : 'bg-card/60 text-amber-200/70 hover:bg-card hover:text-amber-200 border border-white/5'
            }`}
          >
            <it.icon className="w-4 h-4 shrink-0" />
            <span className="absolute left-full ml-3 px-2.5 py-1 rounded-md bg-card text-xs text-amber-100 font-mono uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-white/5">
              {it.label}
            </span>
          </Link>
        );
      })}

      <div className="mt-2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <span className="text-[0.55rem] text-amber-200/30 tracking-widest uppercase text-center font-mono leading-tight">
        OHomem
        <br />
        Só
      </span>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom tab bar (mobile)                                           */
/* ------------------------------------------------------------------ */
function BottomBar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const items = [
    { icon: Home,          label: 'Home',    href: '/' },
    { icon: Disc3,         label: 'Músicas', href: '/discografia' },
    { icon: CalendarDays, label: 'Shows',   href: '/agenda' },
    { icon: User,          label: 'Eu',      href: '/biografia' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-amber-400/15 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4 h-[60px]">
        {items.map((it) => {
          const active = pathname === it.href || (it.href !== '/' && pathname.startsWith(it.href));
          return (
            <Link
              key={it.href}
              href={it.href}
              onClick={onNavigate}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative ${
                active ? 'text-amber-300' : 'text-amber-200/50'
              }`}
            >
              {active && (
                <motion.div
                  layoutId="bottom-tab-pill"
                  className="absolute -top-px left-3 right-3 h-[2px] bg-amber-300 rounded-full shadow-[0_0_8px_oklch(0.78_0.16_70)]"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <it.icon className="w-5 h-5" />
              <span className="text-[0.55rem] font-mono uppercase tracking-widest">{it.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile drawer (hamburger at top-left)                             */
/* ------------------------------------------------------------------ */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const items = [
    { icon: Home,          label: 'Home',      href: '/' },
    { icon: Disc3,         label: 'Músicas',   href: '/discografia' },
    { icon: CalendarDays, label: 'Shows',     href: '/agenda' },
    { icon: User,          label: 'Eu',        href: '/biografia' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="md:hidden fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="md:hidden fixed top-0 bottom-0 left-0 z-[80] w-72 bg-background border-r border-amber-400/20 p-8 pt-24 flex flex-col gap-2"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {items.map((it, i) => (
              <motion.div
                key={it.href}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={it.href}
                  onClick={onClose}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-3 font-handwriting text-2xl ${
                    pathname === it.href || (it.href !== '/' && pathname.startsWith(it.href))
                      ? 'text-amber-300 bg-amber-400/10'
                      : 'text-amber-100/70 hover:text-amber-200 hover:bg-white/5'
                  }`}
                >
                  <it.icon className="w-5 h-5 shrink-0" />
                  <span>{it.label}</span>
                </Link>
              </motion.div>
            ))}

            <div className="mt-auto pt-6 border-t border-amber-400/15">
              <p className="text-[0.6rem] text-amber-200/30 font-mono uppercase tracking-widest text-center">
                &copy; {new Date().getFullYear()} OHomemSó
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  App shell                                                         */
/* ------------------------------------------------------------------ */
export function AppShell({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top-left hamburger on mobile */}
      <button
        onClick={() => setDrawerOpen((v) => !v)}
        className="md:hidden fixed top-5 left-5 z-[60] p-2.5 rounded-full bg-card/60 backdrop-blur-md text-amber-200 border border-white/5 hover:bg-card transition-colors duration-300"
        aria-label="Menu"
      >
        {drawerOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <SideBar onNavigate={() => setDrawerOpen(false)} />
      <BottomBar onNavigate={() => setDrawerOpen(false)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="flex-1 pb-[60px] md:pb-0">
        {children}
      </main>
    </div>
  );
}
