import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'

const Astronaut = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState(null)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  // Manual motion value
  const y = useMotionValue(0)
  const x = useTransform(scrollY, [0, 300], [0, -20])

  // Saat scroll, update y dari transform
  const scrollYToY = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (currentY) => {
      const direction = currentY > lastScrollY ? 'down' : 'up'
      setLastScrollY(currentY)

      const centerY = window.innerHeight / 2 - 40
      const clamp = (v, min, max) => Math.max(min, Math.min(v, max))

      let targetY
      if (direction === 'down') {
        targetY = clamp(scrollYToY.get(), -100, centerY)
      } else {
        targetY = centerY
      }

      console.log(targetY)

      animate(y, targetY, {
        type: 'spring',
        stiffness: 120,
        damping: 20
      })
    })

    return () => unsubscribe()
  }, [scrollYToY, y, lastScrollY])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)

      // Clear timeout sebelumnya
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      const timeout = setTimeout(() => {
        setIsScrolling(false)

        const centerY = window.innerHeight / 2 - 40 // setengah viewport dikurangi setengah tinggi astronot
        animate(y, centerY, {
          type: 'spring',
          stiffness: 120,
          damping: 10
        })
      }, 150)

      setScrollTimeout(timeout)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [scrollTimeout, y])

  const rotate = useTransform(scrollY, [0, 300], [0, 5]) // rotasi max 5 derajat

  return (
    <motion.div
      className='fixed left-8 top-0 z-50 pointer-events-none'
      style={{
        y,
        x,
        rotate
      }}>
      {/* Astronaut Container */}
      <motion.div
        className='relative'
        animate={{
          y: isScrolling ? 0 : [0, 30, 0]
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: isScrolling ? 0 : Infinity,
          repeatDelay: 2
        }}>
        {/* Astronaut Body */}
        <div className='relative w-16 h-20'>
          {/* Helmet */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-2 border-gray-300 shadow-lg'>
            {/* Helmet Visor */}
            <div className='absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-60'></div>
            {/* Helmet Reflection */}
            <div className='absolute top-3 left-3 w-2 h-2 bg-white rounded-full opacity-80'></div>
          </div>

          {/* Body Suit */}
          <div className='absolute top-10 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-white rounded-t-2xl border-2 border-gray-300 shadow-lg'>
            {/* Oxygen Tank */}
            <div className='absolute -right-2 top-2 w-4 h-8 bg-gray-400 rounded-full border border-gray-500'>
              <div className='absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
            </div>

            {/* Control Panel */}
            <div className='absolute left-1 top-2 w-6 h-4 bg-gray-600 rounded border border-gray-700'>
              <div className='flex space-x-1 p-1'>
                <div className='w-1 h-1 bg-red-400 rounded-full animate-pulse'></div>
                <div className='w-1 h-1 bg-yellow-400 rounded-full'></div>
                <div className='w-1 h-1 bg-green-400 rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Arms */}
          <div className='absolute top-12 -left-1 w-3 h-8 bg-white rounded-full border border-gray-300 transform rotate-12'></div>
          <div className='absolute top-12 -right-1 w-3 h-8 bg-white rounded-full border border-gray-300 transform -rotate-12'></div>

          {/* Legs */}
          <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1'>
            <div className='w-3 h-6 bg-white rounded-full border border-gray-300'></div>
            <div className='w-3 h-6 bg-white rounded-full border border-gray-300'></div>
          </div>

          {/* Boots */}
          <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1'>
            <div className='w-4 h-3 bg-gray-400 rounded-full border border-gray-500'></div>
            <div className='w-4 h-3 bg-gray-400 rounded-full border border-gray-500'></div>
          </div>
        </div>

        {/* Floating Particles */}
        <motion.div
          className='absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60'
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute -bottom-2 -left-2 w-1 h-1 bg-cyan-400 rounded-full opacity-80'
          animate={{
            y: [0, -8, 0],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />

        {/* Tether Line */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-40'></div>
      </motion.div>

      {/* Space Dust Trail */}
      <div className='absolute -top-4 -right-4 w-8 h-8'>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full opacity-40'
            style={{
              left: `${i * 2}px`,
              top: `${i * 1.5}px`
            }}
            animate={{
              opacity: [0.4, 0, 0.4],
              scale: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Astronaut
