'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { AccountInfo } from '@azure/msal-browser'
import { msalInstance, getCurrentAccount, login, logout, getAccessToken } from '@/lib/auth'

interface AuthContextType {
  isAuthenticated: boolean
  user: AccountInfo | null
  login: () => Promise<void>
  logout: () => Promise<void>
  accessToken: string | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<AccountInfo | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if user is already signed in
        const account = getCurrentAccount()
        if (account) {
          setUser(account)
          setIsAuthenticated(true)
          
          // Get access token
          const token = await getAccessToken()
          setAccessToken(token)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await login()
      setUser(response.account)
      setIsAuthenticated(true)
      
      const token = await getAccessToken()
      setAccessToken(token)
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      setLoading(true)
      await logout()
      setUser(null)
      setIsAuthenticated(false)
      setAccessToken(null)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setLoading(false)
    }
  }

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login: handleLogin,
    logout: handleLogout,
    accessToken,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 