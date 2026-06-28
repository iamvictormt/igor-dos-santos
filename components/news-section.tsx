'use client';

import { formatDatePtBr } from '@/lib/utils';
import { NewsItem } from '@/types/news';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      date: '15 Jan 2024',
      title: 'EM BREVE',
      excerpt: 'Em 2026, aguardem..',
      category: 'Turnê',
    },
    {
      id: 2,
      date: '15 Jan 2024',
      title: 'EM BREVE',
      excerpt: 'Em 2026, aguardem..',
      category: 'Turnê',
    },
    {
      id: 3,
      date: '15 Jan 2024',
      title: 'EM BREVE',
      excerpt: 'Em 2026, aguardem..',
      category: 'Turnê',
    },
  ]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error('Erro ao buscar notícias');
        const data: NewsItem[] = await res.json();
        if(data)
          setNews(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchNews();
  }, []);

  const hasMultipleItems = news.length >= 3;
  const featureItem = hasMultipleItems ? news[0] : null;
  const remainingItems = hasMultipleItems ? news.slice(1) : news;

  return (
    <section className="py-24 md:py-28 px-6 bg-[#0D0D0D] text-[#F8F6F1] dark:bg-[#0D0D0D] dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-number font-serif text-6xl font-extralight text-[#C41E3A]/30">02</span>
            <span className="editorial-tag bg-[#C41E3A] text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1">
              Notícias
            </span>
          </div>
          <h2 className="font-serif text-4xl font-light text-white tracking-tight">
            Últimas Notícias
          </h2>
        </div>

        {/* Editorial Cards Grid */}
        {news.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center">
            <div className="w-16 h-[2px] bg-[#C41E3A] mb-8"></div>
            <p className="font-serif italic text-white/50 text-lg text-center">
              Nenhuma notícia disponível no momento.
            </p>
          </div>
        ) : (
          <>
            {/* Feature Card — full-width horizontal layout */}
            {featureItem && (
              <motion.article
                key={featureItem.id}
                className="group flex flex-col md:flex-row bg-white/5 border-b border-white/10 hover:border-b-[#C41E3A] transition-all duration-500 mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Left side — image placeholder */}
                <div className="md:w-1/2 aspect-video bg-muted flex items-center justify-center">
                  <span className="font-serif text-4xl font-light text-white/20 tracking-widest">
                    OH
                  </span>
                </div>

                {/* Right side — content */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="editorial-tag bg-[#C41E3A] text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-0.5">
                      {featureItem.category}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                      {formatDatePtBr(featureItem.date)}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl font-light text-white leading-snug hover:text-[#C41E3A] transition-colors duration-300">
                    {featureItem.title}
                  </h3>

                  <p className="font-sans text-base text-white/60 leading-relaxed">
                    {featureItem.excerpt}
                  </p>

                  <a
                    href="#"
                    className="font-serif text-sm text-[#C41E3A] hover:underline inline-block"
                  >
                    Leia mais
                  </a>
                </div>
              </motion.article>
            )}

            {/* Remaining cards — 2-column grid below */}
            {remainingItems.length > 0 && (
              <div className="grid md:grid-cols-2 gap-0">
                {remainingItems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    className="group bg-white/5 p-8 border-b border-white/10 hover:border-b-[#C41E3A] transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  >
                    <div className="space-y-5">
                      {/* Category + Date row */}
                      <div className="flex items-center gap-3">
                        <span className="editorial-tag bg-[#C41E3A] text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-0.5">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                          {formatDatePtBr(item.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg font-light text-white leading-snug hover:text-[#C41E3A] transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-sans text-sm text-white/50 leading-relaxed">
                        {item.excerpt}
                      </p>

                      {/* Leia mais link */}
                      <a
                        href="#"
                        className="font-serif text-sm text-[#C41E3A] hover:underline inline-block"
                      >
                        Leia mais
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </>
        )}

        {/* Ver Todas Button */}
        {news.length > 0 && (
          <div className="flex justify-center mt-16">
            <button className="font-serif text-sm tracking-[0.2em] uppercase px-10 py-3 border border-white/30 text-white hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] transition-all duration-300">
              Ver Todas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
