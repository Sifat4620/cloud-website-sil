"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-switcher"
import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { PartnersSection } from "@/components/partners-section"

export default function PartnersPage() {
  const { t, language } = useTranslation()

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Partner details
  const partners = [
    {
      name: "Nutanix",
      logo: "/placeholder.svg?height=100&width=200&text=Nutanix",
      description:
        "Nutanix delivers invisible infrastructure for next-generation enterprise computing by natively converging compute and storage into a single solution.",
      partnerSince: "2018",
    },
    {
      name: "Veeam",
      logo: "/placeholder.svg?height=100&width=200&text=Veeam",
      description:
        "Veeam provides backup, recovery and data management solutions that deliver modern data protection for cloud, virtual, physical, SaaS and Kubernetes environments.",
      partnerSince: "2017",
    },
    {
      name: "Cisco",
      logo: "/placeholder.svg?height=100&width=200&text=Cisco",
      description:
        "Cisco develops, manufactures, and sells networking hardware, software, telecommunications equipment and other high-technology services and products.",
      partnerSince: "2015",
    },
    {
      name: "DigiCert",
      logo: "/placeholder.svg?height=100&width=200&text=DigiCert",
      description:
        "DigiCert is a leading provider of scalable security solutions for a connected world, providing TLS/SSL, IoT and PKI solutions for identity and encryption.",
      partnerSince: "2019",
    },
    {
      name: "Barracuda",
      logo: "/placeholder.svg?height=100&width=200&text=Barracuda",
      description:
        "Barracuda Networks offers industry-leading solutions designed to solve mainstream IT problems, providing cloud-connected security and storage solutions.",
      partnerSince: "2016",
    },
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=100&width=200&text=Microsoft",
      description:
        "Microsoft develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      partnerSince: "2014",
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=100&width=200&text=AWS",
      description:
        "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services to businesses around the world.",
      partnerSince: "2016",
    },
    {
      name: "Google Cloud",
      logo: "/placeholder.svg?height=100&width=200&text=Google+Cloud",
      description:
        "Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.",
      partnerSince: "2018",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/partners" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Technology Partners</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    We collaborate with industry-leading technology providers to deliver the best cloud solutions for
                    your business.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <PartnersSection />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Strategic Partnerships</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Learn more about our strategic technology partnerships and how they benefit your business.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <ScrollReveal key={partner.name} delay={0.1 * index}>
                  <AnimatedCard className="flex flex-col h-full">
                    <div className="flex items-center justify-center h-32 mb-4 bg-muted/30 rounded-t-lg p-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={200}
                        height={100}
                        className="max-h-20 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <p className="text-sm text-muted-foreground">Partner since: {partner.partnerSince}</p>
                    </div>
                    <div className="p-4 pt-0">
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
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
                    Partnership Program
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Become a Partner</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our partner ecosystem and grow your business with SQUARE INFORMATIX. We offer comprehensive
                    support, training, and resources to help you succeed.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Access to exclusive partner resources and training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Joint marketing opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Dedicated partner support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Competitive compensation structure</span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedGradientButton>
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </AnimatedGradientButton>
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
                      src="/placeholder.svg?height=550&width=550"
                      width={550}
                      height={550}
                      alt="Partnership Opportunities"
                      className="rounded-lg object-cover"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-primary-foreground dark:bg-blue-900 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="100" height="100" fill="url(#gradient)" />
            </svg>
          </motion.div>

          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Partner With Us?</h2>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact our partnership team today to explore collaboration opportunities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="secondary" className="px-8">
                      Contact Partnership Team
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                    >
                      Download Partner Guide
                    </Button>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

