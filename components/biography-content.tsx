export function BiographyContent() {
  return (
    <section className="studio-wall pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="paper-panel mb-20 max-w-3xl rotate-[-1deg] p-8">
          <div className="mb-8">
            <p className="type-label mb-4 text-[10px] text-stone-700">Biografia</p>
            <h1 className="stamp-title text-5xl leading-[0.9] text-stone-950 lg:text-6xl">
              Minha
              <br />
              <span>História</span>
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-stone-700">
            Um pouco das minhas paranoias, verdades incompletas e mentiras sinceras.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="photo-print aspect-[4/6] overflow-hidden">
                  <img src="/retrato.jpg" alt="Igor dos Santos" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#c5a172]/40" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="paper-panel p-8">
                <h2 className="stamp-title mb-6 text-3xl text-stone-950">Origens</h2>
                <div className="space-y-6 leading-relaxed text-stone-700">
                  <p className="text-lg font-light leading-relaxed">
                    Sou músico autodidata, crescido na periferia da zona norte de São Paulo. O gosto pela música
                    iniciou cedo, influenciado pelos pais, que sempre foram entusiastas e conseguiam ter na coleção de
                    vinil Roberto Carlos e "Appetite for Destruction", do Guns N' Roses, lado a lado.
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    Desde 2002 fiz parte de diversas bandas autorais da cidade e já toquei em praticamente todas as
                    casas de shows underground que nasceram e morreram desde então, assim como já passei por todos os
                    perrengues, ciladas e conquistas que só o músico independente sabe como é.
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    Guitarrista por opção, vocalista por necessidade e compositor por acidente. Essa frase é a que
                    melhor define meu caminho até aqui, crescendo e me formando em meio à música rock popular brasileira
                    e inspirado por grandes compositores de ontem e de hoje.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 space-y-8">
              <div className="paper-panel p-8">
                <h2 className="stamp-title mb-6 text-3xl text-stone-950">Sobre OHomemSó</h2>
                <div className="space-y-6 leading-relaxed text-stone-700">
                  <p className="text-lg font-light leading-relaxed">
                    Em 2019 dei início a um trabalho 100% próprio com o nome artístico dado pela minha filha Alice que,
                    após ouvir de mim que eu já não tocava com ninguém e não tinha banda nenhuma, me intitulou como
                    "OHomemSó".
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    Com o início do projeto se misturando com a pandemia, restou compor e aprimorar a identidade e o
                    direcionamento artístico que busca uma abordagem musical intimista e por vezes minimalista, com
                    composições que convocam a reflexão, usando a empatia como principal ferramenta.
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    A simplicidade musical, aliada à busca do refrão fácil, faz das minhas emoções e experiências
                    compartilhadas um diário perfeito para deixar minhas filhas entenderem as fases e desafios da vida
                    quando eu não mais estiver aqui.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#c5a172]/35 pt-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="paper-panel rotate-[-1deg] p-7">
                <h2 className="stamp-title mb-6 text-3xl text-stone-950">Influências</h2>
                <p className="text-lg font-light leading-relaxed mb-4 text-stone-700">
                  Entusiasta da música fácil e popular, bebi muito da fonte do rock nacional 80/90/00s. No entanto,
                  também não é difícil encontrar influências de diversos singer-songwriters no meu trabalho.
                </p>
                <p className="text-lg font-light leading-relaxed mb-4 text-stone-700">
                  Como Noel Gallagher, Dallas Green, Bob e Jakob Dylan, Lenine, Humberto Gessinger, Nando Reis, Rodrigo
                  Suricato, Neil Young, Samuel Rosa, Cazuza, Renato Russo, Herbert Vianna, Leoni, Koala, Gabriel Zander,
                  Capilé, Rodrigo Amarante, Bola Zimbra, Leo Ramos, Teco Martins, Tim Bernardes, Ale Sater e muitos
                  outros.
                </p>
              </div>

              <div className="paper-panel rotate-[0.7deg] p-7">
                <h2 className="stamp-title mb-6 text-3xl text-stone-950">Estilo Musical</h2>
                <p className="text-lg font-light leading-relaxed text-stone-700">
                  Dado o caráter intimista do projeto, grande parte das composições se sustenta no violão ou na guitarra
                  elétrica, alguns momentos acompanhados de banda completa, outros não. Depende do que a música pedir.
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 text-stone-700">
                  Diria que um indie/folk/pop-rock seria a melhor maneira de descrever o objetivo e identidade do projeto.
                </p>
              </div>

              <div className="paper-panel rotate-[-0.5deg] p-7">
                <h2 className="stamp-title mb-6 text-3xl text-stone-950">Filosofia</h2>
                <p className="text-lg font-light leading-relaxed text-stone-700">
                  Acredita na música como ferramenta de conexão humana, buscando sempre criar obras que ressoem
                  emocionalmente com o público e contribuam para o panorama cultural brasileiro contemporâneo.
                </p>
              </div>
            </div>
          </div>

          <div className="leather-panel p-12 text-[#f8e8c1] lg:p-16">
            <div className="max-w-4xl">
              <h2 className="stamp-title mb-8 text-3xl">Visão e Missão Artística</h2>
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed text-[#f8e8c1]">
                  A música é um emissor e receptor de emoções. Toda mensagem e linha que escrevo é imaginando um dia no
                  futuro onde não estarei mais no mesmo plano que as minhas filhas, mas que através das minhas músicas,
                  letras e melodias elas possam encontrar respostas e conforto para os seus futuros problemas.
                </p>
                <p className="text-lg font-light leading-relaxed text-[#ead2a5]">
                  E se mais pessoas se identificarem com tudo isso no meio do caminho, por que não?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
