import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Sun, Moon, Filter, Search } from 'lucide-react'

const AllProjectsPage = ({ isDark, toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()

  // Content dengan bahasa Inggris
  const content = {
    en: {
      title: 'All Projects',
      subtitle: 'Complete showcase of my development work across different platforms and technologies',
      backToHome: 'Back to Home',
      searchPlaceholder: 'Search projects...',
      filterAll: 'All Projects',
      categories: {
        web: 'Web Development',
        mobile: 'Mobile Development',
        desktop: 'Desktop Development',
        backend: 'Backend Development',
        fullstack: 'Full Stack'
      },
      projects: [
        {
          title: 'E-Commerce Platform',
          description:
            'Modern e-commerce solution with React and Laravel backend, featuring payment integration, inventory management, and admin dashboard.',
          tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS', 'Stripe API'],
          category: 'web',
          github: 'https://github.com/hariprediansyah/ecommerce-platform',
          live: 'https://ecommerce-demo.com',
          featured: true
        },
        {
          title: 'Mobile Banking App',
          description:
            'Secure banking application built with Flutter, featuring biometric authentication, transaction history, and real-time notifications.',
          tech: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Biometric Auth'],
          category: 'mobile',
          github: 'https://github.com/hariprediansyah/banking-app',
          featured: true
        },
        {
          title: 'Desktop Analytics Tool',
          description:
            'Data visualization desktop application using .NET, providing comprehensive analytics dashboard for business intelligence.',
          tech: ['.NET', 'C#', 'SQL Server', 'WPF', 'Chart.js'],
          category: 'desktop',
          github: 'https://github.com/hariprediansyah/analytics-tool',
          featured: true
        },
        {
          title: 'API Gateway Service',
          description:
            'Microservices architecture with Node.js and MongoDB, handling authentication, rate limiting, and service orchestration.',
          tech: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Redis'],
          category: 'backend',
          github: 'https://github.com/hariprediansyah/api-gateway',
          featured: true
        },
        {
          title: 'Real-time Chat App',
          description:
            'WebSocket-powered chat application with React, featuring group chats, file sharing, and emoji reactions.',
          tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
          category: 'web',
          github: 'https://github.com/hariprediansyah/chat-app',
          live: 'https://chat-demo.com',
          featured: true
        },
        {
          title: 'Restaurant Management System',
          description:
            'Complete restaurant management solution with POS system, inventory tracking, and customer management.',
          tech: ['Vue.js', 'Laravel', 'MySQL', 'Vuetify', 'Chart.js'],
          category: 'fullstack',
          github: 'https://github.com/hariprediansyah/restaurant-system',
          live: 'https://restaurant-demo.com'
        },
        {
          title: 'Fitness Tracker Mobile App',
          description:
            'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
          tech: ['React Native', 'Firebase', 'Redux', 'AsyncStorage', 'Charts'],
          category: 'mobile',
          github: 'https://github.com/hariprediansyah/fitness-tracker'
        },
        {
          title: 'Learning Management System',
          description: 'Educational platform with course management, video streaming, quizzes, and progress tracking.',
          tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
          category: 'fullstack',
          github: 'https://github.com/hariprediansyah/lms-platform',
          live: 'https://lms-demo.com'
        },
        {
          title: 'Inventory Management Desktop App',
          description:
            'Desktop application for warehouse inventory management with barcode scanning and reporting features.',
          tech: ['Electron', 'React', 'SQLite', 'Chart.js', 'Barcode Scanner'],
          category: 'desktop',
          github: 'https://github.com/hariprediansyah/inventory-app'
        },
        {
          title: 'Social Media API',
          description:
            'RESTful API for social media platform with user management, posts, comments, and real-time notifications.',
          tech: ['Node.js', 'MongoDB', 'JWT', 'Socket.io', 'Cloudinary'],
          category: 'backend',
          github: 'https://github.com/hariprediansyah/social-api'
        },
        {
          title: 'Task Management Web App',
          description:
            'Collaborative task management application with team workspaces, kanban boards, and time tracking.',
          tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
          category: 'fullstack',
          github: 'https://github.com/hariprediansyah/task-manager',
          live: 'https://tasks-demo.com'
        },
        {
          title: 'Weather Forecast App',
          description:
            'Beautiful weather application with location-based forecasts, weather maps, and severe weather alerts.',
          tech: ['Flutter', 'OpenWeather API', 'Google Maps', 'Hive DB', 'Provider'],
          category: 'mobile',
          github: 'https://github.com/hariprediansyah/weather-app'
        }
      ]
    }
  }

  const projectImages = [
    'https://images.unsplash.com/photo-1593720213428-28a5b9e94613',
    'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
    'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    'https://images.unsplash.com/photo-1532295454114-d7bc89024613',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    'https://images.unsplash.com/photo-1559028006-448665bd7c7f'
  ]

  const t = content['en']

  // Filter projects based on search and category
  const filteredProjects = t.projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Header */}
      <header className='bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <button
                onClick={() => navigate('/')}
                className='inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'>
                <ArrowLeft className='w-5 h-5 mr-2' />
                {t.backToHome}
              </button>
              <div className='hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600'></div>
              <div>
                <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>{t.title}</h1>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>{t.subtitle}</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <button
                onClick={toggleTheme}
                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters and Search */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8'>
          {/* Search */}
          <div className='relative flex-1 max-w-md'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
            />
          </div>

          {/* Category Filter */}
          <div className='flex items-center space-x-4'>
            <Filter className='text-gray-500 dark:text-gray-400 w-5 h-5' />
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                {t.filterAll}
              </button>
              {Object.entries(t.categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}>
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group'>
              <div className='relative overflow-hidden'>
                <img
                  src={projectImages[index % projectImages.length]}
                  alt={project.title}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full'>
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Links */}
                <div className='absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors'>
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors'>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className='p-6'>
                <div className='text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2'>
                  {t.categories[project.category]}
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-500 dark:text-gray-400 text-lg'>No projects found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProjectsPage
