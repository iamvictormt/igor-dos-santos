'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Canção Principal - Videoclipe Oficial',
    thumbnail: '/placeholder-i2mzn.png',
    youtubeUrl: 'https://youtube.com/watch?v=example1',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Apresentação Acústica - Estúdio',
    thumbnail: '/placeholder-d6gui.png',
    youtubeUrl: 'https://youtube.com/watch?v=example2',
    duration: '4:12',
  },
  {
    id: 3,
    title: 'Show ao Vivo - Teatro Municipal',
    thumbnail: '/placeholder-4h12y.png',
    youtubeUrl: 'https://youtube.com/watch?v=example3',
    duration: '5:30',
  },
  {
    id: 4,
    title: 'Making Of - Bastidores do Álbum',
    thumbnail: '/placeholder-kgs0r.png',
    youtubeUrl: 'https://youtube.com/watch?v=example4',
    duration: '8:15',
  },
  {
    id: 5,
    title: 'Entrevista - Processo Criativo',
    thumbnail: '/placeholder-yf3q6.png',
    youtubeUrl: 'https://youtube.com/watch?v=example5',
    duration: '12:30',
  },
  {
    id: 6,
    title: 'Colaboração Especial',
    thumbnail: '/placeholder-bauty.png',
    youtubeUrl: 'https://youtube.com/watch?v=example6',
    duration: '4:45',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function VideographySection() {
  return (
    <section id="videografia" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Videografia
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {videos.map((video) => (
            <motion.div key={video.id} variants={itemVariants}>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={video.thumbnail || '/placeholder.svg'}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0 flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Play className="text-white h-12 w-12" />
                      </motion.div>
                    </motion.div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </motion.div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-foreground text-sm leading-tight">{video.title}</h3>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                        <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Assistir no YouTube
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
