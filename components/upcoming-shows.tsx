'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function UpcomingShows() {
  const shows = [
    {
      id: 1,
      date: '15',
      month: 'FEV',
      city: 'São Paulo',
      venue: 'Teatro Municipal',
      status: 'Ingressos Disponíveis',
      ticketUrl: '#',
    },
    {
      id: 2,
      date: '22',
      month: 'FEV',
      city: 'Rio de Janeiro',
      venue: 'Cidade das Artes',
      status: 'Últimos Ingressos',
      ticketUrl: '#',
    },
    {
      id: 3,
      date: '08',
      month: 'MAR',
      city: 'Belo Horizonte',
      venue: 'Palácio das Artes',
      status: 'Em Breve',
      ticketUrl: '#',
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
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

        <div className="bg-black text-white p-12 lg:p-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-thin tracking-wide mb-8">Em 2026, aguardem...</h2>
          </div>
        </div>

        {/*  <div className="space-y-6">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className="group flex flex-col lg:flex-row lg:items-center justify-between p-8 border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-center gap-8 mb-4 lg:mb-0">
                <div className="text-center">
                  <div className="text-3xl font-light text-black">{show.date}</div>
                  <div className="text-sm font-medium text-gray-500 tracking-wider">{show.month}</div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-light text-black">{show.city}</h3>
                  <p className="text-gray-600">{show.venue}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    show.status === "Ingressos Disponíveis"
                      ? "bg-green-100 text-green-700"
                      : show.status === "Últimos Ingressos"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {show.status}
                </span>

                {show.status !== "Em Breve" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Ingressos
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
