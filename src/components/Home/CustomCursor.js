import React from 'react'
import { AnimatePresence } from 'framer-motion'

const CustomCursor = ({ cursorPos, handPos, showHand }) => {
  return (
    <>
      {/* Custom Hand Pointer */}
      <AnimatePresence>
        {showHand && (
          <div
            className='fixed w-8 h-8 pointer-events-none z-50 transition-transform duration-100 ease-out'
            style={{
              left: handPos.x - 16,
              top: handPos.y - 16,
              transform: 'translate(-50%, -50%)'
            }}>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-full h-full drop-shadow-lg'>
              <path d='M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0' />
              <path d='M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2' />
              <path d='M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8' />
              <path d='M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15' />
            </svg>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CustomCursor
