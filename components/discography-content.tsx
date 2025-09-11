"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play } from "lucide-react"

const albums = [
  {
    id: 1,
    title: "Primeiro Álbum",
    year: "2023",
    cover: "/minimalist-album-cover-design-black-and-white.jpg",
    description:
      "Álbum de estreia que marca o início da jornada musical de Igor dos Santos, apresentando composições autorais que exploram temas universais com uma abordagem contemporânea.",
    tracklist: ["Abertura", "Caminho Novo", "Reflexões", "Tempo Perdido", "Esperança", "Final"],
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    title: "Segundo Trabalho",
    year: "2024",
    cover: "/elegant-minimalist-album-artwork-black-white-geome.jpg",
    description:
      "Segundo trabalho que consolida a identidade artística do músico, trazendo uma sonoridade mais madura e experimental.",
    tracklist: ["Introdução", "Novos Horizontes", "Melodia Urbana", "Silêncio", "Renascimento", "Despedida"],
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
]

export function DiscographyContent() {
  const [selectedAlbum, setSelectedAlbum] = useState<(typeof albums)[0] | null>(null)

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Discografia</p>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Meus
              <br />
              <span className="font-normal">Trabalhos</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Uma jornada sonora através de composições que exploram as nuances da experiência humana, traduzidas em
            melodias e harmonias contemporâneas.
          </p>
        </div>

        {/* Professional Album Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {albums.map((album, index) => (
            <div key={album.id} className="group cursor-pointer" onClick={() => setSelectedAlbum(album)}>
              <div className="relative mb-8">
                <div className="aspect-square overflow-hidden bg-white shadow-lg">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-light tracking-wide text-black group-hover:text-gray-600 transition-colors duration-300">
                    {album.title}
                  </h3>
                  <span className="text-sm font-mono text-gray-500">{album.year}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{album.description}</p>
                <div className="text-xs font-mono tracking-[0.1em] uppercase text-gray-400 group-hover:text-black transition-colors duration-300">
                  Clique para explorar →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        <Dialog open={!!selectedAlbum} onOpenChange={() => setSelectedAlbum(null)}>
          <DialogContent className="max-w-6xl w-[95vw] md:w-[90vw] lg:w-[80vw] xl:max-w-6xl bg-white border-0 shadow-2xl">
            {selectedAlbum && (
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-4 md:p-8">
                <div>
                  <img
                    src={selectedAlbum.cover || "/placeholder.svg"}
                    alt={selectedAlbum.title}
                    className="w-full aspect-square object-cover shadow-lg"
                  />
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-2">{selectedAlbum.title}</h2>
                    <p className="text-gray-500 font-mono text-sm">{selectedAlbum.year}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-4">Sobre o Álbum</h4>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{selectedAlbum.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-4">Faixas</h4>
                    <div className="space-y-2 md:space-y-3 max-h-48 overflow-y-auto">
                      {selectedAlbum.tracklist.map((track, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-700 hover:text-black transition-colors duration-200"
                        >
                          <span className="w-8 text-xs font-mono text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {track}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-4">Plataformas</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs font-light tracking-wide bg-transparent hover:bg-black hover:text-white transition-all duration-300"
                      >
                        Spotify
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs font-light tracking-wide bg-transparent hover:bg-black hover:text-white transition-all duration-300"
                      >
                        Apple Music
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs font-light tracking-wide bg-transparent hover:bg-black hover:text-white transition-all duration-300"
                      >
                        YouTube Music
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
