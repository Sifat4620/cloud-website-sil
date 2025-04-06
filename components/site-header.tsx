"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedThemeSwitch } from "@/components/animated-theme-switch"
import { AnimatedLanguageSwitcher } from "@/components/animated-language-switcher"
import { useTranslation } from "@/components/language-switcher"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"

interface SiteHeaderProps {
  currentPath: string
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const { t } = useTranslation()

  const navItems = [
    { path: "/", label: "home" },
    { path: "/services", label: "services" },
    { path: "/pricing", label: "pricing" },
    { path: "/partners", label: "partners" },
    { path: "/about", label: "about" },
    { path: "/contact", label: "contact" },
  ]

  return (
    <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" aria-label="SQUARE INFORMATIX Home">
              <Image
                src="/images/square-informatix-logo.png"
                alt="SQUARE INFORMATIX Limited"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>
        </div>
        <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={item.path}
                className={`text-sm font-medium ${
                  currentPath === item.path ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                aria-current={currentPath === item.path ? "page" : undefined}
              >
                {item.label === "partners" ? "Partners" : t(item.label)}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <AnimatedThemeSwitch />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <AnimatedLanguageSwitcher />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="hidden md:block"
          >
            <Button variant="outline">{t("login")}</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <AnimatedGradientButton>{t("getStarted")}</AnimatedGradientButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="md:hidden"
          >
            <Button variant="ghost" size="icon" aria-label="Menu">
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

