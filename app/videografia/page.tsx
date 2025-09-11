import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideographyContent } from "@/components/videography-content"

export default function VideografiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <VideographyContent />
      <Footer />
    </main>
  )
}
