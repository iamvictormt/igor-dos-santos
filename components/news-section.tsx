'use client';

import { formatDatePtBr } from '@/lib/utils';
import { NewsItem } from '@/types/news';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((d: NewsItem[]) => setNews(d))
      .catch(() => {});
  }, []);

  return (
    <section id="novidades" className="py-24 md:py-32 px-6 md:px-10 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-4">
            Últimas
          </p>
          <h2 className="font-handwriting text-5xl md:text-7xl text-amber-100 leading-[0.9] gold-glow">
            Novidades
          </h2>
        </div>

        {news.length === 0 ? (
          <div className="bg-background border border-amber-400/20 rounded-2xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <Newspaper className="w-10 h-10 mx-auto mb-4 text-amber-300/50" />
              <h3 className="font-handwriting text-3xl text-amber-200 mb-2">Nenhuma novidade por agora</h3>
              <p className="font-light text-amber-100/50 text-sm">
                Quando algo novo acontecer, você encontra aqui.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-5">
            {news.map((item, i) => (
              <motion.article
                key={item.id ?? i}
                className="group bg-background p-7 rounded-2xl border border-border hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.65rem] tracking-widest uppercase px-3 py-1 border border-amber-400/30 rounded-full text-amber-300/80 bg-amber-400/5">
                    {item.category}
                  </span>
                  <time className="font-mono text-xs text-amber-100/40">{formatDatePtBr(item.date)}</time>
                </div>
                <h3 className="font-handwriting text-2xl md:text-3xl text-amber-100 group-hover:text-amber-300 transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="font-light text-amber-100/50 leading-relaxed">{item.excerpt}</p>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
