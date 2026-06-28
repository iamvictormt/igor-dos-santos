"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Início", href: "/" },
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
    const handleScroll = () => setScrolled(window.scrollY > 72)

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  if (!mounted) return null

  const isHomePage = pathname === "/"
  const transparent = isHomePage && !scrolled && !isOpen

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "border-transparent bg-black/18 text-white"
          : "border-border/70 bg-background/92 text-foreground shadow-[0_10px_40px_rgb(35_26_18/0.08)] backdrop-blur-xl"
      } border-b`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-4" aria-label="Ir para a página inicial">
            <span
              className={`h-8 w-px transition-colors duration-300 ${
                transparent ? "bg-white/55" : "bg-accent"
              }`}
            />
            <span className="flex flex-col">
              <span className="brand-mark text-2xl leading-none">OHomemSó</span>
              <span
                className={`mt-1 font-mono text-[0.62rem] uppercase transition-colors duration-300 ${
                  transparent ? "text-white/62" : "text-muted-foreground"
                }`}
              >
                músico e compositor
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-4 py-3 font-mono text-[0.68rem] uppercase transition-colors duration-300 ${
                    transparent
                      ? active
                        ? "text-white"
                        : "text-white/68 hover:text-white"
                      : active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      transparent ? "bg-white/70" : "bg-accent"
                    } ${active ? "scale-x-100" : ""}`}
                  />
                </Link>
              )
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`h-11 w-11 lg:hidden ${
              transparent ? "text-white hover:bg-white/10 hover:text-white" : "hover:bg-secondary"
            }`}
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-border/70 bg-background text-foreground lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="section-shell py-4">
              <div className="grid gap-1">
                {navItems.map((item, index) => {
                  const active = pathname === item.href

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between border-b border-border/50 px-1 py-4 text-base ${
                          active ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className={`h-2 w-2 ${active ? "bg-accent" : "bg-border"}`} />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
