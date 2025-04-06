"use client"

import { motion } from "framer-motion"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PartnersSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-primary/50"></div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mx-4 text-3xl font-bold tracking-tighter text-primary md:text-4xl"
                >
                  OUR PARTNERS
                </motion.h2>
                <div className="h-px w-12 bg-primary/50"></div>
              </div>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We collaborate with industry leaders to deliver the best cloud solutions for businesses in Bangladesh
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <PartnersCarousel />
        </div>
      </div>
    </section>
  )
}

