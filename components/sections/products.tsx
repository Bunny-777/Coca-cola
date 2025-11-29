"use client"

import { useEffect, useState } from "react"

const products = [
  {
    name: "Coca-Cola Classic",
    description: "The original taste that started it all. Crisp, refreshing, and perfectly balanced.",
    image: "🥤",
    badge: "Classic",
  },
  {
    name: "Coca-Cola Zero",
    description: "All the taste, zero the sugar. Same great Coca-Cola experience with none of the guilt.",
    image: "🔴",
    badge: "Zero Sugar",
  },
  {
    name: "Diet Coke",
    description: "Distinctively different taste with the same refreshing experience you love.",
    image: "⚫",
    badge: "Diet",
  },
]

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("products")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            Our <span className="text-primary">Products</span>
          </h2>
          <p
            className={`text-xl text-foreground/60 text-balance ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Discover the full range of Coca-Cola variants tailored to every taste and preference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-3 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : "0s",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold transform transition-all group-hover:scale-110">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`text-6xl mb-6 transition-all ${hoveredIndex === index ? "animate-bounce scale-125" : "group-hover:scale-110"}`}
                  >
                    {product.image}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-foreground/70 leading-relaxed">{product.description}</p>
                </div>

                <button className="mt-6 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 active:scale-95">
                  Learn More
                </button>
              </div>

              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
