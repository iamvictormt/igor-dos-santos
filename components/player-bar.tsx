'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, X, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/*  Player global store — manages current track state                 */
/* ------------------------------------------------------------------ */
type Track = {
  albumId: number;
  trackIndex: number;
  name: string;
  duration: string;
  audioUrl: string;
  albumTitle: string;
  albumCover: string;
  spotify?: string;
  apple?: string;
  youtube?: string;
};

let globalState: {
  current: Track | null;
  isPlaying: boolean;
  progress: number;
  queue: Track[];
} = {
  current: null,
  isPlaying: false,
  progress: 0,
  queue: [],
};

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

export function playTrack(track: Track) {
  globalState = {
    current: track,
    isPlaying: true,
    progress: 0,
    queue: [],
  };
  notify();
}

export function togglePlayPause() {
  globalState.isPlaying = !globalState.isPlaying;
  notify();
}

export function playNext() { /* no-op for now */ }
export function playPrev() { /* no-op for now */ }
export function closePlayer() {
  globalState = { current: null, isPlaying: false, progress: 0, queue: [] };
  notify();
}

export function usePlayerStore() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const l = () => setTick((t) => t + 1);
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);
  return globalState;
}

/* ------------------------------------------------------------------ */
/*  Bar                                                               */
/* ------------------------------------------------------------------ */
export function PlayerBar() {
  const player = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (player.current?.audioUrl) {
      if (audioRef.current.src !== player.current.audioUrl) {
        audioRef.current.src = player.current.audioUrl;
      }
      if (player.isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [player.current, player.isPlaying]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      if (a.duration) {
        globalState.progress = (a.currentTime / a.duration) * 100;
        notify();
      }
    };
    const onEnded = () => {
      globalState.progress = 0;
      globalState.isPlaying = false;
      notify();
    };
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('ended', onEnded);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('ended', onEnded);
    };
  }, []);

  if (!player.current) return null;

  const t = player.current;

  return (
    <>
      <audio ref={audioRef} preload="none" crossOrigin="anonymous" />

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed bottom-[52px] md:bottom-[68px] left-0 right-0 z-[55] bg-card border-t border-amber-400/20 shadow-[0_-8px_40px_-10px_oklch(0.78_0.16_70_/_0.2)]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          >
            <div className="max-w-4xl mx-auto p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-black shrink-0 vinyl-spin ring-2 ring-amber-400/30 shadow-xl shadow-amber-500/20">
                  <img src={t.albumCover} alt="" className="absolute inset-2 rounded-full object-cover z-10 w-[calc(100%-1rem)] h-[calc(100%-1rem)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[0.6rem] tracking-widest uppercase text-amber-400/80 mb-1">
                    Tocando agora
                  </p>
                  <h3 className="font-handwriting text-2xl text-amber-100 gold-glow truncate">
                    {t.name}
                  </h3>
                  <p className="text-amber-100/40 text-sm truncate">
                    {t.albumTitle} · <span className="font-mono">{t.duration}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="font-mono text-[0.6rem] text-amber-100/40 tracking-widest uppercase">
                  Streaming:
                </span>
                {t.spotify && t.spotify !== '#' && (
                  <a
                    href={t.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3" /> Spotify
                  </a>
                )}
                {t.apple && t.apple !== '#' && (
                  <a
                    href={t.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3" /> Apple
                  </a>
                )}
                {t.youtube && t.youtube !== '#' && (
                  <a
                    href={t.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-400/30 text-amber-200 hover:bg-amber-400/10 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3" /> YouTube
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bar */}
      <motion.div
        className="fixed bottom-[60px] md:bottom-0 left-0 right-0 z-[58] bg-background/95 backdrop-blur-xl border-t border-amber-400/20 shadow-[0_-4px_24px_-8px_oklch(0_0_0_/_0.6)]"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {/* Progress bar at top of bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-amber-300 transition-[width] duration-200"
            style={{ width: `${player.progress}%` }}
          />
        </div>

        <div className="flex items-center gap-3 h-[52px] md:h-[68px] px-3 md:px-6 max-w-7xl mx-auto">
          {/* Cover + spinning vinyl when playing */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="relative shrink-0 w-9 h-9 md:w-11 md:h-11"
          >
            <div className={`absolute inset-0 rounded-full overflow-hidden ${player.isPlaying ? 'vinyl-spin' : ''}`}>
              <img src={t.albumCover} alt="" className="w-full h-full object-cover" />
            </div>
            <span className={`absolute inset-0 rounded-full border-2 ${
              player.isPlaying ? 'border-amber-400/70' : 'border-white/20'
            }`} />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-background" />
          </button>

          {/* Title */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex-1 min-w-0 text-left"
          >
            <p className="font-handwriting text-base md:text-lg text-amber-100 gold-glow truncate leading-tight">
              {t.name}
            </p>
            <p className="font-mono text-[0.6rem] text-amber-100/40 tracking-widest uppercase truncate">
              {t.albumTitle}
            </p>
          </button>

          {/* Controls */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <button
              className="hidden md:flex w-9 h-9 items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors duration-300"
              onClick={playPrev}
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-300 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 hover:bg-amber-200 transition-colors duration-300"
              onClick={togglePlayPause}
            >
              {player.isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-[1px]" />}
            </button>
            <button
              className="hidden md:flex w-9 h-9 items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors duration-300"
              onClick={playNext}
            >
              <SkipForward className="w-4 h-4" />
            </button>

            {/* Equalizer mini — visible only when playing */}
            <div className="flex items-end gap-[2px] h-5 ml-3">
              {player.isPlaying ? (
                <>
                  <span className="eq-bar h-full" style={{ animationDelay: '0s' }} />
                  <span className="eq-bar h-full" style={{ animationDelay: '0.18s' }} />
                  <span className="eq-bar h-full" style={{ animationDelay: '0.36s' }} />
                  <span className="eq-bar h-full" style={{ animationDelay: '0.12s' }} />
                </>
              ) : (
                <>
                  <span className="w-[3px] h-[3px] rounded-full bg-amber-400/40" />
                  <span className="w-[3px] h-[3px] rounded-full bg-amber-400/40" />
                  <span className="w-[3px] h-[3px] rounded-full bg-amber-400/40" />
                  <span className="w-[3px] h-[3px] rounded-full bg-amber-400/40" />
                </>
              )}
            </div>

            {/* Close */}
            <button
              onClick={() => { setExpanded(false); closePlayer(); }}
              className="ml-1 w-8 h-8 flex items-center justify-center text-amber-200/50 hover:text-amber-200 transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Expand toggle */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors duration-300"
            >
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
