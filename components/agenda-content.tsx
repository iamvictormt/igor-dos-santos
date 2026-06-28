'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, ArrowRight } from 'lucide-react';
import type { Show } from '@/types/show';
import { motion } from 'framer-motion';

const statusConfig = {
  available: { label: 'Disponível', bg: 'bg-[#C41E3A]', text: 'text-white' },
  last_tickets: { label: 'Últimos', bg: 'bg-[#C41E3A]', text: 'text-white' },
  sold_out: { label: 'Esgotado', bg: 'bg-foreground', text: 'text-[#F8F6F1]' },
  coming_soon: { label: 'Em breve', bg: 'bg-muted', text: 'text-muted-foreground' },
};

export function AgendaContent() {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    fetch('/api/shows')
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error('Erro ao buscar shows:', err));
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase(),
      weekday: date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '').toUpperCase(),
    };
  };

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial page header */}
        <div className="flex items-end gap-4 mb-12 md:mb-16">
          <span className="section-number hidden md:block">03</span>
          <div>
            <span className="editorial-tag mb-4 inline-block">Agenda</span>
            <h1 className="font-serif text-5xl md:text-5xl font-light tracking-tight text-foreground">
              Agenda
            </h1>
          </div>
        </div>

        {shows.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-border p-8 md:p-12"
          >
            <p className="font-serif italic text-xl text-muted-foreground">
              Em breve, novos shows serão anunciados.
            </p>
            <div className="w-12 h-0.5 bg-[#C41E3A] mt-4" />
          </motion.div>
        ) : (
          <div className="space-y-4">
            {shows.map((show, index) => {
              const { day, month, weekday } = formatDate(show.date);
              const status = show.ticketStatus || 'coming_soon';
              const config = statusConfig[status];

              return (
                <motion.div
                  key={show.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Ticket-style card */}
                  <div className="ticket-card bg-card overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Date badge — left section */}
                      <div className="md:col-span-2 flex items-center justify-center border-b md:border-b-0 md:border-r border-border py-4 md:py-0">
                        <div className="text-center">
                          <span className="font-mono text-xs text-muted-foreground block">{weekday}</span>
                          <span className="font-serif text-4xl font-light text-foreground block leading-none">{day}</span>
                          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C41E3A] block">{month}</span>
                        </div>
                      </div>

                      {/* Info section */}
                      <div className="md:col-span-8 p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-light text-foreground group-hover:text-[#C41E3A] transition-colors">
                            {show.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                            <span className="font-sans text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {show.venue}, {show.city}
                            </span>
                            <span className="font-sans text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {show.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action section — right of dashed line */}
                      <div className="md:col-span-2 p-4 md:p-6 flex flex-col items-center justify-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-1 ${config.bg} ${config.text}`}>
                          {config.label}
                        </span>
                        {show.ticketUrl && status !== 'sold_out' && (
                          <a
                            href={show.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs font-semibold text-[#C41E3A] hover:underline flex items-center gap-1"
                          >
                            <Ticket className="h-3 w-3" /> Comprar
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-8 md:mt-12 flex justify-center">
          <Link href="/agenda">
            <Button
              variant="outline"
              className="font-serif tracking-wide border-foreground/20 text-foreground hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] transition-all duration-300"
            >
              Ver Agenda Completa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
