import React from 'react'
import Starfield from '../Starfield'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min
}

const shootingStarColors = ['from-white', 'from-cyan-300', 'from-purple-300', 'from-blue-300']
const planetColors = [
  'from-blue-600 to-blue-800',
  'from-slate-600 to-slate-800',
  'from-indigo-600 to-indigo-800',
  'from-pink-500 to-purple-700',
  'from-yellow-400 to-yellow-700'
]

const SpaceBackground = ({
  starfieldOpacity = 0.3,
  numberOfStars = 100,
  nebulaIntensity = 0.1,
  showShootingStars = false,
  showPlanets = false,
  showConstellationLines = false
}) => {
  // Generate random shooting stars
  const shootingStars = React.useMemo(() => {
    if (!showShootingStars) return []
    const count = getRandomInt(5, 10)
    return Array.from({ length: count }).map((_, i) => {
      const top = getRandomInt(10, 80) // vh
      const left = getRandomInt(0, 10) // vw, start from left
      const width = getRandomFloat(1, 2.5)
      const height = getRandomFloat(0.4, 0.7)
      const color = shootingStarColors[getRandomInt(0, shootingStarColors.length - 1)]
      const delay = `${getRandomFloat(0, 5).toFixed(1)}s`
      const duration = `${getRandomFloat(3, 7).toFixed(1)}s`
      return { top, left, width, height, color, delay, duration, key: i }
    })
  }, [showShootingStars])

  // Generate random planets
  const planets = React.useMemo(() => {
    if (!showPlanets) return []
    const count = getRandomInt(2, 3)
    return Array.from({ length: count }).map((_, i) => {
      const size = getRandomInt(64, 128) // px, lebih besar
      const top = getRandomInt(10, 80) // vh
      const left = getRandomInt(10, 80) // vw
      const color = planetColors[getRandomInt(0, planetColors.length - 1)]
      const blur = getRandomInt(1, 2) === 1 ? 'blur-sm' : 'blur-md'
      const delay = `${getRandomFloat(0, 4).toFixed(1)}s`
      return { top, left, size, color, blur, delay, key: i }
    })
  }, [showPlanets])

  return (
    <>
      {/* Deep Space Background - Konsisten untuk semua section */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950'></div>

      {/* Nebula Effect - Konsisten dengan intensitas yang dapat disesuaikan */}
      <div
        className='absolute inset-0 bg-gradient-to-r from-blue-900/15 via-slate-800/10 to-indigo-900/15 animate-pulse'
        style={{ opacity: nebulaIntensity }}></div>

      {/* Stars Background - Layer 1 */}
      <Starfield
        numberOfStars={numberOfStars}
        areaSize={{ width: '100%', height: '100%' }}
        zIndex={1}
        style={{ opacity: starfieldOpacity, pointerEvents: 'none' }}
        twinkle={true}
      />

      {/* Stars Background - Layer 2 (distant stars) */}
      <Starfield
        numberOfStars={Math.floor(numberOfStars * 0.6)}
        areaSize={{ width: '100%', height: '100%' }}
        zIndex={2}
        style={{ opacity: starfieldOpacity * 0.5, pointerEvents: 'none' }}
        twinkle={false}
      />

      {/* Shooting Stars - Random */}
      {showShootingStars &&
        shootingStars.map((star) => (
          <div
            key={star.key}
            className={`absolute w-[${star.width}rem] h-[${star.height}rem] bg-gradient-to-r ${star.color} to-transparent animate-shooting-star`}
            style={{
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              animationDelay: star.delay,
              animationDuration: star.duration,
              borderRadius: '9999px',
              opacity: 0.8
            }}></div>
        ))}

      {/* Planets - Random */}
      {showPlanets &&
        planets.map((planet) => (
          <div
            key={planet.key}
            className={`absolute rounded-full ${planet.blur} animate-float shadow-lg shadow-blue-600/20 bg-gradient-to-br ${planet.color}`}
            style={{
              top: `${planet.top}vh`,
              left: `${planet.left}vw`,
              width: planet.size,
              height: planet.size,
              animationDelay: planet.delay
            }}></div>
        ))}

      {/* Space Dust - Konsisten */}
      <div
        className='absolute top-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-float'
        style={{ animationDelay: '2.5s' }}></div>
      <div
        className='absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float'
        style={{ animationDelay: '3.5s' }}></div>
      <div
        className='absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-slate-400/30 rounded-full animate-float'
        style={{ animationDelay: '1s' }}></div>

      {/* Constellation Lines - Opsional */}
      {showConstellationLines && (
        <>
          <div className='absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-blue-600/20 to-transparent transform rotate-45'></div>
          <div className='absolute bottom-1/4 right-1/4 w-24 h-px bg-gradient-to-r from-slate-400/20 to-transparent transform -rotate-30'></div>
        </>
      )}
    </>
  )
}

export default SpaceBackground
