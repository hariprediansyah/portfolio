import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center'>
      <div className='text-center'>
        {/* Main Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='mb-8'>
          <div className='w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg'>
            HP
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='text-2xl font-bold text-white mb-4'>
          Hari Prediansyah
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className='text-gray-300 mb-8'>
          Loading Portfolio...
        </motion.p>

        {/* Animated Progress Bar */}
        <div className='w-64 mx-auto'>
          <div className='bg-gray-700 rounded-full h-2 overflow-hidden'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className='h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'
            />
          </div>
        </div>

        {/* Floating Dots */}
        <div className='flex justify-center space-x-2 mt-8'>
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [-10, 10, -10],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className='w-3 h-3 bg-blue-600 rounded-full'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
