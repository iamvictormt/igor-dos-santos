'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const streamingPlatforms = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/0homems0',
    color: '#1DB954',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@igordossantos',
    color: '#FF0000',
  },
  {
    name: 'Deezer',
    href: 'https://deezer.com/artist/ohomems0',
    color: '#A238FF',
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/artist/ohomems0',
    color: '#FA2D55',
  },
];

export function StreamingBlock() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="section-number hidden md:block">05</span>
          <span className="editorial-tag mb-4 inline-block">Ouça Agora</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Disponível nas <span className="italic">plataformas</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#C41E3A] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {streamingPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center p-6 md:p-8 border border-border hover:border-[#C41E3A] transition-all duration-300 bg-card"
            >
              <span
                className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-[#C41E3A] transition-colors"
              >
                {platform.name}
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground mt-2 flex items-center gap-1">
                Ouvir <ExternalLink className="h-3 w-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
