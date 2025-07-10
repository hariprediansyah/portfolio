import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SpaceBackground from './SpaceBackground'

const HeroSection = ({ scrollToSection, viewWorkBtnRef, setShowHand, setHandPos, showHand }) => {
  return (
    <section id='home' className='pt-20 min-h-screen flex items-center relative overflow-hidden'>
      {/* Space Background dengan semua elemen untuk Hero Section */}
      <SpaceBackground
        starfieldOpacity={0.4}
        numberOfStars={150}
        nebulaIntensity={0.15}
        showShootingStars={true}
        showPlanets={true}
        showConstellationLines={true}
      />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-10'>
          <h1 className='text-6xl lg:text-7xl font-extrabold text-white relative z-20 drop-shadow-lg'>
            Hari Prediansyah
          </h1>
          <p className='text-2xl lg:text-3xl text-cyan-400 font-semibold relative z-20 drop-shadow-md'>
            Just a dev trying not to break production.
          </p>
          <p className='text-xl text-gray-300 max-w-xl relative z-20 drop-shadow-sm'>
            Fullstack Developer specializing in modern web, mobile, and desktop applications
          </p>
          <div className='flex flex-col sm:flex-row gap-6 relative z-20'>
            <button
              ref={viewWorkBtnRef}
              onMouseEnter={(e) => {
                setShowHand(true)
                e.currentTarget.style.backgroundPosition = 'left center'
              }}
              onMouseMove={(e) => setHandPos({ x: e.clientX, y: e.clientY })}
              onMouseLeave={(e) => {
                setShowHand(false)
                e.currentTarget.style.backgroundPosition = 'right center'
              }}
              onClick={() => scrollToSection('portfolio')}
              className='relative px-12 py-5 text-2xl text-white rounded-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl overflow-hidden z-10 hover:shadow-cyan-500/50'
              style={{
                backgroundImage: 'linear-gradient(120deg, #1e40af, #1e293b)',
                backgroundSize: '200% 200%',
                backgroundPosition: 'right center'
              }}>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              <span className='relative z-10'>Explore My Universe</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className='btn-hover-transition relative text-blue-400 overflow-hidden border-2 border-blue-600 hover:text-white hover:bg-blue-600/20 active:border-blue-500 rounded-xl text-2xl font-bold px-12 py-5 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300'>
              <p>Contact Mission Control</p>
            </button>
          </div>
          <div className='icons-wrapper flex space-x-8 pt-6 relative z-20'>
            <a
              href='https://github.com/hariprediansyah'
              className='text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-blue-500/50'>
              <i className='fa-brands fa-github fa-xl'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/hari-prediansyah-8516411b4'
              className='text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-blue-500/50'>
              <i className='fa-brands fa-linkedin fa-xl'></i>
            </a>
            <a
              href='https://instagram.com/hariiprd'
              className='text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-blue-500/50'>
              <i className='fa-brands fa-instagram fa-xl'></i>
            </a>
          </div>
        </motion.div>

        {/* Profile Image as Planet */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative z-20 flex justify-center lg:justify-end'>
          <div className='relative w-96 h-96 flex items-center justify-center'>
            {/* Orbital Rings */}
            <div className='absolute inset-0 w-full h-full border-2 border-blue-500/25 rounded-full animate-spin-slow'></div>
            <div className='absolute top-6 left-6 right-6 bottom-6 border border-slate-500/20 rounded-full animate-spin-slow-reverse'></div>
            <div className='absolute top-12 left-12 right-12 bottom-12 border border-indigo-500/15 rounded-full animate-spin-slow'></div>
            <div className='absolute top-16 left-16 right-16 bottom-16 border border-cyan-500/10 rounded-full animate-spin-slow-reverse'></div>

            {/* Profile Image */}
            <div className='relative w-72 h-72 rounded-full overflow-hidden shadow-2xl shadow-blue-600/40 border-4 border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-indigo-600/20'>
              <img
                src='/profile.jpg'
                alt='Hari Prediansyah'
                className='w-full h-full object-cover object-center'
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Atmospheric Glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-indigo-600/30'></div>
            </div>

            {/* Space Debris */}
            <div className='absolute -top-6 -right-6 w-6 h-6 bg-slate-400/50 rounded-full animate-float shadow-lg'></div>
            <div
              className='absolute -bottom-8 -left-8 w-4 h-4 bg-blue-400/40 rounded-full animate-float shadow-lg'
              style={{ animationDelay: '2s' }}></div>
            <div
              className='absolute top-1/2 -right-12 w-3 h-3 bg-indigo-400/60 rounded-full animate-float shadow-lg'
              style={{ animationDelay: '1s' }}></div>
            <div
              className='absolute top-1/3 -left-10 w-5 h-5 bg-cyan-400/30 rounded-full animate-float shadow-lg'
              style={{ animationDelay: '3s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
