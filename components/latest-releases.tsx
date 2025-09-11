"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function LatestReleases() {
  const releases = [
    {
      id: 1,
      title: "Reflexões",
      type: "Álbum",
      year: "2024",
      image: "/minimalist-album-cover-design-black-and-white.jpg",
      description: "Uma jornada introspectiva através de melodias contemplativas e letras profundas.",
    },
    {
      id: 2,
      title: "Caminho",
      type: "Single",
      year: "2024",
      image: "/elegant-minimalist-album-artwork-black-white-geome.jpg",
      description: "Nova canção que explora temas de autodescoberta e crescimento pessoal.",
    },
  ]

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Lançamentos</p>
                <h2 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
                  Novos
                  <br />
                  <span className="font-normal">Trabalhos</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Explore os mais recentes lançamentos de Igor dos Santos, cada obra carregada de emoção e autenticidade.
              </p>
              <Link href="/discografia">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-6 text-base font-medium bg-transparent"
                >
                  Ver Discografia Completa
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8">
              {releases.map((release, index) => (
                <div
                  key={release.id}
                  className="group flex gap-8 p-8 border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 relative overflow-hidden">
                      <Image
                        src={release.image || "/placeholder.svg"}
                        alt={release.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-light text-black">{release.title}</h3>
                      <span className="text-sm text-gray-500 font-medium">
                        {release.type} • {release.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{release.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
