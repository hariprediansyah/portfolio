import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { X, Calendar, Code, Play, Smartphone, Github } from 'lucide-react'

const ProjectModal = ({ selectedProject, selectedImage, setSelectedImage, onClose, techIcons }) => {
  // Mencegah scroll pada background saat modal terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  if (!selectedProject) return null

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className='bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative border border-slate-700/50'>
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 z-50 text-gray-400 hover:text-red-500 transition-colors bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-600/50'
          onClick={onClose}>
          <X size={24} />
        </button>

        <div className='flex flex-col h-full'>
          {/* Image Section */}
          <div className='w-full bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50'>
            {/* Main Image */}
            <div className='relative rounded-xl overflow-hidden h-80'>
              <img src={selectedProject.images[0]} alt={selectedProject.title} className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent'></div>
              <div className='absolute bottom-4 left-4 right-4'>
                <span className='inline-block px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-2 border border-blue-500/50'>
                  {selectedProject.category}
                </span>
                <h2 className='text-2xl font-bold text-white drop-shadow-lg'>{selectedProject.title}</h2>
                {/* Date di bawah title */}
                <div className='flex items-center text-gray-200 mt-2'>
                  <Calendar size={16} className='mr-2' />
                  <span className='text-sm drop-shadow-md'>{new Date(selectedProject.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Section - Scrollable */}
          <div className='w-full p-8 flex-1 overflow-y-auto'>
            <div className='space-y-6'>
              {/* Project Description */}
              <div>
                <h3 className='text-xl font-bold text-white mb-3 drop-shadow-sm'>Project Description</h3>
                <p className='text-gray-300 leading-relaxed'>{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className='text-lg font-bold text-white mb-3 drop-shadow-sm'>Technologies Used</h3>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.tech.map((tech, index) => {
                    const IconComponent = techIcons[tech] || Code
                    return (
                      <div
                        key={index}
                        className='flex items-center space-x-2 px-3 py-2 bg-blue-900/30 backdrop-blur-sm rounded-lg border border-blue-500/30'>
                        <IconComponent className='w-4 h-4 text-blue-400' />
                        <span className='text-blue-200 text-sm font-medium'>{tech}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-wrap gap-3 pt-6 border-t border-slate-700/50'>
                {/* Live Demo Button */}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-colors border border-blue-500/50'>
                    <Play size={16} className='mr-2' />
                    Live Demo
                  </a>
                )}

                {/* App Store Button for Mobile Apps */}
                {selectedProject.category === 'Mobile App' && selectedProject.appStore && (
                  <a
                    href={selectedProject.appStore}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center px-4 py-2 bg-slate-800/90 backdrop-blur-sm text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-600/50'>
                    <Smartphone size={16} className='mr-2' />
                    App Store
                  </a>
                )}

                {/* Play Store Button for Mobile Apps */}
                {selectedProject.category === 'Mobile App' && selectedProject.playStore && (
                  <a
                    href={selectedProject.playStore}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center px-4 py-2 bg-green-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-green-700 transition-colors border border-green-500/50'>
                    <Smartphone size={16} className='mr-2' />
                    Play Store
                  </a>
                )}

                {/* Source Code Button - Only show if github exists */}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center px-4 py-2 bg-slate-800/90 backdrop-blur-sm text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-600/50'>
                    <Github size={16} className='mr-2' />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default ProjectModal
