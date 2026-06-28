"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Clock, Calendar, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Show } from "@/types/show";
import { motion } from "framer-motion";

export function UpcomingShows() {
  const [shows, setShows] = useState<Show[]>([]);

  const getTicketStatus = (showDate: string, ticketUrl: string) => {
    const currentDate = new Date();
    const eventDate = new Date(showDate);
    const daysDiff = Math.ceil((eventDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));

    if ((ticketUrl === "#" || !ticketUrl || ticketUrl.trim() === "") && daysDiff > 0) return "Em breve";
    if (daysDiff <= 7 && daysDiff > 0) return "Últimos ingressos";
    if (daysDiff > 0) return "Ingressos disponíveis";
    return "Encerrado";
  };

  useEffect(() => {
    fetch("/api/shows")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Erro ao buscar shows:", err));
  }, []);

  return (
    <section className="home-section">
      <div className="mx-auto max-w-7xl">
        <div className="home-heading">
          <div className="paper-panel p-6 md:p-8">
            <p className="type-label mb-3 text-[10px] text-stone-700">Agenda</p>
            <h2 className="stamp-title text-4xl leading-none text-stone-950 md:text-6xl">Próximos eventos</h2>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="home-note">
              Datas ao vivo, encontros musicais e lugares onde as canções saem do papel.
            </p>
            <Link href="/agenda">
              <Button className="ink-button rounded-none px-7 type-label text-[11px] hover:bg-stone-800">
                <Calendar className="mr-2 h-4 w-4" />
                Ver agenda completa
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {shows.length === 0 ? (
            <div className="paper-panel p-10">
              <h3 className="stamp-title text-3xl text-stone-950">Em breve...</h3>
            </div>
          ) : (
            shows.slice(0, 3).map((show, index) => {
              const ticketStatus = getTicketStatus(show.date, show.ticketUrl || "#");
              const showDate = new Date(show.date);

              return (
                <motion.article
                  key={show.id}
                  className="paper-panel grid gap-6 p-5 md:grid-cols-[140px_1fr_auto] md:items-center md:p-7"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="border border-stone-800/40 bg-[#2b211b] p-4 text-center text-[#f1ddb1]">
                    <Calendar className="mx-auto mb-2 h-5 w-5" />
                    <div className="stamp-title text-5xl leading-none">{showDate.getDate()}</div>
                    <div className="type-label text-[10px]">{showDate.toLocaleDateString("pt-BR", { month: "short" })}</div>
                    <div className="font-mono text-xs">{showDate.getFullYear()}</div>
                  </div>

                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="type-label bg-[#8f4b2e] px-2 py-1 text-[10px] text-[#fff0c9]">{ticketStatus}</span>
                    </div>
                    <h3 className="stamp-title text-3xl leading-none text-stone-950 md:text-4xl">{show.title}</h3>
                    <div className="mt-4 grid gap-3 text-sm text-stone-700 md:grid-cols-2">
                      <p className="flex gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        {show.venue} / {show.city}
                      </p>
                      <p className="flex gap-2">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                        {show.time}
                      </p>
                    </div>
                  </div>

                  {(ticketStatus === "Ingressos disponíveis" || ticketStatus === "Últimos ingressos") && (
                    <Button
                      className="ink-button rounded-none px-6 type-label text-[11px] hover:bg-stone-800"
                      onClick={() => window.open(show.ticketUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ingressos
                    </Button>
                  )}
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
