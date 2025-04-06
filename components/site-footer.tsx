"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from "@/components/language-switcher"

export function SiteFooter() {
  const { t } = useTranslation()

  return (
    <footer className="border-t bg-muted/50 dark:bg-muted/10">
      <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Image
                src="/images/square-informatix-logo.png"
                alt="SQUARE INFORMATIX Limited"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground">
            Scalable, secure, and reliable cloud services to power your applications and infrastructure in Bangladesh.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#rent-server"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rent A Server
                </Link>
              </li>
              <li>
                <Link
                  href="/services#rent-software"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rent Software With Server
                </Link>
              </li>
              <li>
                <Link
                  href="/services#colocation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Co-location Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mail-hosting"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Secure Mail Hosting
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact</h3>
            <address className="not-italic">
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  Square Center (11th Floor), 48, Mohakhali C/A, Dhaka-1212, Bangladesh
                </li>
                <li className="text-muted-foreground">Hotline: +88017 0120 2666</li>
                <li className="text-muted-foreground">Email: info@squarecloud.net</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SQUARE INFORMATIX Limited. All rights reserved.
          </p>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

