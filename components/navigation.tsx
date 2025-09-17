"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
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
          ? "bg-white/95 backdrop-blur-xl border-none shadow-lg"
          : "bg-black/60 backdrop-blur-xl"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Professional Typography */}
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

          {/* Desktop Navigation with Sophisticated Spacing */}
          <div className="hidden lg:flex items-center space-x-16">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={item.href}
                  className={`relative group text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 ${
                    shouldUseDarkTheme
                      ? pathname === item.href
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                      : pathname === item.href
                        ? "text-gray-200"
                        : "text-gray-300 hover:text-gray-200"
                  }`}
                >
                  {item.name}
                  {/* Elegant Active Indicator */}
                  {pathname === item.href && (
                    <motion.div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rotate-45 ${
                        shouldUseDarkTheme ? "bg-black" : "bg-gray-200"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-px ${
                      shouldUseDarkTheme ? "bg-black/30" : "bg-gray-200/30"
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden p-2 transition-all duration-300 ${
                shouldUseDarkTheme ? "text-black hover:bg-gray-100" : "text-gray-200 hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className={`absolute top-1 left-0 w-5 h-px ${shouldUseDarkTheme ? "bg-black" : "bg-gray-200"}`}
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute top-2 left-0 w-5 h-px ${shouldUseDarkTheme ? "bg-black" : "bg-gray-200"}`}
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`absolute top-3 left-0 w-5 h-px ${shouldUseDarkTheme ? "bg-black" : "bg-gray-200"}`}
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu with Professional Design */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-8 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-sm font-light tracking-[0.1em] uppercase transition-all duration-300 ${
                        pathname === item.href
                          ? "text-black border-l-2 border-black pl-4"
                          : "text-gray-600 hover:text-black hover:pl-2"
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
    </motion.nav>
  )
}
