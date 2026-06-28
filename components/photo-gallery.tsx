'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ImageLightbox } from './image-lightbox';
import { Camera, ChevronUp } from 'lucide-react';

export function PhotoGallery() {
  const photos = [
    { id: 1, src: '/tocando-preto-branco.jfif', alt: 'Igor Delfino em performance ao vivo', span: 'col-span-2 row-span-2' },
    { id: 2, src: '/segurando-instrumento.jpg', alt: 'Retrato artístico de Igor Delfino', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/show-preto-branco.jfif', alt: 'Bastidores do novo videoclipe', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/praticando-luzes.jpg', alt: 'Sessão acústica intimista', span: 'col-span-1 row-span-2' },
    { id: 5, src: '/tocando-colorido.jpeg', alt: 'Igor Delfino no estúdio', span: 'col-span-2 row-span-1' },
  ];

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="galeria" className="relative bg-black overflow-hidden">
      {/* Stage spotlight from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-amber-400/15 via-amber-400/5 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-3">Galeria</p>
            <h2 className="font-handwriting text-5xl md:text-7xl text-amber-100 leading-[0.9] gold-glow">
              Momentos
              <br />
              <span className="text-amber-300">Capturados</span>
            </h2>
          </div>
          <span className="hidden lg:flex items-center gap-2 text-amber-200/40">
            <Camera className="w-4 h-4" />
            <span className="font-mono text-[0.7rem] tracking-widest uppercase">{photos.length} fotos</span>
          </span>
        </div>

        {/* Stack layout — columns stacked with staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[820px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className={`lg:${photo.span} relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/3] lg:aspect-auto ring-1 ring-white/5 hover:ring-amber-400/40 transition-all duration-700`}
              onClick={() => { setIdx(i); setOpen(true); }}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                fill
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="font-handwriting text-lg text-amber-100 gold-glow translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={photos}
        isOpen={open}
        currentIndex={idx}
        onClose={() => setOpen(false)}
        onNext={() => setIdx((p) => (p + 1) % photos.length)}
        onPrevious={() => setIdx((p) => (p - 1 + photos.length) % photos.length)}
      />
    </section>
  );
}
