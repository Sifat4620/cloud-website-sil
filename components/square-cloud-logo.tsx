"use client"

import { motion } from "framer-motion"

interface SquareCloudLogoProps {
  className?: string
  size?: number
  variant?: "light" | "dark"
}

export function SquareCloudLogo({ className = "", size = 40, variant = "light" }: SquareCloudLogoProps) {
  // SQUARE INFORMATIX brand colors
  const brandColors = {
    blue: "#0A3D91", // Dark blue from SQUARE text
    teal: "#00A0C6", // Teal/turquoise from the logo arc
    orange: "#F39C12", // Orange/yellow from the globe
    green: "#00A651", // Green from the right curve
    red: "#E74C3C", // Red from the dot
    gray: "#7F8C8D", // Gray from INFORMATIX text
  }

  const bgColor = variant === "light" ? "bg-white" : "bg-gray-900"
  const textColor = variant === "light" ? brandColors.blue : "text-white"

  return (
    <motion.div
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm border border-blue-100 bg-white">
        <div className="relative">
          {/* Arc shape */}
          <svg width={size} height={size} viewBox="0 0 40 40">
            <path
              d="M5,20 A15,15 0 1,1 35,20"
              fill="none"
              stroke={brandColors.blue}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M5,20 A15,15 0 0,0 20,5"
              fill="none"
              stroke={brandColors.teal}
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Globe */}
            <circle cx="20" cy="20" r="8" fill={brandColors.orange} />
          </svg>
        </div>
        <div className="flex flex-col">
          <span style={{ color: brandColors.blue }} className="font-bold text-sm">
            SQUARE
          </span>
          <span style={{ color: brandColors.gray }} className="text-xs">
            INFORMATIX
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedSquareCloudLogo({ className = "", size = 40, variant = "light" }: SquareCloudLogoProps) {
  // SQUARE INFORMATIX brand colors
  const brandColors = {
    blue: "#0A3D91", // Dark blue from SQUARE text
    teal: "#00A0C6", // Teal/turquoise from the logo arc
    orange: "#F39C12", // Orange/yellow from the globe
    green: "#00A651", // Green from the right curve
    red: "#E74C3C", // Red from the dot
    gray: "#7F8C8D", // Gray from INFORMATIX text
  }

  return (
    <div className={`relative ${className}`} style={{ width: size * 3, height: size }}>
      <motion.div
        className="absolute left-0 top-0"
        animate={{
          x: [0, 5, 0, -5, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div
          className="rounded-md opacity-70"
          style={{
            width: size / 2,
            height: size / 2,
            backgroundColor: brandColors.teal,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-1/4 top-1/4"
        animate={{
          x: [0, -5, 0, 5, 0],
          rotate: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 0.5,
        }}
      >
        <div
          className="rounded-md opacity-60"
          style={{
            width: size / 3,
            height: size / 3,
            backgroundColor: brandColors.blue,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-0"
        animate={{
          x: [0, 3, 0, -3, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 1,
        }}
      >
        <div
          className="rounded-md opacity-80"
          style={{
            width: size / 4,
            height: size / 4,
            backgroundColor: brandColors.orange,
          }}
        />
      </motion.div>

      <SquareCloudLogo className="absolute right-0 top-1/2 transform -translate-y-1/2" variant={variant} />
    </div>
  )
}

