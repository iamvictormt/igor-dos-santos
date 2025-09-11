"use client"

import { Button } from "@/components/ui/button"

export function NewsSection() {
  const news = [
    {
      id: 1,
      date: "15 Jan 2024",
      title: "Igor dos Santos anuncia nova turnê nacional",
      excerpt:
        "O artista percorrerá 12 cidades brasileiras com o show 'Reflexões', apresentando seu mais recente trabalho.",
      category: "Turnê",
    },
    {
      id: 2,
      date: "08 Jan 2024",
      title: "Álbum 'Reflexões' alcança 1 milhão de streams",
      excerpt:
        "Em apenas duas semanas, o novo álbum já conquistou milhares de ouvintes em todas as plataformas digitais.",
      category: "Conquista",
    },
    {
      id: 3,
      date: "22 Dez 2023",
      title: "Participação especial no Festival de Inverno",
      excerpt:
        "Igor dos Santos foi convidado especial do renomado festival, apresentando versões acústicas de seus maiores sucessos.",
      category: "Evento",
    },
  ]

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Últimas Notícias</p>
          <h2 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">Novidades</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white p-8 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-200"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">{item.category}</span>
                  <time className="text-sm text-gray-400">{item.date}</time>
                </div>

                <h3 className="text-xl font-light text-black leading-tight group-hover:text-gray-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>

                <Button variant="ghost" className="p-0 h-auto text-black hover:text-gray-600 font-medium text-sm">
                  Ler mais →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
