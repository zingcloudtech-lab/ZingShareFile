"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Cloud, Upload, Lock, Zap, LogOut } from "lucide-react"
import { useEffect } from "react"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (!user) {
    return null
  }

  return (
    <main className="bg-background min-h-screen">
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
            <span className="text-sm text-muted-foreground">Welcome, {user.name}!</span>
            <Button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition text-sm font-medium flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Files</h1>
          <p className="text-muted-foreground">Manage your files and storage</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border bg-card">
            <Cloud className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Storage Used</h3>
            <p className="text-3xl font-bold text-foreground">2.5 GB</p>
            <p className="text-sm text-muted-foreground mt-2">of 10 GB available</p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <Upload className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Files</h3>
            <p className="text-3xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground mt-2">Total files uploaded</p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <Lock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Security</h3>
            <p className="text-sm text-foreground mt-2 font-medium">256-bit encryption</p>
            <p className="text-sm text-green-500 mt-1">All files protected</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="p-8 rounded-lg border-2 border-dashed border-border bg-secondary/50 text-center">
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Upload Files</h2>
          <p className="text-muted-foreground mb-4">Drag and drop your files here or click to browse</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Choose Files</Button>
        </div>
      </section>
    </main>
  )
}
