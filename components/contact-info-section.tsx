"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactInfoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white dark:bg-blue-900 relative overflow-hidden">
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to learn how we can help transform your IT infrastructure
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">GENERAL INFORMATION</h3>
              <p className="text-blue-100 mb-4">
                Square Center (11th Floor), 48, Mohakhali C/A, Dhaka-1212, Bangladesh.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">CONTACT US</h3>
              <p className="text-blue-100">Hotline: +88017 0120 2666</p>
              <p className="text-blue-100">Phone: +8802-8833047 - 56</p>
              <p className="text-blue-100">IP Phone: 09613707070 - Ext 2057</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">EMAIL US</h3>
              <p className="text-blue-100">General: info@squarecloud.net</p>
              <p className="text-blue-100">Support: support@squarecloud.net</p>
              <p className="text-blue-100">Sales: sales@squarecloud.net</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">TECHNICAL SUPPORT</h3>
              <p className="text-blue-100 mb-4">Our technical team is available 24/7 to assist you with any issues.</p>
              <Link href="/contact" className="mt-auto">
                <Button variant="secondary">Contact Support</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

