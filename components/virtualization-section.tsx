"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function VirtualizationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal direction="left">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
                >
                  WHY Virtualization
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Transform Your IT Infrastructure
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Virtualization provides a company to reduce costs of IT investment and expenditure. It also
                    eliminates cost of data Center investment for SME and reduces maintenance cost of server.
                    Virtualization enables business to be innovative and efficient.
                  </p>
                  <p>
                    We offer a range of cloud services, enabling organizations to maximize value and innovation from the
                    cloud. With security and integration at the forefront of our cloud solutions, we work with clients
                    to adopt the right cloud solution and to make the adoption of cloud as seamless as possible.
                  </p>
                  <p>
                    We at Square InformatiX Ltd, draw on one of the strongest IT portfolios in the industry and the
                    experience we have gained successfully supporting corporate IT departments to leading businesses
                    enterprises countrywide. Using our experience of delivering IT services we will support you get the
                    most out of cloud for your organization.
                  </p>
                </div>
                <div className="pt-4">
                  <AnimatedGradientButton>
                    Learn More About Virtualization
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedGradientButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/placeholder.svg?height=550&width=550&text=Virtualization"
                  width={550}
                  height={550}
                  alt="Virtualization Benefits"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

