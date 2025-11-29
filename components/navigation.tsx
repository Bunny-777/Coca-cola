"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Products", href: "#products" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline">Coca-Cola</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden sm:inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
            Explore Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
              Explore Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
