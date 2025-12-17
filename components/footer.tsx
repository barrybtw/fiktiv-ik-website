import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              FIK
            </div>
            <div>
              <p className="font-semibold">Fiktionel IK</p>
              <p className="text-sm text-muted-foreground">Breddefodbold siden 1962</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="#hold" className="text-muted-foreground hover:text-foreground transition-colors">
              Hold
            </Link>
            <Link href="#kampe" className="text-muted-foreground hover:text-foreground transition-colors">
              Kampe
            </Link>
            <Link href="#kontingent" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontingent
            </Link>
            <Link href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Fiktionel IK. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  )
}
