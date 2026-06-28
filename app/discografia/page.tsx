import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DiscographyContent } from "@/components/discography-content"
import { StreamingBlock } from "@/components/streaming-block"

export default function DiscografiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DiscographyContent />
      <StreamingBlock />
      <Footer />
    </main>
  )
}
