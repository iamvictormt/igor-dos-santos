import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BiographyContent } from "@/components/biography-content"

export default function BiografiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BiographyContent />
      <Footer />
    </main>
  )
}
