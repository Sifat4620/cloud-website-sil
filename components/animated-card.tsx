"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function AnimatedCard({ children, className, hoverEffect = true }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-lg border bg-background p-6 shadow-sm transition-all duration-300",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={
        hoverEffect
          ? {
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }
          : {}
      }
    >
      {children}
    </motion.div>
  )
}

