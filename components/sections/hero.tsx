"use client"

import { useState } from 'react'
import Link from "next/link"
import { ArrowRight, SmartphoneNfc, Stars } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import HeroMotionBg from "./hero-motion-bg"
import ParticlesBackground from "./particles-background"

export default function HeroSection() {
  const [showEnlarged, setShowEnlarged] = useState(false)
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <ParticlesBackground />
      <HeroMotionBg />
      <div className="relative z-20 mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
            <Stars className="h-3.5 w-3.5 text-[#4682B4]" />
            Digital Hospitality Platform
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Delight guests. Empower staff. One QR away.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            HotelSuite connects guests and staff with a contactless, multilingual concierge that runs in the browser—no app required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-[#4682B4] hover:bg-[#3b6e96]">
              <Link href="/demo">
                See live demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#pricing">View pricing</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <SmartphoneNfc className="h-5 w-5 text-[#4682B4]" />
                <div className="font-medium">No app downloads</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Room-specific QR codes open a personalized guest portal instantly.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                {/* Changed to blue badge as requested */}
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#3b6e96] text-xs">
                  24/7
                </span>
                <div className="font-medium">Digital concierge</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Order room service, request housekeeping, chat with reception, and more.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img
              src="/main-view-mockup.png"
              width={1100}
              height={520}
              alt="HotelSuite dashboard showing real-time operations"
              className="mx-auto rounded-xl border shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setShowEnlarged(true)}
            />
          </div>
        </div>
      </div>
      
      <Dialog open={showEnlarged} onOpenChange={setShowEnlarged}>
        <DialogContent 
          className="max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh] p-0 overflow-hidden"
          style={{ maxWidth: '95vw' }}
        >
          <DialogTitle className="sr-only">HotelSuite Dashboard Preview</DialogTitle>
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src="/main-view-mockup.png"
              alt="HotelSuite dashboard enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
