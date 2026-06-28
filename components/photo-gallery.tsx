"use client"

import { ImageLightbox } from "@/components/image-lightbox"
import { motion } from "framer-motion"
import { Expand } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const photos = [
  {
    id: 1,
    src: "/tocando-preto-branco.jfif",
    alt: "Igor Delfino em performance ao vivo",
    span: "lg:col-span-2 lg:row-span-2",
    caption: "palco",
  },
  {
    id: 2,
    src: "/segurando-instrumento.jpg",
    alt: "Retrato artístico de Igor Delfino segurando instrumento",
    span: "lg:col-span-1 lg:row-span-1",
    caption: "retrato",
  },
  {
    id: 3,
    src: "/show-preto-branco.jfif",
    alt: "Registro em preto e branco de show",
    span: "lg:col-span-1 lg:row-span-1",
    caption: "ao vivo",
  },
  {
    id: 4,
    src: "/praticando-luzes.jpg",
    alt: "Sessão de prática com luzes de estúdio",
    span: "lg:col-span-1 lg:row-span-1",
    caption: "ensaio",
  },
  {
    id: 5,
    src: "/tocando-colorido.jpeg",
    alt: "Igor Delfino tocando em registro colorido",
    span: "lg:col-span-2 lg:row-span-1",
    caption: "registro",
  },
]

export function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <>
      <section className="section-pad stage-panel overflow-hidden">
        <div className="section-shell">
          <div className="mb-12 grid gap-6">
            <div>
              <p className="section-eyebrow text-white/52">Galeria</p>
              <h2 className="section-heading mt-4 text-white">
                Arquivo visual
              </h2>
              <p className="handwritten-note mt-5 text-4xl text-white/62 md:text-5xl">
                luzes, ruídos e memória
              </p>
            </div>
          </div>

          <div className="grid auto-rows-[16rem] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[20rem]">
            {photos.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                className={`${photo.span} group relative overflow-hidden bg-white/8 text-left`}
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                aria-label={`Abrir imagem: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/18 transition-colors duration-500 group-hover:bg-black/38" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="font-mono text-[0.68rem] uppercase text-white/72">{photo.caption}</span>
                  <span className="flex h-9 w-9 items-center justify-center border border-white/28 bg-black/22 text-white backdrop-blur">
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={photos}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  )
}
