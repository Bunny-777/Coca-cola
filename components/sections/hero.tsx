"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="space-y-4">
            <p className="text-primary font-semibold text-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Welcome to Coca-Cola
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Taste the{" "}
              <span className="text-primary animate-bounce" style={{ animationDelay: "0.5s" }}>
                Feeling
              </span>
            </h1>
            <p
              className="text-xl text-foreground/70 text-balance leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Experience the refreshing, iconic taste that brings moments of joy to millions worldwide. From classic
              refreshment to zero sugar options, there's a Coca-Cola for every occasion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 animate-glow-bounce">
              Explore More
              <ArrowRight size={20} className="animate-rotate-360" />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
              Learn More
            </button>
          </div>

          <div className="flex gap-8 pt-8 border-t border-border animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="hover:scale-110 transition-transform hover:animate-pulse">
              <p className="text-3xl font-bold text-primary">130+</p>
              <p className="text-foreground/60 text-sm">Years of Tradition</p>
            </div>
            <div
              className="hover:scale-110 transition-transform hover:animate-pulse"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-foreground/60 text-sm">Countries Worldwide</p>
            </div>
            <div
              className="hover:scale-110 transition-transform hover:animate-pulse"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-3xl font-bold text-primary">1.9B</p>
              <p className="text-foreground/60 text-sm">Daily Servings</p>
            </div>
          </div>
        </div>

        {/* Right Visual - Static Image */}
        <div
          className={`relative h-96 md:h-full flex items-center justify-center overflow-hidden rounded-2xl ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
        >
          <img
            src="/coca-cola-refreshing-drink-bottle-red.jpg"
            alt="Coca-Cola Refreshing Drink"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
