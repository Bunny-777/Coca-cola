"use client"

import { useEffect, useState } from "react"
import { Zap, Droplet, Wind } from "lucide-react"

const features = [
  {
    icon: Wind,
    title: "Classic Taste",
    description:
      "The iconic, timeless flavor that has delighted billions. Crisp, refreshing, and unmistakably Coca-Cola.",
  },
  {
    icon: Droplet,
    title: "Zero Sugar",
    description: "All the great taste of Coca-Cola with zero sugar. Enjoy guilt-free refreshment without compromise.",
  },
  {
    icon: Zap,
    title: "Ice-Cold Refreshment",
    description: "Perfectly chilled and energizing. Every sip delivers the ultimate refreshment experience you crave.",
  },
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("features")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            Why Choose <span className="text-primary">Coca-Cola?</span>
          </h2>
          <p
            className={`text-xl text-foreground/60 text-balance ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Discover what makes Coca-Cola the world's most beloved beverage brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 group cursor-pointer ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.2}s` : "0s",
                }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
