import React from 'react'
import { motion } from 'framer-motion'
import SpaceBackground from './SpaceBackground'
import { Code, Palette, Smartphone, Monitor, Server, Database } from 'lucide-react'

const AboutSection = () => {
  const skills = [
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Laravel', icon: Server, category: 'Backend' },
    { name: 'Flutter', icon: Smartphone, category: 'Mobile' },
    { name: '.NET', icon: Monitor, category: 'Desktop' },
    { name: 'Node.js', icon: Server, category: 'Backend' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Frontend' },
    { name: 'SQL Server', icon: Database, category: 'Database' },
    { name: 'PostgreSQL', icon: Database, category: 'Database' },
    { name: 'MongoDB', icon: Database, category: 'Database' }
  ]

  return (
    <section id='about' className='py-28 relative overflow-hidden'>
      {/* Space Background untuk About Section */}
      <SpaceBackground
        starfieldOpacity={0.3}
        numberOfStars={50}
        nebulaIntensity={0.08}
        showShootingStars={true}
        showPlanets={true}
        showConstellationLines={true}
      />

      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'>
          <h2 className='text-5xl lg:text-6xl font-extrabold text-white mb-8 drop-shadow-lg'>About Me</h2>
          <p className='text-2xl text-cyan-300 max-w-3xl mx-auto drop-shadow-md'>
            Passionate fullstack developer with expertise in crafting digital experiences that combine elegant design
            with robust functionality.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-10'>
            <p className='text-xl text-gray-300 leading-relaxed drop-shadow-sm'>
              With extensive experience across web, mobile, and desktop development, I bring ideas to life using
              cutting-edge technologies. My approach focuses on clean, maintainable code and user-centered design
              principles.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
              <div className='text-center'>
                <div className='text-4xl font-extrabold text-blue-400 mb-3 drop-shadow-lg'>4+ Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-extrabold text-indigo-400 mb-3 drop-shadow-lg'>
                  15+ Projects Completed
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-10'>
            <h3 className='text-3xl font-bold text-white mb-8 drop-shadow-lg'>Technical Skills</h3>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl text-center group hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300 border border-slate-700/30 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20'>
                  <skill.icon className='w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform drop-shadow-lg' />
                  <div className='font-bold text-white text-lg drop-shadow-sm'>{skill.name}</div>
                  <div className='text-base text-cyan-300 mt-2 drop-shadow-sm'>{skill.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
