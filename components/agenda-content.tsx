"use client"

import { Button } from "@/components/ui/button"
import type { Show } from "@/types/show"
import { motion } from "framer-motion"
import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

function getTicketStatus(showDate: string, ticketUrl: string) {
  const currentDate = new Date()
  const eventDate = new Date(showDate)
  const timeDiff = eventDate.getTime() - currentDate.getTime()
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

  if ((ticketUrl === "#" || !ticketUrl || ticketUrl.trim() === "") && daysDiff > 0) return "Em breve"
  if (daysDiff <= 7 && daysDiff > 0) return "Últimos ingressos"
  if (daysDiff > 0) return "Ingressos disponíveis"

  return "Encerrado"
}

function formatShowDate(dateString: string) {
  const date = new Date(dateString)

  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date.toLocaleDateString("pt-BR", { month: "long" }),
    weekday: date.toLocaleDateString("pt-BR", { weekday: "long" }),
    year: date.getFullYear(),
  }
}

export function AgendaContent() {
  const [shows, setShows] = useState<Show[]>([])

  useEffect(() => {
    fetch("/api/shows")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Erro ao buscar shows:", err))
  }, [])

  return (
    <section className="bg-background pt-32">
      <div className="section-shell pb-24">
        <div className="grid gap-12 border-b border-border pb-14">
          <div>
            <p className="section-eyebrow">Agenda</p>
            <h1 className="section-heading mt-4">
              Datas ao vivo
            </h1>
            <p className="handwritten-note mt-5 text-4xl text-accent md:text-5xl">
              onde a canção encontra gente
            </p>
          </div>
        </div>

        <div className="py-12">
          {shows.length === 0 ? (
            <div className="stage-panel grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
              <div>
                <p className="section-eyebrow text-white/52">Sem datas abertas</p>
                <h2 className="display-title mt-5 max-w-3xl text-4xl leading-none text-white md:text-6xl">
                  Novos shows serão anunciados em breve.
                </h2>
                <p className="mt-6 max-w-xl leading-8 text-white/64">
                  Para convites, eventos e booking, envie as informações pela página de contato.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-5">
              {shows.map((show, index) => {
                const status = getTicketStatus(show.date, show.ticketUrl || "#")
                const date = formatShowDate(show.date)
                const canBuy = status === "Ingressos disponíveis" || status === "Últimos ingressos"

                return (
                  <motion.article
                    key={show.id}
                    className="analog-panel grid gap-6 p-5 md:grid-cols-[10rem_1fr_auto] md:items-center md:p-7"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.42, ease: "easeOut" }}
                  >
                    <div className="border-b border-border pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-7">
                      <div className="display-title text-7xl font-medium leading-none text-foreground">{date.day}</div>
                      <div className="mt-2 font-mono text-xs uppercase text-muted-foreground">{date.month}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{date.weekday}, {date.year}</div>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="meta-line text-accent">{status}</span>
                        <span className="h-1.5 w-1.5 bg-accent" />
                        <span className="meta-line">{show.city}</span>
                      </div>
                      <h2 className="mt-3 text-3xl font-medium leading-tight text-foreground">{show.title}</h2>
                      <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                          <span>{show.venue}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="mt-0.5 h-4 w-4 text-accent" />
                          <span>{show.time}</span>
                        </div>
                      </div>
                    </div>

                    {canBuy ? (
                      <Button
                        className="h-11 bg-primary px-5 text-primary-foreground hover:bg-primary/88"
                        onClick={() => window.open(show.ticketUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ingressos
                      </Button>
                    ) : (
                      <span className="w-fit border border-border px-4 py-3 font-mono text-[0.68rem] uppercase text-muted-foreground">
                        {status}
                      </span>
                    )}
                  </motion.article>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
