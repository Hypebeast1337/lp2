import { CheckCircle2, QrCode, Smartphone, LayoutDashboard } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <QrCode className="h-6 w-6 text-[#4682B4]" />,
      title: "Generate room QR",
      description: "A unique QR is created for each room at check‑in or pre‑arrival.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#4682B4]" />,
      title: "Guest scans & orders",
      description: "Guests access services, room service, and requests instantly—no app.",
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-[#4682B4]" />,
      title: "Staff manage in real time",
      description: "Operations teams track, fulfill, and update statuses from the dashboard.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-blue-50/40">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-3 text-muted-foreground">From scan to service in seconds—streamlined for every property size.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-3">{s.icon}</div>
              <div className="font-medium">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#4682B4]" />
            <p className="text-sm text-muted-foreground">
              Works with your existing processes. Start with one property and scale to your entire portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
