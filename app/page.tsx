import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import BottleShowcase from "@/components/sections/bottle-showcase"
import Products from "@/components/sections/products"
import Pricing from "@/components/sections/pricing"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <BottleShowcase />
      <Products />
      <Pricing />
      <Footer />
    </main>
  )
}
