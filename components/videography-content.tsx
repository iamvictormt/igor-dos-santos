"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Play, X } from "lucide-react"
import { useState } from "react"

const videos = [
  { id: 1, title: "Tamanho de um Rei", youtubeUrl: "https://youtu.be/RpEb39DPis8&list=OLAK5uy_n8LyWmM4O64ShLtHCiAIrKEO8QiqkNUrY&index=1" },
  { id: 2, title: "Silêncio Ensurdecedor", youtubeUrl: "https://youtu.be/GZ0DGvkg4us?si=-z3MiY824eoyNj_L" },
  { id: 3, title: "Voar", youtubeUrl: "https://youtu.be/YD1hsoXfhM0?si=l6HXWEhYCE3V3f39" },
  { id: 4, title: "Bem Vindo a Sua Vida", youtubeUrl: "https://youtu.be/VKGK59I-bps?si=xgvjsEV-GvBUabAQ" },
  { id: 5, title: "Auto Intitulada", youtubeUrl: "https://youtu.be/xMrRriRhO_U?si=EMD3VSevmsXZgpmo" },
  { id: 6, title: "Avivar (Acústica)", youtubeUrl: "https://youtu.be/ImYsxY7tbSM?si=jFMf_Us_pDE3SmyP" },
  { id: 7, title: "A.C.A.S.O", youtubeUrl: "https://youtu.be/4sZgljD4Oms?si=P6QClneLt3VOe2OJ" },
  { id: 8, title: "Grito Mudo", youtubeUrl: "https://youtu.be/1L54FO3z8-s?si=UFhcFaHCXovbB_db" },
  { id: 9, title: "O Herói Não Resolvido", youtubeUrl: "https://youtu.be/1cmROgqxchg?si=5iShmaS2yWaZy31z" },
  { id: 10, title: "Aonde Vai o Tempo?", youtubeUrl: "https://youtu.be/G4dZtnoxkLE?si=Dm4pWg0hbtV6j-Xx" },
  { id: 11, title: "Amanhã É um Novo Dia", youtubeUrl: "https://youtu.be/nrLCteUhKnk?si=q7e2Y5hBmRFC_-nL" },
  { id: 12, title: "Broken Dreams & Hopes - Visualizer Oficial", youtubeUrl: "https://youtu.be/pUOboWnkxgI?si=dqNay6O7IU09lhU1" },
  { id: 13, title: "Tudo o Que Eu Queria Te Dizer - Ao Vivo", youtubeUrl: "https://youtu.be/0AwFbg8XMxY?si=Gy_0TsUp0tnqcClN" },
  { id: 14, title: "Bem Vindo a Sua Vida - Ao Vivo", youtubeUrl: "https://youtu.be/BprfDyjdx60?si=g0Z-VQrQs2MouUg0" },
  { id: 15, title: "Novos Horizontes (Engenheiros do Hawaii) - Ao Vivo", youtubeUrl: "https://youtu.be/Hrj0w_zqOfc?si=WfOSIF62xucm7Een" },
  {
    id: 15,
    title: "O Herói Não Resolvido / De Costas para o Mar (Rodox) - Ao Vivo",
    youtubeUrl: "https://youtu.be/PKa34fCLOwA?si=en7F9dMM9WG4Xlsj",
  },
]

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/)
  return match ? match[1] : null
}

function getYouTubeThumbnail(url: string) {
  const videoId = getYouTubeId(url)
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg"
}

export function VideographyContent() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  return (
    <section className="bg-background pt-32">
      <div className="section-shell pb-24">
        <div className="grid gap-12 border-b border-border pb-14">
          <div>
            <p className="section-eyebrow">Videografia</p>
            <h1 className="section-heading mt-4">
              Imagem em som
            </h1>
            <p className="handwritten-note mt-5 text-4xl text-accent md:text-5xl">
              aperta o play e deixa passar
            </p>
          </div>
        </div>

        <div className="grid gap-5 py-12 md:grid-cols-2">
          {videos.map((video, index) => (
            <article
              key={video.id}
              className={`group overflow-hidden border border-border bg-card ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={getYouTubeThumbnail(video.youtubeUrl)}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/34 transition-colors group-hover:bg-black/48" />
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/26 text-white backdrop-blur transition-transform hover:scale-105"
                  aria-label={`Reproduzir ${video.title}`}
                >
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </button>
              </div>

              <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="meta-line">Vídeo {video.id.toString().padStart(2, "0")}</p>
                  <h2 className="mt-2 text-2xl font-medium leading-tight text-foreground">{video.title}</h2>
                </div>
                <div className="flex gap-2">
                  <Button className="h-10 bg-primary text-primary-foreground hover:bg-primary/88" onClick={() => setSelectedVideo(video)}>
                    <Play className="mr-2 h-4 w-4 fill-current" />
                    Reproduzir
                  </Button>
                  <Button variant="outline" className="h-10 bg-transparent" asChild>
                    <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/86 p-4">
            <div className="w-full max-w-5xl overflow-hidden bg-background shadow-2xl">
              <div className="flex items-center justify-between border-b border-border p-4">
                <h3 className="pr-4 text-lg font-medium text-foreground">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="flex h-10 w-10 items-center justify-center border border-border hover:bg-secondary"
                  aria-label="Fechar vídeo"
                >
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
  )
}
