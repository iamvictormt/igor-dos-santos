import { Card } from "@/components/ui/card"

export function BiographySection() {
  return (
    <section id="biografia" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Biografia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Igor dos Santos é um músico brasileiro que iniciou sua carreira artística ainda jovem, desenvolvendo um
                estilo único que mescla influências da música popular brasileira com elementos contemporâneos.
              </p>
              <p>
                Ao longo de sua trajetória, Igor tem se destacado pela versatilidade musical e pela capacidade de
                conectar-se com diferentes públicos através de suas composições autorais e interpretações marcantes.
              </p>
              <p>
                Suas apresentações são conhecidas pela intimidade e energia, criando uma experiência única para o
                público que acompanha seu trabalho em diferentes palcos pelo Brasil.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden">
              <img src="/placeholder-k17qs.png" alt="Igor dos Santos" className="w-full h-auto object-cover" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
