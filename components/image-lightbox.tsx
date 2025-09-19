"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  images: Array<{
    id: number
    src: string
    alt: string
  }>
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, isOpen, currentIndex, onClose, onNext, onPrevious }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-white hover:bg-white/10 w-12 h-12 hover:text-white"
      >
        <X className="w-6 h-6" />
      </Button>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 w-12 h-12 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 w-12 h-12 hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      <div className="flex items-center justify-center w-full h-full p-6" onClick={onClose}>
        <div className="relative max-w-7xl max-h-full w-full h-full" onClick={(e) => e.stopPropagation()}>
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
        <p className="text-lg font-light mb-2">{currentImage.alt}</p>
        {images.length > 1 && (
          <p className="text-sm text-gray-300">
            {currentIndex + 1} de {images.length}
          </p>
        )}
      </div>
    </div>
  )
}
