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
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Informações de Contato</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">E-mail</h3>
                      <p className="text-gray-600">contato@igordossantos.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Telefone</h3>
                      <p className="text-gray-600">+55 (11) 99999-9999</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">Localização</h3>
                      <p className="text-gray-600">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 p-8 space-y-6">
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-gray-500">Redes Sociais</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Instagram</span>
                    <span className="text-sm text-gray-500">@igordossantos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">YouTube</span>
                    <span className="text-sm text-gray-500">Igor Delfino</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Spotify</span>
                    <span className="text-sm text-gray-500">Igor Delfino</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Apresentações</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shows solo, participações em eventos corporativos e apresentações em festivais de música.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Composições</h2>
                <p className="text-gray-700 leading-relaxed">
                  Criação de músicas autorais para artistas, trilhas sonoras e projetos especiais.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Colaborações</h2>
                <p className="text-gray-700 leading-relaxed">
                  Parcerias musicais, participações em álbuns e projetos colaborativos com outros artistas.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-black text-white p-12 lg:p-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-thin tracking-wide mb-8">Vamos Criar Juntos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-light mb-4">Projetos Musicais</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Estou sempre aberto para novos projetos e colaborações que explorem diferentes sonoridades e estilos
                    musicais.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-4">Apresentações</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Disponível para shows, eventos corporativos e festivais. Entre em contato para verificar
                    disponibilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
