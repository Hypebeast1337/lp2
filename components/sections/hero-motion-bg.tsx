"use client"

import { useEffect, useRef } from "react"

export default function HeroMotionBg() {
  const orb1 = useRef<HTMLDivElement | null>(null)
  const orb2 = useRef<HTMLDivElement | null>(null)
  const orb3 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduce) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const p = Math.max(0, Math.min(1, y / 400))
        const y1 = p * 28
        const y2 = p * -18
        const y3 = p * 36

        if (orb1.current) orb1.current.style.transform = `translate3d(-50%, ${y1}px, 0)`
        if (orb2.current) orb2.current.style.transform = `translate3d(0, ${y2}px, 0)`
        if (orb3.current) orb3.current.style.transform = `translate3d(0, ${y3}px, 0)`

        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Steel-blue toned orbs */}
      <div
        ref={orb1}
        className="absolute left-1/2 top-[-20%] size-[700px] rounded-full blur-3xl opacity-50 will-change-transform"
        style={{
          background: "radial-gradient(circle at 30% 30%, #7aa0bf 0%, rgba(122,160,191,0.0) 60%)",
          transform: "translate3d(-50%, 0px, 0)",
        }}
      />
      <div
        ref={orb2}
        className="absolute left-[10%] top-[30%] size-[500px] rounded-full blur-3xl opacity-55 will-change-transform"
        style={{
          background: "radial-gradient(circle at 70% 30%, #a7c0d8 0%, rgba(167,192,216,0.0) 60%)",
          transform: "translate3d(0px, 0px, 0)",
        }}
      />
      <div
        ref={orb3}
        className="absolute right-[-10%] top-[10%] size-[600px] rounded-full blur-3xl opacity-45 will-change-transform"
        style={{
          background: "radial-gradient(circle at 40% 60%, #4682B4 0%, rgba(70,130,180,0.0) 60%)",
          transform: "translate3d(0px, 0px, 0)",
        }}
      />
    </div>
  )
}
