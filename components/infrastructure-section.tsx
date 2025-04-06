"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { Server, Network, Globe, Shield, Link, Users } from "lucide-react"

export function InfrastructureSection() {
  const infrastructureFeatures = [
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Powerful Infrastructure Options",
      description:
        "Custom colo racks, dedicated servers and cloud with a wide range of storage, backup, security and network Products.",
    },
    {
      icon: <Network className="h-6 w-6 text-primary" />,
      title: "Well Connected Networks",
      description: "We don't just connect you multiple carriers, we are also a carrier in our own right.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multiple Data Center",
      description:
        "We have three data centers right here in Bangladesh and have the ability to extend to global zones.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Compliance",
      description: "Both hardware(SED) and software and meets HIPA, PCIDSS and SOX standard.",
    },
    {
      icon: <Link className="h-6 w-6 text-primary" />,
      title: "Seamless Infrastructure Extension",
      description:
        "We connect your non-prem networks and stretch your environment into ours, kepping your security and network zones intact.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "We Extend Your IT Team",
      description: "With our operations team available around the clock, you only need one number to call.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              >
                Square Cloud Infrastructure
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Enterprise-Grade Infrastructure</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Built for reliability, security, and performance to power your business applications
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {infrastructureFeatures.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1 * (index % 3)}>
              <AnimatedCard>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

