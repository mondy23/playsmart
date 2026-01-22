import React from 'react'
import { Lightbulb, Sparkles } from 'lucide-react'
interface PlaySmartLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
export function PlaySmartLogo({
  className = '',
  size = 'lg',
}: PlaySmartLogoProps) {
  // Size mapping for responsive scaling
  const sizeClasses = {
    sm: {
      container: 'gap-2',
      iconBox: 'w-8 h-8',
      icon: 'w-4 h-4',
      textSize: 'text-xl',
      starSize: 'w-3 h-3',
    },
    md: {
      container: 'gap-3',
      iconBox: 'w-12 h-12',
      icon: 'w-6 h-6',
      textSize: 'text-3xl',
      starSize: 'w-4 h-4',
    },
    lg: {
      container: 'gap-4',
      iconBox: 'w-16 h-16',
      icon: 'w-8 h-8',
      textSize: 'text-5xl',
      starSize: 'w-5 h-5',
    },
    xl: {
      container: 'gap-5',
      iconBox: 'w-24 h-24',
      icon: 'w-12 h-12',
      textSize: 'text-7xl',
      starSize: 'w-8 h-8',
    },
  }
  const s = sizeClasses[size]
  return (
    <div
      className={`group flex items-center select-none ${s.container} ${className}`}
    >
      {/* Icon Container */}
      <div className="relative">
        {/* Main Circle */}
        <div
          className={`${s.iconBox} rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-200 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
        >
          <Lightbulb
            className={`${s.icon} text-white fill-white stroke-2`}
            strokeWidth={2.5}
          />
        </div>

        {/* Decorative Sparkles */}
        <Sparkles
          className={`absolute -top-1 -right-2 ${s.starSize} text-yellow-400 fill-yellow-400 animate-pulse`}
          style={{
            animationDuration: '2s',
          }}
        />
        <div
          className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-purple-400 animate-bounce`}
          style={{
            animationDelay: '0.5s',
          }}
        />
        <div
          className={`absolute top-0 -left-2 w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce`}
          style={{
            animationDelay: '0.2s',
          }}
        />
      </div>

      {/* Text Logo */}
      <div
        className={`font-extrabold tracking-tight ${s.textSize} flex items-baseline`}
      >
        <span className="text-slate-800 relative">Play</span>
        <span className="text-violet-600 ml-1 relative">
          Smart
          {/* Cute underline decoration */}
          <svg
            className="absolute -bottom-2 left-0 w-full h-3 text-violet-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
