"use client"

import { motion } from "framer-motion"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

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
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Próximos Shows
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {shows.map((show) => (
            <motion.div key={show.id} variants={itemVariants}>
              <Card className="hover:shadow-md transition-shadow duration-300">
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
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild>
                            <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ingressos
                            </a>
                          </Button>
                        </motion.div>
                      ) : (
                        <Button variant="secondary" disabled>
                          Esgotado
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Fique por dentro de todos os shows e novidades</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg">
              Ver Agenda Completa
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
