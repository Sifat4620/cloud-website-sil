import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Bengali } from "next/font/google"
import "./globals.css"
import { Preloader } from "@/components/preloader"
import { FloatingDevOpsIcons } from "@/components/floating-devops-icons"
import { ThemeProvider } from "@/providers/theme-provider"
import { TranslationProvider } from "@/components/language-switcher"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-sans-bengali",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SQUARE INFORMATIX - Cloud Solutions for Your Business",
  description:
    "Scalable, secure, and reliable cloud services to power your applications and infrastructure in Bangladesh.",
  keywords:
    "cloud services, cloud hosting, server rental, Bangladesh cloud provider, SQUARE INFORMATIX, data center, cloud infrastructure",
  authors: [{ name: "SQUARE INFORMATIX Limited" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://squareinformatix.com/",
    title: "SQUARE INFORMATIX - Cloud Solutions for Your Business",
    description:
      "Scalable, secure, and reliable cloud services to power your applications and infrastructure in Bangladesh.",
    siteName: "SQUARE INFORMATIX",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQUARE INFORMATIX - Cloud Solutions for Your Business",
    description:
      "Scalable, secure, and reliable cloud services to power your applications and infrastructure in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://squareinformatix.com/" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136696270-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-136696270-1');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansBengali.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TranslationProvider>
            <Preloader />
            <FloatingDevOpsIcons />
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'