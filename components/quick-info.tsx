import { Users, Calendar, CreditCard, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const kendetegn = [
  {
    icon: Users,
    title: "400+ medlemmer",
    description: "Børn, unge og voksne",
  },
  {
    icon: Calendar,
    title: "Træning hele året",
    description: "Udendørs og indendørs",
  },
  {
    icon: CreditCard,
    title: "Fra 500 kr/halvår",
    description: "Se alle priser nedenfor",
  },
  {
    icon: Clock,
    title: "Fleksible tider",
    description: "Tilpasset hverdagen",
  },
]

export function QuickInfo() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {kendetegn.map((item) => (
            <Card key={item.title} className="border-0 shadow-sm bg-background">
              <CardHeader className="pb-2">
                <item.icon className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
