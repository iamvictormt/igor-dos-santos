import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react"

const shows = [
  {
    id: 1,
    date: "2024-02-15",
    title: "Show Acústico - Café Cultural",
    venue: "Café Cultural do Centro",
    city: "São Paulo, SP",
    time: "20:00",
    ticketUrl: "#",
    status: "available",
  },
  {
    id: 2,
    date: "2024-02-28",
    title: "Apresentação Solo",
    venue: "Teatro Municipal",
    city: "Rio de Janeiro, RJ",
    time: "19:30",
    ticketUrl: "#",
    status: "available",
  },
  {
    id: 3,
    date: "2024-03-10",
    title: "Festival de Música Independente",
    venue: "Parque da Cidade",
    city: "Belo Horizonte, MG",
    time: "18:00",
    ticketUrl: "#",
    status: "soldout",
  },
  {
    id: 4,
    date: "2024-03-22",
    title: "Show de Lançamento do EP",
    venue: "Casa de Shows Alternativa",
    city: "Porto Alegre, RS",
    time: "21:00",
    ticketUrl: "#",
    status: "available",
  },
]

export function AgendaSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <section id="agenda" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Próximos Shows</h2>

        <div className="space-y-4">
          {shows.map((show) => (
            <Card key={show.id} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        {formatDate(show.date)}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="mr-1 h-4 w-4" />
                        {show.time}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-foreground">{show.title}</h3>

                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {show.venue} - {show.city}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {show.status === "available" ? (
                      <Button asChild>
                        <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ingressos
                        </a>
                      </Button>
                    ) : (
                      <Button variant="secondary" disabled>
                        Esgotado
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Fique por dentro de todos os shows e novidades</p>
          <Button variant="outline" size="lg">
            Ver Agenda Completa
          </Button>
        </div>
      </div>
    </section>
  )
}
