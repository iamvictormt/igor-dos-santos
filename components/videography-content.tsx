'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, X } from 'lucide-react';
import { getYouTubeId, videos, type Video } from '@/lib/videography';

export function VideographyContent() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Keep the currently private clip marked while the first live status check runs.
  const [privateVideoIds, setPrivateVideoIds] = useState<Set<string>>(() => new Set(['ZyLjXfduHEQ']));

  useEffect(() => {
    let isActive = true;

    const refreshVideoStatuses = async () => {
      try {
        const response = await fetch('/api/youtube-status', { cache: 'no-store' });
        if (!response.ok) throw new Error('Não foi possível consultar o status dos vídeos.');

        const statuses = (await response.json()) as Record<string, 'private' | 'available' | 'unknown'>;
        if (!isActive) return;

        setPrivateVideoIds((currentIds) => {
          const nextIds = new Set(currentIds);

          for (const [videoId, status] of Object.entries(statuses)) {
            if (status === 'private') nextIds.add(videoId);
            if (status === 'available') nextIds.delete(videoId);
          }

          return nextIds;
        });
      } catch (error) {
        console.error('Erro ao atualizar disponibilidade dos vídeos:', error);
      }
    };

    refreshVideoStatuses();
    const intervalId = window.setInterval(refreshVideoStatuses, 60_000);

    return () => {
      isActive = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/placeholder.svg';
  };

  const handlePlayVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Videografia</p>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Meus
              <br />
              <span className="font-normal">Vídeos</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Acompanhe os clipes, performances e bastidores através dos vídeos oficiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => {
            const videoId = getYouTubeId(video.youtubeUrl);
            const isUpcoming = videoId !== null && privateVideoIds.has(videoId);

            return (
              <Card
                key={video.id}
                className="group overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
              >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={isUpcoming ? '/indisponivel.webp' : getYouTubeThumbnail(video.youtubeUrl)}
                  alt={`${video.title}${isUpcoming ? ' — estreia em breve' : ''}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {isUpcoming ? (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <span className="bg-white px-5 py-2 text-sm font-medium text-black">Estreia em breve</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayVideo(video)}
                      className="w-16 h-16 border border-white rounded-full flex items-center justify-center cursor-pointer"
                      aria-label={`Reproduzir ${video.title}`}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-light tracking-wide text-foreground md:h-[6vh] h-auto">{video.title}</h3>
                {isUpcoming ? (
                  <Button variant="default" size="sm" className="w-full font-light tracking-wide" disabled>
                    Estreia em breve
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 font-light tracking-wide"
                      onClick={() => handlePlayVideo(video)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Reproduzir
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-light tracking-wide bg-transparent"
                      onClick={() => window.open(video.youtubeUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      YouTube
                    </Button>
                  </div>
                )}
              </div>
              </Card>
            );
          })}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
              {/* Header do modal */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-light tracking-wide text-foreground">{selectedVideo.title}</h3>
                <button
                  onClick={handleClosePlayer}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Player de vídeo */}
              <div className="aspect-video bg-black">
                {getYouTubeId(selectedVideo.youtubeUrl) && (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.youtubeUrl)}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
