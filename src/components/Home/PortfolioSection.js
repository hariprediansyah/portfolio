import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, X, Github, Calendar, Code, Play, CheckCircle, Smartphone } from 'lucide-react'
import { LoadImage } from '../LoadImage'
import SpaceBackground from './SpaceBackground'
import ProjectModal from '../ProjectModal'

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const projectImages = [
    'Banner.png',
    'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
    'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg'
  ]

  const portfolioProjects = [
    {
      id: 'skylera-sss',
      title: 'Skylera SSS',
      description:
        'Skylera Security System designed to support security institutions and patrol teams, prioritizing reliability and efficiency in patrol management.',
      tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
      category: 'Mobile App',
      live: 'https://play.google.com/store/apps/details?id=com.skylera.sss&hl=id&gl=US',
      appStore: '',
      playStore: 'https://play.google.com/store/apps/details?id=com.skylera.sss&hl=id&gl=US',
      github: '',
      images: ['project_images/skylera-sss.png'],
      status: 'completed',
      date: '2024-01-15'
    },
    {
      id: 'sss-web',
      title: 'SSS Admin Web',
      description:
        'SSS Admin Web is a comprehensive web application built with React and Tailwind CSS for managing Skylera Security System operations. The platform provides area and checkpoint patrol management, user management system, and detailed activity reporting. Additional features include payslip generation and other administrative tools to streamline security operations and personnel management.',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'SQL Server'],
      category: 'Web App',
      live: 'https://sss.skylerasolutions.com/',
      appStore: '',
      playStore: '',
      github: '',
      images: ['project_images/sss_web.png'],
      status: 'completed',
      date: '2025-01-01'
    },
    {
      id: 'somatua',
      title: 'Somatua ERP',
      description:
        'Somatua ERP is a comprehensive web application developed for Yayasan Somatua to manage their organizational data efficiently. The system handles employee data management, training records, and master data administration. This ERP solution provides a centralized platform for the foundation to streamline their operations, track employee information, manage training programs, and maintain essential master data for smooth organizational workflow.',
      tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'React'],
      category: 'Web App',
      live: 'https://somatuaerp.com',
      appStore: '',
      playStore: '',
      github: '',
      images: ['project_images/somatua.png'],
      status: 'completed',
      date: '2025-03-10'
    },
    {
      id: 'asamba',
      title: 'Asamba',
      description:
        'Asamba is a simple app to record all your money transfers in and out, complete with amount, date, and notes. Easily view your transfer history, track your total balance, and quickly search for any transaction. Designed to be lightweight and user-friendly, Asamba Coin is perfect for personal use, small businesses, or anyone who wants a clear record of their money flow.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      category: 'Mobile App',
      live: '',
      appStore: 'https://apps.apple.com/us/app/asamba/id6745620839',
      playStore: 'https://play.google.com/store/apps/details?id=com.asamba.coin',
      github: '',
      images: ['project_images/asamba.png'],
      status: 'completed',
      date: '2024-03-10'
    },
    {
      id: 'pettycash',
      title: 'DCT PettyCash',
      description:
        'DCT PettyCash is a comprehensive mobile application designed for managing petty cash transactions and fund transfers. The app enables transfers between Admin and non-admin Users, between non-admin Users, and from non-admin Users to Admin. It also provides features for Admin to withdraw non-admin User balances and facilitates BON payments for both Admin and non-admin Users, ensuring efficient cash flow management within the organization.',
      tech: ['Java', 'SQL Server', 'Android Studio'],
      category: 'Mobile App',
      live: '',
      appStore: '',
      playStore: 'https://play.google.com/store/apps/details?id=com.advantagescm.pettycash&hl=id',
      github: '',
      images: ['project_images/pettycash.png'],
      status: 'completed',
      date: '2022-12-11'
    }
  ]

  const techIcons = {
    React: Code,
    Flutter: Code,
    'Node.js': Code,
    Express: Code,
    MongoDB: Code,
    PostgreSQL: Code,
    Firebase: Code,
    SQLite: Code,
    Docker: Code
  }

  return (
    <section id='portfolio' className='py-20 relative overflow-hidden'>
      {/* Space Background untuk Portfolio Section */}
      <SpaceBackground
        starfieldOpacity={0.25}
        numberOfStars={40}
        nebulaIntensity={0.06}
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
              className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-700/30 hover:border-blue-500/50 cursor-pointer'
              onClick={() => {
                setSelectedProject(project)
                setSelectedImage(0)
              }}>
              <div className='relative aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden transform-gpu'>
                <LoadImage url={project.images[0]} alt={project.title} className='rounded-t-xl' />
              </div>
              <div className='p-6'>
                <div className='text-sm text-blue-400 font-semibold mb-2 drop-shadow-sm'>{project.category}</div>
                <h3 className='text-xl font-bold text-white mb-0 drop-shadow-sm'>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail Project */}
        {/* {selectedProject && (
          <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'>
            
          </div>
        )} */}
        <ProjectModal
          selectedProject={selectedProject}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          onClose={() => setSelectedProject(null)}
          techIcons={techIcons}
        />
      </div>
    </section>
  )
}

export default PortfolioSection
