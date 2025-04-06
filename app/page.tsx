"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypingEffect } from "@/components/typing-effect"
import { AnimatedArrow } from "@/components/animated-arrow"
import { useTranslation } from "@/components/language-switcher"
import { useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { ThemeTransition } from "@/components/theme-transition"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PartnersSection } from "@/components/partners-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactInfoSection } from "@/components/contact-info-section"
import Link from "next/link"

export default function Home() {
  const { t, language } = useTranslation()

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      <TypingEffect text="Cloud Solutions for Your Business" />
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Scalable, secure, and reliable cloud services to power your applications and infrastructure in
                      Bangladesh.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/services#rent-server">
                      <AnimatedGradientButton size="lg" className="px-8">
                        Rent A Server
                        <AnimatedArrow className="ml-2" />
                      </AnimatedGradientButton>
                    </Link>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src="/placeholder.svg?height=550&width=550&text=Square+Cloud"
                      width={550}
                      height={550}
                      alt="SQUARE INFORMATIX Cloud Services Dashboard"
                      className="rounded-lg object-cover relative z-10 shadow-xl"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Partners Section */}
        <PartnersSection />

        {/* Contact Info Section */}
        <ContactInfoSection />
      </main>
      <SiteFooter />
    </div>
  )
}

