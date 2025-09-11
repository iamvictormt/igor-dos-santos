"use client"

import { useState, useEffect } from "react"
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 animate-slide-in ${
        shouldUseDarkTheme
          ? "bg-white/95 backdrop-blur-xl border-none shadow-lg"
          : "bg-black/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Professional Typography */}
          <Link href="/" className="group">
            <div className="flex flex-col animate-fade-in">
              <div
                className={`font-thin text-xl tracking-[0.2em] transition-all duration-300 ${
                  shouldUseDarkTheme ? "text-black" : "text-white"
                }`}
              >
                IGOR DOS SANTOS
              </div>
              <div
                className={`text-[10px] font-mono tracking-[0.3em] uppercase mt-1 transition-all duration-300 ${
                  shouldUseDarkTheme ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Músico
              </div>
            </div>
          </Link>

          {/* Desktop Navigation with Sophisticated Spacing */}
          <div className="hidden lg:flex items-center space-x-16">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 animate-fade-in ${
                  shouldUseDarkTheme
                    ? pathname === item.href
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                    : pathname === item.href
                      ? "text-gray-200"
                      : "text-gray-300 hover:text-gray-200"
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {item.name}
                {/* Elegant Active Indicator */}
                {pathname === item.href && (
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rotate-45 transition-all duration-300 ${
                      shouldUseDarkTheme ? "bg-black" : "bg-gray-200"
                    }`}
                  ></div>
                )}
                {/* Hover Effect */}
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    shouldUseDarkTheme ? "bg-black/30" : "bg-gray-200/30"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden p-2 transition-all duration-300 animate-fade-in ${
              shouldUseDarkTheme ? "text-black hover:bg-gray-100" : "text-gray-200 hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute top-1 left-0 w-5 h-px transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2" : ""
                } ${shouldUseDarkTheme ? "bg-black" : "bg-gray-200"}`}
              ></span>
              <span
                className={`absolute top-2 left-0 w-5 h-px transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                } ${shouldUseDarkTheme ? "bg-black" : "bg-gray-200"}`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-5 h-px transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2" : ""
                } ${shouldUseDarkTheme ? "bg-black" : "bg-gray-200"}`}
              ></span>
            </div>
          </Button>
        </div>

        {/* Mobile Menu with Professional Design */}
        {isOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl animate-fade-in-up">
            <div className="px-8 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
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
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
