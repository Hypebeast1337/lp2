import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HotelSuite. All rights reserved.
          </div>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Security</Link>
            <Link href="#" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
