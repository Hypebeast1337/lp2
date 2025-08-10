"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export default function ScreenshotsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const shots = [
    { 
      src: "/admin-food-order.png", 
      title: "Food Order Management",
      description: "Real-time order tracking with kitchen integration - manage incoming orders, update statuses, and coordinate deliveries"
    },
    { 
      src: "/guest-food-order.png", 
      title: "Guest Mobile Ordering",
      description: "Intuitive room service menu with instant ordering - guests browse, customize, and track their orders in real-time"
    },
    { 
      src: "/admin-rbac.png", 
      title: "Role-Based Access Control",
      description: "Granular permission management - define custom roles and control staff access to specific features and data"
    },
    { 
      src: "/admin-wifi-setup.png", 
      title: "WiFi Configuration System",
      description: "Centralized network management - configure WiFi settings per room or floor with automated guest access"
    },
  ]

  return (
    <>
      <section id="screenshots" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Inside HotelSuite Platform</h2>
            <p className="mt-3 text-muted-foreground">Get a glimpse of the clean, modern interface your team and guests will love</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {shots.map((s) => (
              <figure 
                key={s.title} 
                className="rounded-xl border bg-white p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(s.src)}
              >
                <img
                  src={s.src || "/placeholder.svg"}
                  width={880}
                  height={500}
                  alt={`${s.title} screenshot`}
                  className="h-auto w-full rounded-md border object-cover"
                />
                <figcaption className="mt-3 px-1">
                  <div className="font-medium text-sm">{s.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.description}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh] p-0 overflow-hidden"
          style={{ maxWidth: '95vw' }}
        >
          <DialogTitle className="sr-only">Screenshot Preview</DialogTitle>
          <div className="w-full h-full flex items-center justify-center p-4">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="max-w-full max-h-full object-contain rounded-lg"
                style={{ width: 'auto', height: 'auto' }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
