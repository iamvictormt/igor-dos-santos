"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Biografia", href: "/biografia" },
  { name: "Discografia", href: "/discografia" },
  { name: "Videografia", href: "/videografia" },
  { name: "Agenda", href: "/agenda" },
  { name: "Contato", href: "/contato" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isOpen])

  const isHomePage = pathname === "/"
  const shouldUseDarkTheme = !isHomePage || scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 100)
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        shouldUseDarkTheme
          ? "bg-[#F8F6F1] backdrop-blur-xl shadow-sm"
          : "bg-transparent backdrop-blur-xl"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div
                className={`font-handwriting text-2xl transition-all duration-300 ${
                  shouldUseDarkTheme ? "text-black" : "text-white"
                }`}
              >
                OHomemSó
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={item.href}
                  className={`relative group font-serif font-light text-base transition-all duration-300 ${
                    shouldUseDarkTheme
                      ? pathname === item.href
                        ? "text-black"
                        : "text-muted-foreground hover:text-black"
                      : pathname === item.href
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Active Indicator — small red line */}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C41E3A]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {/* Hover Underline Animation */}
                  <motion.div
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C41E3A] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <div className="ml-2 pl-6 border-l border-white/10">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden p-2 transition-all duration-300 ${
                shouldUseDarkTheme ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className={`absolute top-1 left-0 w-5 h-px ${shouldUseDarkTheme ? "bg-black" : "bg-white"}`}
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute top-2 left-0 w-5 h-px ${shouldUseDarkTheme ? "bg-black" : "bg-white"}`}
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute top-3 left-0 w-5 h-px ${shouldUseDarkTheme ? "bg-black" : "bg-white"}`}
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-[#F8F6F1] backdrop-blur-xl border-t border-gray-200 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-8 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 font-serif font-light text-lg transition-all duration-300 ${
                        pathname === item.href
                          ? "text-black border-l-2 border-[#C41E3A] pl-4"
                          : "text-muted-foreground hover:text-black hover:pl-2"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
                    </div>

    </motion.nav>
  )
}
