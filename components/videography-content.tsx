"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Caminho Novo - Clipe Oficial",
    thumbnail: "/music-video-thumbnail-black-and-white-aesthetic.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    description: "Primeiro clipe oficial apresentando a canção que marca o início da carreira solo.",
  },
  {
    id: 2,
    title: "Apresentação Acústica - Reflexões",
    thumbnail: "/acoustic-performance-video-thumbnail-minimalist.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    description: "Performance intimista em formato acústico da canção Reflexões.",
  },
  {
    id: 3,
    title: "Bastidores do Álbum",
    thumbnail: "/behind-the-scenes-music-studio-black-and-white.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    description: "Documentário sobre o processo criativo por trás do primeiro álbum.",
  },
  {
    id: 4,
    title: "Live Session - Novos Horizontes",
    thumbnail: "/live-music-session-video-thumbnail-elegant.jpg",
    youtubeUrl: "https://youtube.com/watch?v=example4",
    description: "Sessão ao vivo apresentando canções do segundo trabalho.",
  },
]

export function VideographyContent() {
  return (
    <section className="pt-32 pb-24 bg-white">
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
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-black ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-light tracking-wide text-foreground">{video.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-light tracking-wide bg-transparent"
                  onClick={() => window.open(video.youtubeUrl, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Assistir no YouTube
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
