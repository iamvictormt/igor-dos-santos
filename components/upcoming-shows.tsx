'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Show } from '@/types/show';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

export function UpcomingShows() {
  const [shows, setShows] = useState<Show[]>([]);

  const getTicketStatus = (showDate: string, ticketUrl: string) => {
    const currentDate = new Date();
    const eventDate = new Date(showDate);
    const timeDiff = eventDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if ((ticketUrl === '#' || !ticketUrl || ticketUrl.trim() === '') && daysDiff > 0) {
      return 'Em Breve';
    } else if (daysDiff <= 7 && daysDiff > 0) {
      return 'Últimos Ingressos';
    } else if (daysDiff > 0) {
      return 'Ingressos Disponíveis';
    } else {
      return 'Encerrado';
    }
  };

  useEffect(() => {
    fetch('/api/shows')
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error('Erro ao buscar shows:', err));
  }, []);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Próximos Shows</p>
            <h2 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Encontros
              <br />
              <span className="font-normal">Musicais</span>
            </h2>
          </div>
          <Link href="/agenda">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="bg-black hover:bg-black/80 text-white hover:text-white font-light tracking-[0.1em] px-12 py-4 text-xs uppercase border-0 shadow-2xl transition-all duration-300"
              >
                <Calendar className="mr-3 h-4 w-4" />
                Ver Agenda Completa
              </Button>
            </motion.div>
          </Link>
        </div>

        <div className="space-y-6">
          {shows.length === 0 ? (
            <div className="bg-black text-white p-12 lg:p-16">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-thin tracking-wide mb-8">Em breve...</h2>
              </div>
            </div>
          ) : (
            shows?.slice(0, 3).map((show, index) => {
              const ticketStatus = getTicketStatus(show.date, show.ticketUrl || '#');

              return (
                <motion.div
                  key={show.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 bg-white hover:bg-gray-50/50 transition-all duration-500 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden group">
                    <div className="p-10 grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-2">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border border-gray-100 group-hover:shadow-md transition-all duration-300">
                          <div className="flex items-center justify-center mb-3">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <div className="text-4xl font-extralight text-black mb-2 tracking-tight">
                            {new Date(show.date).getDate()}
                          </div>
                          <div className="text-sm font-semibold tracking-[0.15em] text-gray-600 mb-1">
                            {new Date(show.date).toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase()}
                          </div>
                          <div className="text-xs text-gray-400 font-light">{new Date(show.date).getFullYear()}</div>
                        </div>
                      </div>

                      <div className="md:col-span-7 space-y-5">
                        <h3 className="text-3xl font-extralight tracking-wide text-black leading-tight group-hover:text-gray-800 transition-colors duration-300">
                          {show.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-gray-100 rounded-xl p-3 mt-1">
                              <MapPin className="h-5 w-5 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 text-lg leading-tight">{show.venue}</div>
                              <div className="text-gray-600 mt-1">{show.city}</div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="bg-gray-100 rounded-xl p-3 mt-1">
                              <Clock className="h-5 w-5 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 text-lg leading-tight">Horário de início</div>
                              <div className="text-gray-600 mt-1">{show.time}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 flex flex-col items-end gap-4">
                        <span
                          className={`text-xs font-semibold px-4 py-2 rounded-full tracking-[0.1em] uppercase shadow-sm border ${
                            ticketStatus === 'Ingressos Disponíveis'
                              ? 'bg-green-50 text-green-700 border-green-200'
                              : ticketStatus === 'Últimos Ingressos'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : ticketStatus === 'Em Breve'
                              ? 'bg-gray-50 text-gray-600 border-gray-200'
                              : 'bg-red-50 text-red-700 border-red-200'
                          }`}
                        >
                          {ticketStatus}
                        </span>

                        {ticketStatus === 'Ingressos Disponíveis' || ticketStatus === 'Últimos Ingressos' ? (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                            <Button
                              variant="outline"
                              className="w-full bg-black hover:bg-black/80 text-white hover:text-white font-light tracking-[0.1em] px-12 py-4 text-xs uppercase border-0 shadow-2xl transition-all duration-300"
                              onClick={() => window.open(show.ticketUrl, '_blank')}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ingressos
                            </Button>
                          </motion.div>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
