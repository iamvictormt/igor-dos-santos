import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactContent />
      <Footer />
    </main>
  )
}
