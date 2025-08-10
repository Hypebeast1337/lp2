import { Zap, ClipboardList, LockKeyhole, DollarSign, Languages, MessageSquare, ShieldCheck, Smartphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Built for hotels and loved by guests</h2>
          <p className="mt-3 text-muted-foreground">A single platform that increases revenue, improves operations, and elevates the in-stay experience.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-base">For Hotels</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Feature icon={<Zap className="h-5 w-5 text-[#4682B4]" />} title="Operational efficiency" description="Live dashboard for orders, requests, and housekeeping with instant notifications." />
              <Feature icon={<DollarSign className="h-5 w-5 text-[#4682B4]" />} title="Increase room service revenue" description="Direct ordering with menu management, modifiers, and upsells." />
              <Feature icon={<ClipboardList className="h-5 w-5 text-[#4682B4]" />} title="Staff productivity" description="Centralized request management with role-based access control." />
              <Feature icon={<LockKeyhole className="h-5 w-5 text-[#4682B4]" />} title="Digital keys via Seam" description="Keyless entry that works across Schlage, Yale, Salto, and more." />
              <Feature icon={<ShieldCheck className="h-5 w-5 text-[#4682B4]" />} title="Multi-tenant security" description="Enterprise-grade isolation per property with audit trails." />
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-base">For Guests</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Feature icon={<Smartphone className="h-5 w-5 text-[#4682B4]" />} title="Instant access" description="Scan, tap, done. No sign-up or app download needed." />
              <Feature icon={<MessageSquare className="h-5 w-5 text-[#4682B4]" />} title="24/7 concierge" description="Chat with reception, book transfers, request services anytime." />
              <Feature icon={<Languages className="h-5 w-5 text-[#4682B4]" />} title="Multilingual" description="Real-time translation for chat and interface in multiple languages." />
              <Feature icon={<ShieldCheck className="h-5 w-5 text-[#4682B4]" />} title="Contactless" description="Digital keys, Wi‑Fi, request status, and updates—all on the phone." />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
