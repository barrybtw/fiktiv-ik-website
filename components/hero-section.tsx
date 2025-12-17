import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-4">Breddefodbold siden 1962</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl text-balance">
            Fodbold for alle aldre
          </h1>
          <p className="mt-6 text-lg leading-relaxed opacity-90 max-w-2xl sm:text-xl">
            Fiktionel IK er en bredde-fodboldforening med omkring 400 medlemmer fordelt på børne-, ungdoms- og
            seniorafdeling. Hos os er fællesskabet i centrum.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#hold">Se træningstider</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="#tilmelding">Bliv medlem</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
    </section>
  )
}
