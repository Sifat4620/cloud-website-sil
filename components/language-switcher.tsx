"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define the languages
type Language = "en" | "bn"

// Define the translation context
type TranslationContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    login: "Log In",
    getStarted: "Get Started",
    cloudSolutions: "Cloud Solutions for Your Business",
    scalableSecure: "Scalable, secure, and reliable cloud services to power your applications and infrastructure.",
    learnMore: "Learn More",
    features: "Features",
    everythingYouNeed: "Everything You Need in the Cloud",
    comprehensiveCloud:
      "Our comprehensive cloud platform provides all the tools and services you need to build, deploy, and scale your applications.",
    cloudServers: "Cloud Servers",
    highPerformance: "High-performance virtual machines with flexible configurations to meet your needs.",
    managedDatabases: "Managed Databases",
    fullyManaged: "Fully managed database services with automatic backups and scaling.",
    securityCompliance: "Security & Compliance",
    enterpriseGrade: "Enterprise-grade security with compliance certifications to protect your data.",
    testimonials: "Testimonials",
    trustedByBusinesses: "Trusted by Businesses Worldwide",
    seeWhatCustomers: "See what our customers have to say about our cloud services and why they choose us.",
    readyToGetStarted: "Ready to Get Started?",
    joinThousands: "Join thousands of businesses that trust SQUARE Cloud for their cloud infrastructure needs.",
    startFreeTrial: "Start Free Trial",
    contactSales: "Contact Sales",
    products: "Products",
    resources: "Resources",
    company: "Company",
    legal: "Legal",
    allRightsReserved: "All rights reserved.",
    translateToEnglish: "English",
    translateToBangla: "বাংলা",
    businessPartnerships: "Business Partnerships",
    buildingLastingRelationships: "Building Lasting Relationships",
    weBelieverInCreating:
      "We believe in creating strong partnerships with our clients to deliver the best cloud solutions for their business needs.",
    testimonialText:
      "SQUARE INFORMATIX has transformed our infrastructure. We've seen a 40% reduction in costs and a significant improvement in performance.",
    testimonialAuthor: "Sarah Johnson, CTO at TechCorp",
  },
  bn: {
    home: "হোম",
    services: "সেবাসমূহ",
    pricing: "মূল্য",
    about: "আমাদের সম্পর্কে",
    contact: "যোগাযোগ",
    login: "লগ ইন",
    getStarted: "শুরু করুন",
    cloudSolutions: "আপনার ব্যবসার জন্য ক্লাউড সমাধান",
    scalableSecure: "আপনার অ্যাপ্লিকেশন এবং ইনফ্রাস্ট্রাকচার চালানোর জন্য স্কেলেবল, নিরাপদ এবং নির্ভরযোগ্য ক্লাউড পরিষেবা।",
    learnMore: "আরও জানুন",
    features: "বৈশিষ্ট্য",
    everythingYouNeed: "ক্লাউডে আপনার প্রয়োজনীয় সবকিছু",
    comprehensiveCloud:
      "আমাদের ব্যাপক ক্লাউড প্ল্যাটফর্ম আপনার অ্যাপ্লিকেশন তৈরি, ডেপ্লয় এবং স্কেল করার জন্য প্রয়োজনীয় সমস্ত টুল এবং পরিষেবা প্রদান করে।",
    cloudServers: "ক্লাউড সার্ভার",
    highPerformance: "আপনার প্রয়োজন মেটাতে নমনীয় কনফিগারেশন সহ উচ্চ-কর্মক্ষমতা ভার্চুয়াল মেশিন।",
    managedDatabases: "ম্যানেজড ডাটাবেস",
    fullyManaged: "স্বয়ংক্রিয় ব্যাকআপ এবং স্কেলিং সহ সম্পূর্ণরূপে পরিচালিত ডাটাবেস পরিষেবা।",
    securityCompliance: "নিরাপত্তা এবং কমপ্লায়েন্স",
    enterpriseGrade: "আপনার ডেটা রক্ষা করার জন্য কমপ্লায়েন্স সার্টিফিকেশন সহ এন্টারপ্রাইজ-গ্রেড নিরাপত্তা।",
    testimonials: "প্রশংসাপত্র",
    trustedByBusinesses: "বিশ্বব্যাপী ব্যবসাগুলি দ্বারা বিশ্বস্ত",
    seeWhatCustomers: "আমাদের ক্লাউড পরিষেবা সম্পর্কে আমাদের গ্রাহকদের মতামত দেখুন এবং তারা কেন আমাদের বেছে নেয়।",
    readyToGetStarted: "শুরু করতে প্রস্তুত?",
    joinThousands: "হাজার হাজার ব্যবসা যোগ দিন যারা তাদের ক্লাউড ইনফ্রাস্ট্রাকচার প্রয়োজনের জন্য SQUARE Cloud বিশ্বাস করে।",
    startFreeTrial: "ফ্রি ট্রায়াল শুরু করুন",
    contactSales: "সেলস এর সাথে যোগাযোগ করুন",
    products: "পণ্য",
    resources: "রিসোর্স",
    company: "কোম্পানি",
    legal: "আইনি",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
    translateToEnglish: "English",
    translateToBangla: "বাংলা",
    businessPartnerships: "ব্যবসায়িক অংশীদারিত্ব",
    buildingLastingRelationships: "দীর্ঘস্থায়ী সম্পর্ক গড়ে তোলা",
    weBelieverInCreating:
      "আমরা আমাদের ক্লায়েন্টদের সাথে শক্তিশালী অংশীদারিত্ব তৈরি করতে বিশ্বাস করি যাতে তাদের ব্যবসার প্রয়োজনের জন্য সেরা ক্লাউড সমাধান প্রদান করা যায়।",
    testimonialText:
      "SQUARE INFORMATIX আমাদের ইনফ্রাস্ট্রাকচার পরিবর্তন করেছে। আমরা খরচে ৪০% হ্রাস এবং কর্মক্ষমতায় উল্লেখযোগ্য উন্নতি দেখেছি।",
    testimonialAuthor: "সারা জনসন, সিটিও, টেককর্প",
  },
}

// Translation Provider
export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Function to translate text
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

// Hook to use translations
export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

// Language Switcher Component
export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">{language.toUpperCase()}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>{t("translateToEnglish")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("bn")}>{t("translateToBangla")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

