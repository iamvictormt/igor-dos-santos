"use client"

import { motion } from "framer-motion"
import { Play, Music } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/igor-bg.jpg"
          alt="OHomemSó"
          fill
          priority
          className="object-cover opacity-80"
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0D0D0D]/80" />
      </div>

      {/* Main Content with Sophisticated Typography */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Kicker line */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-sans font-bold text-xs md:text-sm tracking-[0.3em] uppercase text-[#C41E3A]">
            O HOMEM POR TRÁS DO NOME
          </p>
        </motion.div>

        {/* Main title — dramatic serif lockup */}
        <motion.h1
          className="font-serif font-extralight text-7xl md:text-[9rem] lg:text-[11rem] tracking-tighter leading-[0.85] uppercase text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.0, ease: "easeOut" }}
        >
          OHomemSó
        </motion.h1>

        {/* Thin red rule */}
        <motion.div
          className="w-24 h-[2px] bg-[#C41E3A] mx-auto mt-6 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        />

        {/* Lede / subtitle */}
        <motion.p
          className="font-serif italic text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          Músico, compositor e a voz por trás do projeto que mescla MPB, indie e folk com a intimidade de quem toca para os seus.
        </motion.p>

        {/* Editorial CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/discografia">
              <button className="bg-[#C41E3A] text-white font-serif font-medium px-10 py-5 text-xl tracking-widest uppercase hover:bg-[#A01830] transition-all duration-300 flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#C41E3A] outline-none">
                <Music className="h-5 w-5" />
                Explorar Música
              </button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/discografia">
              <button className="border border-white text-white font-serif font-medium px-10 py-5 text-xl tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none">
                <Play className="h-5 w-5" />
                Ouvir Agora
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimalist Scroll Indicator — thin line + dot */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-10 bg-white/40 relative overflow-hidden">
            <motion.div
              className="w-[6px] h-[6px] bg-white rounded-full absolute left-1/2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
