import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Starfield from './Starfield'

const LOADING_DURATION = 2.0 // detik

const LoadingSpinner = ({ show }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!show) {
      setVisible(false)
    }
  }, [show])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='min-h-screen relative bg-gradient-to-br from-black via-slate-900 to-blue-950 flex items-center justify-center overflow-hidden'>
          {/* Starfield background */}
          <Starfield
            numStars={180}
            areaHeight='100vh'
            areaWidth='100vw'
            zIndex={0}
            style={{ opacity: 0.7 }}
            twinkle={true}
          />
          <div className='text-center relative z-10 flex flex-col items-center justify-center w-full'>
            {/* Loading Text dengan efek glow */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='text-4xl font-extrabold text-cyan-200 mb-6 drop-shadow-[0_0_16px_rgba(34,211,238,0.7)] animate-pulse-glow'>
              Hari Prediansyah
            </motion.h2>

            {/* Loading Text animasi typing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='text-xl text-cyan-100 mb-12 font-mono tracking-widest animate-pulse'>
              <span className='border-r-2 border-cyan-300 pr-1 animate-pulse'>Loading Portfolio...</span>
            </motion.p>

            {/* Animated Progress Bar */}
            <div className='w-[420px] max-w-full mx-auto mb-10'>
              <div className='bg-slate-800 rounded-full h-5 overflow-hidden shadow-lg'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: LOADING_DURATION, ease: 'easeInOut' }}
                  className='h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 rounded-full shadow-lg'
                />
              </div>
            </div>

            {/* Rocket Animation - modern, besar, dengan api animasi dan detail */}
            <motion.div
              initial={{ x: '-120%' }}
              animate={{ x: '120%' }}
              transition={{ duration: LOADING_DURATION, ease: 'linear' }}
              className='absolute left-0 right-0 mx-auto -bottom-10 w-48 h-24 z-20 pointer-events-none flex items-end'>
              {/* SVG Rocket modern dengan api animasi dan detail */}
              <svg viewBox='0 0 192 96' width='192' height='96' fill='none'>
                {/* Api animasi */}
                <motion.polygon
                  points='32,48 8,36 8,60'
                  fill='url(#fireGradient)'
                  animate={{
                    scale: [1, 1.18, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity
                  }}
                />
                <defs>
                  <linearGradient id='fireGradient' x1='8' y1='36' x2='32' y2='48' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#fbbf24' />
                    <stop offset='0.5' stopColor='#f59e42' />
                    <stop offset='1' stopColor='#f87171' />
                  </linearGradient>
                  <linearGradient id='bodyGradient' x1='40' y1='20' x2='160' y2='76' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#38bdf8' />
                    <stop offset='1' stopColor='#6366f1' />
                  </linearGradient>
                </defs>
                {/* Badan roket */}
                <ellipse cx='80' cy='48' rx='40' ry='24' fill='#e0e7ef' opacity='0.13' />
                <rect
                  x='48'
                  y='28'
                  width='96'
                  height='40'
                  rx='20'
                  fill='url(#bodyGradient)'
                  stroke='#64748b'
                  strokeWidth='2'
                />
                {/* Jendela */}
                <ellipse cx='80' cy='48' rx='12' ry='12' fill='#f1f5f9' stroke='#38bdf8' strokeWidth='3' />
                {/* Cone */}
                <polygon points='48,48 32,32 32,64' fill='#64748b' />
                <polygon points='144,48 160,32 160,64' fill='#64748b' />
                {/* Fin kiri */}
                <polygon points='48,60 24,80 48,80' fill='#38bdf8' />
                {/* Fin kanan */}
                <polygon points='144,60 168,80 144,80' fill='#6366f1' />
                {/* Fin bawah */}
                <polygon points='96,68 104,92 88,92' fill='#fbbf24' />
                {/* Detail garis */}
                <rect x='100' y='40' width='16' height='4' rx='2' fill='#a5b4fc' opacity='0.5' />
                <rect x='100' y='52' width='16' height='4' rx='2' fill='#a5b4fc' opacity='0.5' />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingSpinner
