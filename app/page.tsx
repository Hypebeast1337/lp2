import Link from "next/link"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/sections/hero"
import FeaturesSection from "@/components/sections/features"
import HowItWorksSection from "@/components/sections/how-it-works"
import ScreenshotsSection from "@/components/sections/screenshots"
import IntegrationsSection from "@/components/sections/integrations"
import PricingSection from "@/components/sections/pricing"
import FAQSection from "@/components/sections/faq"
import CTASection from "@/components/sections/cta"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <IntegrationsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
