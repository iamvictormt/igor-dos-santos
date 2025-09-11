import { Button } from "@/components/ui/button"
import { Play, Music } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-black-and-white-portrait-of-musician-with-.jpg"
          alt="Igor dos Santos"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Main Content with Sophisticated Typography */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <div className="text-xs font-mono tracking-[0.3em] uppercase text-gray-400 mb-4 animate-fade-in animate-delay-200">
            Músico • Compositor • Artista
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-[0.15em] mb-6 text-white animate-fade-in-up animate-delay-300">
            IGOR
            <br />
            <span className="font-extralight italic">dos Santos</span>
          </h1>
        </div>

        {/* Elegant Divider */}

        {/* Sophisticated CTA */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in animate-delay-500">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-light tracking-[0.1em] px-12 py-4 text-xs uppercase border-0 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-3 h-4 w-4" />
            Reproduzir
          </Button>
          <Link href="/discografia">
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm font-light tracking-[0.1em] px-12 py-4 text-xs uppercase transition-all duration-300 hover:scale-105"
            >
              <Music className="mr-3 h-4 w-4" />
              Explorar Música
            </Button>
          </Link>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3">
          <div className="mouse-scroll-animation">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
