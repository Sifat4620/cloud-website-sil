"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { Cpu, MemoryStickIcon as Memory, HardDrive, Info, Wifi, Globe, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

interface ServerPackage {
  name: string
  cpu: string
  ram: string
  disk: string
  bandwidth: string
  ip: string
  os: string
  price: string
  popular?: boolean
}

export function ServerPackages() {
  const packages: ServerPackage[] = [
    {
      name: "Basic",
      cpu: "2 vCPU",
      ram: "2 GB",
      disk: "100 GB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "4510Tk.",
    },
    {
      name: "Standard",
      cpu: "4 vCPU",
      ram: "4 GB",
      disk: "300 GB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "7288Tk.",
      popular: true,
    },
    {
      name: "Professional",
      cpu: "8 vCPU",
      ram: "8 GB",
      disk: "500 GB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "11707Tk.",
    },
    {
      name: "Advanced",
      cpu: "8 vCPU",
      ram: "16 GB",
      disk: "1 TB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "22077Tk.",
    },
  ]

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg, index) => (
          <ScrollReveal key={pkg.name} delay={0.1 * index}>
            {pkg.popular ? (
              <motion.div className="relative" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Most Popular
                </motion.div>
                <AnimatedCard className="flex flex-col h-full bg-primary text-primary-foreground border-2 border-primary">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Details</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click for more details about the {pkg.name} package</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-primary-foreground/80" />
                        <span>{pkg.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Memory className="h-5 w-5 text-primary-foreground/80" />
                        <span>{pkg.ram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="h-5 w-5 text-primary-foreground/80" />
                        <span>{pkg.disk}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="h-5 w-5 text-primary-foreground/80" />
                        <span>Bandwidth: {pkg.bandwidth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary-foreground/80" />
                        <span>{pkg.ip}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary-foreground/80" />
                        <span>{pkg.os}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="text-3xl font-bold mb-4">
                        {pkg.price}
                        <span className="text-sm font-normal text-primary-foreground/80">/month</span>
                      </div>
                      <div className="grid gap-2">
                        <Link href={`/services/details?package=${pkg.name.toLowerCase()}`}>
                          <Button variant="secondary" className="w-full">
                            Details!
                          </Button>
                        </Link>
                        <Link href={`/services/buy?package=${pkg.name.toLowerCase()}`}>
                          <Button
                            variant="outline"
                            className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white"
                          >
                            BUY NOW
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ) : (
              <AnimatedCard className="flex flex-col h-full border-2 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Info className="h-4 w-4" />
                            <span className="sr-only">Details</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Click for more details about the {pkg.name} package</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      <span>{pkg.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Memory className="h-5 w-5 text-primary" />
                      <span>{pkg.ram}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-5 w-5 text-primary" />
                      <span>{pkg.disk}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span>Bandwidth: {pkg.bandwidth}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span>{pkg.ip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      <span>{pkg.os}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="text-3xl font-bold mb-4">
                      {pkg.price}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="grid gap-2">
                      <Link href={`/services/details?package=${pkg.name.toLowerCase()}`}>
                        <Button variant="outline" className="w-full">
                          Details!
                        </Button>
                      </Link>
                      <Link href={`/services/buy?package=${pkg.name.toLowerCase()}`}>
                        <Button variant="default" className="w-full">
                          BUY NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            )}
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

