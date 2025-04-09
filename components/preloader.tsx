"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Handle client-side only code
  useEffect(() => {
    setIsMounted(true)
    setLoading(true)

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [pathname])

  // Don't render anything during SSR to prevent hydration errors
  if (!isMounted) {
    return null
  }

  if (!loading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-64 h-32 mb-8">
        <Image
          src="/images/square-informatix-logo.png"
          alt="SQUARE INFORMATIX Limited"
          width={256}
          height={128}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0A3D91] via-[#00A0C6] to-[#00A651]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="mt-4 text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading your cloud experience...
      </motion.div>
    </motion.div>
  )
}

