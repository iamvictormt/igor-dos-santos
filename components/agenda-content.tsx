"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink, Calendar } from "lucide-react";
import type { Show } from "@/types/show";
import { motion } from "framer-motion";

export function AgendaContent() {
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
    <section className="studio-wall min-h-screen pt-32 pb-24">
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <div className="metal-sign mb-16 max-w-3xl p-8">
          <p className="type-label mb-4 text-[10px]">Próximos shows</p>
          <h1 className="stamp-title text-5xl leading-[0.9] lg:text-6xl">
            Agenda
            <br />
            musical
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Acompanhe os próximos shows e apresentações ao vivo.
          </p>
        </div>

        <div className="space-y-5">
          {shows.length === 0 ? (
            <div className="paper-panel p-10">
              <h2 className="stamp-title text-3xl text-stone-950">Em breve...</h2>
            </div>
          ) : (
            shows.map((show, index) => {
              const ticketStatus = getTicketStatus(show.date, show.ticketUrl || "#");
              const showDate = new Date(show.date);

              return (
                <motion.article
                  key={show.id}
                  className="paper-panel grid gap-6 p-5 md:grid-cols-[140px_1fr_auto] md:items-center md:p-7"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="border border-stone-800/40 bg-[#2b211b] p-4 text-center text-[#f1ddb1]">
                    <Calendar className="mx-auto mb-2 h-5 w-5" />
                    <div className="stamp-title text-5xl leading-none">{showDate.getDate()}</div>
                    <div className="type-label text-[10px]">{showDate.toLocaleDateString("pt-BR", { month: "short" })}</div>
                    <div className="font-mono text-xs">{showDate.getFullYear()}</div>
                  </div>

                  <div>
                    <span className="type-label mb-3 inline-block bg-[#8f4b2e] px-2 py-1 text-[10px] text-[#fff0c9]">{ticketStatus}</span>
                    <h3 className="stamp-title text-3xl leading-none text-stone-950 md:text-4xl">{show.title}</h3>
                    <div className="mt-4 grid gap-3 text-sm text-stone-700 md:grid-cols-2">
                      <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{show.venue} / {show.city}</p>
                      <p className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" />{show.time}</p>
                    </div>
                  </div>

                  {(ticketStatus === "Ingressos disponíveis" || ticketStatus === "Últimos ingressos") && (
                    <Button className="ink-button rounded-none px-6 type-label text-[11px] hover:bg-stone-800" onClick={() => window.open(show.ticketUrl, "_blank")}>
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
