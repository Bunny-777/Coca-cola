"use client"

import { useEffect, useState } from "react"
import { Code2, Zap, Palette } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Tech Stack",
    description:
      "Built with React, Next.js, Three.js (R3F), R3 Drei, GSAP animations, and React Lenis for seamless scrolling.",
    features: ["Next.js 16", "React 19", "Three.js", "R3F & Drei", "GSAP", "React Lenis", "Tailwind CSS"],
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized for speed and efficiency with smooth animations and intuitive interactions ensuring great user experience.",
    features: ["Fast Load Times", "Smooth Animations", "Optimized Assets", "Lazy Loading", "Cache Strategy"],
  },
  {
    icon: Palette,
    title: "Design Philosophy",
    description:
      "Minimal unnecessary animations focused on sleek, modern aesthetics creating an engaging visual experience.",
    features: ["Modern Aesthetic", "Clean UI", "Responsive Design", "Brand Focused", "Premium Feel"],
  },
]

export default function ProjectHighlights() {
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

    const element = document.getElementById("highlights")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="highlights" className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Project Highlights</h2>
          <p className="text-xl text-secondary-foreground/80 text-balance">
            Engineered for excellence with cutting-edge technologies and design principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className={`p-8 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10 hover:border-secondary-foreground/20 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.2}s` : "0s",
                }}
              >
                <Icon className="text-secondary-foreground mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-secondary-foreground/80 mb-6 leading-relaxed">{highlight.description}</p>
                <div className="flex flex-wrap gap-2">
                  {highlight.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary-foreground/10 text-secondary-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
