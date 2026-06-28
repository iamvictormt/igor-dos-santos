"use client"

import { formatDatePtBr } from "@/lib/utils"
import type { NewsItem } from "@/types/news"
import { motion } from "framer-motion"
import { Newspaper } from "lucide-react"
import { useEffect, useState } from "react"

const fallbackNews: NewsItem[] = [
  {
    id: 1,
    date: "2026-01-15",
    title: "Novos registros em preparação",
    excerpt: "O repertório recente segue em construção entre versões ao vivo, canções antigas revisitadas e material inédito.",
    category: "Evento",
  },
  {
    id: 2,
    date: "2026-01-15",
    title: "Agenda de 2026 em breve",
    excerpt: "As próximas apresentações serão atualizadas por aqui assim que as datas forem confirmadas.",
    category: "Turnê",
  },
  {
    id: 3,
    date: "2026-01-15",
    title: "Videografia em expansão",
    excerpt: "Clipes, sessions e registros ao vivo entram no arquivo visual do projeto.",
    category: "Conquista",
  },
]

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>(fallbackNews)

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news")
        if (!res.ok) throw new Error("Erro ao buscar notícias")
        const data: NewsItem[] = await res.json()
        if (data?.length) setNews(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchNews()
  }, [])

  return (
    <section className="section-pad bg-[color:var(--surface-warm)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="section-eyebrow">Novidades</p>
            <h2 className="section-heading mt-4">
              Notas de
              <br />
              bastidor
            </h2>
            <p className="handwritten-note mt-5 text-4xl text-accent md:text-5xl">
              rabiscos do caminho
            </p>
            <p className="section-copy mt-6 max-w-lg">
              Atualizações curtas sobre lançamentos, shows e registros do projeto, como uma página arrancada do caderno
              de ensaio.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {news.length === 0 ? (
              <div className="stage-panel p-8 md:p-10">
                <Newspaper className="h-7 w-7 text-[color:var(--tone-rust)]" />
                <h3 className="mt-5 text-2xl font-medium text-white">Nenhuma notícia disponível no momento.</h3>
              </div>
            ) : (
              news.slice(0, 3).map((item, index) => (
                <motion.article
                  key={`${item.id}-${index}`}
                  className="analog-panel group grid gap-5 p-5 transition-transform duration-300 hover:-translate-y-0.5 md:grid-cols-[9rem_1fr] md:p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <div className="border-b border-border pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
                    <p className="meta-line">{item.category || "Nota"}</p>
                    <time className="mt-4 block font-mono text-sm text-muted-foreground">
                      {item.date ? formatDatePtBr(item.date) : "Em breve"}
                    </time>
                  </div>

                  <div>
                    <h3 className="display-title text-2xl font-medium leading-tight text-foreground md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                      {item.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
