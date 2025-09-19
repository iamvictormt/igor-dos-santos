import { Instagram, Youtube, Music } from 'lucide-react';

export function ContactContent() {
  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Contato</p>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Vamos
              <br />
              <span className="font-normal">Conversar</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Entre em contato para colaborações, apresentações ou projetos musicais
          </p>
        </div>

        <div className="space-y-24">
          {/* Contact Information Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Informações de Contato</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">E-mail</h3>
                      <p className="text-gray-600">contato@ohomemso.com.br</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Telefone</h3>
                      <p className="text-gray-600">+55 11 95459 -3830</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Localização</h3>
                      <p className="text-gray-600">São Paulo - SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Redes Sociais</h2>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/0homems0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-gray-600 group-hover:text-pink-500 transition-colors" />
                    <div>
                      <span className="text-lg text-black">Instagram</span>
                      <p className="text-sm text-gray-500">@0homems0</p>
                    </div>
                  </a>

                  <a
                    href="https://www.youtube.com/ohomemso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <Youtube className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" />
                    <div>
                      <span className="text-lg text-black">YouTube</span>
                      <p className="text-sm text-gray-500">OHomemSó</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Plataformas Musicais</h2>
                <div className="space-y-4">
                  <div className="w-full flex items-center  hover:bg-gray-50 rounded-lg transition-colors group">
                    <span className="text-lg text-black hover:text-green-600 transition-colors">
                      <a
                        href="https://open.spotify.com/intl-pt/artist/73kNPjHVMo83GZ4lE5SRWf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        Spotify
                      </a>
                    </span>
                  </div>

                  <div className="w-full flex items-center  hover:bg-gray-50 rounded-lg transition-colors group">
                    <span className="text-lg text-black hover:text-purple-600 transition-colors">
                      <a
                        href="https://www.deezer.com/us/artist/14907579"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        Deezer
                      </a>
                    </span>
                  </div>

                  <div className="w-full flex items-center  hover:bg-gray-50 rounded-lg transition-colors group">
                    <span className="text-lg text-black hover:text-blue-600 transition-colors">
                      <a
                        href="https://music.amazon.com.br/artists/B07DFR7VHH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        Amazon Music
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
