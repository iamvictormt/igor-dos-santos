'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Ticket, Calendar, ChevronDown } from 'lucide-react';
import type { Show } from '@/types/show';

export function AgendaContent() {
  const [shows, setShows] = useState<Show[]>([]);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const getTicketStatus = (date: string, url: string) => {
    const days = Math.ceil((new Date(date).getTime() - Date.now()) / 86400000);
    if ((url === '#' || !url?.trim()) && days > 0) return { label: 'Em Breve',  color: 'amber',  glow: 'transparent' };
    if (days <= 7 && days > 0)                return { label: 'Últimas!',  color: 'coral',  glow: 'oklch(0.60 0.16 25 / 0.5)' };
    if (days > 0)                             return { label: 'Ingressos', color: 'gold',   glow: 'oklch(0.78 0.16 70 / 0.55)' };
    return                                       { label: 'Realizado',color: 'gray',   glow: 'transparent' };
  };

  useEffect(() => {
    fetch('/api/shows').then((r) => r.json()).then((d) => setShows(d)).catch(() => {});
  }, []);

  const border = (c: string) => c === 'gold' ? 'border-amber-400/40' : c === 'coral' ? 'border-orange-400/40' : c === 'amber' ? 'border-amber-400/25' : 'border-white/10';
  const badge = (c: string) => c === 'gold' ? 'bg-amber-300 text-black' : c === 'coral' ? 'bg-orange-500 text-black' : c === 'amber' ? 'bg-amber-400/20 text-amber-200' : 'bg-white/10 text-white/60';

  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-4">Próximos Shows</p>
          <h1 className="font-handwriting text-6xl md:text-8xl text-amber-100 leading-[0.9] gold-glow">
            Agenda
            <br />
            <span className="text-amber-300">Musical</span>
          </h1>
        </div>

        <div className="space-y-5">
          {shows.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-amber-300/50" />
              <h3 className="font-handwriting text-3xl text-amber-200 mb-2">Nenhum show na agenda</h3>
              <p className="font-light text-amber-100/50 text-sm">O palco está pronto. Em breve, datas novas.</p>
            </div>
          ) : (
            shows.map((show, i) => {
              const s = getTicketStatus(show.date, show.ticketUrl);
              const isOpen = openIdx === i;
              return (
                <motion.article
                  key={i}
                  className={`group bg-card rounded-2xl border transition-all duration-500 hover:border-amber-400/50 ${border(s.color)} overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={(e) => { if (s.glow !== 'transparent') (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px -12px ${s.glow}`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent'; }}
                >
                  {/* Header row — always visible */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full grid md:grid-cols-[120px_1fr_auto] items-center gap-6 p-6 md:p-8 text-left"
                  >
                    <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1">
                      <span className="font-handwriting text-4xl md:text-5xl text-amber-300 leading-none">
                        {new Date(show.date).getDate().toString().padStart(2, '0')}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-amber-200/60">
                        {new Date(show.date).toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                      </span>
                    </div>

                    <div className="space-y-2 min-w-0">
                      <h2 className="font-handwriting text-2xl md:text-3xl text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                        {show.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-amber-100/50 text-sm">
                        {show.venue && <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400/60" />{show.venue}</span>}
                        {show.time && <span className="inline-flex items-center gap-1.5 font-mono text-xs"><Clock className="w-3.5 h-3.5 text-amber-400/60" />{show.time}</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1 rounded-full ${badge(s.color)}`}>
                        {s.label}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-amber-200/60" />
                      </motion.span>
                    </div>
                  </button>

                  {/* Expandable body */}
                  <motion.div
                    className="grid grid-rows-[0fr] overflow-hidden"
                    animate={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="min-h-0">
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 space-y-5 border-t border-amber-400/10 pt-5 mx-6 md:mx-8">
                        {show.description && (
                          <p className="font-light text-amber-100/55 leading-relaxed text-sm">{show.description}</p>
                        )}
                        <div className="flex flex-wrap items-center gap-2">
                          {show.ticketUrl && show.ticketUrl !== '#' && s.label !== 'Realizado' && (
                            <Link
                              href={show.ticketUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-mono text-xs tracking-widest uppercase hover:bg-amber-300 transition-colors duration-300"
                            >
                              <Ticket className="w-3 h-3" />
                              Ingressos
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
