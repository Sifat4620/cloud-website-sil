"use client"

import { useTranslation } from "@/components/language-switcher"
import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactInfoSection } from "@/components/contact-info-section"
import { PaymentMethods } from "@/components/payment-methods"
import { CostEstimator } from "@/components/cost-estimator"

export default function PricingPage() {
  const { t, language } = useTranslation()

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/pricing" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Custom Server Configuration</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Build your own server with our interactive cost estimator and get an instant price estimate.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <CostEstimator />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Payment Methods</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We accept various payment methods for your convenience
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto max-w-3xl py-12">
              <PaymentMethods />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Find answers to common questions about our pricing and services.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
              {[
                {
                  question: "How does the 14-day free trial work?",
                  answer:
                    "Our 14-day free trial gives you full access to all features of your selected configuration. No credit card is required to start, and you can cancel anytime before the trial ends without being charged.",
                },
                {
                  question: "Can I upgrade or downgrade my server configuration?",
                  answer:
                    "Yes, you can upgrade or downgrade your server configuration at any time. When upgrading, the new pricing will be prorated for the remainder of your billing cycle. When downgrading, the new pricing will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Do you offer custom configurations beyond what's in the estimator?",
                  answer:
                    "Yes, we offer custom configurations for organizations with specific requirements. Contact our sales team to discuss your needs and get a tailored solution.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing with net-30 terms.",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <div className="rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                    <div className="grid gap-4">
                      <h3 className="text-xl font-bold">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <ContactInfoSection />
      </main>
      <SiteFooter />
    </div>
  )
}

