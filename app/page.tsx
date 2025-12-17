import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuickInfo } from "@/components/quick-info"
import { TeamsSection } from "@/components/teams-section"
import { MatchesSection } from "@/components/matches-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickInfo />
      <TeamsSection />
      <MatchesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
