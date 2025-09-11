import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { NewsSection } from "@/components/news-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { UpcomingShows } from "@/components/upcoming-shows"
import { LatestReleases } from "@/components/latest-releases"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LatestReleases />
      <NewsSection />
      <PhotoGallery />
      <UpcomingShows />
      <Footer />
    </main>
  )
}
