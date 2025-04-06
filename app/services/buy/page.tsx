"use client"

import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PaymentMethods } from "@/components/payment-methods"

export default function BuyServerPage() {
  const searchParams = useSearchParams()
  const packageName = searchParams.get("package") || "basic"

  // Capitalize first letter
  const formattedPackageName = packageName.charAt(0).toUpperCase() + packageName.slice(1)

  // Package details based on name
  const packageDetails = {
    basic: {
      name: "Basic",
      cpu: "2 vCPU",
      ram: "2 GB",
      disk: "100 GB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "4510Tk.",
    },
    standard: {
      name: "Standard",
      cpu: "4 vCPU",
      ram: "4 GB",
      disk: "300 GB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "7288Tk.",
    },
    professional: {
      name: "Professional",
      cpu: "8 vCPU",
      ram: "8 GB",
      disk: "500 GB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "11707Tk.",
    },
    advanced: {
      name: "Advanced",
      cpu: "8 vCPU",
      ram: "16 GB",
      disk: "1 TB",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      price: "22077Tk.",
    },
  }

  const details = packageDetails[packageName as keyof typeof packageDetails] || packageDetails.basic

  const [billingCycle, setBillingCycle] = useState("monthly")
  const [step, setStep] = useState(1)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeTransition />
      <SiteHeader currentPath="/services" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-background dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Link href="/services#rent-server">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Server Packages
                </Button>
              </Link>
            </div>

            <ScrollReveal>
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
                  >
                    Purchase
                  </motion.div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Purchase {details.name} Server</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Complete your order for the {details.name.toLowerCase()} cloud server with SQUARE INFORMATIX
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="space-y-8">
                    {/* Step indicator */}
                    <div className="flex items-center mb-8">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
                      >
                        1
                      </div>
                      <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
                      >
                        2
                      </div>
                      <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
                      >
                        3
                      </div>
                    </div>

                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Configure Your Server</h2>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="hostname">Hostname</Label>
                            <Input id="hostname" placeholder="e.g., myserver.example.com" />
                          </div>

                          <div>
                            <Label>Operating System</Label>
                            <RadioGroup defaultValue="ubuntu" className="grid grid-cols-2 gap-4 mt-2">
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="ubuntu" id="ubuntu" />
                                <Label htmlFor="ubuntu">Ubuntu 22.04 LTS</Label>
                              </div>
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="centos" id="centos" />
                                <Label htmlFor="centos">CentOS 9 Stream</Label>
                              </div>
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="debian" id="debian" />
                                <Label htmlFor="debian">Debian 11</Label>
                              </div>
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="windows" id="windows" />
                                <Label htmlFor="windows">Windows Server 2022</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div>
                            <Label>Billing Cycle</Label>
                            <RadioGroup
                              defaultValue="monthly"
                              value={billingCycle}
                              onValueChange={setBillingCycle}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                            >
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly">Monthly</Label>
                              </div>
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="quarterly" id="quarterly" />
                                <Label htmlFor="quarterly">Quarterly (5% off)</Label>
                              </div>
                              <div className="flex items-center space-x-2 border rounded-md p-3">
                                <RadioGroupItem value="yearly" id="yearly" />
                                <Label htmlFor="yearly">Yearly (15% off)</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="pt-4">
                            <Button onClick={() => setStep(2)} className="w-full md:w-auto">
                              Continue to Customer Information
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Customer Information</h2>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="+880 1XXX-XXXXXX" />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="company">Company Name (Optional)</Label>
                            <Input id="company" placeholder="Your Company Ltd." />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="123 Main St" />
                          </div>
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Dhaka" />
                          </div>
                          <div>
                            <Label htmlFor="zip">Postal Code</Label>
                            <Input id="zip" placeholder="1000" />
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button variant="outline" onClick={() => setStep(1)}>
                            Back
                          </Button>
                          <Button onClick={() => setStep(3)}>Continue to Payment</Button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Payment Information</h2>

                        <div className="space-y-4">
                          <div>
                            <Label>Payment Method</Label>
                            <div className="mt-4">
                              <PaymentMethods />
                            </div>
                          </div>

                          <div className="pt-6">
                            <div className="bg-muted/30 p-4 rounded-lg mb-6">
                              <h3 className="font-medium mb-2">Payment Instructions</h3>
                              <p className="text-sm text-muted-foreground">
                                After clicking "Complete Order", you will receive an email with payment instructions for
                                your selected payment method. Your server will be provisioned once payment is confirmed.
                              </p>
                            </div>

                            <div className="flex gap-3">
                              <Button variant="outline" onClick={() => setStep(2)}>
                                Back
                              </Button>
                              <AnimatedGradientButton>Complete Order</AnimatedGradientButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>

              <div>
                <ScrollReveal>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Package</span>
                        <span className="font-medium">{details.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CPU</span>
                        <span>{details.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">RAM</span>
                        <span>{details.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Storage</span>
                        <span>{details.disk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bandwidth</span>
                        <span>{details.bandwidth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">IP Address</span>
                        <span>{details.ip}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Billing Cycle</span>
                        <span className="capitalize">{billingCycle}</span>
                      </div>

                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>
                            {billingCycle === "monthly" && details.price}
                            {billingCycle === "quarterly" &&
                              `${Math.round(Number.parseInt(details.price) * 3 * 0.95)}Tk.`}
                            {billingCycle === "yearly" &&
                              `${Math.round(Number.parseInt(details.price) * 12 * 0.85)}Tk.`}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground text-right mt-1">
                          {billingCycle === "quarterly" && "(5% discount applied)"}
                          {billingCycle === "yearly" && "(15% discount applied)"}
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>24/7 technical support</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>99.9% uptime guarantee</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Free setup</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Automated backups</span>
                      </div>
                    </div>

                    <div className="mt-6 text-sm text-muted-foreground">
                      <p>Need help with your order?</p>
                      <p>Contact our sales team at +88017 0120 2666</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

