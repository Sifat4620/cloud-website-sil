"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Partner {
  name: string
  logo: string
}

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [visibleCount, setVisibleCount] = useState(5)
  const [isMounted, setIsMounted] = useState(false)

  // Sample partners data
  const partners: Partner[] = [
    { name: "Nutanix", logo: "/placeholder.svg?height=80&width=180&text=Nutanix" },
    { name: "Veeam", logo: "/placeholder.svg?height=80&width=180&text=Veeam" },
    { name: "Cisco", logo: "/placeholder.svg?height=80&width=180&text=Cisco" },
    { name: "DigiCert", logo: "/placeholder.svg?height=80&width=180&text=DigiCert" },
    { name: "Barracuda", logo: "/placeholder.svg?height=80&width=180&text=Barracuda" },
    { name: "Microsoft", logo: "/placeholder.svg?height=80&width=180&text=Microsoft" },
    { name: "AWS", logo: "/placeholder.svg?height=80&width=180&text=AWS" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=80&width=180&text=Google+Cloud" },
  ]

  // Number of partners to show at once based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 768) return 2
      if (window.innerWidth < 1024) return 3
      return 5
    }
    return 5 // Default for SSR
  }

  useEffect(() => {
    setIsMounted(true)
    setVisibleCount(getVisibleCount())

    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!autoplay || !isMounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (partners.length - visibleCount + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [autoplay, partners.length, visibleCount, isMounted])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (partners.length - visibleCount + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? partners.length - visibleCount : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  // Don't render anything during SSR
  if (!isMounted) {
    return <div className="h-24"></div>
  }

  const visiblePartners = partners.slice(currentIndex, currentIndex + visibleCount)

  return (
    <div className="relative w-full">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10 hidden md:flex"
          onClick={prevSlide}
          aria-label="Previous partners"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="w-full overflow-hidden px-4 md:px-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {visiblePartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-24 w-40 items-center justify-center rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-800"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={180}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10 hidden md:flex"
          onClick={nextSlide}
          aria-label="Next partners"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: partners.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

