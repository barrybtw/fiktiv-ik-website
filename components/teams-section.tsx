import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teams = [
  {
    name: "Børnehold (U6-U10)",
    schedule: "Tirsdag & torsdag 16:00-17:30",
    location: "Kunstgræsbanen",
    price: "500 kr/halvår",
    contact: "Maria Jensen",
  },
  {
    name: "Ungdomshold (U11-U16)",
    schedule: "Mandag & onsdag 17:00-18:30",
    location: "Hovedbanen",
    price: "750 kr/halvår",
    contact: "Peter Nielsen",
  },
  {
    name: "Senior Herrer",
    schedule: "Tirsdag & torsdag 19:00-21:00",
    location: "Hovedbanen",
    price: "1.000 kr/halvår",
    contact: "Lars Andersen",
  },
  {
    name: "Senior Damer",
    schedule: "Mandag & onsdag 19:00-20:30",
    location: "Kunstgræsbanen",
    price: "1.000 kr/halvår",
    contact: "Anne Pedersen",
  },
  {
    name: "Old Boys (+35)",
    schedule: "Fredag 18:00-20:00",
    location: "Hovedbanen",
    price: "800 kr/halvår",
    contact: "Henrik Sørensen",
  },
]

export function TeamsSection() {
  return (
    <section id="hold" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">Vores hold</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Find dit hold og se træningstider. Alle er velkomne uanset niveau.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="kontingent">
          {teams.map((team) => (
            <Card key={team.name} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{team.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm min-w-20">Træning:</span>
                    <span className="text-muted-foreground">{team.schedule}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm min-w-20">Sted:</span>
                    <span className="text-muted-foreground">{team.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm min-w-20">Kontakt:</span>
                    <span className="text-muted-foreground">{team.contact}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-base px-3 py-1">
                  {team.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
