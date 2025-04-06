"use client"

import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-switcher"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { ContactInfoSection } from "@/components/contact-info-section"
import { PaymentMethods } from "@/components/payment-methods"

export default function PricingPage() {
  const { t, language } = useTranslation()
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual")
  const [serviceType, setServiceType] = useState<"virtual" | "physical" | "colocation" | "mail" | "backup">("virtual")

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const serviceOptions = [
    { id: "virtual", label: "Virtual Servers" },
    { id: "physical", label: "Physical Cloud Servers" },
    { id: "colocation", label: "Co-location Services" },
    { id: "mail", label: "Secure Mail Hosting" },
    { id: "backup", label: "Backup & Recovery" },
  ]

  const pricingPlans = {
    virtual: [
      {
        name: "Starter",
        monthlyPrice: 49,
        annualPrice: 39,
        description: "Perfect for small businesses and startups.",
        features: ["2 vCPUs", "4 GB RAM", "80 GB SSD Storage", "2 TB Transfer", "1 Database", "Basic Support"],
      },
      {
        name: "Professional",
        monthlyPrice: 99,
        annualPrice: 79,
        description: "Ideal for growing businesses and teams.",
        features: ["4 vCPUs", "8 GB RAM", "160 GB SSD Storage", "5 TB Transfer", "3 Databases", "Priority Support"],
        popular: true,
      },
      {
        name: "Enterprise",
        monthlyPrice: 249,
        annualPrice: 199,
        description: "For large organizations with advanced needs.",
        features: [
          "8 vCPUs",
          "16 GB RAM",
          "320 GB SSD Storage",
          "10 TB Transfer",
          "Unlimited Databases",
          "24/7 Dedicated Support",
        ],
      },
    ],
    physical: [
      {
        name: "Basic",
        monthlyPrice: 199,
        annualPrice: 159,
        description: "Entry-level dedicated server for small businesses.",
        features: [
          "4 Core CPU",
          "16 GB RAM",
          "1 TB SSD Storage",
          "5 TB Transfer",
          "RAID Configuration",
          "Basic Support",
        ],
      },
      {
        name: "Advanced",
        monthlyPrice: 349,
        annualPrice: 279,
        description: "Powerful server for demanding applications.",
        features: [
          "8 Core CPU",
          "32 GB RAM",
          "2 TB SSD Storage",
          "10 TB Transfer",
          "RAID Configuration",
          "Priority Support",
        ],
        popular: true,
      },
      {
        name: "Premium",
        monthlyPrice: 599,
        annualPrice: 479,
        description: "High-performance server for enterprise workloads.",
        features: [
          "16 Core CPU",
          "64 GB RAM",
          "4 TB SSD Storage",
          "Unlimited Transfer",
          "RAID Configuration",
          "24/7 Dedicated Support",
        ],
      },
    ],
    colocation: [
      {
        name: "Quarter Rack",
        monthlyPrice: 299,
        annualPrice: 239,
        description: "Perfect for small deployments.",
        features: [
          "10U Rack Space",
          "2 kW Power",
          "1 Gbps Network",
          "24/7 Access",
          "Basic Remote Hands",
          "Standard Support",
        ],
      },
      {
        name: "Half Rack",
        monthlyPrice: 549,
        annualPrice: 439,
        description: "Ideal for medium-sized infrastructure.",
        features: [
          "21U Rack Space",
          "4 kW Power",
          "2 Gbps Network",
          "24/7 Access",
          "Advanced Remote Hands",
          "Priority Support",
        ],
        popular: true,
      },
      {
        name: "Full Rack",
        monthlyPrice: 999,
        annualPrice: 799,
        description: "Complete rack for enterprise deployments.",
        features: [
          "42U Rack Space",
          "8 kW Power",
          "10 Gbps Network",
          "24/7 Access",
          "Premium Remote Hands",
          "24/7 Dedicated Support",
        ],
      },
    ],
    mail: [
      {
        name: "Basic",
        monthlyPrice: 5,
        annualPrice: 4,
        description: "Per user pricing for small teams.",
        features: [
          "10 GB Mailbox",
          "Custom Domain",
          "Webmail Access",
          "Mobile Sync",
          "Spam Protection",
          "Email Support",
        ],
      },
      {
        name: "Business",
        monthlyPrice: 10,
        annualPrice: 8,
        description: "Advanced features for businesses.",
        features: [
          "50 GB Mailbox",
          "Multiple Domains",
          "Advanced Security",
          "Email Archiving",
          "Shared Calendars",
          "Priority Support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        monthlyPrice: 15,
        annualPrice: 12,
        description: "Complete solution for large organizations.",
        features: [
          "100 GB Mailbox",
          "Unlimited Domains",
          "Advanced Threat Protection",
          "Legal Hold",
          "Data Loss Prevention",
          "24/7 Dedicated Support",
        ],
      },
    ],
    backup: [
      {
        name: "Essential",
        monthlyPrice: 29,
        annualPrice: 23,
        description: "Basic backup for critical data.",
        features: [
          "500 GB Storage",
          "Daily Backups",
          "30-Day Retention",
          "File-Level Recovery",
          "Basic Encryption",
          "Standard Support",
        ],
      },
      {
        name: "Advanced",
        monthlyPrice: 59,
        annualPrice: 47,
        description: "Comprehensive backup solution.",
        features: [
          "2 TB Storage",
          "Hourly Backups",
          "90-Day Retention",
          "System-Level Recovery",
          "Advanced Encryption",
          "Priority Support",
        ],
        popular: true,
      },
      {
        name: "Complete",
        monthlyPrice: 119,
        annualPrice: 95,
        description: "Enterprise-grade backup and recovery.",
        features: [
          "5 TB Storage",
          "Continuous Backups",
          "1-Year Retention",
          "Instant Recovery",
          "End-to-End Encryption",
          "24/7 Dedicated Support",
        ],
      },
    ],
  }

  const currentPlans = pricingPlans[serviceType]

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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Choose the plan that's right for your business. All plans include a 14-day free trial.
                  </p>
                </div>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row bg-muted/50 p-1 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    variant={billingPeriod === "monthly" ? "default" : "ghost"}
                    onClick={() => setBillingPeriod("monthly")}
                  >
                    Monthly Billing
                  </Button>
                  <Button
                    variant={billingPeriod === "annual" ? "default" : "ghost"}
                    onClick={() => setBillingPeriod("annual")}
                  >
                    Annual Billing (Save 20%)
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cloud Server Pricing</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Choose the perfect cloud server package for your business needs with transparent pricing
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {serviceOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant={serviceType === option.id ? "default" : "outline"}
                      onClick={() => setServiceType(option.id as any)}
                      className="min-w-[150px]"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {currentPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={0.1 * (index + 1)}>
                  {plan.popular ? (
                    <motion.div
                      className="relative"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        Most Popular
                      </motion.div>
                      <AnimatedCard className="flex flex-col justify-between h-full bg-primary text-primary-foreground">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <div className="space-y-2">
                            <p className="text-4xl font-bold">
                              ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                              <span className="text-sm font-normal text-primary-foreground/80">/month</span>
                            </p>
                            <p className="text-sm text-primary-foreground/80">{plan.description}</p>
                          </div>
                          <ul className="grid gap-2 text-sm">
                            {plan.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.05 * featureIndex }}
                                className="flex items-center gap-2"
                              >
                                <Check className="h-4 w-4" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-6">
                          <Button variant="secondary" className="w-full">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </AnimatedCard>
                    </motion.div>
                  ) : (
                    <AnimatedCard className="flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="space-y-2">
                          <p className="text-4xl font-bold">
                            ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                            <span className="text-sm font-normal text-muted-foreground">/month</span>
                          </p>
                          <p className="text-sm text-muted-foreground">{plan.description}</p>
                        </div>
                        <ul className="grid gap-2 text-sm">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.05 * featureIndex }}
                              className="flex items-center gap-2"
                            >
                              <Check className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6">
                        <AnimatedGradientButton className="w-full">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </AnimatedGradientButton>
                      </div>
                    </AnimatedCard>
                  )}
                </ScrollReveal>
              ))}
            </div>
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
                    "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel anytime before the trial ends without being charged.",
                },
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new pricing will be prorated for the remainder of your billing cycle. When downgrading, the new pricing will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Do you offer custom plans?",
                  answer:
                    "Yes, we offer custom plans for organizations with specific requirements. Contact our sales team to discuss your needs and get a tailored solution.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing with net-30 terms.",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <AnimatedCard className="grid gap-4">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AnimatedCard>
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

