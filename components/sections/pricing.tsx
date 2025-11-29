"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Single Pack",
    price: "$1.99",
    description: "Perfect for a quick refresh",
    features: ["12 oz can", "Ice-cold crisp taste", "Quick refresh"],
  },
  {
    name: "Family Pack",
    price: "$9.99",
    description: "Great value for families",
    features: ["6 pack of 12 oz", "Mixed varieties", "Perfect for gatherings", "Best seller"],
    highlighted: true,
  },
  {
    name: "Party Pack",
    price: "$24.99",
    description: "Ultimate party selection",
    features: ["24 pack of 12 oz", "All varieties included", "Party ready", "Free delivery"],
  },
]

export default function Pricing() {
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

    const element = document.getElementById("pricing")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple & <span className="text-primary">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-foreground/60 text-balance">
            Choose the perfect pack for your needs. Every price point delivers amazing value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/30 scale-105 md:scale-100"
                  : "border-border bg-card hover:border-primary"
              } p-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : "0s",
              }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-foreground/60 mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">{tier.price}</span>
                <span className="text-foreground/60 ml-2">one time</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-4">Still deciding? Contact our support team.</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
