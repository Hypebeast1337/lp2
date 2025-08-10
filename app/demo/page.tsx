"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, QrCode, Smartphone } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DemoPage() {
  const demoGuestUrl = "http://localhost:3000/g/11111111-1111-1111-1111-111111111111"
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3b6e96]">
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <div className="font-semibold">HotelSuite Demo</div>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Try the guest experience</h1>
          <p className="mt-3 text-muted-foreground">
            Scan a QR code like a guest would at check-in. No app download or login required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-[#4682B4]" />
                Scan this QR Code
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <div className="rounded-md border p-4 bg-white">
                <QRCodeSVG 
                  value={demoGuestUrl}
                  size={280}
                  level="H"
                  includeMargin={false}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Room 101 - Demo Guest Access<br/>
                Scan to access the guest portal for this room
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-[#4682B4]" />
                Steps to test
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                <li>Open your phone’s camera and point it at the QR code.</li>
                <li>Tap the link that appears. It will simulate the guest mobile experience.</li>
                <li>Browse services, room service menu, and submit a request.</li>
                <li>Return to the HotelSuite dashboard to see live updates and statuses.</li>
              </ol>
              <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
                Note: This is a staging demo. Payment, identity, and key integrations are disabled.
              </div>
              <div className="flex items-center justify-between">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to homepage
                  </Link>
                </Button>
                <Button asChild className="bg-[#4682B4] hover:bg-[#3b6e96]">
                  <Link href="#">
                    {"Start demo"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
