"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, X } from "lucide-react";

const videos = [
  { id: 1, title: "Silêncio Ensurdecedor", youtubeUrl: "https://youtu.be/GZ0DGvkg4us?si=-z3MiY824eoyNj_L" },
  { id: 2, title: "Voar", youtubeUrl: "https://youtu.be/YD1hsoXfhM0?si=l6HXWEhYCE3V3f39" },
  { id: 3, title: "Bem Vindo a Sua Vida", youtubeUrl: "https://youtu.be/VKGK59I-bps?si=xgvjsEV-GvBUabAQ" },
  { id: 4, title: "Auto Intitulada", youtubeUrl: "https://youtu.be/xMrRriRhO_U?si=EMD3VSevmsXZgpmo" },
  { id: 5, title: "Avivar (Acústica)", youtubeUrl: "https://youtu.be/ImYsxY7tbSM?si=jFMf_Us_pDE3SmyP" },
  { id: 6, title: "A.C.A.S.O", youtubeUrl: "https://youtu.be/4sZgljD4Oms?si=P6QClneLt3VOe2OJ" },
  { id: 7, title: "Grito Mudo", youtubeUrl: "https://youtu.be/1L54FO3z8-s?si=UFhcFaHCXovbB_db" },
  { id: 8, title: "O Herói Não Resolvido", youtubeUrl: "https://youtu.be/1cmROgqxchg?si=5iShmaS2yWaZy31z" },
  { id: 9, title: "Aonde Vai o Tempo?", youtubeUrl: "https://youtu.be/G4dZtnoxkLE?si=Dm4pWg0hbtV6j-Xx" },
  { id: 10, title: "Amanhã É um Novo Dia", youtubeUrl: "https://youtu.be/nrLCteUhKnk?si=q7e2Y5hBmRFC_-nL" },
  { id: 11, title: "Broken Dreams & Hopes - Visualizer Oficial", youtubeUrl: "https://youtu.be/pUOboWnkxgI?si=dqNay6O7IU09lhU1" },
  { id: 12, title: "Tudo o Que Eu Queria Te Dizer - Ao Vivo", youtubeUrl: "https://youtu.be/0AwFbg8XMxY?si=Gy_0TsUp0tnqcClN" },
  { id: 13, title: "Bem Vindo a Sua Vida - Ao Vivo", youtubeUrl: "https://youtu.be/BprfDyjdx60?si=g0Z-VQrQs2MouUg0" },
  { id: 14, title: "Novos Horizontes (Engenheiros do Hawaii) - Ao Vivo", youtubeUrl: "https://youtu.be/Hrj0w_zqOfc?si=WfOSIF62xucm7Een" },
  { id: 15, title: "O Herói Não Resolvido / De Costas para o Mar (Rodox) - Ao Vivo", youtubeUrl: "https://youtu.be/PKa34fCLOwA?si=en7F9dMM9WG4Xlsj" },
];

export function VideographyContent() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg";
  };

  return (
    <section className="studio-wall min-h-screen pt-32 pb-24">
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <div className="paper-panel mb-16 max-w-3xl rotate-[-1deg] p-8">
          <p className="type-label mb-4 text-[10px] text-stone-700">Videografia</p>
          <h1 className="stamp-title text-5xl leading-[0.9] text-stone-950 lg:text-6xl">
            Meus
            <br />
            vídeos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
            Clipes, performances e bastidores em formato de arquivo visual.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <article key={video.id} className={`paper-panel group p-4 ${index % 2 ? "rotate-[0.5deg]" : "rotate-[-0.5deg]"}`}>
              <div className="relative aspect-video overflow-hidden border border-stone-800/30 bg-stone-950">
                <img src={getYouTubeThumbnail(video.youtubeUrl)} alt={video.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <button onClick={() => setSelectedVideo(video)} className="grid h-16 w-16 place-items-center rounded-full border border-[#f4dfb4] bg-black/40 text-[#f4dfb4]">
                    <Play className="ml-1 h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="stamp-title text-2xl leading-none text-stone-950">{video.title}</h3>
                <div className="flex gap-2">
                  <Button size="sm" className="ink-button rounded-none type-label text-[10px]" onClick={() => setSelectedVideo(video)}>
                    <Play className="mr-2 h-3 w-3" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-none border-stone-800 bg-transparent type-label text-[10px]" onClick={() => window.open(video.youtubeUrl, "_blank")}>
                    <ExternalLink className="mr-2 h-3 w-3" />
                    YouTube
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
            <div className="metal-sign flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden">
              <div className="flex items-center justify-between border-b border-stone-900/30 p-4">
                <h3 className="stamp-title text-2xl leading-none">{selectedVideo.title}</h3>
                <button onClick={() => setSelectedVideo(null)} className="grid h-9 w-9 place-items-center border border-stone-900/40">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-video bg-black">
                {getYouTubeId(selectedVideo.youtubeUrl) && (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.youtubeUrl)}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    className="h-full w-full"
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
