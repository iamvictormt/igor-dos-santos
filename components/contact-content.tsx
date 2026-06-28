import { Instagram, Youtube, Music, Mail, Phone, MapPin } from "lucide-react";

export function ContactContent() {
  return (
    <section className="studio-wall min-h-screen pt-32 pb-24">
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
        <div className="paper-panel mb-16 max-w-3xl rotate-[-1deg] p-8">
          <p className="type-label mb-4 text-[10px] text-stone-700">Contato</p>
          <h1 className="stamp-title text-5xl leading-[0.9] text-stone-950 lg:text-6xl">
            Vamos
            <br />
            conversar
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
            Entre em contato para colaborações, apresentações ou projetos musicais.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="leather-panel p-6 text-[#f8e8c1]">
            <h2 className="stamp-title mb-6 text-3xl">Informações</h2>
            <div className="space-y-5 text-sm">
              <p className="flex gap-3"><Mail className="h-5 w-5 shrink-0" />contato@ohomemso.com.br</p>
              <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0" />+55 11 95459-3830</p>
              <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0" />São Paulo - SP - Brasil</p>
            </div>
          </div>

          <div className="paper-panel p-6">
            <h2 className="stamp-title mb-6 text-3xl text-stone-950">Redes sociais</h2>
            <div className="space-y-3">
              <a href="https://www.instagram.com/0homems0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-stone-800/25 p-4 text-stone-800 transition hover:bg-[#e8d0a3]">
                <Instagram className="h-5 w-5" />
                <span>
                  <strong className="block">Instagram</strong>
                  <small>@0homems0</small>
                </span>
              </a>
              <a href="https://www.youtube.com/ohomemso" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-stone-800/25 p-4 text-stone-800 transition hover:bg-[#e8d0a3]">
                <Youtube className="h-5 w-5" />
                <span>
                  <strong className="block">YouTube</strong>
                  <small>OHomemSó</small>
                </span>
              </a>
            </div>
          </div>

          <div className="metal-sign p-6">
            <h2 className="stamp-title mb-6 text-3xl">Plataformas</h2>
            <div className="space-y-3">
              {[
                ["Spotify", "https://open.spotify.com/intl-pt/artist/73kNPjHVMo83GZ4lE5SRWf"],
                ["Deezer", "https://www.deezer.com/us/artist/14907579"],
                ["Amazon Music", "https://music.amazon.com.br/artists/B07DFR7VHH"],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-stone-900/30 bg-[#ede3cb]/35 p-4 transition hover:bg-[#f6ebcf]">
                  <Music className="h-5 w-5" />
                  <span className="type-label text-[11px]">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
