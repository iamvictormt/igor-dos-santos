import Image from "next/image"

const timeline = [
  {
    year: "2002",
    title: "Primeiras bandas",
    text: "Passagem por bandas autorais e casas underground de São Paulo, entre perrengues, ciladas e pequenas vitórias de músico independente.",
  },
  {
    year: "2019",
    title: "Nasce OHomemSó",
    text: "O nome artístico veio da filha Alice, depois de ouvir que já não havia banda fixa nem companhia no palco.",
  },
  {
    year: "Hoje",
    title: "Canções como diário",
    text: "Um repertório íntimo, guiado por simplicidade, refrão direto e a vontade de deixar registro afetivo para quem vier depois.",
  },
]

const influences = [
  "rock nacional 80/90/00s",
  "singer-songwriters",
  "indie folk",
  "MPB",
  "pop rock brasileiro",
  "violão e guitarra elétrica",
]

export function BiographyContent() {
  return (
    <section className="bg-background pt-32">
      <div className="section-shell">
        <div className="grid gap-12 pb-20">
          <div>
            <p className="section-eyebrow">Biografia</p>
            <h1 className="section-heading mt-4">
              Um homem, muitas canções
            </h1>
            <p className="handwritten-note mt-5 text-4xl text-accent md:text-5xl">
              escrito no violão, rasurado na guitarra
            </p>
          </div>  
        </div>

        <div className="grid gap-10 border-t border-border py-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div className="relative min-h-[64rem] overflow-hidden bg-muted">
            <Image src="/retrato.jpg" alt="Retrato de Igor Delfino" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>

          <div className="grid content-center gap-8">
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/78">
              <p>
                O gosto pela música começou cedo, influenciado pelos pais, que conseguiam manter Roberto Carlos e
                "Appetite for Destruction", do Guns N' Roses, lado a lado na coleção de vinil.
              </p>
              <p>
                Guitarrista por opção, vocalista por necessidade e compositor por acidente: essa frase resume o caminho
                entre bandas, palcos pequenos, gravações independentes e a busca por uma linguagem própria.
              </p>
              <p>
                Em 2019, o projeto OHomemSó surgiu como um trabalho 100% autoral, misturando intimidade, minimalismo e
                canções que convocam reflexão usando empatia como ferramenta principal.
              </p>
            </div>

            <blockquote className="border-l-2 border-accent pl-6">
              <p className="handwritten-note text-4xl leading-tight text-foreground md:text-6xl">
                "A música é um emissor e receptor de emoções."
              </p>
            </blockquote>
          </div>
        </div>

        <div className="grid gap-10 py-20 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="grid gap-5">
            {timeline.map((item) => (
              <div key={item.year} className="grid gap-4 border-t border-border pt-5 md:grid-cols-[7rem_1fr]">
                <div className="meta-line text-accent">{item.year}</div>
                <div>
                  <h2 className="text-2xl font-medium text-foreground">{item.title}</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="stage-panel p-7 md:p-9">
            <p className="section-eyebrow text-white/52">Influências</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {influences.map((item) => (
                <span key={item} className="border border-white/14 px-3 py-2 text-sm text-white/72">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 leading-8 text-white/66">
              De Noel Gallagher a Lenine, de Nando Reis a Neil Young, o projeto bebe em compositores que tratam canção
              como conversa direta, memória e tentativa de permanência.
            </p>
          </aside>
        </div>

        <div className="grid gap-6 pb-24 md:grid-cols-2">
          <div className="relative min-h-[44rem] overflow-hidden bg-muted">
            <Image
              src="/segurando-instrumento.jpg"
              alt="Igor Delfino segurando instrumento"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="analog-panel flex flex-col justify-center p-7 md:p-9">
            <p className="section-eyebrow">Missão artística</p>
            <p className="handwritten-note mt-5 text-4xl leading-tight text-foreground md:text-6xl">
              Deixar melodias como respostas possíveis para problemas futuros.
            </p>
            <p className="mt-6 leading-8 text-muted-foreground">
              E se mais pessoas se identificarem com tudo isso no meio do caminho, por que não?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
