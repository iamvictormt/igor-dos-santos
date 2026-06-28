"use client"

import { Button } from "@/components/ui/button"
import type { Show } from "@/types/show"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

function getTicketStatus(showDate: string, ticketUrl: string) {
  const currentDate = new Date()
  const eventDate = new Date(showDate)
  const timeDiff = eventDate.getTime() - currentDate.getTime()
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

  if ((ticketUrl === "#" || !ticketUrl || ticketUrl.trim() === "") && daysDiff > 0) {
    return "Em breve"
  }

  if (daysDiff <= 7 && daysDiff > 0) {
    return "Últimos ingressos"
  }

  if (daysDiff > 0) {
    return "Ingressos disponíveis"
  }

  return "Encerrado"
}

function formatShowDate(dateString: string) {
  const date = new Date(dateString)

  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
    year: date.getFullYear(),
  }
}

export function UpcomingShows() {
  const [shows, setShows] = useState<Show[]>([])

  useEffect(() => {
    fetch("/api/shows")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Erro ao buscar shows:", err))
  }, [])

  return (
    <section className="section-pad bg-background">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Próximos shows</p>
            <h2 className="section-heading mt-4">
              Encontros ao vivo
            </h2>
          </div>
          <Button asChild size="lg" className="h-12 w-fit bg-primary px-6 text-primary-foreground hover:bg-primary/88">
            <Link href="/agenda">
              Agenda completa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {shows.length === 0 ? (
            <div className="stage-panel grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <p className="section-eyebrow text-white/52">Agenda</p>
                <h3 className="mt-4 text-3xl font-medium text-white">Novas datas serão anunciadas em breve.</h3>
              </div>
            </div>
          ) : (
            shows.slice(0, 3).map((show, index) => {
              const ticketStatus = getTicketStatus(show.date, show.ticketUrl || "#")
              const eventDate = formatShowDate(show.date)
              const canBuy = ticketStatus === "Ingressos disponíveis" || ticketStatus === "Últimos ingressos"

              return (
                <motion.article
                  key={show.id}
                  className="analog-panel grid gap-6 p-5 md:grid-cols-[8rem_1fr_auto] md:items-center md:p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <div className="flex items-end gap-4 border-b border-border pb-5 md:block md:border-b-0 md:border-r md:pb-0 md:pr-6">
                    <div className="display-title text-6xl font-medium leading-none text-foreground">{eventDate.day}</div>
                    <div>
                      <div className="font-mono text-sm uppercase text-muted-foreground">{eventDate.month}</div>
                      <div className="font-mono text-xs text-muted-foreground">{eventDate.year}</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="meta-line">{ticketStatus}</span>
                      <span className="h-1.5 w-1.5 bg-accent" />
                      <span className="meta-line">{show.city}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-medium leading-tight text-foreground md:text-3xl">{show.title}</h3>
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
                      {ticketStatus}
                    </span>
                  )}
                </motion.article>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
