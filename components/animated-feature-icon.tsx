"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedFeatureIconProps {
  icon: ReactNode
  color?: string
}

export function AnimatedFeatureIcon({ icon, color = "primary" }: AnimatedFeatureIconProps) {
  return (
    <motion.div
      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${color}/10`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
    >
      {icon}
    </motion.div>
  )
}

