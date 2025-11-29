"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary-foreground rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold">C</span>
              </div>
              <span className="font-bold text-lg">Coca-Cola</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Taste the feeling. Experience the world's most beloved beverage brand.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  Classic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  Zero Sugar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  Diet Coke
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-secondary-foreground/80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary-foreground/80 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary-foreground/80 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary-foreground/80 transition">
                <Linkedin size={20} />
              </a>
            </div>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-secondary-foreground/10 rounded border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:border-secondary-foreground/50 transition"
              />
              <button className="w-full px-4 py-2 bg-secondary-foreground text-secondary rounded font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
            <p>&copy; {currentYear} Coca-Cola Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary-foreground transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary-foreground transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary-foreground transition">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
