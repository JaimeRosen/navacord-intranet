'use client'

import { Spinner, SpinnerSize } from '@fluentui/react-components'

interface LoadingSpinnerProps {
  size?: SpinnerSize
  label?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = SpinnerSize.medium, 
  label = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <Spinner size={size} label={label} />
    </div>
  )
} 