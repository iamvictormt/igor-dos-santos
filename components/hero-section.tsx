"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Music } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/igor-bg.jpg"
          alt="Igor dos Santos"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Main Content with Sophisticated Typography */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-xs tracking-[0.3em] uppercase font-handwriting text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Músico • Compositor • Artista
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-handwriting mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Igor dos Santos
          </motion.h1>
        </motion.div>

        {/* Sophisticated CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-light tracking-[0.1em] px-12 py-4 text-xs uppercase border-0 shadow-2xl transition-all duration-300"
            >
              <Play className="mr-3 h-4 w-4" />
              Reproduzir
            </Button>
          </motion.div>
          <Link href="/discografia">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm font-light tracking-[0.1em] px-12 py-4 text-xs uppercase transition-all duration-300"
              >
                <Music className="mr-3 h-4 w-4" />
                Explorar Música
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {/* Desktop - Mouse Indicator */}
        <motion.div
          className="hidden md:flex flex-col items-center space-y-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
        >
          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 mb-2">Scroll</div>
          <div className="relative">
            {/* Mouse Body */}
            <div className="w-6 h-10 border-2 border-white/60 rounded-full relative bg-black/20 backdrop-blur-sm">
              {/* Mouse Wheel */}
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Mobile - Joystick Indicator */}
        <motion.div
          className="md:hidden flex flex-col items-center space-y-4"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
        >
          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 mb-2">Deslize</div>
          <div className="relative">
            {/* Joystick Base */}
            <div className="w-8 h-8 border-2 border-white/60 rounded-full relative bg-black/20 backdrop-blur-sm flex items-center justify-center">
              {/* Joystick Stick */}
              <motion.div
                className="w-3 h-3 bg-white/60 rounded-full"
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            {/* Arrow pointing up */}
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-white/60"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
