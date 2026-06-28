import { HeroSection } from '@/components/hero-section';
import { LatestReleases } from '@/components/latest-releases';
import { PhotoGallery } from '@/components/photo-gallery';
import { UpcomingShows } from '@/components/upcoming-shows';
import { NewsSection } from '@/components/news-section';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <LatestReleases />
      <PhotoGallery />
      <UpcomingShows />
      <NewsSection />
    </div>
  );
}
