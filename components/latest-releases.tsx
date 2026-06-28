"use client"

import { motion } from "framer-motion"
import { ArrowRight, Disc3, Headphones, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const releases = [
  {
    id: 0,
    title: "Tamanho de um Rei & Outras Histórias",
    type: "EP",
    year: "2026",
    releaseDate: "2026-06-26",
    image: "/tamanho-de-um-rei-cover.jpg",
    description: "Conjunto de canções pessoais e intimistas, com quatro releituras ao vivo.",
    note: "novo ciclo",
  },
  {
    id: 2,
    title: "Tudo o Que Queria Te Dizer",
    type: "Single",
    year: "2025",
    releaseDate: "2025-05-29",
    image: "/tudo-que-queria-cover.png",
    description: "Releitura em comemoração aos 20 anos da canção escrita como declaração de amor.",
    note: "ao vivo 20",
  },
  {
    id: 1,
    title: "Grito Mudo / Silêncio Ensurdecedor",
    type: "Double",
    year: "2025",
    releaseDate: "2025-04-17",
    image: "/grito-mudo-cover.jpeg",
    description: "Duas canções sobre ansiedade, intensidade e silêncio.",
    note: "duplo single",
  },
  {
    id: 3,
    title: "Voar",
    type: "Single",
    year: "2025",
    releaseDate: "2025-01-06",
    image: "/voar-cover.jpg",
    description: "Retomada do projeto em uma direção mais minimalista e íntima.",
    note: "retorno",
  },
].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))

const featuredRelease = releases[0]
const secondaryReleases = releases.slice(1)

export function LatestReleases() {
  return (
    <section className="section-pad overflow-hidden bg-background">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-eyebrow">Lançamentos</p>
            <h2 className="section-heading mt-4">
              Registros
              <br />
              recentes
            </h2>
            <p className="handwritten-note mt-5 text-4xl text-accent md:text-5xl">
              faixas como páginas soltas
            </p>
            <p className="section-copy mt-6 max-w-xl">
              Um recorte da fase atual: canções autorais, versões ao vivo e gravações que preservam a aspereza bonita
              do processo.
            </p>
            <Button asChild size="lg" className="mt-8 h-12 bg-primary px-6 text-primary-foreground hover:bg-primary/88">
              <Link href="/discografia">
                <Disc3 className="mr-2 h-4 w-4" />
                Ver discografia
              </Link>
            </Button>
          </motion.div>

          <div className="grid gap-6">
            <motion.article
              className="stage-panel group grid items-stretch overflow-hidden md:grid-cols-[1.1fr_0.9fr]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="relative aspect-square min-h-[18rem] overflow-hidden md:aspect-auto md:h-full">
                <Image
                  src={featuredRelease.image}
                  alt={featuredRelease.title}
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="flex min-h-[24rem] flex-col justify-between p-7 md:p-9">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="meta-line text-white/52">{featuredRelease.type}</span>
                    <span className="h-1.5 w-1.5 bg-[color:var(--tone-rust)]" />
                    <span className="meta-line text-white/52">{featuredRelease.year}</span>
                    <span className="h-1.5 w-1.5 bg-[color:var(--tone-rust)]" />
                    <span className="meta-line text-white/52">{featuredRelease.note}</span>
                  </div>
                  <p className="handwritten-note mt-6 text-3xl text-white/62 md:text-4xl">novo capítulo</p>

                  <h3 className="display-title mt-3 max-w-xl text-4xl font-medium leading-none text-white md:text-6xl">
                    {featuredRelease.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-base leading-7 text-white/66">{featuredRelease.description}</p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-11 bg-white text-black hover:bg-white/86">
                    <Link href="/discografia">
                      <Play className="mr-2 h-4 w-4 fill-current" />
                      Abrir lançamento
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-3">
              {secondaryReleases.map((release, index) => (
                <motion.article
                  key={release.id}
                  className="analog-panel group grid grid-cols-[5.5rem_1fr] items-center gap-4 p-3 transition-transform duration-300 hover:-translate-y-0.5 md:grid-cols-[7rem_1fr_auto] md:gap-6 md:p-4"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      sizes="7rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="meta-line">{release.type}</span>
                      <span className="h-1 w-1 bg-accent" />
                      <span className="meta-line">{release.year}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-medium leading-tight text-foreground md:text-2xl">
                      {release.title}
                    </h3>
                    <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-muted-foreground md:block">
                      {release.description}
                    </p>
                  </div>

                  <Link
                    href="/discografia"
                    className="col-span-2 flex h-10 items-center justify-between border-t border-border pt-3 font-mono text-[0.68rem] uppercase text-muted-foreground transition-colors hover:text-foreground md:col-span-1 md:h-auto md:border-l md:border-t-0 md:px-5 md:pt-0"
                  >
                    <span className="md:hidden">Ouvir</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
