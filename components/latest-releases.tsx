'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disc, ArrowRight } from 'lucide-react';

export function LatestReleases() {
  const releases = [
    {
      id: 0,
      title: 'Tamanho de um Rei & Outras Histórias',
      type: 'EP',
      year: '2026',
      releaseDate: '2026-06-26',
      image: '/tamanho-de-um-rei-cover.jpg',
      description: 'Conjunto de canções pessoais e intimistas, com 4 releituras ao vivo.',
    },
    {
      id: 2,
      title: 'Tudo o Que Queria Te Dizer',
      type: 'Single',
      year: '2025',
      releaseDate: '2025-05-29',
      image: '/tudo-que-queria-cover.png',
      description: 'Releitura em comemoração aos 20 anos da canção escrita como declaração de amor.',
    },
    {
      id: 1,
      title: 'Grito Mudo / Silêncio Ensurdecedor',
      type: 'Double',
      year: '2025',
      releaseDate: '2025-04-17',
      image: '/grito-mudo-cover.jpeg',
      description: 'Duo de canções que exploram a dor da ansiedade em suas formas mais intensas e silenciosas.',
    },
    {
      id: 3,
      title: 'Voar',
      type: 'Single',
      year: '2025',
      releaseDate: '2025-01-06',
      image: '/voar-cover.jpg',
      description: 'Marca a retomada do projeto com uma direção mais minimalista e intimista.',
    },
  ].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));

  const featured = releases[0];
  const sideReleases = releases.slice(1);

  return (
    <section className="py-16 md:py-28 px-4 md:px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header — editorial style */}
        <div className="flex items-end gap-4 mb-12 md:mb-16">
          <span className="section-number hidden md:block">01</span>
          <div>
            <span className="editorial-tag mb-4 inline-block">Discografia</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Últimos <span className="font-normal">Lançamentos</span>
            </h2>
          </div>
        </div>

        {/* Editorial layout: Feature + Sidebar */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Feature album — takes 7 cols */}
          <div className="lg:col-span-7">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/discografia" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <span className="editorial-tag mb-3">{featured.type} • {featured.year}</span>
                    <h3 className="font-serif text-2xl md:text-4xl font-light text-white mt-3 leading-tight">
                      {featured.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-white/70 mt-3 max-w-lg leading-relaxed">
                      {featured.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Sidebar — takes 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href="/discografia" className="group flex gap-4 items-start p-4 border-b border-border hover:border-[#C41E3A] transition-colors duration-300">
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-muted">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-muted-foreground">
                      {release.type} • {release.year}
                    </span>
                    <h4 className="font-serif text-lg font-light text-foreground mt-1 group-hover:text-[#C41E3A] transition-colors truncate">
                      {release.title}
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground mt-1 line-clamp-2">
                      {release.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

            <Link href="/discografia" className="group mt-auto">
              <Button
                variant="outline"
                className="w-full font-serif text-sm tracking-wide border-foreground/20 text-foreground hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] transition-all duration-300"
              >
                Ver Discografia Completa
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
