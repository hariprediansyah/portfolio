import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Starfield from '../Starfield'

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, navigate }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'services', label: 'Services' },
    { key: 'contact', label: 'Contact' }
  ]

  return (
    <nav className='fixed top-0 w-full bg-gradient-to-b from-black/70 via-slate-900/60 to-transparent backdrop-blur-xl shadow-2xl z-50 border-b border-slate-700/30 dark:border-slate-600/30 transition-all'>
      {/* Starfield Layer */}
      <Starfield
        numberOfStars={30}
        areaSize={{ width: '100%', height: '100%' }}
        zIndex={0}
        style={{ opacity: 0.6, pointerEvents: 'none' }}
        twinkle={true}
      />
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo bulat */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-slate-800 text-white text-2xl font-extrabold shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200 border-2 border-blue-500/30 hover:border-blue-400/50'
              onClick={() => scrollToSection('home')}
              aria-label='Go to Home'>
              HP
            </motion.div>
            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-10'>
              {navItems.map((item) => {
                const isActive = activeSection === item.key
                if (item.key === 'blog') {
                  return (
                    <button
                      key={item.key}
                      onClick={() => navigate('/blog')}
                      className={`relative text-lg font-semibold px-3 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all
                        text-gray-300 hover:text-blue-400
                        ${isActive ? 'text-blue-400' : ''}`}
                      aria-label={item.label}>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId='nav-underline'
                          className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-500 to-slate-600'
                        />
                      )}
                    </button>
                  )
                }
                return (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className={`relative text-lg font-semibold px-3 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all
                      text-gray-300 hover:text-blue-400
                      ${isActive ? 'text-blue-400' : ''}`}
                    aria-label={item.label}>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId='nav-underline'
                        className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-500 to-slate-600'
                      />
                    )}
                  </button>
                )
              })}
            </div>
            {/* Theme Toggle & Mobile Nav Button */}
            <div className='flex items-center space-x-4'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors'
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className='md:hidden bg-black/95 dark:bg-black/95 backdrop-blur-xl border-t border-slate-700/30 dark:border-slate-600/30 shadow-2xl fixed top-20 left-0 right-0 z-50'>
            <div className='px-6 py-8 space-y-4 flex flex-col'>
              {navItems.map((item) => {
                const isActive = activeSection === item.key
                if (item.key === 'blog') {
                  return (
                    <button
                      key={item.key}
                      onClick={() => {
                        navigate('/blog')
                        setIsMenuOpen(false)
                      }}
                      className={`relative text-xl font-semibold px-4 py-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all
                        text-gray-300 hover:text-blue-400
                        ${isActive ? 'text-blue-400' : ''}`}
                      aria-label={item.label}>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId='nav-underline-mobile'
                          className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-500 to-slate-600'
                        />
                      )}
                    </button>
                  )
                }
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      scrollToSection(item.key)
                      setIsMenuOpen(false)
                    }}
                    className={`relative text-xl font-semibold px-4 py-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all
                      text-gray-300 hover:text-blue-400
                      ${isActive ? 'text-blue-400' : ''}`}
                    aria-label={item.label}>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId='nav-underline-mobile'
                        className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-500 to-slate-600'
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
