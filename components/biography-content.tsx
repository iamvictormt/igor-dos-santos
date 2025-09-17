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
            Um pouco das minhas paranoias, verdades incompletas e mentiras sinceras.
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
                    Sou Músico auto didata, crescido na periferia da zona norte de São Paulo, o gosto pela música
                    iniciou cedo, influenciado pelos pais que sempre foram entusiastas e que conseguiam ter na coleção
                    de vinil, Roberto Carlos e "Appetite for Destruction" do Guns n Roses lado a lado.
                  </p>
                  <p>
                    Desde 2002 fiz parte de diversas bandas autorais da cidade e já toquei em praticamente todas as
                    casas de shows underground que nasceram e morreram desde então, assim como já passei todos os
                    perrengues, ciladas e conquistas também que só o músico independente sabe como é.
                  </p>
                  <p>
                    Guitarrista por opção, Vocalista por necessidade e Compositor por acidente, essa frase é a que
                    melhor define meu caminho até aqui, crescendo e se formando em meio a música rock popular brasileira
                    e inspirado por grandes compositores de ontem e de hoje.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Igor Delfino Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 space-y-8">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Sobre o Igor Delfino</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Em 2019 dei inicio a um trabalho 100% próprio com o nome artístico dado pela minha filha Alice que
                    após ouvir de mim que eu já não tocava com ninguém e não tinha banda nenhuma, ela me intitulou como
                    "Igor Delfino".
                  </p>
                  <p>
                    Com o inicio do projeto se misturando com a pandemia, restou compor e aprimorar a identidade e o
                    direcionamento artístico que busca uma abordagem musical intimista e por vezes minimalista, com
                    composições que convocam a reflexão, usando a empatia como principal ferramenta.
                  </p>
                  <p>
                    A simplicidade musical, aliada à busca do refrão fácil, fazendo minhas emoções e experiências
                    compartilhadas além de servir como um diário perfeito para deixar as minhas filhas entenderem as
                    fases e desafios da vida quando eu não mais estiver aqui.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Influences Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Influências</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Entusiasta da música fácil e popular bebi muito da fonte do rock nacional 80/90/00s, no entanto também
                  não é difícil encontrar as influências de diversos "Singers-Songwriters" no meu trabalho.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Como Noel Gallagher, Dallas Green, Bob e Jakob Dylan, Lenine, Humberto Gessinger, Nando Reis, Rodrigo
                  Suricato, Neil Young, Samuel Rosa, Cazuza, Renato Russo, Herbert Vianna, Leoni, Koala, Gabriel Zander,
                  Capilé, Rodrigo Amarante, Bola Zimbra, Leo Ramos, Teco Martins, Tim Bernardes, Ale Sater e muitos
                  outros.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Estilo Musical</h2>
                <p className="text-gray-700 leading-relaxed">
                  Dado o caráter intimista do projeto, grande parte das composições se sustentam no violão ou na
                  guitarra elétrica, alguns momentos acompanhados de banda completa outros não, depende do que a música
                  pedir.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Diria que um Indie/Folk/Pop-Rock seria a melhor maneira de descrever o objetivo e identidade do
                  projeto.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-thin tracking-wide text-black mb-6">Filosofia</h2>
                <p className="text-gray-700 leading-relaxed">
                  Acredita na música como ferramenta de conexão humana, buscando sempre criar obras que ressoem
                  emocionalmente com o público e contribuam para o panorama cultural brasileiro contemporâneo.
                </p>
              </div>
            </div>
          </div>

          {/* Vision and Mission Section - Black Box */}
          <div className="bg-black text-white p-12 lg:p-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-thin tracking-wide mb-8">Visão e Missão Artística</h2>
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed text-gray-100">
                  A música é um emissor e receptor de emoções, toda mensagem e linha que escrevo é imaginando um dia no
                  futuro onde não estarei mais no mesmo plano que as minhas filhas mas que através das minhas músicas,
                  letras e melodias elas possam encontrar respostas e conforto para os seus futuros problemas.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  E se mais pessoas se identificarem com tudo isso no meio do caminho, porque não?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
