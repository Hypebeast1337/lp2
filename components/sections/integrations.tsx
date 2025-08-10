import { KeyRound, Lock, Puzzle } from 'lucide-react'

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-blue-50/40">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Smart integrations</h2>
          <p className="mt-3 text-muted-foreground">
            Bring digital keys and more to life with flexible integrations designed for hospitality.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <IntegrationCard icon={<Puzzle className="h-6 w-6 text-[#4682B4]" />} title="Seam.co" desc="Powerful device layer enabling cross-brand digital keys and device control." />
          <IntegrationCard icon={<Lock className="h-6 w-6 text-[#4682B4]" />} title="Lock providers" desc="Compatible with leading brands including Schlage, Yale, Salto, and more." />
          <IntegrationCard icon={<KeyRound className="h-6 w-6 text-[#4682B4]" />} title="Future-ready" desc="Modular architecture so you can connect PMS, payments, and identity providers." />
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-3">{icon}</div>
      <div className="font-medium">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
