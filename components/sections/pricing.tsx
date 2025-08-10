"use client"

import { Check } from 'lucide-react'
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Simple, scalable pricing</h2>
          <p className="mt-3 text-muted-foreground">
            Priced per room with multi-property support. Typical ROI in months from increased satisfaction and efficiency.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Tabs defaultValue="monthly" className="w-full max-w-3xl">
            <div className="flex items-center justify-center">
              <TabsList className="grid w-64 grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly" className="mt-8">
              <PricingGrid billing="monthly" />
            </TabsContent>
            <TabsContent value="annual" className="mt-8">
              <PricingGrid billing="annual" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

type Billing = "monthly" | "annual"

function PricingGrid({ billing }: { billing: Billing }) {
  const tiers = useMemo(() => getTiers(billing), [billing])

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <Card key={t.name} className={t.featured ? "border-blue-300 shadow-md" : ""}>
          <CardHeader>
            <CardTitle className="flex items-baseline justify-between">
              <div className="font-semibold">{t.name}</div>
              {t.badge ? (
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-[#3b6e96]">{t.badge}</span>
              ) : null}
            </CardTitle>
            <div className="mt-2">
              <div className="text-3xl font-semibold">
                {t.price}
                <span className="text-base font-normal text-muted-foreground">/room/mo</span>
              </div>
              {t.caption ? <div className="mt-1 text-xs text-muted-foreground">{t.caption}</div> : null}
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            {t.features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 text-[#4682B4]" />
                <span>{f}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex">
            <Button className="w-full bg-[#4682B4] hover:bg-[#3b6e96]" asChild>
              <a href={t.ctaHref}>{t.ctaLabel}</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function getTiers(billing: Billing) {
  const monthly = {
    Starter: { price: "$2.50", caption: "For boutiques & pilots", badge: "Best for small" },
    Pro: { price: "$4.00", caption: "Most popular for 50–200 rooms", badge: "Popular" },
    Enterprise: { price: "Custom", caption: "Multi-property & SSO", badge: undefined },
  }
  const annual = {
    Starter: { price: "$2.20", caption: "Save ~12% billed annually", badge: "Save" },
    Pro: { price: "$3.60", caption: "Save ~10% billed annually", badge: "Save" },
    Enterprise: { price: "Custom", caption: "Volume & services", badge: undefined },
  }

  const baseFeatures = [
    "Room-specific QR guest portal",
    "Room service ordering",
    "Requests & housekeeping",
    "Real-time notifications",
    "Multilingual UI & chat",
    "Basic analytics",
  ]
  const proExtras = ["Menu modifiers & upsells", "Role-based access (RBAC)", "Advanced analytics", "Priority support", "API access"]
  const enterpriseExtras = ["Multi-property management", "SSO & SAML", "Custom SLAs", "Onboarding & training", "Audit logs"]

  return [
    {
      name: "Starter",
      price: billing === "monthly" ? monthly.Starter.price : annual.Starter.price,
      caption: billing === "monthly" ? monthly.Starter.caption : annual.Starter.caption,
      badge: billing === "monthly" ? monthly.Starter.badge : annual.Starter.badge,
      features: baseFeatures,
      ctaLabel: "Start a pilot",
      ctaHref: "/demo",
      featured: false,
    },
    {
      name: "Pro",
      price: billing === "monthly" ? monthly.Pro.price : annual.Pro.price,
      caption: billing === "monthly" ? monthly.Pro.caption : annual.Pro.caption,
      badge: billing === "monthly" ? monthly.Pro.badge : annual.Pro.badge,
      features: [...baseFeatures, ...proExtras],
      ctaLabel: "Talk to sales",
      ctaHref: "/contact-sales",
      featured: true,
    },
    {
      name: "Enterprise",
      price: billing === "monthly" ? monthly.Enterprise.price : annual.Enterprise.price,
      caption: billing === "monthly" ? monthly.Enterprise.caption : annual.Enterprise.caption,
      badge: undefined,
      features: [...baseFeatures, ...proExtras, ...enterpriseExtras],
      ctaLabel: "Contact us",
      ctaHref: "/contact-sales",
      featured: false,
    },
  ] as const
}
