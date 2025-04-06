"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/components/language-switcher"

export function AnimatedLanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{
              scale: [0.8, 1.2, 1],
              backgroundColor: language === "en" ? "#0A3D91" : "#00A651",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[8px] font-bold text-white">{language.toUpperCase()}</span>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownMenuItem
              onClick={() => setLanguage("en")}
              className={language === "en" ? "bg-primary/10 font-medium" : ""}
            >
              {t("translateToEnglish")}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLanguage("bn")}
              className={language === "bn" ? "bg-primary/10 font-medium" : ""}
            >
              {t("translateToBangla")}
            </DropdownMenuItem>
          </motion.div>
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

