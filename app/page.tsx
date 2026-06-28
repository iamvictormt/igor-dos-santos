import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { LatestReleases } from '@/components/latest-releases';
import { QuoteBar } from '@/components/quote-bar';
import { NewsSection } from '@/components/news-section';
import { PhotoGallery } from '@/components/photo-gallery';
import { UpcomingShows } from '@/components/upcoming-shows';
import { StreamingBlock } from '@/components/streaming-block';
import { FooterQuoteBar } from '@/components/footer-quote-bar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LatestReleases />
      <QuoteBar />
      <NewsSection />
      <PhotoGallery />
      <UpcomingShows />
      <StreamingBlock />
      <FooterQuoteBar />
      <Footer />
    </main>
  );
}
