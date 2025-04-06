"use client"
import { motion } from "framer-motion"

interface AnimatedLogoProps {
  size?: number
  className?: string
}

export function AnimatedLogo({ size = 40, className = "" }: AnimatedLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Base square with rounded corners */}
      <motion.div
        className="absolute inset-0 bg-blue-600 rounded-lg"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />

      {/* Cloud elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-full opacity-30"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 2, 0, -2, 0],
          y: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-white rounded-full opacity-30"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -2, 0, 2, 0],
          y: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 0.5,
        }}
      />

      {/* Data flow animations */}
      <motion.div
        className="absolute h-[2px] bg-blue-200 rounded-full"
        style={{ width: size / 3, top: size / 2, left: size / 10 }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute h-[2px] bg-blue-200 rounded-full"
        style={{ width: size / 3, top: size / 3, right: size / 10 }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute w-[2px] bg-blue-200 rounded-full"
        style={{ height: size / 3, bottom: size / 10, left: size / 2.5 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 1.5,
        }}
      />
    </div>
  )
}

export function AnimatedLogoWithText({ size = 40, className = "" }: AnimatedLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <AnimatedLogo size={size} />
      <div className="font-bold text-xl">
        <span className="text-blue-600">SQUARE</span> Cloud
      </div>
    </div>
  )
}

