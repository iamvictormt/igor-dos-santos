'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, ExternalLink, X } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  { id: 1, title: 'Silêncio Ensurdecedor', youtubeUrl: 'https://youtu.be/GZ0DGvkg4us' },
  { id: 2, title: 'Voar', youtubeUrl: 'https://youtu.be/YD1hsoXfhM0' },
  { id: 3, title: 'Bem Vindo a Sua Vida', youtubeUrl: 'https://youtu.be/VKGK59I-bps' },
  { id: 4, title: 'Auto Intitulada', youtubeUrl: 'https://youtu.be/xMrRriRhO_U' },
  { id: 5, title: 'Avivar (Acústica)', youtubeUrl: 'https://youtu.be/ImYsxY7tbSM' },
  { id: 6, title: 'A.C.A.S.O', youtubeUrl: 'https://youtu.be/4sZgljD4Oms' },
  { id: 7, title: 'Grito Mudo', youtubeUrl: 'https://youtu.be/1L54FO3z8-s' },
  { id: 8, title: 'O Herói Não Resolvido', youtubeUrl: 'https://youtu.be/1cmROgqxchg' },
  { id: 9, title: 'Aonde Vai o Tempo?', youtubeUrl: 'https://youtu.be/G4dZtnoxkLE' },
  { id: 10, title: 'Amanhã É um Novo Dia', youtubeUrl: 'https://youtu.be/nrLCteUhKnk' },
  { id: 11, title: 'Broken Dreams & Hopes - Visualizer', youtubeUrl: 'https://youtu.be/pUOboWnkxgI' },
  { id: 12, title: 'Tudo o Que Eu Queria Te Dizer - Ao Vivo', youtubeUrl: 'https://youtu.be/0AwFbg8XMxY' },
  { id: 13, title: 'Bem Vindo a Sua Vida - Ao Vivo', youtubeUrl: 'https://youtu.be/BprfDyjd' },
  { id: 14, title: 'Silêncio Ensurdecedor - Ao Vivo', youtubeUrl: 'https://youtu.be/GZ0DGvkg4us' },
  { id: 15, title: 'Voar - Acústico', youtubeUrl: 'https://youtu.be/YD1hsoXfhM0' },
];

const ytThumb = (url: string) => {
  const id = url.split('youtu.be/')?.pop()?.split('?')?.[0];
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
};
const ytEmbed = (url: string) => {
  const id = url.split('youtu.be/')?.pop()?.split('?')?.[0];
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : '';
};

export function VideographyContent() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState('');

  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-4">Videografia</p>
          <h1 className="font-handwriting text-6xl md:text-8xl text-amber-100 leading-[0.9] gold-glow">
            Meus
            <br />
            <span className="text-amber-300">Vídeos</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video, i) => (
            <motion.button
              key={video.id}
              onClick={() => { setActiveVideo(video.youtubeUrl); setActiveTitle(video.title); }}
              className="group relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/5 hover:ring-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image src={ytThumb(video.youtubeUrl)} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-amber-300 text-black rounded-full p-4 shadow-lg shadow-amber-500/40">
                  <Play className="w-7 h-7" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="font-handwriting text-lg text-amber-100 gold-glow">{video.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Inline player */}

      {activeVideo && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 text-amber-200/80 hover:text-amber-300 transition-colors duration-300">
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden ring-1 ring-amber-400/20" onClick={(e) => e.stopPropagation()}>
            <iframe src={ytEmbed(activeVideo)} className="w-full h-full" allowFullScreen allow="autoplay; encrypted-media" />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-handwriting text-2xl md:text-3xl text-amber-200 gold-glow">{activeTitle}</p>
            <a href={activeVideo} target="_blank" rel="noopener noreferrer"              className="inline-flex items-center gap-2 mt-2 text-amber-300/60 hover:text-amber-300 font-mono text-xs tracking-widest uppercase transition-colors duration-300">
              <ExternalLink className="w-3 h-3" /> YouTube
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
