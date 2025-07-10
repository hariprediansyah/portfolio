import React from 'react'

const getRandom = (min, max) => Math.random() * (max - min) + min

export default function Starfield({
  numStars = 60,
  areaHeight = '100vh',
  areaWidth = '100vw',
  zIndex = 0,
  style = {},
  twinkle = true
}) {
  const stars = React.useMemo(() => {
    return Array.from({ length: numStars }).map((_, i) => {
      const top = getRandom(0, 100)
      const left = getRandom(0, 100)
      const size = getRandom(0.7, 2.2)
      const opacity = getRandom(0.5, 1)
      const duration = getRandom(1.5, 3.5)
      const delay = getRandom(0, 2)
      return { top, left, size, opacity, duration, delay, i }
    })
  }, [numStars, areaHeight, areaWidth])

  return (
    <div
      style={{
        position: 'absolute',
        width: areaWidth,
        height: areaHeight,
        left: 0,
        top: 0,
        zIndex,
        pointerEvents: 'none',
        ...style
      }}>
      {stars.map((star) => (
        <div
          key={star.i}
          style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: 'white',
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 4}px ${star.size / 2}px white`,
            animation: twinkle ? `star-twinkle ${star.duration}s ease-in-out ${star.delay}s infinite` : undefined
          }}
        />
      ))}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
