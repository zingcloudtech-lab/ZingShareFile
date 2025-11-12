"use client"

import { useState } from "react"
import { Cloud, Upload, Lock, Zap, FileText, Share2, BarChart3, ChevronRight } from "lucide-react"

export default function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  return (
    <main className="bg-gradient-to-b from-background to-background min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ZingFile</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <button
              onClick={() => (window.location.href = "/login")}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground">Lightning-fast file management</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            <span className="text-foreground">Store, Share & Manage Files</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              at Lightning Speed
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            ZingFile is the modern file management platform built for speed. Upload, organize, and share your files with
            enterprise-grade security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/register")}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 rounded-lg border border-border bg-background hover:bg-secondary transition font-semibold">
              Watch Demo
            </button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-6 text-center text-sm">
            <div>
              <p className="text-2xl font-bold text-foreground">10GB</p>
              <p className="text-muted-foreground">Free Storage</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">256-bit</p>
              <p className="text-muted-foreground">Encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground">Everything you need for seamless file management</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Upload,
              title: "Fast Upload",
              description: "Lightning-fast uploads with resume capability for large files",
            },
            {
              icon: Lock,
              title: "Bank-Grade Security",
              description: "End-to-end encryption and advanced security protocols",
            },
            {
              icon: Share2,
              title: "Easy Sharing",
              description: "Share files instantly with customizable permissions",
            },
            {
              icon: Cloud,
              title: "Cloud Storage",
              description: "Unlimited cloud storage with automatic backups",
            },
            {
              icon: FileText,
              title: "File Management",
              description: "Organize files with smart categorization and search",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              description: "Track storage usage and file activity in real-time",
            },
          ].map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setIsHovered(`feature-${index}`)}
              onMouseLeave={() => setIsHovered(null)}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Simple Pricing</h2>
          <p className="text-lg text-muted-foreground">Start free, upgrade when you need</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Free",
              price: "$0",
              storage: "10 GB",
              features: ["10GB Storage", "Basic Sharing", "Email Support"],
            },
            {
              name: "Pro",
              price: "$9.99",
              storage: "1 TB",
              features: ["1TB Storage", "Advanced Sharing", "Priority Support", "Version History"],
              featured: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              storage: "Unlimited",
              features: ["Unlimited Storage", "Team Collaboration", "24/7 Support", "Advanced Analytics"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border transition-all duration-300 ${
                plan.featured
                  ? "border-primary bg-accent/10 shadow-lg scale-105"
                  : "border-border bg-card hover:border-primary"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.storage} Storage</p>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-6 ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Ready to get started?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust ZingFile for their file management needs.
          </p>
          <button className="px-8 py-4 rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition font-semibold">
            Start Free Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">ZingFile</span>
              </div>
              <p className="text-sm text-muted-foreground">Lightning-fast file management for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">© 2025 ZingFile. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
