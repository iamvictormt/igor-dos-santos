export function BiographyContent() {
  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Editorial Page Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number font-serif text-6xl font-extralight text-[#C41E3A]/30">01</span>
            <span className="editorial-tag inline-block px-3 py-1 border border-[#C41E3A] text-[#C41E3A] text-xs font-medium tracking-[0.15em] uppercase">
              Biografia
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground leading-[0.9] tracking-tight mb-6">
            Minha História
          </h1>
          <p className="font-serif italic text-xl text-muted-foreground leading-relaxed max-w-2xl">
            "Um pouco das minhas paranoias, verdades incompletas e mentiras sinceras."
          </p>
        </div>

        <div className="space-y-24">
          {/* Origins Section — Sticky photo + text */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="sticky top-32">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/retrato.jpg"
                  alt="Igor dos Santos"
                  className="w-full h-full object-cover border-none"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Origens</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="drop-cap font-serif text-lg leading-relaxed">
                  Sou Músico auto didata, crescido na periferia da zona norte de São Paulo, o gosto pela música
                  iniciou cedo, influenciado pelos pais que sempre foram entusiastas e que conseguiam ter na coleção
                  de vinil, Roberto Carlos e "Appetite for Destruction" do Guns n Roses lado a lado.
                </p>
                <p className="font-serif text-lg leading-relaxed">
                  Desde 2002 fiz parte de diversas bandas autorais da cidade e já toquei em praticamente todas as
                  casas de shows underground que nasceram e morreram desde então, assim como já passei todos os
                  perrengues, ciladas e conquistas também que só o músico independente sabe como é.
                </p>
                <blockquote className="pull-quote font-serif italic text-2xl text-foreground/80 border-l-4 border-[#C41E3A] pl-6 py-2 my-8">
                  "paranoias, verdades incompletas e mentiras sinceras"
                </blockquote>
                <p className="font-serif text-lg leading-relaxed">
                  Guitarrista por opção, Vocalista por necessidade e Compositor por acidente, essa frase é a que
                  melhor define meu caminho até aqui, crescendo e se formando em meio a música rock popular brasileira
                  e inspirado por grandes compositores de ontem e de hoje.
                </p>
              </div>
            </div>
          </div>

          {/* About OHomemSó section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="sticky top-32">
              <h3 className="font-serif text-2xl font-light text-foreground mb-4">Sobre OHomemSó</h3>
              <p className="font-serif text-sm text-muted-foreground italic">
                O nome artístico nasceu de uma filha.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-6 text-muted-foreground">
                <p className="drop-cap font-serif text-lg leading-relaxed">
                  Em 2019 dei inicio a um trabalho 100% próprio com o nome artístico dado pela minha filha <span className="text-[#C41E3A]">Alice</span> que
                  após ouvir de mim que eu já não tocava com ninguém e não tinha banda nenhuma, ela me intitulou como
                  "OHomemSó".
                </p>
                <p className="font-serif text-lg leading-relaxed">
                  Com o inicio do projeto se misturando com a pandemia, restou compor e aprimorar a identidade e o
                  direcionamento artístico que busca uma abordagem musical intimista e por vezes minimalista, com
                  composições que convocam a reflexão, usando a empatia como principal ferramenta.
                </p>
                <blockquote className="pull-quote font-serif italic text-2xl text-foreground/80 border-l-4 border-[#C41E3A] pl-6 py-2 my-8">
                  "A música como emissor e receptor de emoções, uma conexão que transcende o tempo."
                </blockquote>
                <p className="font-serif text-lg leading-relaxed">
                  A simplicidade musical, aliada à busca do refrão fácil, fazendo minhas emoções e experiências
                  compartilhadas além de servir como um diário perfeito para deixar as minhas filhas entenderem as
                  fases e desafios da vida quando eu não mais estiver aqui.
                </p>
              </div>
            </div>
          </div>

          {/* Influences Section — Chips/Tags */}
          <div className="border-t border-border pt-16">
            <h2 className="font-serif text-3xl font-light text-foreground mb-8">Influências</h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Entusiasta da música fácil e popular bebi muito da fonte do rock nacional 80/90/00s, no entanto também
              não é difícil encontrar as influências de diversos "Singers-Songwriters" no meu trabalho.
            </p>
            <div className="flex flex-wrap">
              {[
                "Noel Gallagher",
                "Dallas Green",
                "Lenine",
                "Los Hermanos",
                "Anavitoria",
                "Silva",
                "The Strokes",
                "Arctic Monkeys",
                "Oasis",
                "Keane",
                "Coldplay",
                "Jack White",
                "Criolo",
                "Emicida",
              ].map((artist) => (
                <span
                  key={artist}
                  className="inline-block px-3 py-1.5 border border-border font-serif text-sm hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors mr-2 mb-2"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>

          {/* Musical Style + Philosophy — 2 columns */}
          <div className="border-t border-border pt-16">
            <div className="grid md:grid-cols-2">
              <div className="md:border-r md:border-border md:pr-12">
                <h3 className="font-serif text-xl font-light text-foreground mb-6">Estilo Musical</h3>
                <div className="space-y-4">
                  <p className="font-serif text-base text-muted-foreground leading-relaxed">
                    Dado o caráter intimista do projeto, grande parte das composições se sustentam no violão ou na
                    guitarra elétrica, alguns momentos acompanhados de banda completa outros não, depende do que a música
                    pedir.
                  </p>
                  <p className="font-serif text-base text-muted-foreground leading-relaxed">
                    Diria que um Indie/Folk/Pop-Rock seria a melhor maneira de descrever o objetivo e identidade do
                    projeto.
                  </p>
                </div>
              </div>
              <div className="md:pl-12 mt-12 md:mt-0">
                <h3 className="font-serif text-xl font-light text-foreground mb-6">Filosofia</h3>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  Acredita na música como ferramenta de conexão humana, buscando sempre criar obras que ressoem
                  emocionalmente com o público e contribuam para o panorama cultural brasileiro contemporâneo.
                </p>
              </div>
            </div>
          </div>

          {/* Visão e Missão block */}
          <div className="bg-foreground text-background p-12 lg:p-16">
            <div className="max-w-4xl">
              <div className="w-12 h-0.5 bg-[#C41E3A] mb-8"></div>
              <h2 className="font-serif text-2xl font-light tracking-wide mb-8">Visão e Missão Artística</h2>
              <div className="space-y-6">
                <p className="font-serif italic text-2xl leading-relaxed text-background/90">
                  A música é um emissor e receptor de emoções, toda mensagem e linha que escrevo é imaginando um dia no
                  futuro onde não estarei mais no mesmo plano que as minhas filhas mas que através das minhas músicas,
                  letras e melodias elas possam encontrar respostas e conforto para os seus futuros problemas.
                </p>
                <p className="font-serif text-lg leading-relaxed text-background/70">
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
