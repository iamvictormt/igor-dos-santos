'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { ImageLightbox } from './image-lightbox';

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: '/elegant-black-and-white-portrait-of-musician-with-.jpg',
      alt: 'Igor dos Santos em performance ao vivo',
      span: 'col-span-2 row-span-2',
    },
    {
      id: 2,
      src: '/professional-black-and-white-portrait-of-brazilian.jpg',
      alt: 'Retrato artístico de Igor dos Santos',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      src: '/music-video-thumbnail-black-and-white-aesthetic.jpg',
      alt: 'Bastidores do novo videoclipe',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 4,
      src: '/acoustic-performance-video-thumbnail-minimalist.jpg',
      alt: 'Sessão acústica intimista',
      span: 'col-span-1 row-span-2',
    },
    {
      id: 5,
      src: '/musician-performing-on-stage-black-and-white.jpg',
      alt: 'Igor dos Santos no estúdio',
      span: 'col-span-1 row-span-1',
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 lg:h-[600px]">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`lg:${photo.span} col-span-1 row-span-1 relative overflow-hidden group cursor-pointer h-64 lg:h-auto`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
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
