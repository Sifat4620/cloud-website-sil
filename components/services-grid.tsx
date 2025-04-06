"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { Server, Database, Calculator, Building, HardDrive, Mail, CloudOff, Save } from "lucide-react"
import { AnimatedFeatureIcon } from "@/components/animated-feature-icon"
import { Button } from "@/components/ui/button"
import { AnimatedArrow } from "@/components/animated-arrow"
import Link from "next/link"

export function ServicesGrid() {
  const services = [
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Rent A Server",
      description: "Fully managed virtual servers with flexible configurations to meet your business needs.",
      link: "/services#rent-server",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Rent Software With Server",
      description: "Complete software solutions hosted on our reliable cloud infrastructure.",
      link: "/services#rent-software",
    },
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "Cost Estimator",
      description: "Plan your cloud budget with our transparent cost estimation tools.",
      link: "/services#cost-estimator",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Co-location Service",
      description: "House your hardware in our state-of-the-art data centers with 24/7 monitoring and support.",
      link: "/services#colocation",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-primary" />,
      title: "Physical Cloud Server",
      description: "Dedicated physical servers with cloud capabilities for maximum performance and control.",
      link: "/services#physical-cloud",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Secure Mail Hosting",
      description: "Enterprise-grade email hosting with advanced security features and spam protection.",
      link: "/services#mail-hosting",
    },
    {
      icon: <CloudOff className="h-6 w-6 text-primary" />,
      title: "Disaster Recovery",
      description: "Comprehensive disaster recovery solutions to ensure business continuity in any situation.",
      link: "/services#disaster-recovery",
    },
    {
      icon: <Save className="h-6 w-6 text-primary" />,
      title: "Backup Services",
      description: "Automated backup solutions with flexible retention policies and quick restoration capabilities.",
      link: "/services#backup-services",
    },
  ]

  return (
    <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {services.map((service, index) => (
        <ScrollReveal key={index} delay={0.1 * (index % 3)}>
          <AnimatedCard>
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <AnimatedFeatureIcon icon={service.icon} />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <div className="pt-4 mt-4">
                <Link href={service.link}>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <AnimatedArrow className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      ))}
    </div>
  )
}

