export function BiographyContent() {
  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Professional Header */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Biografia</p>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Minha
              <br />
              <span className="font-normal">História</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            A trajetória artística de um músico que transcende fronteiras sonoras
          </p>
        </div>

        <div className="space-y-24">
          {/* Origins Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/6] bg-gray-100 overflow-hidden">
                  <img
                    src="/retrato.jpg"
                    alt="Igor dos Santos"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-200 -z-10"></div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Origens</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg font-light leading-relaxed">
                    Igor dos Santos nasceu em uma família onde a música sempre esteve presente, desenvolvendo desde cedo
                    uma sensibilidade especial para os diferentes ritmos que compõem o rico panorama musical brasileiro.
                  </p>
                  <p>
                    Sua formação eclética abrange desde estudos clássicos até a imersão profunda na música popular
                    contemporânea, criando uma base sólida que se reflete em suas composições autorais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Journey Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 lg:col-start-1 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Trajetória Musical</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Ao longo de sua carreira, Igor tem se destacado não apenas como intérprete, mas principalmente como
                    compositor, criando obras que dialogam com diferentes gerações e contextos culturais.
                  </p>
                  <p>
                    Suas composições refletem uma maturidade artística que transcende sua idade, demonstrando uma
                    compreensão profunda da linguagem musical e uma capacidade única de conectar tradição e inovação.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gray-50 p-8 space-y-6">
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-gray-500">Marcos da Carreira</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-thin text-black">10+</div>
                    <div className="text-sm text-gray-600">Anos de experiência</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-thin text-black">50+</div>
                    <div className="text-sm text-gray-600">Apresentações</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-thin text-black">2</div>
                    <div className="text-sm text-gray-600">Álbuns lançados</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-thin text-black">15+</div>
                    <div className="text-sm text-gray-600">Composições autorais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Influences Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Influências</h2>
                <p className="text-gray-700 leading-relaxed">
                  Sua sonoridade é influenciada por grandes nomes da MPB, do jazz brasileiro e da música instrumental,
                  criando um estilo próprio que honra as tradições enquanto explora novos territórios sonoros.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Estilo Musical</h2>
                <p className="text-gray-700 leading-relaxed">
                  Igor desenvolve uma linguagem musical que transita entre a intimidade das baladas e a energia dos
                  ritmos brasileiros, sempre com arranjos cuidadosos e letras que tocam questões universais.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Visão Artística</h2>
                <p className="text-gray-700 leading-relaxed">
                  Acredita na música como ferramenta de conexão humana, buscando sempre criar obras que ressoem
                  emocionalmente com o público e contribuam para o panorama cultural brasileiro contemporâneo.
                </p>
              </div>
            </div>
          </div>

          {/* Current Projects Section */}
          <div className="bg-black text-white p-12 lg:p-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-thin tracking-wide mb-8">Projetos Atuais</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-light mb-4">Novo Álbum</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Atualmente trabalhando em seu terceiro álbum de estúdio, explorando sonoridades que mesclam
                    elementos eletrônicos com instrumentação orgânica.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-4">Colaborações</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Desenvolvendo parcerias com outros artistas da cena independente brasileira, criando pontes entre
                    diferentes estilos e gerações musicais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
