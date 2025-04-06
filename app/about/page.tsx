"use client"

import Image from "next/image"
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react"
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
import { AnimatedFeatureIcon } from "@/components/animated-feature-icon"

export default function AboutPage() {
  const { t, language } = useTranslation()

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/about" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Story</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Founded in 2015, SQUARE INFORMATIX has been at the forefront of cloud innovation, helping
                      businesses of all sizes transform their infrastructure.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedGradientButton size="lg">
                      Join Our Team
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
                      alt="Team Photo"
                      className="rounded-lg object-cover"
                    />
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
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
                    Our Mission
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Mission</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're on a mission to make cloud infrastructure accessible, reliable, and scalable for businesses of
                    all sizes. Our goal is to empower organizations to focus on their core business while we handle the
                    complexities of cloud technology.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Customer-Centric",
                  description:
                    "We put our customers first, designing solutions that address their specific needs and challenges.",
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, from our technology to our customer support.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-primary" />,
                  title: "Innovation",
                  description:
                    "We continuously innovate to stay ahead of the curve and provide cutting-edge solutions.",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <AnimatedCard className="flex flex-col justify-center space-y-4">
                    <AnimatedFeatureIcon icon={item.icon} />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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
                    Our Team
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Meet the People Behind SQUARE INFORMATIX
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our diverse team of experts is passionate about cloud technology and dedicated to helping our
                    customers succeed.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedGradientButton>
                      Join Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </AnimatedGradientButton>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {[
                    { name: "Sarah Johnson", role: "CEO & Founder" },
                    { name: "Michael Chen", role: "CTO" },
                    { name: "David Rodriguez", role: "COO" },
                    { name: "Emily Patel", role: "VP of Engineering" },
                    { name: "James Wilson", role: "VP of Sales" },
                    { name: "Sophia Kim", role: "VP of Marketing" },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div className="overflow-hidden rounded-full border-2 border-primary/20">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=${member.name.charAt(0)}`}
                          width={100}
                          height={100}
                          alt={member.name}
                          className="aspect-square object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollReveal direction="left" className="order-last lg:order-first">
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
                      alt="Company Timeline"
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
                    Our Journey
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    From Startup to Industry Leader
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        year: "2015",
                        title: "Founded",
                        description: "SQUARE INFORMATIX was founded with a vision to simplify cloud infrastructure.",
                      },
                      {
                        year: "2017",
                        title: "Series A Funding",
                        description: "Secured $10M in Series A funding to expand our services.",
                      },
                      {
                        year: "2019",
                        title: "Global Expansion",
                        description: "Expanded operations to Europe and Asia to serve global customers.",
                      },
                      {
                        year: "2021",
                        title: "Series B Funding",
                        description: "Raised $50M in Series B funding to accelerate growth and innovation.",
                      },
                      {
                        year: "2023",
                        title: "Industry Recognition",
                        description: "Named a leader in cloud infrastructure by industry analysts.",
                      },
                    ].map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="grid grid-cols-[25px_1fr] items-start gap-2"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold">
                            {milestone.year}: {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Team</h2>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're always looking for talented individuals to join our team. Check out our open positions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="secondary" className="px-8">
                      View Open Positions
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                    >
                      Learn About Our Culture
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

