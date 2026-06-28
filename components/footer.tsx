"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Music2, Youtube } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { label: "Biografia", href: "/biografia" },
  { label: "Discografia", href: "/discografia" },
  { label: "Videografia", href: "/videografia" },
  { label: "Agenda", href: "/agenda" },
  { label: "Contato", href: "/contato" },
]

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/0homems0", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/ohomemso", icon: Youtube },
  { label: "Spotify", href: "https://open.spotify.com/intl-pt/artist/73kNPjHVMo83GZ4lE5SRWf", icon: Music2 },
  { label: "E-mail", href: "mailto:contato@ohomemso.com.br", icon: Mail },
]

export function Footer() {
  return (
    <footer className="stage-panel">
      <div className="section-shell py-12 md:py-16">
        <motion.div
          className="grid gap-10 border-b border-white/12 pb-10 md:grid-cols-[1.2fr_1fr_1fr]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div>
            <Link href="/" className="brand-mark text-4xl leading-none text-white">
              OHomemSó
            </Link>
            <p className="handwritten-note mt-4 text-3xl text-white/72">até a próxima canção</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Canções autorais, registros ao vivo e histórias de um músico independente da zona norte de São Paulo.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="section-eyebrow text-white/48">Mapa</p>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/72 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="section-eyebrow text-white/48">Canais</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex h-11 items-center gap-3 border border-white/12 px-3 text-sm text-white/72 transition-colors hover:border-white/28 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/46 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OHomemSó. Todos os direitos reservados.</p>
          <p>Desenvolvido com paixão pela música.</p>
        </div>
      </div>
    </footer>
  )
}
