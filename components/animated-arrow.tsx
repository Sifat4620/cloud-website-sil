"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface AnimatedArrowProps {
  className?: string
}

export function AnimatedArrow({ className = "" }: AnimatedArrowProps) {
  return (
    <motion.div
      className={`inline-flex ${className}`}
      initial={{ x: 0 }}
      animate={{
        x: [0, 5, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <ArrowRight className="h-4 w-4" />
    </motion.div>
  )
}

