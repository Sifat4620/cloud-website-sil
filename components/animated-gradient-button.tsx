"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedGradientButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  type?: "button" | "submit" | "reset"
}

export function AnimatedGradientButton({
  children,
  className,
  onClick,
  variant = "default",
  size = "default",
  type = "button",
}: AnimatedGradientButtonProps) {
  return (
    <div className="relative group">
      <motion.div
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-sm group-hover:opacity-100 transition duration-1000"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <Button
        className={cn("relative hover:scale-105 transition-transform", className)}
        onClick={onClick}
        variant={variant}
        size={size}
        type={type}
      >
        {children}
      </Button>
    </div>
  )
}

