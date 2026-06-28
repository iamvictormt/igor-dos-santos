"use client";

import { formatDatePtBr } from "@/lib/utils";
import { NewsItem } from "@/types/news";
import { useEffect, useState } from "react";

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([
    { id: 1, date: "15 Jan 2024", title: "EM BREVE", excerpt: "Em 2026, aguardem..", category: "Turnê" },
    { id: 2, date: "15 Jan 2024", title: "EM BREVE", excerpt: "Em 2026, aguardem..", category: "Turnê" },
    { id: 3, date: "15 Jan 2024", title: "EM BREVE", excerpt: "Em 2026, aguardem..", category: "Turnê" },
  ]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        if (!res.ok) throw new Error("Erro ao buscar notícias");
        const data: NewsItem[] = await res.json();
        if (data) setNews(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchNews();
  }, []);

  return (
    <section className="home-section">
      <div className="mx-auto max-w-7xl">
        <div className="home-heading">
          <div className="paper-panel p-6 md:p-8">
            <p className="type-label mb-3 text-[10px] text-stone-700">Recados do mural</p>
            <h2 className="stamp-title text-4xl leading-none text-stone-950 md:text-6xl">Novidades</h2>
          </div>
          <p className="home-note">
            Comunicados, bastidores e pequenos anúncios entram aqui como bilhetes presos ao lado da agenda.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {news.length === 0 ? (
            <div className="paper-panel col-span-full p-10">
              <h3 className="stamp-title text-3xl text-stone-950">Nenhuma notícia disponível no momento.</h3>
            </div>
          ) : (
            news.map((item, index) => (
              <article key={index} className="paper-panel p-6 transition duration-300 hover:-translate-y-1">
                <div className="mb-5 flex items-center justify-between border-b border-stone-800/30 pb-3">
                  <span className="type-label text-[10px] text-stone-700">{item.category}</span>
                  <time className="font-mono text-xs text-stone-600">{formatDatePtBr(item.date)}</time>
                </div>
                <h3 className="stamp-title text-3xl leading-none text-stone-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-700">{item.excerpt}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
