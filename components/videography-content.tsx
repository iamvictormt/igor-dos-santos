'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const videos = [
  {
    id: 1,
    title: 'Tudo o Que Queria Te Dizer — Ao Vivo',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Releitura ao vivo do clássico que completa 20 anos.',
  },
  {
    id: 2,
    title: 'Grito Mudo — Clipe Oficial',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Clipe que explora a intensidade da ansiedade.',
  },
  {
    id: 3,
    title: 'Voar — Studio Session',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Session acústica e intimista.',
  },
  {
    id: 4,
    title: 'Bem Vindo a Sua Vida — Ao Vivo no Estúdio',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Performance gravada ao vivo no estúdio.',
  },
  {
    id: 5,
    title: 'Talvez Nunca Aqui — Lyric Video',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Vídeo com letras e imagens autorais.',
  },
  {
    id: 6,
    title: 'Gratovolte — Making Of',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Os bastidores da gravação do álbum.',
  },
  {
    id: 7,
    title: 'Avivar Acústica — Session',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Versão acústica de Avivar.',
  },
  {
    id: 8,
    title: 'Início Outono — Clipe',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Clipe oficial de Início Outono.',
  },
  {
    id: 9,
    title: 'Amanhã Novo Dia — Ao Vivo',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Registro ao vivo da turnê.',
  },
  {
    id: 10,
    title: 'Trinta Um — Visualizer',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Visualizer oficial do single.',
  },
  {
    id: 11,
    title: 'Broken Dreams — Acústico',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Versão acústica intimista.',
  },
  {
    id: 12,
    title: 'OHomemSó — Documentário',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Documentário sobre o projeto musical.',
  },
  {
    id: 13,
    title: 'Set Completo — Festival',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Set completo gravado em festival.',
  },
  {
    id: 14,
    title: 'Entrevista — Bastidores',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Entrevista e bastidores da turnê.',
  },
  {
    id: 15,
    title: 'Playlist Completa no YouTube',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Todos os vídeos em uma playlist.',
  },
];

export function VideographyContent() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);
  const featuredVideo = videos[0];
  const otherVideos = videos.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page header */}
          <div className="mb-12 md:mb-16">
            <span className="section-number hidden md:block">01</span>
            <span className="editorial-tag mb-4 inline-block">Vídeos</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mt-3">
              Videografia
            </h1>
            <p className="font-serif italic text-lg text-muted-foreground mt-3 max-w-2xl">
              Performances ao vivo, clipes, sessions e bastidores do OHomemSó.
            </p>
          </div>

          {/* Featured video — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <button
              onClick={() => setSelectedVideo(featuredVideo)}
              className="group relative w-full aspect-video overflow-hidden bg-foreground cursor-pointer"
            >
              <Image
                src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
                alt={featuredVideo.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C41E3A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
                <span className="editorial-tag mb-2 inline-block">Destaque</span>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-white mt-2">
                  {featuredVideo.title}
                </h2>
              </div>
            </button>
          </motion.div>

          {/* Other videos grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherVideos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group text-left"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#C41E3A] flex items-center justify-center">
                      <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 pb-3 border-b border-border group-hover:border-[#C41E3A] transition-colors">
                  <h3 className="font-serif text-base font-light text-foreground group-hover:text-[#C41E3A] transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1 line-clamp-1">
                    {video.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* YouTube embed modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
