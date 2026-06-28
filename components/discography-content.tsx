'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playTrack } from '@/components/player-bar';
import { Play, Disc3, ExternalLink, ChevronLeft, ChevronRight, X, Ticket } from 'lucide-react';

const albums: Album[] = [
  { id: 1, title: 'Bem Vindo a Sua Vida', year: '2018', type: 'EP', duration: '14:59', cover: '/bem-vindo-sua-vida-cover.jpg', producer: 'R. Mancini / G. Simão / M. Trovão', tracks: [
    { name: 'Bem Vindo a Sua Vida', duration: '3:44', audioUrl: '/audio-samples/Bem Vindo a Sua Vida.flac', spotify: 'https://open.spotify.com/track/5nL0QWI8lyNEgAs09SI25p', apple: 'https://music.apple.com/br/song/bem-vindo-a-sua-vida/1390862121', youtube: 'https://youtu.be/VKGK59I-bps' },
    { name: 'Auto Intitulada', duration: '3:38', audioUrl: '/audio-samples/Auto Intitulada.flac', spotify: '#', apple: '#', youtube: 'https://youtu.be/xMrRriRhO_U' },
  ]},
  { id: 2, title: 'Talvez Nunca Aqui', year: '2019', type: 'EP', duration: '14:00', cover: '/talvez-nunca-aqui-cover.jpg', producer: 'R. Mancini', tracks: [
    { name: 'Talvez Nunca Aqui', duration: '3:52', audioUrl: '/audio-samples/Talvez Nunca Aqui.flac' },
  ]},
  { id: 3, title: 'GratoVolte', year: '2019', type: 'EP', duration: '3:00', cover: '/gratovolte-cover.jpg', producer: 'R. Mancini', tracks: [
    { name: 'GratoVolte', duration: '3:00', audioUrl: '/audio-samples/GratoVolte.flac' },
  ]}, 
  { id: 4, title: 'Avivar (Acústica)', year: '2020', type: 'EP', duration: '3:12', cover: '/avivar-acustica-cover.jpg', producer: 'Igor Delfino', tracks: [
    { name: 'Avivar', duration: '3:12', audioUrl: '/audio-samples/Avivar.flac' },
  ]},
  { id: 5, title: 'Início Outono', year: '2020', type: 'Single', duration: '3:45', cover: '/inicio-outono-cover.jpg', producer: 'Igor Delfino', tracks: [
    { name: 'Início Outono', duration: '3:45', audioUrl: '/audio-samples/Inicio Outono.flac' },
  ]},
  { id: 6, title: 'Amanhã É um Novo Dia', year: '2021', type: 'Single', duration: '4:10', cover: '/amanha-novo-dia-cover.jpg', producer: 'R. Mancini', tracks: [
    { name: 'Amanhã É um Novo Dia', duration: '4:10', audioUrl: '/audio-samples/Amanha Novo Dia.flac' },
  ]},
  { id: 7, title: 'Trinta e Um', year: '2021', type: 'Single', duration: '4:00', cover: '/trinta-um-cover.jpg', producer: 'Igor Delfino', tracks: [
    { name: 'Trinta e Um', duration: '4:00', audioUrl: '/audio-samples/Trinta e Um.flac' },
  ]},
  { id: 8, title: 'Broken Dreams & Hopes', year: '2022', type: 'Single', duration: '4:30', cover: '/broken-dreams-cover.jpg', producer: 'Igor Delfino', tracks: [
    { name: 'Broken Dreams & Hopes', duration: '4:30', audioUrl: '/audio-samples/Broken Dreams.flac' },
  ]},
  { id: 9, title: 'Voar', year: '2022', type: 'Single', duration: '3:55', cover: '/voar-cover.jpg', producer: 'Igor Delfino', tracks: [
    { name: 'Voar', duration: '3:55', audioUrl: '/audio-samples/Voar.flac' },
  ]},
  { id: 10, title: 'Grito Mudo', year: '2023', type: 'Single', duration: '4:05', cover: '/grito-mudo-cover.jpeg', producer: 'Igor Delfino', tracks: [
    { name: 'Grito Mudo', duration: '4:05', audioUrl: '/audio-samples/Grito Mudo.flac' },
  ]},
  { id: 11, title: 'Tudo o Que Eu Queria Te Dizer', year: '2023', type: 'Single', duration: '3:48', cover: '/tudo-que-queria-cover.png', producer: 'Igor Delfino', tracks: [
    { name: 'Tudo o Que Eu Queria Te Dizar', duration: '3:48', audioUrl: '/audio-samples/Tudo Que Queria.flac' },
  ]},
  { id: 12, title: 'Tamanho de um Rei', year: '2024', type: 'Single', duration: '4:12', cover: '/tamanho-de-um-rei-cover.jpg', producer: 'Igor Delfino', tracks: [
    { name: 'Tamanho de um Rei', duration: '4:12', audioUrl: '/audio-samples/Tamanho de Um Rei.flac' },
  ]},
];

type Track = {
  name: string;
  duration: string;
  audioUrl: string;
  spotify?: string;
  apple?: string;
  youtube?: string;
};

type Album = {
  id: number;
  title: string;
  year: string;
  type: string;
  duration: string;
  cover: string;
  producer?: string;
  description?: string;
  tracks: Track[];
};

