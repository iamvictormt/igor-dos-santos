import { Instagram, Mail, MapPin, Music2, Phone, Youtube } from "lucide-react"

const contactItems = [
  {
    label: "E-mail",
    value: "contato@ohomemso.com.br",
    href: "mailto:contato@ohomemso.com.br",
    icon: Mail,
  },
  {
    label: "Telefone",
    value: "+55 11 95459-3830",
    href: "tel:+5511954593830",
    icon: Phone,
  },
  {
    label: "Base",
    value: "São Paulo - SP",
    href: null,
    icon: MapPin,
  },
]

const channels = [
  { label: "Instagram", value: "@0homems0", href: "https://www.instagram.com/0homems0", icon: Instagram },
  { label: "YouTube", value: "OHomemSó", href: "https://www.youtube.com/ohomemso", icon: Youtube },
  { label: "Spotify", value: "Ouvir artista", href: "https://open.spotify.com/intl-pt/artist/73kNPjHVMo83GZ4lE5SRWf", icon: Music2 },
  { label: "Deezer", value: "Ouvir artista", href: "https://www.deezer.com/us/artist/14907579", icon: Music2 },
  { label: "Amazon Music", value: "Ouvir artista", href: "https://music.amazon.com.br/artists/B07DFR7VHH", icon: Music2 },
]

export function ContactContent() {
  return (
    <section className="bg-background pt-32">
      <div className="section-shell pb-24">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Contato</p>
            <h1 className="section-heading mt-4">
              Vamos
              <br />
              conversar
            </h1>
            <p className="handwritten-note mt-5 text-4xl text-accent md:text-5xl">
              chama que a gente combina
            </p>
          </div>
          <p className="section-copy max-w-2xl">
            Para shows, imprensa, colaborações e projetos musicais, use os canais abaixo. Direto, sem labirinto.
          </p>
        </div>

        <div className="grid gap-6 py-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="stage-panel flex min-h-[28rem] flex-col justify-between p-7 md:p-9">
            <div>
              <p className="section-eyebrow text-white/52">Booking e imprensa</p>
              <h2 className="display-title mt-5 max-w-xl text-4xl leading-none text-white md:text-6xl">
                Um canal aberto para colocar a música em movimento.
              </h2>
              <p className="handwritten-note mt-6 text-3xl text-white/62 md:text-4xl">
                sem labirinto
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="analog-panel flex items-center gap-5 p-5 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="meta-line block">{item.label}</span>
                    <span className="mt-1 block text-lg font-medium text-foreground">{item.value}</span>
                  </span>
                </div>
              )

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>

        <div>
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Canais digitais</p>
              <h2 className="display-title mt-3 text-4xl leading-none text-foreground md:text-5xl">Ouça e acompanhe</h2>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {channels.map((channel) => {
              const Icon = channel.icon

              return (
                <a
                  key={channel.href}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border bg-card p-5 transition-colors hover:border-accent"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="mt-5 block text-lg font-medium text-foreground">{channel.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{channel.value}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
