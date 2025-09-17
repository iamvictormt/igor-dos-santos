'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { ImageLightbox } from './image-lightbox';
import { Expand, Mouse } from 'lucide-react';

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: '/tocando-preto-branco.jfif',
      alt: 'Igor Delfino em performance ao vivo',
      span: 'col-span-2 row-span-2',
    },
    {
      id: 2,
      src: '/segurando-instrumento.jpg',
      alt: 'Retrato artístico de Igor Delfino',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      src: '/show-preto-branco.jfif',
      alt: 'Bastidores do novo videoclipe',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 4,
      src: '/praticando-luzes.jpg',
      alt: 'Sessão acústica intimista',
      span: 'col-span-1 row-span-2',
    },
    {
      id: 5,
      src: '/tocando-colorido.jpeg',
      alt: 'Igor Delfino no estúdio',
      span: 'col-span-2 row-span-1',
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase mb-4">Galeria</p>
              <h2 className="text-5xl lg:text-6xl font-light text-white leading-[0.9] tracking-tight">
                Momentos
                <br />
                <span className="font-normal">Capturados</span>
              </h2>
            </div>
            {/* <Link href="/biografia">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-base font-medium bg-transparent"
              >
                Ver Mais Fotos
              </Button>
            </Link> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[920px]">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`lg:${photo.span} relative overflow-hidden group cursor-pointer aspect-[4/3] lg:aspect-auto`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  blurDataURL="/placeholder-blur.jpg"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* camada escura no hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* ícone expand */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/80 text-black rounded-full p-2 shadow-lg">
                    <Expand className="h-5 w-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={photos}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
}
