import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { LoadImage } from '../LoadImage'
import SpaceBackground from './SpaceBackground'

const PortfolioSection = () => {
  const navigate = useNavigate()

  const projectImages = [
    'Banner.png',
    'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
    'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg'
  ]

  const portfolioProjects = [
    {
      id: 'ecommerce-platform',
      title: 'Skylera SSS',
      description: 'Modern e-commerce solution with React and Laravel backend',
      tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
      category: 'Mobile Development'
    },
    {
      id: 'banking-app',
      title: 'Mobile Banking App',
      description: 'Secure banking application built with Flutter',
      tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
      category: 'Mobile Development'
    },
    {
      title: 'Desktop Analytics Tool',
      description: 'Data visualization desktop application using .NET',
      tech: ['.NET', 'C#', 'SQL Server', 'WPF'],
      category: 'Desktop Development'
    },
    {
      title: 'API Gateway Service',
      description: 'Microservices architecture with Node.js and MongoDB',
      tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      category: 'Backend Development'
    },
    {
      title: 'Real-time Chat App',
      description: 'WebSocket-powered chat application with React',
      tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      category: 'Web Development'
    }
  ]

  return (
    <section id='portfolio' className='py-20 relative overflow-hidden'>
      {/* Space Background untuk Portfolio Section */}
      <SpaceBackground
        starfieldOpacity={0.25}
        numberOfStars={40}
        nebulaIntensity={0.06}
        showShootingStars={false}
        showPlanets={false}
        showConstellationLines={true}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg'>Featured Projects</h2>
          <p className='text-xl text-cyan-300 max-w-3xl mx-auto drop-shadow-md'>
            A showcase of my recent work across different platforms
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-colors'>
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-700/30 hover:border-blue-500/50'>
              <div className='relative aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden transform-gpu'>
                <LoadImage url={projectImages[index]} alt={project.title} className='rounded-t-xl' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <ExternalLink className='w-6 h-6 text-white' />
                </div>
                {project.id && (
                  <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className='px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors'>
                      View Details
                    </button>
                  </div>
                )}
              </div>

              <div className='p-6'>
                <div className='text-sm text-blue-400 font-semibold mb-2 drop-shadow-sm'>{project.category}</div>
                <h3 className='text-xl font-bold text-white mb-3 drop-shadow-sm'>{project.title}</h3>
                <p className='text-gray-300 mb-4 drop-shadow-sm'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-3 py-1 bg-slate-700/50 text-cyan-300 text-sm rounded-full border border-slate-600/30'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'>
          <button
            onClick={() => navigate('/projects')}
            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 border border-blue-500/30'>
            View All Projects
            <ArrowRight className='ml-2 w-5 h-5' />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
