"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Disc3, MapPin, Music2, NotebookText } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/discografia", label: "Discografia", icon: Disc3, copy: "Singles, EPs e versões ao vivo" },
  { href: "/agenda", label: "Agenda", icon: CalendarDays, copy: "Datas e encontros musicais" },
  { href: "/biografia", label: "Biografia", icon: NotebookText, copy: "Origem, filosofia e influências" },
];

export function HeroSection() {
  return (
    <section className="relative z-[1] min-h-screen px-4 pb-10 pt-28 md:px-8 md:pt-32">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
        <div className="grid gap-5">
          <motion.div
            className="paper-panel pin-dot p-6 md:p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="type-label mb-4 text-[10px] text-stone-700">Site oficial</p>
            <h1 className="stamp-title text-6xl leading-[0.86] text-stone-950 md:text-8xl lg:text-9xl">OHomemSó</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
              Música popular brasileira com poeira de amplificador, memória afetiva e a simplicidade de quem escreve
              para guardar fases da vida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/discografia">
                <Button size="lg" className="ink-button w-full rounded-none px-7 type-label text-[11px] hover:bg-stone-800 sm:w-auto">
                  <Disc3 className="mr-2 h-4 w-4" />
                  Ouvir agora
                </Button>
              </Link>
              <Link href="/agenda">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-none border-stone-900 bg-[#e8d0a3] px-7 type-label text-[11px] text-stone-950 hover:bg-[#f3ddb0] sm:w-auto"
                >
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Ver agenda
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="paper-panel group p-4 transition duration-300 hover:-translate-y-1">
                  <Icon className="mb-3 h-5 w-5 text-stone-800" />
                  <p className="type-label text-[10px] text-stone-700">{item.label}</p>
                  <p className="mt-2 text-sm leading-snug text-stone-800">{item.copy}</p>
                </Link>
              );
            })}
          </motion.div>
        </div>

        <div className="grid gap-5">
          <motion.div
            className="photo-print min-h-[360px] overflow-hidden lg:min-h-[520px]"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src="/igor-bg.jpg" alt="OHomemSó" className="h-full min-h-[360px] w-full object-cover grayscale sepia lg:min-h-[520px]" />
          </motion.div>

          <motion.div
            className="leather-panel p-6 text-[#f8e8c1]"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Music2 className="h-4 w-4" />
              <p className="type-label text-[10px]">Filosofia do projeto</p>
            </div>
            <p className="font-handwriting text-3xl leading-tight">
              "A simplicidade musical como diário perfeito para deixar minhas filhas entenderem as fases da vida."
            </p>
            <div className="mt-6 grid gap-2 border-t border-[#f5d6a0]/30 pt-4 font-mono text-[11px] uppercase sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                São Paulo / SP
              </p>
              <p>Indie folk rock</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
