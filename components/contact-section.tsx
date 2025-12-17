import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const boardMembers = [
  {
    role: "Formand",
    name: "Jens Hansen",
    email: "formand@fiktionel-ik.dk",
    phone: "+45 12 34 56 78",
  },
  {
    role: "Kasserer",
    name: "Lone Christensen",
    email: "kasserer@fiktionel-ik.dk",
    phone: "+45 23 45 67 89",
  },
  {
    role: "Ungdomsformand",
    name: "Mads Larsen",
    email: "ungdom@fiktionel-ik.dk",
    phone: "+45 34 56 78 90",
  },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">Kontakt os</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Har du spørgsmål? Kontakt bestyrelsen eller en af vores trænere.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Board Members */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Bestyrelse</h3>
            {boardMembers.map((member) => (
              <Card key={member.role} className="bg-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="font-medium text-muted-foreground text-sm">{member.role}</p>
                      <p className="font-semibold text-lg">{member.name}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Club Info & Signup */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground" id="tilmelding">
              <CardHeader>
                <CardTitle className="text-2xl">Bliv medlem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="opacity-90">
                  Vil du være en del af fællesskabet? Tilmeld dig i dag og kom i gang med træning.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="mailto:tilmelding@fiktionel-ik.dk">Send tilmelding</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Find os
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">Fiktionel IK</p>
                <p className="text-muted-foreground">Sportsvej 42</p>
                <p className="text-muted-foreground">1234 Fiktionelby</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Træningsbanerne ligger bag ved hallerne. Parkering ved indgangen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
