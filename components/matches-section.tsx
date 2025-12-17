import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const upcomingMatches = [
  {
    date: "Lør 21. dec",
    time: "14:00",
    home: "Fiktionel IK",
    away: "Nabobyen FC",
    team: "Senior Herrer",
    venue: "Hjemmebane",
  },
  {
    date: "Søn 22. dec",
    time: "11:00",
    home: "Fiktionel IK",
    away: "Landsbyklubben",
    team: "U14",
    venue: "Hjemmebane",
  },
  {
    date: "Lør 4. jan",
    time: "13:00",
    home: "Byens IF",
    away: "Fiktionel IK",
    team: "Senior Damer",
    venue: "Udebane",
  },
  {
    date: "Søn 5. jan",
    time: "10:00",
    home: "Fiktionel IK",
    away: "Grøn Bold",
    team: "U10",
    venue: "Hjemmebane",
  },
]

export function MatchesSection() {
  return (
    <section id="kampe" className="py-12 sm:py-16 lg:py-20 bg-card scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">Kommende kampe</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Hold øje med hvornår vi spiller næste gang.</p>
        </div>

        <div className="space-y-4">
          {upcomingMatches.map((match, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-center min-w-16 sm:min-w-20">
                      <p className="text-sm font-medium text-muted-foreground">{match.date}</p>
                      <p className="text-xl font-bold sm:text-2xl">{match.time}</p>
                    </div>
                    <div className="h-12 w-px bg-border hidden sm:block" />
                    <div className="flex-1">
                      <p className="text-lg font-semibold sm:text-xl">
                        {match.home} <span className="text-muted-foreground">vs</span> {match.away}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{match.venue}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit text-sm">
                    {match.team}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
