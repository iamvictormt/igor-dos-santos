'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';

export function LatestReleases() {
  const releases = [
    {
      id: 1,
      title: 'Grito Mudo / Silêncio Ensurdecedor',
      type: 'Double',
      year: '2025.2',
      image: '/grito-mudo-cover.jpeg',
      description: 'Duo de canções que exploram a dor da ansiedade em suas formas mais intensas e silenciosas.',
    },
    {
      id: 2,
      title: 'Tudo o Que Queria Te Dizer',
      type: 'Single',
      year: '2025.3',
      image: '/tudo-que-queria-cover.png',
      description: 'Releitura em comemoração aos 20 anos da canção escrita como declaração de amor.',
    },
    {
      id: 3,
      title: 'Voar',
      type: 'Single',
      year: '2025',
      image: '/voar-cover.jpg',
      description: 'Marca a retomada do projeto com uma direção mais minimalista e intimista.',
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">
          <div className="w-full lg:col-span-5">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Lançamentos</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
                  Novos
                  <br />
                  <span className="font-normal">Trabalhos</span>
                </h2>
              </div>
              <Link href="/discografia">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-black hover:bg-black/80 text-white hover:text-white font-light tracking-[0.1em] px-12 py-4 text-xs uppercase border-0 shadow-2xl transition-all duration-300"
                  >
                    <Disc className="mr-3 h-4 w-4" />
                    Ver Discografia Completa
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>

          <div className="w-full lg:col-span-7">
            <div className="grid gap-4 md:gap-8">
              {releases.map((release, index) => (
                <div
                  key={release.id}
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-4 md:p-8 border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <div className="w-20 h-20 md:w-32 md:h-32 relative overflow-hidden">
                      <Image
                        src={release.image || '/placeholder.svg'}
                        alt={release.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2 md:space-y-3 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="flex-[0.7] text-xl md:text-2xl font-light text-black truncate">{release.title}</h3>
                      <span className="flex-[0.3] text-xs md:text-sm text-gray-500 font-medium text-center md:text-right">
                        {release.type} • {release.year}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{release.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
