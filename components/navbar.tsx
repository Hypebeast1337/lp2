"use client"

import Link from "next/link"
import { useState } from "react"
import { Building2, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <Building2 className="h-5 w-5 text-[#4682B4]" aria-hidden="true" />
          <span className="font-semibold tracking-tight">HotelSuite</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-[#3b6e96]">Features</Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-[#3b6e96]">How it works</Link>
          <Link href="#screenshots" className="text-sm text-muted-foreground hover:text-[#3b6e96]">Screenshots</Link>
          <Link href="#integrations" className="text-sm text-muted-foreground hover:text-[#3b6e96]">Integrations</Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-[#3b6e96]">Pricing</Link>
          <Link href="#faq" className="text-sm text-muted-foreground hover:text-[#3b6e96]">FAQ</Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/contact-sales">Contact Sales</Link>
          </Button>
          <Button asChild className="bg-[#4682B4] hover:bg-[#3b6e96]">
            <Link href="/demo">Try Demo</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="inline-flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#4682B4]" />
                  HotelSuite
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 grid gap-3">
                <Link onClick={() => setOpen(false)} href="#features" className="text-sm">Features</Link>
                <Link onClick={() => setOpen(false)} href="#how-it-works" className="text-sm">How it works</Link>
                <Link onClick={() => setOpen(false)} href="#screenshots" className="text-sm">Screenshots</Link>
                <Link onClick={() => setOpen(false)} href="#integrations" className="text-sm">Integrations</Link>
                <Link onClick={() => setOpen(false)} href="#pricing" className="text-sm">Pricing</Link>
                <Link onClick={() => setOpen(false)} href="#faq" className="text-sm">FAQ</Link>
                <div className="my-2 h-px bg-border" />
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
                <Button asChild className="bg-[#4682B4] hover:bg-[#3b6e96] w-full">
                  <Link href="/demo">Try Demo</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
