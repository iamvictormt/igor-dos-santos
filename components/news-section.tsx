'use client';

import { formatDatePtBr } from '@/lib/utils';
import { NewsItem } from '@/types/news';
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

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Últimas Notícias</p>
          <h2 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">Novidades</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.length === 0 ? (
            <div className="bg-black text-white p-12 lg:p-16 col-span-3">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-thin tracking-wide mb-8">Nenhuma notícia disponível no momento.</h2>
              </div>
            </div>
          ) : (
            news.map((item, index: number) => (
              <article
                key={index}
                className="group bg-white p-8 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-200"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">{item.category}</span>
                    <time className="text-sm text-gray-400">{formatDatePtBr(item.date)}</time>
                  </div>

                  <h3 className="text-xl font-light text-black leading-tight group-hover:text-gray-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
