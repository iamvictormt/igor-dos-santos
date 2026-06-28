"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "./image-lightbox";
import { Expand } from "lucide-react";

export function PhotoGallery() {
  const photos = [
    { id: 1, src: "/tocando-preto-branco.jfif", alt: "Igor Delfino em performance ao vivo", span: "lg:col-span-2 lg:row-span-2" },
    { id: 2, src: "/segurando-instrumento.jpg", alt: "Retrato artístico de Igor Delfino", span: "" },
    { id: 3, src: "/show-preto-branco.jfif", alt: "Show em preto e branco", span: "" },
    { id: 4, src: "/praticando-luzes.jpg", alt: "Sessão acústica intimista", span: "lg:row-span-2" },
    { id: 5, src: "/tocando-colorido.jpeg", alt: "Igor Delfino no estúdio", span: "lg:col-span-2" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="home-section">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="home-heading">
            <div className="paper-panel p-6 md:p-8">
              <p className="type-label mb-3 text-[10px] text-stone-700">Arquivo fotográfico</p>
              <h2 className="stamp-title text-4xl leading-none text-stone-950 md:text-6xl">Momentos capturados</h2>
            </div>
            <p className="home-note">
              Retratos, palco, ensaio e bastidor com grão, sombra e a sensação de foto encontrada numa gaveta de cabos.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[210px]">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                className={`photo-print group relative overflow-hidden text-left transition duration-300 hover:-translate-y-1 ${photo.span}`}
                onClick={() => openLightbox(index)}
                aria-label={`Abrir foto: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  blurDataURL="/placeholder-blur.jpg"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/35" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-[#efe0b8]/90 text-stone-950 opacity-0 shadow-lg transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={photos}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % photos.length)}
        onPrevious={() => setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length)}
      />
    </>
  );
}
