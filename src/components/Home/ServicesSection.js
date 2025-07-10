import React from 'react'
import { motion } from 'framer-motion'
import SpaceBackground from './SpaceBackground'

const ServicesSection = () => {
  const serviceList = [
    {
      title: 'Freelance Web Development',
      description: 'Custom web applications built with modern frameworks and best practices',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Maintenance Support']
    },
    {
      title: 'API Integration & Backend Services',
      description: 'Robust backend solutions and seamless third-party integrations',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security Implementation']
    },
    {
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect implementation of designs with smooth user experiences',
      features: ['Interactive Animations', 'Accessibility Standards', 'Cross-browser Support', 'Mobile Optimization']
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology choices and development strategies',
      features: ['Architecture Planning', 'Code Review', 'Performance Audit', 'Team Training']
    }
  ]

  return (
    <section id='services' className='py-20 relative overflow-hidden'>
      {/* Space Background untuk Services Section */}
      <SpaceBackground
        starfieldOpacity={0.3}
        numberOfStars={35}
        nebulaIntensity={0.08}
        showShootingStars={true}
        showPlanets={true}
        showConstellationLines={true}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg'>Services</h2>
          <p className='text-xl text-cyan-300 max-w-3xl mx-auto drop-shadow-md'>
            Comprehensive development solutions for your digital needs
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-700/30 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 group'>
              <h3 className='text-2xl font-bold text-white mb-4 drop-shadow-sm group-hover:text-blue-300 transition-colors'>
                {service.title}
              </h3>
              <p className='text-gray-300 mb-6 drop-shadow-sm'>{service.description}</p>
              <ul className='space-y-3'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center text-gray-300 drop-shadow-sm'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full mr-3 shadow-sm'></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
