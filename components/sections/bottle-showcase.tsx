"use client"

import { useEffect, useState } from "react"

export default function BottleShowcase() {
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

    const element = document.getElementById("bottle-showcase")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="bottle-showcase"
      className="py-20 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience <span className="text-primary">Coca-Cola</span> Magic
          </h2>
          <p className="text-xl text-foreground/70 text-balance">
            Discover the refreshing sensation that brings moments of pure joy to millions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feature Card */}
          <div
            className={`lg:col-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background border border-border shadow-2xl transition-all duration-500 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent animate-shimmer"></div>

              {/* Large animated bottle icon */}
              <div className="relative text-center z-10">
                <div className="text-9xl sm:text-[200px] mb-4 animate-float">🥤</div>
                <p className="text-2xl font-bold text-primary animate-pulse">Refreshingly Bold</p>
              </div>
            </div>
          </div>

          {/* Side Features */}
          <div className="space-y-6">
            {[
              { icon: "🌟", title: "Premium Quality", desc: "Crafted to perfection" },
              { icon: "⚡", title: "Instant Energy", desc: "Pure refreshment" },
              { icon: "❄️", title: "Ice Cold", desc: "Perfectly chilled" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-card/50 border border-primary/20 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {item.icon}
                </div>
                <h3 className="font-bold mb-1 text-foreground">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/30 ${
            isVisible ? "animate-glow-bounce" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Feeling?</h3>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105 animate-pulse-glow">
            Explore Collection →
          </button>
        </div>
      </div>
    </section>
  )
}
