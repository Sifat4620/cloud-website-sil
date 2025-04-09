"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { useTranslation } from "@/components/language-switcher"
import { CostEstimator } from "@/components/cost-estimator"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactInfoSection } from "@/components/contact-info-section"

export default function CostEstimatorPage() {
  const { language } = useTranslation()

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/cost-estimator" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cloud Server Cost Estimator</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Configure your ideal cloud server and get an instant price estimate
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CostEstimator />

        <ContactInfoSection />
      </main>
      <SiteFooter />
    </div>
  )
}

