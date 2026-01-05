'use client'

interface DecorativeElementProps {
  type: 'waves' | 'geometric' | 'abstract' | 'curves' | 'dots'
  position: 'left' | 'right' | 'top' | 'bottom'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function DecorativeElement({
  type,
  position,
  className = '',
  size = 'md'
}: DecorativeElementProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  }

  const positionClasses = {
    left: 'left-0 top-1/2 -translate-y-1/2',
    right: 'right-0 top-1/2 -translate-y-1/2',
    top: 'top-0 left-1/2 -translate-x-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2'
  }

  const renderDecoration = () => {
    switch (type) {
      case 'waves':
        return (
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40"
          >
            <path
              d="M10 60 Q30 30 50 60 T90 60 Q110 90 130 60"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              className="text-wedding-sage"
            />
            <path
              d="M5 70 Q25 40 45 70 T85 70 Q105 100 125 70"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              className="text-wedding-lightSage"
              opacity="0.6"
            />
          </svg>
        )

      case 'geometric':
        return (
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-30"
          >
            <circle
              cx="60"
              cy="60"
              r="25"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="text-wedding-sage"
            />
            <rect
              x="35"
              y="35"
              width="50"
              height="50"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-wedding-darkTeal"
              transform="rotate(45 60 60)"
            />
            <circle
              cx="60"
              cy="60"
              r="15"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-wedding-lightSage"
            />
          </svg>
        )

      case 'abstract':
        return (
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-25"
          >
            <path
              d="M20 40 Q40 20 60 40 T100 40 Q120 60 100 80 T60 80 Q40 100 20 80 T0 80 Q-20 60 0 40"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              className="text-wedding-sage"
            />
            <path
              d="M30 50 Q50 30 70 50 T110 50"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              className="text-wedding-lightSage"
            />
          </svg>
        )

      case 'curves':
        return (
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-35"
          >
            <path
              d="M20 20 Q60 -10 100 20 Q140 50 100 80 Q60 110 20 80 Q-20 50 20 20"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              className="text-wedding-sage"
            />
            <path
              d="M30 30 Q70 0 110 30 Q130 50 110 70 Q70 100 30 70"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              className="text-wedding-lightSage"
              opacity="0.7"
            />
          </svg>
        )

      case 'dots':
        return (
          <div className="grid grid-cols-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-wedding-sage opacity-40"></div>
            <div className="w-2 h-2 rounded-full bg-wedding-lightSage opacity-30 mt-2"></div>
            <div className="w-4 h-4 rounded-full bg-wedding-sage opacity-25"></div>
            <div className="w-2 h-2 rounded-full bg-wedding-lightSage opacity-35"></div>
            <div className="w-3 h-3 rounded-full bg-wedding-sage opacity-45"></div>
            <div className="w-2 h-2 rounded-full bg-wedding-lightSage opacity-30 mt-1"></div>
            <div className="w-3 h-3 rounded-full bg-wedding-sage opacity-35"></div>
            <div className="w-2 h-2 rounded-full bg-wedding-lightSage opacity-40"></div>
            <div className="w-4 h-4 rounded-full bg-wedding-sage opacity-20"></div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${className}`}>
      {renderDecoration()}
    </div>
  )
}

