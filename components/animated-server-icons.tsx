"use client"
import { motion } from "framer-motion"
import { Server, Database, HardDrive } from "lucide-react"

interface AnimatedServerIconProps {
  className?: string
}

export function AnimatedServerIcon({ className = "" }: AnimatedServerIconProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        initial={{ y: 0 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <Server className="h-10 w-10 text-blue-600" />

        {/* Data flow animations */}
        <motion.div
          className="absolute h-[2px] bg-blue-200 rounded-full"
          style={{ width: 15, top: 12, right: -15 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute h-[2px] bg-blue-200 rounded-full"
          style={{ width: 15, top: 20, left: -15 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  )
}

export function AnimatedDatabaseIcon({ className = "" }: AnimatedServerIconProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        initial={{ y: 0 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <Database className="h-10 w-10 text-blue-600" />

        {/* Data flow animations */}
        <motion.div
          className="absolute w-[2px] bg-blue-200 rounded-full"
          style={{ height: 10, bottom: -10, left: 15 }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute w-[2px] bg-blue-200 rounded-full"
          style={{ height: 10, bottom: -10, right: 15 }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  )
}

export function AnimatedStorageIcon({ className = "" }: AnimatedServerIconProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        initial={{ y: 0 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <HardDrive className="h-10 w-10 text-blue-600" />

        {/* Data flow animations */}
        <motion.div
          className="absolute h-[2px] bg-blue-200 rounded-full"
          style={{ width: 15, top: 15, right: -15 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 0.2,
          }}
        />

        <motion.div
          className="absolute h-[2px] bg-blue-200 rounded-full"
          style={{ width: 15, top: 15, left: -15 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 0.7,
          }}
        />
      </motion.div>
    </div>
  )
}

export function ServerCluster({ className = "" }: AnimatedServerIconProps) {
  return (
    <div className={`flex items-center justify-center gap-8 ${className}`}>
      <AnimatedServerIcon />
      <AnimatedDatabaseIcon />
      <AnimatedStorageIcon />
    </div>
  )
}

