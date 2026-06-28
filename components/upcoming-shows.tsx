'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Ticket, Disc3 } from 'lucide-react';
import type { Show } from '@/types/show';

export function UpcomingShows() {
  const [shows, setShows] = useState<Show[]>([]);

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
    <section id="shows" className="py-24 md:py-32 px-6 md:px-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-3">Próximos</p>
            <h2 className="font-handwriting text-5xl md:text-7xl text-amber-100 leading-[0.9] gold-glow">
              Shows
              <br />
              <span className="text-amber-300">ao Vivo</span>
            </h2>
          </div>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 px-6 py-3 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 hover:border-amber-300/50 rounded-full font-mono text-xs tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap"
          >
            <Disc3 className="w-3.5 h-3.5" />
            Agenda Completa
          </Link>
        </div>

        <div className="space-y-5">
          {shows.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <Disc3 className="w-10 h-10 mx-auto mb-4 text-amber-300/50 animate-spin-slow" />
              <h3 className="font-handwriting text-3xl text-amber-200 mb-2">Nenhum show por enquanto</h3>
              <p className="font-light text-amber-100/50 text-sm">O palco está pronto — volte logo.</p>
            </div>
          ) : (
            shows.slice(0, 3).map((show, i) => {
              const s = getTicketStatus(show.date, show.ticketUrl);
              return (
                <motion.article
                  key={i}
                  className={`group bg-card rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:border-amber-400/50 ${border(s.color)} relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={(e) => { if (s.glow !== 'transparent') (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px -12px ${s.glow}`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent'; }}
                >
                  <div className="grid md:grid-cols-[100px_1fr_auto] items-center gap-6">
                    <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1">
                      <span className="font-handwriting text-3xl md:text-4xl text-amber-300 leading-none">
                        {new Date(show.date).getDate().toString().padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-amber-200/60">
                        {new Date(show.date).toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                      </span>
                    </div>

                    <div className="space-y-2 min-w-0">
                      <h3 className="font-handwriting text-2xl md:text-3xl text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                        {show.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-amber-100/50 text-sm">
                        {show.venue && <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400/60" />{show.venue}</span>}
                        {show.time && <span className="inline-flex items-center gap-1.5 font-mono text-xs"><Clock className="w-3.5 h-3.5 text-amber-400/60" />{show.time}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <span className={`font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1 rounded-full ${badge(s.color)}`}>
                        {s.label}
                      </span>
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
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
