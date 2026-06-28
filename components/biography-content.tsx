'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2018',
    title: 'Bem Vindo a Sua Vida',
    body: 'Primeiro EP — o modo do artista no estúdio. Composições introspectivas que plantaram a semente do projeto OHomemSó.',
    side: 'left' as const,
  },
  {
    year: '2019',
    title: 'Talvez Nunca Aqui · GratoVolte',
    body: 'Dois EPs que afinaram a voz — mais lírico, mais grato, mais atento ao que o silêncio tem a dizer.',
    side: 'right' as const,
  },
  {
    year: '2020',
    title: 'Pandemia, Avivar, Início Outono',
    body: 'O silêncio deu música. Gravações caseiras, um olhar pra dentro, o mundo parado com as notas entrando.',
    side: 'left' as const,
  },
  {
    year: '2021',
    title: 'Amanhã É um Novo Dia · Trinta e Um',
    body: 'Retomada — a vida adulta e o tempo, o peso leve das coisas simples, a gravidade dos dias.',
    side: 'right' as const,
  },
  {
    year: '2022',
    title: 'Broken Dreams & Hopes · Voar',
    body: 'Voar foi convite. Broken Dreams & Hopes foi o espelho em inglês — novas texturas, mesmo artista.',
    side: 'left' as const,
  },
  {
    year: '2023',
    title: 'Grito Mudo · Tudo o Que Eu Queria Te Dizer',
    body: 'O grito. O desabafo. Anos de trabalho liberando o que não podia mais ficar dentro.',
    side: 'right' as const,
  },
  {
    year: '2024',
    title: 'Tamanho de um Rei',
    body: 'Single mais recente — a realeza que vem de dentro, tamanho que não se herda, se conquista.',
    side: 'left' as const,
  },
];

export function BiographyContent() {
  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        {/* Hero da página — foto + subtítulo */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-center mb-24">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
            <img src="/retrato.jpg" alt="Igor Delfino" className="w-full h-full rounded-3xl object-cover ring-1 ring-amber-400/30 shadow-2xl shadow-amber-500/15" />
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-amber-400/15 -z-10" />
          </div>
          <div className="space-y-6">
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80">
              Biografia · Desde 2018
            </p>
            <h1 className="font-handwriting text-6xl md:text-8xl text-amber-100 leading-[0.9] gold-glow">
              Igor
              <br />
              <span className="text-amber-300">Delfino</span>
            </h1>
            <p className="font-light text-amber-100/60 leading-relaxed text-base md:text-lg max-w-xl">
              Um pouco das minhas paranoias, verdades incompletas e mentiras sinceras.
              Músico e compositor. Voz, violão e mais coisas que experimento.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/0 via-amber-400/40 to-amber-400/0 md:-translate-x-[0.5px]" />

          {milestones.map((m, i) => (
            <motion.article
              key={m.year}
              className={`relative mb-14 md:flex md:gap-12 md:items-center ${
                m.side === 'right' ? 'md:flex-row-reverse md:text-right' : ''
              }`}
              initial={{ opacity: 0, x: m.side === 'left' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              {/* Marker */}
              <span className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 inline-flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-amber-300 z-10 ring-2 ring-amber-300/30" />
                <span className="absolute w-8 h-8 rounded-full bg-amber-300/20 animate-pulse-soft" />
              </span>

              {/* Content */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-400/80">
                  {m.year}
                </span>
                <h3 className="font-handwriting text-3xl md:text-4xl text-amber-100 mt-1 mb-3 gold-glow">
                  {m.title}
                </h3>
                <p className="font-light text-amber-100/55 leading-relaxed">{m.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quote — bloco escuro com borda amber */}
        <div className="mt-24 bg-black border border-amber-400/20 rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 stage-spot pointer-events-none" />
          <p className="relative font-mono text-[0.65rem] tracking-[0.3em] uppercase text-amber-400/80 mb-4">
            Visão & Missão Artística
          </p>
          <p className="relative font-handwriting text-3xl md:text-5xl text-amber-100 leading-tight">
            A música é um veículo <span className="text-amber-300 gold-glow">transformador de
            emoções</span>, e minha missão como artista é proporcionar isso
            para as pessoas, levando uma mensagem de esperança, amor e
            autoconhecimento através das minhas composições.
          </p>
        </div>

        {/* 3 colunas: influências / estilo / filosofia */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-amber-400/15">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400/80 mb-4">Influências</p>
            <p className="font-light text-amber-100/55 leading-relaxed text-sm">
              MPB, rock, folk e experimentalismo —Tim Bernardes, Caetano, Radiohead,
              Lana Del Rey, justiceiros sonoros de qualquer lugar.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400/80 mb-4">Estilo</p>
            <p className="font-light text-amber-100/55 leading-relaxed text-sm">
              Corpo sonoro entre o cru e o curado — violão e voz como esqueleto,
              texturas como roupa, produção como direção.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400/80 mb-4">Filosofia</p>
            <p className="font-light text-amber-100/55 leading-relaxed text-sm">
              Autenticidade acima de ASMR — a arte é erro + intenção + entrega.
              O resultado é sempre um álibi do momento em que foi criado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
