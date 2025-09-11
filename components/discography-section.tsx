"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Play } from "lucide-react"

const albums = [
  {
    id: 1,
    title: "Primeiro Álbum",
    year: "2020",
    cover: "/album-cover-minimalist-black-and-white-music.jpg",
    description: "Álbum de estreia que marca o início da carreira solo de Igor dos Santos.",
    tracklist: ["Canção de Abertura", "Caminho Novo", "Reflexões", "Tempo Perdido", "Última Palavra"],
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    title: "Segundo Trabalho",
    year: "2022",
    cover: "/placeholder-s3nis.png",
    description: "Segundo álbum explorando sonoridades mais maduras e experimentais.",
    tracklist: ["Novo Começo", "Estrada Longa", "Memórias", "Presente", "Futuro Incerto", "Final Feliz"],
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
  {
    id: 3,
    title: "EP Acústico",
    year: "2023",
    cover: "/placeholder-d65lk.png",
    description: "EP intimista com versões acústicas e inéditas.",
    tracklist: ["Versão Acústica 1", "Versão Acústica 2", "Inédita", "Instrumental"],
    streamingLinks: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
]

export function DiscographySection() {
  const [selectedAlbum, setSelectedAlbum] = useState<(typeof albums)[0] | null>(null)

  return (
    <section id="discografia" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Discografia</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Card
              key={album.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedAlbum(album)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-12 w-12" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{album.title}</h3>
                  <p className="text-muted-foreground">{album.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Album Details Modal */}
        <Dialog open={!!selectedAlbum} onOpenChange={() => setSelectedAlbum(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedAlbum?.title} ({selectedAlbum?.year})
              </DialogTitle>
            </DialogHeader>

            {selectedAlbum && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedAlbum.cover || "/placeholder.svg"}
                    alt={selectedAlbum.title}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{selectedAlbum.description}</p>

                  <div>
                    <h4 className="font-bold mb-2">Tracklist:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      {selectedAlbum.tracklist.map((track, index) => (
                        <li key={index}>{track}</li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Ouça em:</h4>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={selectedAlbum.streamingLinks.spotify} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Spotify
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={selectedAlbum.streamingLinks.apple} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Apple Music
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={selectedAlbum.streamingLinks.youtube} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          YouTube
                        </a>
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
