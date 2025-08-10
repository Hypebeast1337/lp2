import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about QR codes, deployments, and security.
          </p>
        </div>

        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do the room QR codes work?</AccordionTrigger>
              <AccordionContent>
                Each room receives a unique, time-bound QR at check-in. Guests scan to open a browser-based portal personalized to their room and language—no app or signup required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can we use HotelSuite with multiple properties?</AccordionTrigger>
              <AccordionContent>
                Yes. HotelSuite is multi-tenant with strict data isolation per hotel. You can manage single properties or large portfolios from one account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What about digital room keys?</AccordionTrigger>
              <AccordionContent>
                We integrate via Seam to support leading lock providers like Schlage, Yale, and Salto so you can enable secure, keyless entry where available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do guests have to register?</AccordionTrigger>
              <AccordionContent>
                No registration is required for guests. They get instant access by scanning the room QR and can place orders or requests right away.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How is pricing structured?</AccordionTrigger>
              <AccordionContent>
                We price per room with discounts at scale and annual billing options. This aligns costs with occupancy and delivers ROI in months through efficiency and upsell revenue.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
