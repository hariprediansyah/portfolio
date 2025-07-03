import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BackToTop = ({ showBackToTop }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: 'linear' }}
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 border border-blue-500/30 backdrop-blur-sm'
          aria-label='Back to top'>
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
