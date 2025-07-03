import React from 'react'
import Starfield from '../Starfield'

const SpaceBackground = ({
  starfieldOpacity = 0.3,
  numberOfStars = 100,
  nebulaIntensity = 0.1,
  showShootingStars = false,
  showPlanets = false,
  showConstellationLines = false
}) => {
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

      {/* Shooting Stars - Opsional */}
      {showShootingStars && (
        <>
          <div
            className='absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-ping'
            style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div
            className='absolute top-40 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping'
            style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          <div
            className='absolute bottom-40 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-ping'
            style={{ animationDelay: '4s', animationDuration: '5s' }}></div>

          <div className='absolute top-32 left-0 w-2 h-0.5 bg-gradient-to-r from-white to-transparent animate-shooting-star'></div>
          <div
            className='absolute top-48 left-0 w-1.5 h-0.5 bg-gradient-to-r from-cyan-300 to-transparent animate-shooting-star'
            style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
          <div
            className='absolute top-64 left-0 w-1 h-0.5 bg-gradient-to-r from-purple-300 to-transparent animate-shooting-star'
            style={{ animationDelay: '4s', animationDuration: '5s' }}></div>
        </>
      )}

      {/* Planets - Opsional */}
      {showPlanets && (
        <>
          <div className='absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full blur-sm animate-float shadow-lg shadow-blue-600/20'></div>
          <div
            className='absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full blur-sm animate-float shadow-lg shadow-slate-600/20'
            style={{ animationDelay: '3s' }}></div>
          <div
            className='absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full blur-sm animate-float shadow-lg shadow-indigo-600/20'
            style={{ animationDelay: '1.5s' }}></div>
        </>
      )}

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
