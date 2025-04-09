"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Cpu, HardDrive, MemoryStickIcon as Memory, Server, Wifi, Globe, Shield } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Switch } from "@/components/ui/switch"

interface PricingOption {
  value: number
  label: string
  price: number
}

export function CostEstimator() {
  // CPU options
  const cpuOptions: PricingOption[] = [
    { value: 1, label: "1 vCPU", price: 2000 },
    { value: 2, label: "2 vCPU", price: 3000 },
    { value: 4, label: "4 vCPU", price: 4000 },
    { value: 6, label: "6 vCPU", price: 6000 },
    { value: 8, label: "8 vCPU", price: 8000 },
    { value: 10, label: "10 vCPU", price: 10000 },
    { value: 12, label: "12 vCPU", price: 12000 },
    { value: 16, label: "16 vCPU", price: 16000 },
    { value: 24, label: "24 vCPU", price: 24000 },
    { value: 32, label: "32 vCPU", price: 32000 },
  ]

  // RAM options
  const ramOptions: PricingOption[] = [
    { value: 2, label: "2 GB", price: 600 },
    { value: 4, label: "4 GB", price: 1200 },
    { value: 8, label: "8 GB", price: 2400 },
    { value: 16, label: "16 GB", price: 4800 },
    { value: 32, label: "32 GB", price: 9600 },
    { value: 64, label: "64 GB", price: 19200 },
    { value: 128, label: "128 GB", price: 38400 },
  ]

  // Disk options
  const diskOptions: PricingOption[] = [
    { value: 100, label: "100 GB", price: 500 },
    { value: 300, label: "300 GB", price: 1425 },
    { value: 500, label: "500 GB", price: 2375 },
    { value: 1000, label: "1 TB", price: 9500 },
    { value: 2000, label: "2 TB", price: 19000 },
    { value: 5000, label: "5 TB", price: 47500 },
  ]

  // Operating system options
  const osOptions = [
    { value: "ubuntu", label: "Ubuntu 22.04 LTS", price: 0 },
    { value: "windows", label: "Windows Server 2022", price: 1000 },
    { value: "centos", label: "CentOS Stream 9", price: 0 },
    { value: "debian", label: "Debian 12", price: 0 },
    { value: "custom", label: "Custom OS (Upload ISO)", price: 500 },
  ]

  // State for selected values
  const [cpuIndex, setCpuIndex] = useState(1)
  const [ramIndex, setRamIndex] = useState(1)
  const [diskIndex, setDiskIndex] = useState(0)
  const [osSelected, setOsSelected] = useState("ubuntu")
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")
  const [includeSSL, setIncludeSSL] = useState(false)
  const [sslType, setSslType] = useState("standard")

  // SSL pricing
  const sslPricing = {
    standard: 5000, // Per year
    wildcard: 30000, // Per year
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    const cpuPrice = cpuOptions[cpuIndex].price
    const ramPrice = ramOptions[ramIndex].price
    const diskPrice = diskOptions[diskIndex].price

    // Find selected OS price
    const osPrice = osOptions.find((os) => os.value === osSelected)?.price || 0

    let total = cpuPrice + ramPrice + diskPrice + osPrice

    // Add SSL if selected (only charge yearly)
    if (includeSSL) {
      const sslPrice = sslType === "standard" ? sslPricing.standard : sslPricing.wildcard

      if (billingCycle === "annually") {
        total += sslPrice
      } else {
        // For monthly, we divide the yearly SSL price by 12
        total += sslPrice / 12
      }
    }

    // Apply discounts and taxes
    const discount = total * 0.1 // 10% discount
    const afterDiscount = total - discount

    // Add VAT (5%) and AIT/TAX (5%)
    const vat = afterDiscount * 0.05
    const tax = afterDiscount * 0.05

    const finalTotal = afterDiscount + vat + tax

    // Apply annual discount (15%) if applicable
    if (billingCycle === "annually") {
      return finalTotal * 12 * 0.85
    }

    return finalTotal
  }

  const totalPrice = calculateTotalPrice()
  const selectedOs = osOptions.find((os) => os.value === osSelected)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight">Custom Server Configuration</h2>
          <p className="text-muted-foreground mt-2 max-w-[800px] mx-auto">
            Build your own server with our interactive cost estimator. Drag the sliders to configure your ideal server
            and see pricing in real-time.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <ScrollReveal direction="left">
            <Card>
              <CardHeader>
                <CardTitle>Configure Your Server</CardTitle>
                <CardDescription>Drag the sliders to adjust your server specifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* CPU Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">CPU</h3>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {cpuOptions[cpuIndex].label}
                    </div>
                  </div>
                  <Slider
                    defaultValue={[cpuIndex]}
                    max={cpuOptions.length - 1}
                    step={1}
                    onValueChange={(value) => setCpuIndex(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 vCPU</span>
                    <span>32 vCPU</span>
                  </div>
                </div>

                {/* RAM Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Memory className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium">Memory (RAM)</h3>
                    </div>
                    <div className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                      {ramOptions[ramIndex].label}
                    </div>
                  </div>
                  <Slider
                    defaultValue={[ramIndex]}
                    max={ramOptions.length - 1}
                    step={1}
                    onValueChange={(value) => setRamIndex(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>2 GB</span>
                    <span>128 GB</span>
                  </div>
                </div>

                {/* Disk Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-5 w-5 text-green-500" />
                      <h3 className="font-medium">Storage</h3>
                    </div>
                    <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium">
                      {diskOptions[diskIndex].label}
                    </div>
                  </div>
                  <Slider
                    defaultValue={[diskIndex]}
                    max={diskOptions.length - 1}
                    step={1}
                    onValueChange={(value) => setDiskIndex(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>100 GB</span>
                    <span>5 TB</span>
                  </div>
                </div>

                {/* Operating System Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Operating System</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {osOptions.map((os) => (
                      <div
                        key={os.value}
                        onClick={() => setOsSelected(os.value)}
                        className={`p-3 border rounded-md cursor-pointer transition-colors flex justify-between items-center ${
                          osSelected === os.value ? "border-primary bg-primary/5" : "hover:border-primary/50"
                        }`}
                      >
                        <span>{os.label}</span>
                        {os.price > 0 && (
                          <span className="text-xs text-muted-foreground">+{os.price.toLocaleString()} Tk.</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SSL Certificate */}
                <div className="pt-2 border-t">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-yellow-500" />
                        <h3 className="font-medium">SSL Certificate</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Add SSL to your server to secure your websites and applications
                      </p>
                    </div>
                    <Switch checked={includeSSL} onCheckedChange={setIncludeSSL} />
                  </div>

                  {includeSSL && (
                    <div className="mt-4 pl-7 space-y-3">
                      <div
                        onClick={() => setSslType("standard")}
                        className={`p-3 border rounded-md cursor-pointer transition-colors ${
                          sslType === "standard" ? "border-primary bg-primary/5" : "hover:border-primary/50"
                        }`}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">Standard SSL Certificate</span>
                          <span className="text-sm text-muted-foreground">5,000 Tk./year</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Secures a single domain (example.com)</p>
                      </div>

                      <div
                        onClick={() => setSslType("wildcard")}
                        className={`p-3 border rounded-md cursor-pointer transition-colors ${
                          sslType === "wildcard" ? "border-primary bg-primary/5" : "hover:border-primary/50"
                        }`}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">Wildcard SSL Certificate</span>
                          <span className="text-sm text-muted-foreground">30,000 Tk./year</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Secures unlimited subdomains (*.example.com)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Additional Features</CardTitle>
                <CardDescription>All servers include these features at no extra cost</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-primary" />
                    <span>100 Mbps Unmetered Bandwidth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>1 IPv4 Address</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    <span>Custom OS Selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <span>24/7 Technical Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal direction="right">
            <div className="sticky top-24">
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Your custom server configuration</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <Tabs
                    defaultValue="monthly"
                    onValueChange={(value) => setBillingCycle(value as "monthly" | "annually")}
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="annually">Annually (15% off)</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-primary" />
                        <span>CPU</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{cpuOptions[cpuIndex].label}</span>
                        <span className="text-muted-foreground text-sm">
                          {cpuOptions[cpuIndex].price.toLocaleString()} Tk.
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Memory className="h-4 w-4 text-blue-500" />
                        <span>RAM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{ramOptions[ramIndex].label}</span>
                        <span className="text-muted-foreground text-sm">
                          {ramOptions[ramIndex].price.toLocaleString()} Tk.
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-green-500" />
                        <span>Storage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{diskOptions[diskIndex].label}</span>
                        <span className="text-muted-foreground text-sm">
                          {diskOptions[diskIndex].price.toLocaleString()} Tk.
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-purple-500" />
                        <span>OS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{selectedOs?.label}</span>
                        {selectedOs?.price ? (
                          <span className="text-muted-foreground text-sm">{selectedOs.price.toLocaleString()} Tk.</span>
                        ) : (
                          <span className="text-muted-foreground text-sm">Included</span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-primary" />
                        <span>Bandwidth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">100 Mbps</span>
                        <span className="text-muted-foreground text-sm">Included</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span>IP Address</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">1 IPv4</span>
                        <span className="text-muted-foreground text-sm">Included</span>
                      </div>
                    </div>

                    {includeSSL && (
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-yellow-500" />
                          <span>SSL Certificate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{sslType === "standard" ? "Standard" : "Wildcard"}</span>
                          <span className="text-muted-foreground text-sm">
                            {sslType === "standard" ? "5,000" : "30,000"} Tk./year
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Server Discount:</span>
                      <span>10%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VAT:</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AIT/TAX:</span>
                      <span>5%</span>
                    </div>
                    {billingCycle === "annually" && (
                      <div className="flex justify-between">
                        <span>Annual Discount:</span>
                        <span>15%</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Price:</span>
                      <motion.span
                        key={totalPrice}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-2xl font-bold text-primary"
                      >
                        {Math.round(totalPrice).toLocaleString()} Tk.
                        <span className="text-sm font-normal text-muted-foreground">
                          {billingCycle === "annually" ? "/year" : "/month"}
                        </span>
                      </motion.span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Link href="/services/buy" className="w-full">
                    <Button className="w-full" size="lg">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground text-center">
                    No credit card required. Start with a 14-day free trial.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

