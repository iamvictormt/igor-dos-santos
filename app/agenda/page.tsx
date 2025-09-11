import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AgendaContent } from "@/components/agenda-content"

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AgendaContent />
      <Footer />
    </main>
  )
}
