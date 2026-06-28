'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { playTrack } from '@/components/player-bar';
import { Play, Disc3, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronLeft as ArrowL, ChevronRight as ArrowR } from 'lucide-react';

type Album = {
  id: number;
  title: string;
  year: string;
  type: string;
  cover: string;
  tracks: {
    name: string;
    duration: string;
    audioUrl: string;
    spotify?: string;
    apple?: string;
    youtube?: string;
  }[];
};

const albums: Album[] = [
  { id: 12, title: 'Tamanho de um Rei', year: '2024', type: 'Single',
    cover: '/tamanho-de-um-rei-cover.jpg',
    tracks: [{ name: 'Tamanho de um Rei', duration: '4:12', audioUrl: '/audio-samples/Tamanho de Um Rei.flac' }] },
  { id: 11, title: 'Tudo o Que Eu Queria Te Dizer', year: '2023', type: 'Single',
    cover: '/tudo-que-queria-cover.png',
    tracks: [{ name: 'Tudo o Que Eu Queria Te Dizer', duration: '3:48', audioUrl: '/audio-samples/Tudo Que Queria.flac' }] },
  { id: 10, title: 'Grito Mudo', year: '2023', type: 'Single',
    cover: '/grito-mudo-cover.jpeg',
    tracks: [{ name: 'Grito Mudo', duration: '4:05', audioUrl: '/audio-samples/Grito Mudo.flac' }] },
  { id: 9, title: 'Voar', year: '2022', type: 'Single',
    cover: '/voar-cover.jpg',
    tracks: [{ name: 'Voar', duration: '3:55', audioUrl: '/audio-samples/Voar.flac' }] },
  { id: 8, title: 'Broken Dreams & Hopes', year: '2022', type: 'Single',
    cover: '/broken-dreams-cover.jpg',
    tracks: [{ name: 'Broken Dreams & Hopes', duration: '4:30', audioUrl: '/audio-samples/Broken Dreams.flac' }] },
  { id: 7, title: 'Trinta e Um', year: '2021', type: 'Single',
    cover: '/trinta-um-cover.jpg',
    tracks: [{ name: 'Trinta e Um', duration: '4:00', audioUrl: '/audio-samples/Trinta e Um.flac' }] },
];

export function LatestReleases() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const playAlbum = (a: Album, i: number) => {
    const t = a.tracks[i];
    if (!t) return;
    playTrack({
      albumId: a.id,
      trackIndex: i,
      name: t.name,
      duration: t.duration,
      audioUrl: t.audioUrl,
      albumTitle: a.title,
      albumCover: a.cover,
      spotify: t.spotify,
      apple: t.apple,
      youtube: t.youtube,
    });
  };

  return (
    <section id="faixas" className="py-24 md:py-32 px-6 md:px-10 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-3">
              No ar · Lançamentos
            </p>
            <h2 className="font-handwriting text-5xl md:text-7xl text-amber-100 leading-[0.9] gold-glow">
              Faixas
              <br />
              <span className="text-amber-300">Recentes</span>
            </h2>
          </div>
          <Link
            href="/discografia"
            className="inline-flex items-center gap-2 px-6 py-3 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 hover:border-amber-300/50 rounded-full font-mono text-xs tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap"
          >
            <Disc3 className="w-3.5 h-3.5" />
            Ver Discografia Completa
          </Link>
        </div>

        {/* Horizontal scroll list */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-6 snap scroll-smooth -mx-6 px-6 md:-mx-10 md:px-10 no-scrollbar">
            {albums.map((a, i) => (
              <motion.article
                key={a.id}
                className="snap-start shrink-0 w-[280px] md:w-[320px] group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {/* Cover — tilt card */}
                <div className="tilt-card relative aspect-square rounded-2xl overflow-hidden mb-4 ring-1 ring-white/5 hover:ring-amber-400/40">
                  <Image src={a.cover} alt={a.title} fill className="object-cover" />
                  {/* Vinyl disc peeking */}
                  <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-28 h-28 rounded-full vinyl-rings opacity-50 group-hover:opacity-80 group-hover:translate-x-2 transition-all duration-700" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />
                  <button
                    onClick={() => playAlbum(a, 0)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-label={`Ouvir ${a.title}`}
                  >
                    <span className="bg-amber-300 text-black rounded-full p-4 shadow-lg shadow-amber-500/40">
                      <Play className="w-7 h-7 ml-[2px]" />
                    </span>
                  </button>
                  {/* Year badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-mono text-[0.6rem] tracking-widest uppercase border border-amber-400/20">
                    {a.year}
                  </span>
                </div>

                <h3 className="font-handwriting text-2xl text-amber-100 group-hover:text-amber-300 transition-colors duration-300 truncate">
                  {a.title}
                </h3>
                <p className="font-mono text-[0.65rem] text-amber-200/40 tracking-widest uppercase">
                  {a.type} · {a.year}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Scroll arrows (desktop) */}
          <div className="hidden md:flex items-center gap-2 mt-6 justify-end">
            <button
              onClick={() => ref.current?.querySelector('.snap-x')?.scrollBy({ left: -340, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => ref.current?.querySelector('.snap-x')?.scrollBy({ left: 340, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
