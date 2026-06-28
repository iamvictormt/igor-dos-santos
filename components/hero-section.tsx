"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden bg-[#15120f] text-white">
      <Image
        src="/igor-bg.jpg"
        alt="OHomemSó em apresentação"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-top opacity-78"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(12_9_7/0.92)_0%,rgb(12_9_7/0.64)_44%,rgb(12_9_7/0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(12_9_7/0.25)_0%,transparent_42%,rgb(12_9_7/0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />

      <div className="section-shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-7 pt-28 md:pb-9">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="section-eyebrow text-white/68">Músico - compositor - zona norte de São Paulo</p>
            <h1 className="handwritten-note mt-8 max-w-5xl text-[clamp(3.8rem,16vw,13rem)] md:text-[clamp(5.4rem,16vw,13rem)] font-normal leading-[0.78] text-white">
              OHomemSó
            </h1>
            <p className="handwritten-note mt-5 text-3xl text-white/72 md:text-5xl">
              sozinho no nome, acompanhado nas canções
            </p>  

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 bg-white px-6 text-black hover:bg-white/86">
                <Link href="/discografia">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Ouvir agora
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/34 bg-white/0 px-6 text-white hover:bg-white/12 hover:text-white"
              >
                <Link href="/agenda">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Ver agenda
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-4 border-t border-white/18 pt-5 text-white/72 md:grid-cols-[auto_1fr_auto] md:items-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-[0.68rem] uppercase text-white/48">Novo EP - 2026</span>
          <p className="text-sm leading-6 md:text-base">
            Tamanho de um Rei & Outras Histórias é o novo capítulo do OHomemSó.
          </p>
          <Link
            href="/discografia"
            className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase text-white transition-colors hover:text-white/72"
          >
            Ouvir na discografia
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
