import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideographyContent } from "@/components/videography-content"
import { StreamingBlock } from "@/components/streaming-block"

export default function VideografiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <VideographyContent />
      <StreamingBlock />
      <Footer />
    </main>
  )
}
