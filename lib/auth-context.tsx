"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call - In production, this would be a real API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email && password) {
        setUser({
          id: "1",
          email,
          name: email.split("@")[0],
        })
      } else {
        throw new Error("Invalid email or password")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      // Simulate API call - In production, this would be a real API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email && password && name) {
        setUser({
          id: "1",
          email,
          name,
        })
      } else {
        throw new Error("Please fill in all fields")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
