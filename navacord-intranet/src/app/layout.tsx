import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navacord NUS Intranet',
  description: 'Corporate intranet for Navacord insurance broker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FluentProvider theme={webLightTheme}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </FluentProvider>
      </body>
    </html>
  )
} 