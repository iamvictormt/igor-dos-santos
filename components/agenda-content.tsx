'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const shows = [
  {
    id: 1,
    date: '15',
    month: 'DEZ',
    year: '2024',
    title: 'Show Acústico - São Paulo',
    venue: 'Teatro Municipal',
    location: 'São Paulo, SP',
    time: '20h00',
    ticketUrl: '#',
    status: 'available',
  },
  {
    id: 2,
    date: '22',
    month: 'DEZ',
    year: '2024',
    title: 'Festival de Verão',
    venue: 'Parque Ibirapuera',
    location: 'São Paulo, SP',
    time: '19h30',
    ticketUrl: '#',
    status: 'available',
  },
  {
    id: 3,
    date: '05',
    month: 'JAN',
    year: '2025',
    title: 'Turnê Nacional - Rio de Janeiro',
    venue: 'Circo Voador',
    location: 'Rio de Janeiro, RJ',
    time: '21h00',
    ticketUrl: '#',
    status: 'soldout',
  },
  {
    id: 4,
    date: '12',
    month: 'JAN',
    year: '2025',
    title: 'Show Intimista',
    venue: 'Casa de Cultura',
    location: 'Belo Horizonte, MG',
    time: '20h30',
    ticketUrl: '#',
    status: 'available',
  },
];

export function AgendaContent() {
  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Professional Header */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">PRÓXIMOS SHOWS</p>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Agenda
              <br />
              <span className="font-normal">Musical</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Acompanhe os próximos shows e apresentações ao vivo
          </p>
        </div>

          {/* Call to Action Section */}
          <div className="bg-black text-white p-12 lg:p-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-thin tracking-wide mb-8">Em 2026, aguardem...</h2>
            </div>
          </div>

        {/* <div className="space-y-6">
          {shows.map((show) => (
            <Card key={show.id} className="border-0 bg-gray-50 hover:bg-gray-100 transition-all duration-300">
              <div className="p-8">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-2 text-center">
                    <div className="space-y-1">
                      <div className="text-3xl font-light text-black">{show.date}</div>
                      <div className="text-sm font-light tracking-wide text-gray-500">{show.month}</div>
                      <div className="text-xs text-gray-400">{show.year}</div>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-3">
                    <h3 className="text-xl font-light tracking-wide text-black">{show.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {show.venue} - {show.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {show.time}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex justify-end">
                    {show.status === 'available' ? (
                      <Button
                        variant="outline"
                        className="font-light tracking-wide bg-transparent border-black text-black hover:bg-black hover:text-white"
                        onClick={() => window.open(show.ticketUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ingressos
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        disabled
                        className="font-light tracking-wide bg-transparent border-gray-300 text-gray-400"
                      >
                        Esgotado
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div> */}

        {/* Contact for bookings */}
        {/* <div className="mt-20 text-center">
          <div className="pt-12">
            <p className="text-sm text-gray-600 font-light mb-6">Para contratações e informações sobre shows</p>
            <Button
              variant="outline"
              className="font-light tracking-wide bg-transparent border-black text-black hover:bg-black hover:text-white"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Entrar em Contato
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