export function DiscographyContent() {
  const [open, setOpen] = useState<Album | null>(null);

  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-4">Discografia</p>
          <h1 className="font-handwriting text-6xl md:text-8xl text-amber-100 leading-[0.9] gold-glow">
            Meus
            <br />
            <span className="text-amber-300">Trabalhos</span>
          </h1>
        </div>

        {/* Albums grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {albums.map((album, i) => (
            <motion.article
              key={album.id}
              className="group bg-card rounded-2xl overflow-hidden ring-1 ring-white/5 hover:ring-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 cursor-pointer relative tilt-card"
              onClick={() => setOpen(album)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Vinyl disc behind */}
              <div className="absolute top-1/2 -right-14 -translate-y-1/2 w-36 h-36 rounded-full vinyl-rings opacity-30 group-hover:opacity-70 group-hover:translate-x-3 transition-all duration-700" />

              <div className="relative aspect-square overflow-hidden">
                <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-amber-300 text-black rounded-full p-4 shadow-lg shadow-amber-500/40">
                    <Disc3 className="w-7 h-7" />
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-handwriting text-2xl text-amber-100 group-hover:text-amber-300 transition-colors duration-300">{album.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.6rem] tracking-widest text-amber-200/50 uppercase">{album.type}</span>
                  <span className="text-amber-400/30">·</span>
                  <span className="font-mono text-[0.6rem] tracking-widest text-amber-200/50">{album.year}</span>
                </div>
                <p className="font-mono text-[0.65rem] text-amber-300/60 pt-1.5 group-hover:text-amber-300 transition-colors duration-300">
                  Clique para explorar →
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*  Jewel-case modal                                                  */}
      {/* ------------------------------------------------------------------ */}
      <AnimatePresence>
        {open && <AlbumCaseModal album={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Jewel-case modal (CD case-like)                                   */
/* ------------------------------------------------------------------ */
function AlbumCaseModal({ album, onClose }: { album: Album; onClose: () => void }) {
  const play = (i: number) => {
    const t = album.tracks[i];
    if (!t) return;
    playTrack({
      albumId: album.id,
      trackIndex: i,
      name: t.name,
      duration: t.duration,
      audioUrl: t.audioUrl,
      albumTitle: album.title,
      albumCover: album.cover,
      spotify: t.spotify,
      apple: t.apple,
      youtube: t.youtube,
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Case */}
      <motion.div
        className="relative bg-card rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-amber-500/20 ring-1 ring-amber-400/30"
        initial={{ y: 60, opacity: 0, scale: 0.94 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-card/95 backdrop-blur-xl px-6 md:px-8 py-4 border-b border-amber-400/10 flex items-center justify-between">
          <p className="font-mono text-[0.65rem] tracking-widest uppercase text-amber-400/80">
            {album.type} · {album.year} · {album.duration}
          </p>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-amber-200/70 hover:text-amber-200 transition-all duration-300 border border-white/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-0">
          {/* Left — cover + vinyl disc */}
          <div className="relative aspect-square bg-black flex items-center justify-center overflow-hidden">
            <img src={album.cover} alt={album.title} className="w-full h-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-amber-400/10" />
            {/* Vinyl disc behind */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-56 h-56 rounded-full vinyl-rings opacity-40 animate-spin-slower" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-handwriting text-2xl text-amber-100 gold-glow">{album.title}</p>
            </div>
          </div>

          {/* Right — info + tracklist + tech */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h2 className="font-handwriting text-4xl md:text-5xl text-amber-100 gold-glow leading-[0.95] mb-2">
                {album.title}
              </h2>
              {album.producer && (
                <p className="font-mono text-[0.65rem] tracking-widest uppercase text-amber-200/50">
                  Produção · {album.producer}
                </p>
              )}
            </div>

            {/* Tracklist */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-amber-400/80 mb-3">
                Faixas · {album.tracks.length} {album.tracks.length === 1 ? 'música' : 'músicas'}
              </p>
              <div className="space-y-1">
                {album.tracks.map((track, i) => (
                  <button
                    key={i}
                    onClick={() => play(i)}
                    className="w-full grid grid-cols-[30px_1fr_auto] items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 group hover:bg-amber-400/10"
                  >
                    <Play className="w-3.5 h-3.5 text-amber-100/50 group-hover:text-amber-300 transition-colors duration-300" />
                    <span className="font-light text-sm text-amber-100/80 group-hover:text-amber-200 truncate transition-colors duration-300">
                      {track.name}
                    </span>
                    <span className="font-mono text-xs text-amber-100/40">{track.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Streaming */}
            {album.tracks[0]?.spotify && album.tracks[0]?.spotify !== '#' && (
              <div className="pt-4 border-t border-amber-400/10 flex flex-wrap gap-2">
                {album.tracks[0]?.spotify !== '#' && (
                  <a href={album.tracks[0]?.spotify} target="_blank" rel="noopener noreferrer"                     className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300">
                    <ExternalLink className="w-3 h-3" /> Spotify
                  </a>
                )}
                {album.tracks[0]?.youtube && album.tracks[0]?.youtube !== '#' && (
                  <a href={album.tracks[0]?.youtube} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300">
                    <ExternalLink className="w-3 h-3" /> YouTube
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
