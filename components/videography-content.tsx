'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Voar - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/YD1hsoXfhM0?si=l6HXWEhYCE3V3f39',
  },
  {
    id: 2,
    title: 'Bem Vindo a Sua Vida - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/VKGK59I-bps?si=xgvjsEV-GvBUabAQ',
  },
  {
    id: 3,
    title: 'Auto Intitulada - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/xMrRriRhO_U?si=EMD3VSevmsXZgpmo',
  },
  {
    id: 4,
    title: 'Avivar (Acústica) - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/ImYsxY7tbSM?si=jFMf_Us_pDE3SmyP',
  },
  {
    id: 5,
    title: 'A.C.A.S.O - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/4sZgljD4Oms?si=P6QClneLt3VOe2OJ',
  },
  {
    id: 6,
    title: 'Grito Mudo - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/1L54FO3z8-s?si=UFhcFaHCXovbB_db',
  },
  {
    id: 7,
    title: 'O Herói Não Resolvido - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/1cmROgqxchg?si=5iShmaS2yWaZy31z',
  },
  {
    id: 8,
    title: 'Aonde Vai o Tempo? - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/G4dZtnoxkLE?si=Dm4pWg0hbtV6j-Xx',
  },
  {
    id: 9,
    title: 'Amanhã É um Novo Dia - Videoclipe Oficial',
    youtubeUrl: 'https://youtu.be/nrLCteUhKnk?si=q7e2Y5hBmRFC_-nL',
  },
  {
    id: 10,
    title: 'Broken Dreams & Hopes - Visualizer Oficial',
    youtubeUrl: 'https://youtu.be/pUOboWnkxgI?si=dqNay6O7IU09lhU1',
  },
  {
    id: 11,
    title: 'Tudo o Que Eu Queria Te Dizer - Ao Vivo',
    youtubeUrl: 'https://youtu.be/0AwFbg8XMxY?si=Gy_0TsUp0tnqcClN',
  },
  {
    id: 12,
    title: 'Bem Vindo a Sua Vida - Ao Vivo',
    youtubeUrl: 'https://youtu.be/BprfDyjdx60?si=g0Z-VQrQs2MouUg0',
  },
  {
    id: 13,
    title: 'Novos Horizontes (Engenheiros do Hawaii) - Ao Vivo',
    youtubeUrl: 'https://youtu.be/Hrj0w_zqOfc?si=WfOSIF62xucm7Een',
  },
  {
    id: 14,
    title: 'O Herói Não Resolvido / De Costas para o Mar (Rodox) - Ao Vivo',
    youtubeUrl: 'https://youtu.be/PKa34fCLOwA?si=en7F9dMM9WG4Xlsj',
  },
];

export function VideographyContent() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/placeholder.svg';
  };

  const handlePlayVideo = (video: (typeof videos)[0]) => {
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
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={getYouTubeThumbnail(video.youtubeUrl) || '/placeholder.svg'}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayVideo(video)}
                    className="w-16 h-16 border border-white rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-light tracking-wide text-foreground md:h-[6vh] h-auto">{video.title}</h3>
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
              </div>
            </Card>
          ))}
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
