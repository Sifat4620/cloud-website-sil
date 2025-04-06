"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { Shield, Globe, Network, Sliders, Scale, Lock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Reliable",
      description: "Fully redundant power and infrastructure will assure you reliable service",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Secure",
      description:
        "Data is protected and secured using tools like Cloud Security Groups and private networking capabilities. Multi factor authentication adds extra security.",
    },
    {
      icon: <Network className="h-6 w-6 text-primary" />,
      title: "Hybrid Capability",
      description: "Easily integrate with public and private clouds and dedicated servers.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Data centers Availability",
      description:
        "Access to multiple world-class data centers across the country allows you to deploy your applications close to your users to reduce latency.",
    },
    {
      icon: <Sliders className="h-6 w-6 text-primary" />,
      title: "Flexible Options",
      description:
        "Choice of flavors, form factors and storage optimized for popular workloads, so you can find the right fit for your needs.",
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: "Scale on Demand",
      description:
        "Quickly and easily scale up or down using native automation capabilities which can help to distribute workloads",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10" id="features">
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
                FEATURES
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Enterprise-Grade Cloud Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive cloud platform provides all the tools and services you need to build, deploy, and
                scale your applications.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
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

