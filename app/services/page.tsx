"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { ServerCluster } from "@/components/animated-server-icons"
import { useTranslation } from "@/components/language-switcher"
import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { AnimatedArrow } from "@/components/animated-arrow"
import { ContactInfoSection } from "@/components/contact-info-section"
import { ServerPackages } from "@/components/server-packages"

export default function ServicesPage() {
  const { t, language } = useTranslation()

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/services" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Cloud Services</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Comprehensive cloud solutions designed to meet the needs of modern businesses in Bangladesh.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ServerCluster className="py-8" />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="rent-server" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
                  >
                    Rent A Server
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cloud Server Packages</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Choose the perfect cloud server package for your business needs
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ServerPackages />

            <div className="mt-16">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <ScrollReveal direction="left">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Why Choose Our Cloud Servers?</h3>
                    <p className="text-muted-foreground">
                      Our virtual servers provide the perfect balance of performance, reliability, and value. With
                      flexible configurations and transparent pricing, you can find the ideal solution for your business
                      needs.
                    </p>
                    <ul className="grid gap-2">
                      {[
                        "Instant provisioning",
                        "Multiple regions across Bangladesh",
                        "Dedicated CPU and memory options",
                        "99.99% uptime guarantee",
                        "24/7 technical support",
                        "Flexible billing options",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <AnimatedGradientButton>
                        Learn More
                        <AnimatedArrow className="ml-2" />
                      </AnimatedGradientButton>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right">
                  <div className="flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/placeholder.svg?height=500&width=500&text=Virtual+Servers"
                        width={500}
                        height={500}
                        alt="Cloud Servers"
                        className="rounded-lg object-cover"
                      />
                    </motion.div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section id="colocation" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollReveal direction="left" className="order-last lg:order-first">
                <div className="flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-xl"
                  >
                    <Image
                      src="/placeholder.svg?height=500&width=500&text=Co-location"
                      width={500}
                      height={500}
                      alt="Co-location Services"
                      className="rounded-lg object-cover"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    Data Center
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Co-location Service</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    House your hardware in our state-of-the-art data centers with 24/7 monitoring and support. Benefit
                    from our enterprise-grade infrastructure without the capital investment.
                  </p>
                  <ul className="grid gap-2">
                    {[
                      "Secure facility with biometric access",
                      "Redundant power and cooling",
                      "Multiple network connectivity options",
                      "24/7 on-site technical support",
                      "Flexible rack space options",
                      "Remote hands service available",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedGradientButton>
                      Learn More
                      <AnimatedArrow className="ml-2" />
                    </AnimatedGradientButton>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="mail-hosting" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    Email Solutions
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Secure Mail Hosting</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Enterprise-grade email hosting with advanced security features and spam protection. Keep your
                    business communications secure and reliable.
                  </p>
                  <ul className="grid gap-2">
                    {[
                      "Custom domain email addresses",
                      "Advanced spam and virus filtering",
                      "Large mailbox storage",
                      "Mobile device compatibility",
                      "Webmail access",
                      "Email archiving and retention policies",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedGradientButton>
                      Learn More
                      <AnimatedArrow className="ml-2" />
                    </AnimatedGradientButton>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-xl"
                  >
                    <Image
                      src="/placeholder.svg?height=500&width=500&text=Secure+Mail"
                      width={500}
                      height={500}
                      alt="Secure Mail Hosting"
                      className="rounded-lg object-cover"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <ContactInfoSection />
      </main>
      <SiteFooter />
    </div>
  )
}

