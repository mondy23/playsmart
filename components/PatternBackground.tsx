import React from 'react'

type PatternType = 'dots' | 'waves' | 'grid'

interface PatternBackgroundProps {
  type?: PatternType
  color?: string
  opacity?: number
  className?: string
}

export function PatternBackground({
  type = 'dots',
  color = '#4A4A4A',
  opacity = 0.05,
  className = '',
}: PatternBackgroundProps) {
  // Returns a data URL string for the pattern
  const getBackgroundImage = (): string => {
    switch (type) {
      case 'dots':
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='${encodeURIComponent(
          color
        )}' fill-opacity='${opacity}' /%3E%3C/svg%3E")`
      case 'waves':
        return `url("data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q10 5 20 10 T40 10' fill='none' stroke='${encodeURIComponent(
          color
        )}' stroke-width='2' stroke-opacity='${opacity}' /%3E%3C/svg%3E")`
      case 'grid':
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0 L0 40 L40 40 L40 0 Z M0 0 L40 40 M40 0 L0 40' fill='none' stroke='${encodeURIComponent(
          color
        )}' stroke-opacity='${opacity}' stroke-width='1'/%3E%3C/svg%3E")`
      default:
        return 'none'
    }
  }

  const backgroundSize = type === 'waves' ? '40px 20px' : type === 'grid' ? '40px 40px' : '20px 20px'

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize,
      }}
    />
  )
}
