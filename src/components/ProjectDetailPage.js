import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Sun,
  Moon,
  ExternalLink,
  Github,
  Calendar,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Database,
  Play,
  Image as ImageIcon,
  CheckCircle
} from 'lucide-react'

const ProjectDetailPage = ({ isDark, toggleTheme }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const content = {
    en: {
      backToProjects: 'Back to Projects',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      technologies: 'Technologies Used',
      features: 'Key Features',
      description: 'Project Description',
      gallery: 'Project Gallery',
      relatedProjects: 'Related Projects',
      viewProject: 'View Project',
      projectType: 'Project Type',
      status: 'Status',
      completed: 'Completed',
      development: 'In Development',
      projects: {
        'ecommerce-platform': {
          title: 'E-Commerce Platform',
          shortDescription: 'Modern e-commerce solution with React and Laravel backend',
          description:
            'A comprehensive e-commerce platform built with modern technologies, featuring a responsive React frontend and a robust Laravel backend. The platform includes user authentication, product management, shopping cart functionality, payment integration with Stripe, order management, and an admin dashboard for managing the entire system.',
          category: 'Web Development',
          type: 'Full Stack Web Application',
          status: 'completed',
          date: '2024-02-15',
          tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS', 'Stripe API', 'Redux', 'Laravel Sanctum'],
          features: [
            'User Authentication & Authorization',
            'Product Catalog with Search & Filters',
            'Shopping Cart & Wishlist',
            'Secure Payment Integration (Stripe)',
            'Order Management System',
            'Admin Dashboard',
            'Responsive Design',
            'RESTful API Architecture',
            'Email Notifications',
            'Inventory Management'
          ],
          github: 'https://github.com/hariprediansyah/ecommerce-platform',
          live: 'https://ecommerce-demo.com'
        },
        'banking-app': {
          title: 'Mobile Banking App',
          shortDescription: 'Secure banking application built with Flutter',
          description:
            'A comprehensive mobile banking application developed with Flutter, featuring biometric authentication, real-time transaction processing, and a modern user interface. The app includes account management, fund transfers, bill payments, transaction history, and push notifications for enhanced user experience.',
          category: 'Mobile Development',
          type: 'Mobile Application',
          status: 'completed',
          date: '2024-01-20',
          tech: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Provider', 'Biometric Auth', 'Push Notifications'],
          features: [
            'Biometric Authentication (Fingerprint/Face ID)',
            'Real-time Balance Updates',
            'Fund Transfers Between Accounts',
            'Bill Payment System',
            'Transaction History & Search',
            'Push Notifications',
            'Dark/Light Theme Support',
            'Offline Data Caching',
            'Security PIN Setup',
            'Account Statement Download'
          ],
          github: 'https://github.com/hariprediansyah/banking-app'
        }
      }
    },
    id: {
      backToProjects: 'Kembali ke Proyek',
      liveDemo: 'Demo Langsung',
      sourceCode: 'Source Code',
      technologies: 'Teknologi yang Digunakan',
      features: 'Fitur Utama',
      description: 'Deskripsi Proyek',
      gallery: 'Galeri Proyek',
      relatedProjects: 'Proyek Terkait',
      viewProject: 'Lihat Proyek',
      projectType: 'Tipe Proyek',
      status: 'Status',
      completed: 'Selesai',
      development: 'Dalam Pengembangan',
      projects: {
        'ecommerce-platform': {
          title: 'Platform E-Commerce',
          shortDescription: 'Solusi e-commerce modern dengan React dan backend Laravel',
          description:
            'Platform e-commerce komprehensif yang dibangun dengan teknologi modern, menampilkan frontend React yang responsif dan backend Laravel yang kuat. Platform ini mencakup autentikasi pengguna, manajemen produk, fungsionalitas keranjang belanja, integrasi pembayaran dengan Stripe, manajemen pesanan, dan dashboard admin untuk mengelola seluruh sistem.',
          category: 'Pengembangan Web',
          type: 'Aplikasi Web Full Stack',
          status: 'completed',
          date: '2024-02-15',
          tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS', 'Stripe API', 'Redux', 'Laravel Sanctum'],
          features: [
            'Autentikasi & Otorisasi Pengguna',
            'Katalog Produk dengan Pencarian & Filter',
            'Keranjang Belanja & Wishlist',
            'Integrasi Pembayaran Aman (Stripe)',
            'Sistem Manajemen Pesanan',
            'Dashboard Admin',
            'Desain Responsif',
            'Arsitektur RESTful API',
            'Notifikasi Email',
            'Manajemen Inventori'
          ],
          github: 'https://github.com/hariprediansyah/ecommerce-platform',
          live: 'https://ecommerce-demo.com'
        },
        'banking-app': {
          title: 'Aplikasi Mobile Banking',
          shortDescription: 'Aplikasi perbankan yang aman dibangun dengan Flutter',
          description:
            'Aplikasi mobile banking komprehensif yang dikembangkan dengan Flutter, menampilkan autentikasi biometrik, pemrosesan transaksi real-time, dan antarmuka pengguna modern. Aplikasi ini mencakup manajemen akun, transfer dana, pembayaran tagihan, riwayat transaksi, dan notifikasi push untuk pengalaman pengguna yang ditingkatkan.',
          category: 'Pengembangan Mobile',
          type: 'Aplikasi Mobile',
          status: 'completed',
          date: '2024-01-20',
          tech: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Provider', 'Biometric Auth', 'Push Notifications'],
          features: [
            'Autentikasi Biometrik (Sidik Jari/Face ID)',
            'Update Saldo Real-time',
            'Transfer Dana Antar Rekening',
            'Sistem Pembayaran Tagihan',
            'Riwayat & Pencarian Transaksi',
            'Notifikasi Push',
            'Dukungan Tema Gelap/Terang',
            'Caching Data Offline',
            'Pengaturan PIN Keamanan',
            'Download Rekening Koran'
          ],
          github: 'https://github.com/hariprediansyah/banking-app'
        }
      }
    }
  }

  const projectImages = {
    'ecommerce-platform': [
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      'https://images.unsplash.com/photo-1556742400-b6803c2fb5c4'
    ],
    'banking-app': [
      'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3'
    ]
  }

  const techIcons = {
    React: Code,
    Laravel: Server,
    Flutter: Smartphone,
    MySQL: Database,
    PostgreSQL: Database,
    'Tailwind CSS': Palette,
    '.NET': Monitor,
    'Node.js': Server,
    MongoDB: Database
  }

  const t = content['en']
  const project = t.projects[id]
  const images = projectImages[id] || []

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='animate-pulse'>
            <div className='h-8 bg-gray-300 dark:bg-gray-600 rounded w-48 mb-8'></div>
            <div className='h-96 bg-gray-300 dark:bg-gray-600 rounded-xl mb-8'></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='lg:col-span-2 space-y-4'>
                <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-full'></div>
                <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6'></div>
              </div>
              <div className='space-y-4'>
                <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/2'></div>
                <div className='h-32 bg-gray-300 dark:bg-gray-600 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'>
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Header */}
      <header className='bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex items-center justify-between'>
            <button
              onClick={() => navigate('/projects')}
              className='inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'>
              <ArrowLeft className='w-5 h-5 mr-2' />
              {t.backToProjects}
            </button>

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

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Project Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12'>
          <div className='relative rounded-xl overflow-hidden h-96 mb-8'>
            <img src={images[selectedImage] || images[0]} alt={project.title} className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
            <div className='absolute bottom-6 left-6 right-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <span className='inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4'>
                    {project.category}
                  </span>
                  <h1 className='text-4xl font-bold text-white mb-2'>{project.title}</h1>
                  <p className='text-xl text-gray-200'>{project.shortDescription}</p>
                </div>
                <div className='flex space-x-3'>
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                      <Play size={18} className='mr-2' />
                      {t.liveDemo}
                    </a>
                  )}
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors'>
                    <Github size={18} className='mr-2' />
                    {t.sourceCode}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Thumbnails */}
          {images.length > 1 && (
            <div className='flex space-x-4 mb-8'>
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-blue-600 scale-110'
                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                  }`}>
                  <img src={image} alt={`${project.title} ${index + 1}`} className='w-full h-full object-cover' />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Project Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>{t.description}</h2>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>{project.description}</p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>{t.features}</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm'>
                    <CheckCircle className='w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0' />
                    <span className='text-gray-700 dark:text-gray-300'>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1 space-y-8'>
            {/* Project Info */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>Project Info</h3>

              <div className='space-y-4'>
                <div>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-1'>{t.projectType}</dt>
                  <dd className='text-gray-900 dark:text-white'>{project.type}</dd>
                </div>

                <div>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-1'>{t.status}</dt>
                  <dd className='flex items-center'>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed'
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400'
                      }`}>
                      {project.status === 'completed' ? t.completed : t.development}
                    </span>
                  </dd>
                </div>

                <div>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-1'>Date Completed</dt>
                  <dd className='flex items-center text-gray-900 dark:text-white'>
                    <Calendar size={16} className='mr-2' />
                    {new Date(project.date).toLocaleDateString()}
                  </dd>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex space-x-3'>
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm'>
                      <ExternalLink size={16} className='mr-2' />
                      {t.liveDemo}
                    </a>
                  )}
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm'>
                    <Github size={16} className='mr-2' />
                    Code
                  </a>
                </div>
              </div>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>{t.technologies}</h3>

              <div className='space-y-3'>
                {project.tech.map((tech, index) => {
                  const IconComponent = techIcons[tech] || Code
                  return (
                    <div key={index} className='flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg'>
                      <IconComponent className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                      <span className='text-gray-900 dark:text-white font-medium'>{tech}</span>
                    </div>
                  )
                })}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
