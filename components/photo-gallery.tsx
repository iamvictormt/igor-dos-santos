'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageLightbox } from './image-lightbox';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: '/tocando-preto-branco.jfif',
      alt: 'Igor Delfino em performance ao vivo',
    },
    {
      id: 2,
      src: '/segurando-instrumento.jpg',
      alt: 'Retrato artístico de Igor Delfino',
    },
    {
      id: 3,
      src: '/show-preto-branco.jfif',
      alt: 'Bastidores do novo videoclipe',
    },
    {
      id: 4,
      src: '/praticando-luzes.jpg',
      alt: 'Sessão acústica intimista',
    },
    {
      id: 5,
      src: '/tocando-colorido.jpeg',
      alt: 'Igor Delfino no estúdio',
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    const scrollAmount = direction === 'right' ? cardWidth : -cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-20 md:py-48 px-6 bg-foreground text-background relative">
        {/* Hidden scrollbar styles */}
        <style jsx>{`
          .gallery-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .gallery-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          {/* Editorial Section Header */}
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="section-number font-serif text-6xl font-extralight text-[#C41E3A]/30">
                03
              </span>
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C41E3A] border border-[#C41E3A]/40 px-3 py-1 rounded-full">
                Galeria
              </span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-light leading-[0.9] tracking-tight text-background">
              Momentos
              <br />
              <span className="font-normal italic">Capturados</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollByCard('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300"
            aria-label="Previous photos"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={() => scrollByCard('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300"
            aria-label="Next photos"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="gallery-scroll flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 px-6 lg:px-12"
          >
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] snap-start relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
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

                {/* Red gradient overlay at bottom on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C41E3A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Expand icon on hover - bottom right */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/80 backdrop-blur-sm text-foreground rounded-full p-2 shadow-lg flex items-center justify-center">
                    <Maximize2 className="h-5 w-5" />
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
