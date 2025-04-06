"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface DevOpsIcon {
  src: string
  size: number
  position: {
    x: number
    y: number
  }
  delay: number
}

export function FloatingDevOpsIcons() {
  const [icons, setIcons] = useState<DevOpsIcon[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const devOpsImages = [
      "/images/devops/docker.png",
      "/images/devops/kubernetes.png",
      "/images/devops/aws.png",
      "/images/devops/terraform.png",
      "/images/devops/jenkins.png",
      "/images/devops/terraform-alt.png",
    ]

    // Create random icons
    const newIcons: DevOpsIcon[] = []

    for (let i = 0; i < devOpsImages.length; i++) {
      newIcons.push({
        src: devOpsImages[i],
        size: 30 + Math.random() * 20,
        position: {
          x: Math.random() * 100, // % of viewport width
          y: Math.random() * 100, // % of viewport height
        },
        delay: Math.random() * 5,
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-[-2] opacity-10">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${icon.position.x}%`,
            top: `${icon.position.y}%`,
          }}
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: icon.delay,
          }}
        >
          <div className="relative" style={{ width: `${icon.size}px`, height: `${icon.size}px` }}>
            <Image
              src={icon.src || "/placeholder.svg"}
              alt="DevOps Tool"
              width={icon.size}
              height={icon.size}
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

