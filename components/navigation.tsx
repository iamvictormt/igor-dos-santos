"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Biografia", href: "/biografia" },
  { name: "Discografia", href: "/discografia" },
  { name: "Videografia", href: "/videografia" },
  { name: "Agenda", href: "/agenda" },
  { name: "Contato", href: "/contato" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#2a1a13]/92 shadow-2xl backdrop-blur-md" : "bg-[#1d120d]/70 backdrop-blur-sm"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group">
          <span className="stamp-title block text-2xl text-[#efe0b8] drop-shadow md:text-3xl">OHomemSó</span>
          <span className="type-label block text-[9px] text-[#c6a477]">site oficial</span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`type-label border px-3 py-2 text-[10px] transition ${
                  active
                    ? "border-[#f2deb0] bg-[#e4c58e] text-[#24170f]"
                    : "border-[#c5a172]/35 bg-[#2d1b12]/70 text-[#ecd9ab] hover:bg-[#4a2c1c]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-none border border-[#c5a172]/50 text-[#ecd9ab] hover:bg-[#4a2c1c] hover:text-[#fff1c9]"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          <span className="relative h-4 w-5">
            <motion.span className="absolute left-0 top-0 h-px w-5 bg-current" animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
            <motion.span className="absolute left-0 top-2 h-px w-5 bg-current" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span className="absolute left-0 top-4 h-px w-5 bg-current" animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
          </span>
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-[#c5a172]/30 bg-[#24170f]/96 px-4 py-5 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`type-label border px-4 py-3 text-[11px] ${
                    pathname === item.href
                      ? "border-[#f2deb0] bg-[#e4c58e] text-[#24170f]"
                      : "border-[#c5a172]/30 text-[#ecd9ab]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
