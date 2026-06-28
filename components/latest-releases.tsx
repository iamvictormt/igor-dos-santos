"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Disc3 } from "lucide-react";

export function LatestReleases() {
  const releases = [
    {
      id: 0,
      title: "Tamanho de um Rei & Outras Histórias",
      type: "EP",
      year: "2026",
      releaseDate: "2026-06-26",
      image: "/tamanho-de-um-rei-cover.jpg",
      description: "Canções pessoais e intimistas, com releituras ao vivo.",
    },
    {
      id: 2,
      title: "Tudo o Que Queria Te Dizer",
      type: "Single",
      year: "2025",
      releaseDate: "2025-05-29",
      image: "/tudo-que-queria-cover.png",
      description: "Releitura em comemoração aos 20 anos da canção.",
    },
    {
      id: 1,
      title: "Grito Mudo / Silêncio Ensurdecedor",
      type: "Double",
      year: "2025",
      releaseDate: "2025-04-17",
      image: "/grito-mudo-cover.jpeg",
      description: "Duas canções sobre ansiedade, intensidade e silêncio.",
    },
    {
      id: 3,
      title: "Voar",
      type: "Single",
      year: "2025",
      releaseDate: "2025-01-06",
      image: "/voar-cover.jpg",
      description: "A retomada do projeto em direção minimalista e íntima.",
    },
  ].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));

  return (
    <section className="home-section">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="home-heading">
          <div className="paper-panel p-6 md:p-8">
            <p className="type-label mb-3 text-[10px] text-stone-700">Arquivo sonoro</p>
            <h2 className="stamp-title text-4xl leading-none text-stone-950 md:text-6xl">Lançamentos recentes</h2>
          </div>
          <div className="home-note">
            Cada capa funciona como uma ficha do arquivo: fase, ruído, memória e a tentativa de dizer o que não coube em
            conversa.
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            className="paper-panel grid gap-6 p-5 md:grid-cols-[260px_1fr] md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square overflow-hidden border border-stone-800/30 bg-stone-900">
              <Image src={releases[0].image} alt={releases[0].title} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-stone-800/30 pb-3">
                  <span className="type-label text-[10px] text-stone-700">{releases[0].type}</span>
                  <span className="font-mono text-xs text-stone-700">{releases[0].year}</span>
                </div>
                <h3 className="stamp-title text-4xl leading-none text-stone-950 md:text-5xl">{releases[0].title}</h3>
                <p className="mt-5 text-base leading-relaxed text-stone-700">{releases[0].description}</p>
              </div>
              <Link href="/discografia" className="mt-6">
                <Button className="ink-button rounded-none px-7 type-label text-[11px] hover:bg-stone-800">
                  <Disc3 className="mr-2 h-4 w-4" />
                  Abrir ficha completa
                </Button>
              </Link>
            </div>
          </motion.article>

          <div className="grid gap-5">
            {releases.slice(1).map((release, index) => (
              <motion.article
                key={release.id}
                className="paper-panel grid grid-cols-[86px_1fr] gap-4 p-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-square overflow-hidden border border-stone-800/30 bg-stone-900">
                  <Image src={release.image} alt={release.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="type-label text-[10px] text-stone-700">{release.type}</span>
                    <span className="font-mono text-xs text-stone-700">{release.year}</span>
                  </div>
                  <h3 className="stamp-title text-2xl leading-none text-stone-950">{release.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700">{release.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
