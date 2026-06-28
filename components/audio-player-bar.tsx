'use client';

import { Play, Pause, X, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';

export function AudioPlayerBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [trackInfo, setTrackInfo] = useState({ title: '', album: '', src: '', cover: '' });
  const [playKey, setPlayKey] = useState(0);

  // Listen for custom events from discography player
  useEffect(() => {
    const handlePlayTrack = (e: CustomEvent) => {
      const { title, album, src, cover } = e.detail;
      setTrackInfo({ title, album, src, cover });
      setIsVisible(true);
      setPlayKey(k => k + 1);
      setIsPlaying(true);
    };

    const handleStopTrack = () => {
      setIsPlaying(false);
      setIsVisible(false);
    };

    window.addEventListener('play-track' as string, handlePlayTrack as EventListener);
    window.addEventListener('stop-track' as string, handleStopTrack as EventListener);

    return () => {
      window.removeEventListener('play-track' as string, handlePlayTrack as EventListener);
      window.removeEventListener('stop-track' as string, handleStopTrack as EventListener);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !trackInfo.src) return;

    if (isPlaying) {
      if (audio.src !== trackInfo.src) {
        audio.src = trackInfo.src;
        audio.load();
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, trackInfo.src, playKey]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleClose = useCallback(() => {
    setIsPlaying(false);
    setIsVisible(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  }, [duration]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111111] border-t border-[#C41E3A]/30">
      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Progress bar */}
      <div
        className="h-1 bg-[#C41E3A]/20 cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-[#C41E3A] transition-all duration-200"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>

      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
        {/* Track info */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {trackInfo.cover && (
            <div className="w-10 h-10 flex-shrink-0 bg-muted">
              <img src={trackInfo.cover} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="min-w-0">
            <p className="font-serif text-sm text-[#F8F6F1] truncate">{trackInfo.title}</p>
            <p className="font-sans text-xs text-[#F8F6F1]/50 truncate">{trackInfo.album}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mx-4">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-[#C41E3A] flex items-center justify-center hover:bg-[#A01830] transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white ml-0.5" />
            )}
          </button>
        </div>

        {/* Time + volume + close */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F8F6F1]/50 hidden md:block">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <button onClick={toggleMute} className="text-[#F8F6F1]/50 hover:text-[#F8F6F1] transition-colors">
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button onClick={handleClose} className="text-[#F8F6F1]/50 hover:text-[#C41E3A] transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
