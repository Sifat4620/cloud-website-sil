"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedAzureStyleProps {
  className?: string
}

export function AnimatedAzureStyle({ className = "" }: AnimatedAzureStyleProps) {
  return (
    <div className={`relative overflow-hidden w-full h-[200px] ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100"></div>

      {/* Moving cloud elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-12 h-12 bg-blue-600 rounded-lg opacity-80"
        initial={{ x: -50 }}
        animate={{
          x: ["calc(-5%)", "calc(105%)"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-0 w-8 h-8 bg-blue-500 rounded-lg opacity-60"
        initial={{ x: -30 }}
        animate={{
          x: ["calc(-5%)", "calc(105%)"],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-0 w-10 h-10 bg-blue-400 rounded-lg opacity-70"
        initial={{ x: -40 }}
        animate={{
          x: ["calc(-5%)", "calc(105%)"],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
          delay: 1,
        }}
      />

      {/* Data flow lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-blue-300"
          style={{
            top: `${20 + i * 15}%`,
            left: 0,
            width: "100%",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* SQUARE Cloud logo moving across */}
      <motion.div
        className="absolute flex items-center justify-center bg-white p-2 rounded-lg shadow-md"
        style={{ top: "40%", left: 0 }}
        initial={{ x: -100 }}
        animate={{
          x: ["calc(-10%)", "calc(110%)"],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">SQ</span>
          </div>
          <span className="font-bold text-sm text-blue-600">SQUARE Cloud</span>
        </div>
      </motion.div>
    </div>
  )
}

export function AnimatedGif({ className = "" }: AnimatedAzureStyleProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 100)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`relative overflow-hidden w-full h-[300px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg ${className}`}
    >
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Server rack visualization */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-8 bg-gray-800 rounded-sm border border-gray-700 flex items-center px-2"
            style={{ top: i * 10 }}
            animate={{
              backgroundColor: i === Math.floor(count / 12) % 8 ? "#3B82F6" : "#1F2937",
              borderColor: i === Math.floor(count / 12) % 8 ? "#60A5FA" : "#374151",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-2 items-center">
              <div
                className={`w-2 h-2 rounded-full ${i === Math.floor(count / 12) % 8 ? "bg-green-400" : "bg-red-400"}`}
              ></div>
              <span className="text-xs text-white font-mono">SERVER_{i.toString().padStart(2, "0")}</span>
            </div>
            <div className="ml-auto flex gap-1">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className={`w-1 h-3 ${
                    Math.random() > 0.5 ? "bg-green-400" : "bg-blue-400"
                  } opacity-${Math.floor(Math.random() * 100)}`}
                ></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connection lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] bg-blue-400"
          style={{
            top: `${30 + i * 10}%`,
            left: 0,
            width: "100%",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* SQUARE Cloud logo */}
      <motion.div
        className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg"
        animate={{
          y: [0, -5, 0],
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">SQ</span>
          </div>
          <span className="font-bold text-sm text-blue-600">SQUARE Cloud</span>
        </div>
      </motion.div>
    </div>
  )
}

