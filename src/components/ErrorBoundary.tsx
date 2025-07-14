'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Card, CardContent, Button, Title3, Body1 } from '@fluentui/react-components'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    // TODO: Send error to logging service
    // logErrorToService(error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Card className="max-w-md w-full mx-4">
            <CardContent>
              <div className="text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <Title3 className="mb-4">Something went wrong</Title3>
                <Body1 className="mb-6 text-gray-600">
                  We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
                </Body1>
                <div className="space-y-2">
                  <Button 
                    appearance="primary" 
                    className="navacord-bg-green w-full"
                    onClick={this.handleRetry}
                  >
                    Try Again
                  </Button>
                  <Button 
                    appearance="outline" 
                    className="w-full"
                    onClick={() => window.location.reload()}
                  >
                    Refresh Page
                  </Button>
                </div>
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-4 text-left">
                    <summary className="cursor-pointer text-sm text-gray-500">
                      Error Details (Development)
                    </summary>
                    <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                      {this.state.error.toString()}
                    </pre>
                  </details>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
} 