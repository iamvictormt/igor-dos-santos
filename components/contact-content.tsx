'use client';

import { Mail, Phone, MapPin, ExternalLink, Instagram, Radio, MessageCircle } from 'lucide-react';

const social = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: ExternalLink },
];

const streaming = [
  { label: 'Spotify', href: '#' },
  { label: 'Deezer', href: '#' },
  { label: 'Amazon Music', href: '#' },
];

export function ContactContent() {
  return (
    <section className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-amber-400/10 via-amber-400/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-amber-400/80 mb-4">Contato</p>
          <h1 className="font-handwriting text-6xl md:text-8xl text-amber-100 leading-[0.9] gold-glow">
            Vamos
            <br />
            <span className="text-amber-300">Conversar</span>
          </h1>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Contact info */}
          <div className="bg-card rounded-2xl p-7 ring-1 ring-white/5 space-y-5">
            <p className="font-mono text-xs tracking-widest uppercase text-amber-400/80">Onde me encontrar</p>
            <div className="space-y-4 text-amber-100/70 font-light">
              <a href="mailto:contato@ohomemso.com.br" className="flex items-center gap-3 hover:text-amber-300 transition-colors duration-300">
                <Mail className="w-4 h-4 text-amber-400/70" />
                <span className="text-sm">contato@ohomemso.com.br</span>
              </a>
              <a href="tel:+5511000000000" className="flex items-center gap-3 hover:text-amber-300 transition-colors duration-300">
                <Phone className="w-4 h-4 text-amber-400/70" />
                <span className="text-sm">+55 11 0000-0000</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400/70" />
                <span className="text-sm">São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="bg-card rounded-2xl p-7 ring-1 ring-white/5 space-y-5">
            <p className="font-mono text-xs tracking-widest uppercase text-amber-400/80">Redes sociais</p>
            <div className="space-y-3">
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl hover:bg-amber-400/10 hover:text-amber-300 transition-all duration-300 ring-1 ring-white/5 hover:ring-amber-400/30 font-light">
                  <s.icon className="w-4 h-4 text-amber-400/70" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Streaming */}
          <div className="bg-card rounded-2xl p-7 ring-1 ring-white/5 space-y-5">
            <p className="font-mono text-xs tracking-widest uppercase text-amber-400/80">Streaming</p>
            <div className="space-y-3">
              {streaming.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-background rounded-xl hover:bg-amber-400/10 hover:text-amber-300 transition-all duration-300 ring-1 ring-white/5 hover:ring-amber-400/30 font-light">
                  <span className="flex items-center gap-3">
                    <Radio className="w-4 h-4 text-amber-400/70" />
                    {s.label}
                  </span>
                  <ExternalLink className="w-3 h-3 text-amber-300/50" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Final quote */}
        <div className="pt-16 mt-16 border-t border-amber-400/15 text-center">
          <MessageCircle className="w-8 h-8 mx-auto text-amber-300/40 mb-4" />
          <p className="font-handwriting text-lg text-amber-200/60 italic">
            shows, parcerias, letras e boa conversa
          </p>
        </div>
      </div>
    </section>
  );
}
