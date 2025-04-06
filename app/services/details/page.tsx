"use client"

import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeTransition } from "@/components/theme-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import {
  ArrowLeft,
  Check,
  Cpu,
  MemoryStickIcon as Memory,
  HardDrive,
  Shield,
  Clock,
  Wifi,
  Globe,
  Server,
} from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ServerDetailsPage() {
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
      price: "4510Tk.",
      network: "1 Gbps",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      backup: "Weekly",
      support: "Standard",
      features: [
        "Linux or Windows OS",
        "99.9% uptime guarantee",
        "Firewall protection",
        "Control panel access",
        "Automated backups",
        "24/7 monitoring",
        "Bandwidth (UnMetered): 100 Mbps (Port)",
        "IPv4 Addresses: 1 IP",
      ],
    },
    standard: {
      name: "Standard",
      cpu: "4 vCPU",
      ram: "4 GB",
      disk: "300 GB",
      price: "7288Tk.",
      network: "1 Gbps",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      backup: "Daily",
      support: "Priority",
      features: [
        "Linux or Windows OS",
        "99.9% uptime guarantee",
        "Advanced firewall protection",
        "Control panel access",
        "Automated backups",
        "24/7 monitoring",
        "Load balancing",
        "Snapshot capability",
        "Bandwidth (UnMetered): 100 Mbps (Port)",
        "IPv4 Addresses: 1 IP",
      ],
    },
    professional: {
      name: "Professional",
      cpu: "8 vCPU",
      ram: "8 GB",
      disk: "500 GB",
      price: "11707Tk.",
      network: "2 Gbps",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      backup: "Daily",
      support: "Priority",
      features: [
        "Linux or Windows OS",
        "99.99% uptime guarantee",
        "Advanced firewall protection",
        "Control panel access",
        "Automated backups",
        "24/7 monitoring",
        "Load balancing",
        "Snapshot capability",
        "Dedicated support team",
        "Resource monitoring dashboard",
        "Bandwidth (UnMetered): 100 Mbps (Port)",
        "IPv4 Addresses: 1 IP",
      ],
    },
    advanced: {
      name: "Advanced",
      cpu: "8 vCPU",
      ram: "16 GB",
      disk: "1 TB",
      price: "22077Tk.",
      network: "10 Gbps",
      bandwidth: "100 Mbps (Port)",
      ip: "1 IP",
      os: "Custom OS",
      backup: "Continuous",
      support: "Premium",
      features: [
        "Linux or Windows OS",
        "99.99% uptime guarantee",
        "Enterprise-grade firewall protection",
        "Control panel access",
        "Automated backups",
        "24/7 monitoring",
        "Load balancing",
        "Snapshot capability",
        "Dedicated support team",
        "Resource monitoring dashboard",
        "DDoS protection",
        "Multi-zone redundancy",
        "Bandwidth (UnMetered): 100 Mbps (Port)",
        "IPv4 Addresses: 1 IP",
      ],
    },
  }

  const details = packageDetails[packageName as keyof typeof packageDetails] || packageDetails.basic

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
                    Server Package
                  </motion.div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{details.name} Server Package</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Detailed specifications and features for our {details.name.toLowerCase()} cloud server package
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
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Package Specifications</h2>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Cpu className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">CPU</p>
                            <p className="font-medium">{details.cpu}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Memory className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Memory</p>
                            <p className="font-medium">{details.ram}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <HardDrive className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Storage</p>
                            <p className="font-medium">{details.disk}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Wifi className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Bandwidth</p>
                            <p className="font-medium">{details.bandwidth} (UnMetered)</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Globe className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">IP Address</p>
                            <p className="font-medium">{details.ip}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Server className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Operating System</p>
                            <p className="font-medium">{details.os}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Shield className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Support</p>
                            <p className="font-medium">{details.support}</p>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg flex items-center gap-3">
                          <Clock className="h-6 w-6 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Backup</p>
                            <p className="font-medium">{details.backup}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4">Features</h2>
                      <div className="grid gap-2 md:grid-cols-2">
                        {details.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.05 * index }}
                            className="flex items-center gap-2"
                          >
                            <Check className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
                      <div className="space-y-4">
                        {packageName === "basic" && (
                          <>
                            <p>The Basic server package is ideal for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Small websites and blogs</li>
                              <li>Development and testing environments</li>
                              <li>Small business applications</li>
                              <li>Personal projects</li>
                            </ul>
                          </>
                        )}
                        {packageName === "standard" && (
                          <>
                            <p>The Standard server package is ideal for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Medium-sized websites with moderate traffic</li>
                              <li>Small e-commerce stores</li>
                              <li>Content management systems</li>
                              <li>Small to medium business applications</li>
                            </ul>
                          </>
                        )}
                        {packageName === "professional" && (
                          <>
                            <p>The Professional server package is ideal for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>High-traffic websites</li>
                              <li>Medium to large e-commerce platforms</li>
                              <li>Database-intensive applications</li>
                              <li>Business-critical applications</li>
                              <li>Small enterprise solutions</li>
                            </ul>
                          </>
                        )}
                        {packageName === "advanced" && (
                          <>
                            <p>The Advanced server package is ideal for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Enterprise-level applications</li>
                              <li>Large e-commerce platforms</li>
                              <li>High-performance databases</li>
                              <li>Big data processing</li>
                              <li>Mission-critical business applications</li>
                              <li>Applications requiring high availability</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div>
                <ScrollReveal>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-24">
                    <h3 className="text-2xl font-bold mb-2">{details.name} Package</h3>
                    <div className="text-3xl font-bold mb-4">
                      {details.price}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-primary" />
                        <span>{details.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Memory className="h-5 w-5 text-primary" />
                        <span>{details.ram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="h-5 w-5 text-primary" />
                        <span>{details.disk}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="h-5 w-5 text-primary" />
                        <span>Bandwidth: {details.bandwidth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>{details.ip}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link href={`/services/buy?package=${packageName}`}>
                        <AnimatedGradientButton className="w-full hover:scale-105 transition-transform">
                          BUY NOW
                        </AnimatedGradientButton>
                      </Link>
                      <Button variant="outline" className="w-full hover:bg-muted/50 transition-colors">
                        Contact Sales
                      </Button>
                    </div>

                    <div className="mt-6 text-sm text-muted-foreground">
                      <p>Need a custom configuration?</p>
                      <p>Contact our sales team for a tailored solution.</p>
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

