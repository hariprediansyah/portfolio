import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Database,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  BookOpen
} from 'lucide-react'

const HomePage = ({ isDark, language, toggleTheme, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  // Language content dengan bahasa Indonesia yang lebih natural
  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        services: 'Services',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        name: 'Hari Prediansyah',
        tagline: 'Just a dev trying not to break production.',
        description: 'Fullstack Developer specializing in modern web, mobile, and desktop applications',
        cta: 'View My Work',
        contact: 'Get In Touch'
      },
      about: {
        title: 'About Me',
        intro:
          'Passionate fullstack developer with expertise in crafting digital experiences that combine elegant design with robust functionality.',
        description:
          'With extensive experience across web, mobile, and desktop development, I bring ideas to life using cutting-edge technologies. My approach focuses on clean, maintainable code and user-centered design principles.',
        skills: 'Technical Skills',
        experience: '5+ Years Experience',
        projects: '50+ Projects Completed',
        clients: '25+ Happy Clients'
      },
      portfolio: {
        title: 'Featured Projects',
        subtitle: 'A showcase of my recent work across different platforms',
        moreProjects: 'View All Projects',
        viewProject: 'View Details',
        projects: [
          {
            id: 'ecommerce-platform',
            title: 'E-Commerce Platform',
            description: 'Modern e-commerce solution with React and Laravel backend',
            tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
            category: 'Web Development'
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
      },
      services: {
        title: 'Services',
        subtitle: 'Comprehensive development solutions for your digital needs',
        list: [
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
            features: [
              'Interactive Animations',
              'Accessibility Standards',
              'Cross-browser Support',
              'Mobile Optimization'
            ]
          },
          {
            title: 'Technical Consulting',
            description: 'Expert guidance on technology choices and development strategies',
            features: ['Architecture Planning', 'Code Review', 'Performance Audit', 'Team Training']
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Ready to bring your ideas to life? Let's discuss your project",
        form: {
          name: 'Your Name',
          email: 'Your Email',
          subject: 'Subject',
          message: 'Your Message',
          send: 'Send Message'
        },
        info: {
          email: 'hariprediansyah@gmail.com',
          phone: '+62 858-8364-8268',
          location: 'Jakarta, Indonesia'
        }
      }
    },
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        portfolio: 'Portfolio',
        services: 'Layanan',
        blog: 'Blog',
        contact: 'Kontak'
      },
      hero: {
        name: 'Hari Prediansyah',
        tagline: 'Cuma developer yang berusaha gak ngerusak server.',
        description: 'Fullstack Developer yang ahli dalam pengembangan aplikasi web, mobile, dan desktop modern',
        cta: 'Lihat Karya Saya',
        contact: 'Hubungi Saya'
      },
      about: {
        title: 'Tentang Saya',
        intro:
          'Developer fullstack yang passionate dalam menciptakan pengalaman digital yang memadukan desain elegan dengan fungsionalitas yang kuat.',
        description:
          'Dengan pengalaman luas di bidang pengembangan web, mobile, dan desktop, saya mewujudkan ide-ide kreatif menjadi kenyataan menggunakan teknologi terkini. Pendekatan saya berfokus pada kode yang bersih, mudah dipelihara, dan prinsip desain yang mengutamakan pengalaman pengguna.',
        skills: 'Keahlian Teknis',
        experience: '5+ Tahun Pengalaman',
        projects: '50+ Proyek Selesai',
        clients: '25+ Klien Puas'
      },
      portfolio: {
        title: 'Proyek Unggulan',
        subtitle: 'Showcase karya terbaru saya di berbagai platform',
        moreProjects: 'Lihat Semua Proyek',
        viewProject: 'Lihat Detail',
        projects: [
          {
            id: 'ecommerce-platform',
            title: 'Platform E-Commerce',
            description: 'Solusi e-commerce modern dengan React dan backend Laravel',
            tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
            category: 'Pengembangan Web'
          },
          {
            id: 'banking-app',
            title: 'Aplikasi Mobile Banking',
            description: 'Aplikasi perbankan yang aman dibangun dengan Flutter',
            tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
            category: 'Pengembangan Mobile'
          },
          {
            title: 'Tool Analytics Desktop',
            description: 'Aplikasi desktop visualisasi data menggunakan .NET',
            tech: ['.NET', 'C#', 'SQL Server', 'WPF'],
            category: 'Pengembangan Desktop'
          },
          {
            title: 'Layanan API Gateway',
            description: 'Arsitektur microservices dengan Node.js dan MongoDB',
            tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
            category: 'Pengembangan Backend'
          },
          {
            title: 'Aplikasi Chat Real-time',
            description: 'Aplikasi chat bertenaga WebSocket dengan React',
            tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
            category: 'Pengembangan Web'
          }
        ]
      },
      services: {
        title: 'Layanan',
        subtitle: 'Solusi pengembangan komprehensif untuk kebutuhan digital Anda',
        list: [
          {
            title: 'Freelance Pengembangan Web',
            description: 'Aplikasi web custom yang dibangun dengan framework modern dan praktik terbaik',
            features: ['Desain Responsif', 'Optimasi SEO', 'Peningkatan Performa', 'Dukungan Maintenance']
          },
          {
            title: 'Integrasi API & Layanan Backend',
            description: 'Solusi backend yang robust dan integrasi pihak ketiga yang mulus',
            features: ['RESTful APIs', 'Desain Database', 'Integrasi Cloud', 'Implementasi Keamanan']
          },
          {
            title: 'Implementasi UI/UX',
            description: 'Implementasi desain yang pixel-perfect dengan pengalaman pengguna yang halus',
            features: ['Animasi Interaktif', 'Standar Aksesibilitas', 'Dukungan Cross-browser', 'Optimasi Mobile']
          },
          {
            title: 'Konsultasi Teknis',
            description: 'Panduan ahli dalam pemilihan teknologi dan strategi pengembangan',
            features: ['Perencanaan Arsitektur', 'Code Review', 'Audit Performa', 'Pelatihan Tim']
          }
        ]
      },
      contact: {
        title: 'Hubungi Saya',
        subtitle: 'Siap mewujudkan ide Anda? Mari diskusikan proyek Anda',
        form: {
          name: 'Nama Anda',
          email: 'Email Anda',
          subject: 'Subjek',
          message: 'Pesan Anda',
          send: 'Kirim Pesan'
        },
        info: {
          email: 'hari.prediansyah@email.com',
          phone: '+62 812-3456-7890',
          location: 'Jakarta, Indonesia'
        }
      }
    }
  }

  const projectImages = [
    'https://images.unsplash.com/photo-1593720213428-28a5b9e94613',
    'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
    'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg'
  ]

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const t = content[language]

  return (
    <div>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200/20 dark:border-gray-700/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer'
              onClick={() => scrollToSection('home')}>
              HP
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {Object.entries(t.nav).map(([key, value]) => {
                if (key === 'blog') {
                  return (
                    <button
                      key={key}
                      onClick={() => navigate('/blog')}
                      className='text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300'>
                      {value}
                    </button>
                  )
                }
                return (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === key ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                    {value}
                  </button>
                )
              })}
            </div>

            {/* Theme and Language Toggle */}
            <div className='flex items-center space-x-4'>
              <button
                onClick={toggleTheme}
                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={toggleLanguage}
                className=' h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-1 transition-colors focus:outline-none'
                title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}>
                {/* Track */}
                <div className={`flex w-full h-full items-center px-1 transition-all duration-300 gap-2`}>
                  {/* Bendera Inggris (kiri) */}
                  <img
                    src='/flags/uk.svg'
                    alt='UK Flag'
                    className={`w-6 h-6 transition-opacity duration-300 ${
                      language === 'en' ? 'opacity-100' : 'opacity-30'
                    }`}
                  />
                  {/* Bendera Indonesia (kanan) */}
                  <img
                    src='/flags/indonesia.svg'
                    alt='Indonesian Flag'
                    className={`w-6 h-6 transition-opacity duration-300 ${
                      language === 'id' ? 'opacity-100' : 'opacity-30'
                    }`}
                  />
                </div>
                {/* Knob */}
                <span
                  className={`absolute w-7 h-7 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300
          ${language === 'en' ? 'translate-x-0' : 'translate-x-8'}
        `}
                  style={{ left: 2, top: 2 }}
                />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'>
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
              <div className='px-4 py-6 space-y-4'>
                {Object.entries(t.nav).map(([key, value]) => {
                  if (key === 'blog') {
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          navigate('/blog')
                          setIsMenuOpen(false)
                        }}
                        className='block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                        {value}
                      </button>
                    )
                  }
                  return (
                    <button
                      key={key}
                      onClick={() => scrollToSection(key)}
                      className='block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                      {value}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white'>{t.hero.name}</h1>
            <p className='text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-medium'>{t.hero.tagline}</p>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-lg'>{t.hero.description}</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={() => scrollToSection('portfolio')}
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg'>
                {t.hero.cta}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all'>
                {t.hero.contact}
              </button>
            </div>
            <div className='flex space-x-6 pt-4'>
              <a
                href='https://github.com/hariprediansyah'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                <Github size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/hari-prediansyah-8516411b4'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                <Linkedin size={24} />
              </a>
              <a
                href='https://instagram.com/hariiprd'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                <Instagram size={24} />
              </a>
              <button
                onClick={() => navigate('/blog')}
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                title='Blog'>
                <BookOpen size={24} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'>
            <div className='relative w-80 h-80 mx-auto'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20'></div>
              <img
                src='profile.jpg'
                alt='Hari Prediansyah'
                className='relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl'
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>{t.about.title}</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>{t.about.intro}</p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>{t.about.description}</p>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>{t.about.experience}</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2'>{t.about.projects}</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>Projects</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>{t.about.clients}</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>{t.about.skills}</h3>

              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
                    <skill.icon className='w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform' />
                    <div className='font-semibold text-gray-900 dark:text-white text-sm'>{skill.name}</div>
                    <div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>{skill.category}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Only 5 projects */}
      <section id='portfolio' className='py-20 bg-gray-50 dark:bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>{t.portfolio.title}</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>{t.portfolio.subtitle}</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {t.portfolio.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group'>
                <div className='relative overflow-hidden'>
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <ExternalLink className='w-6 h-6 text-white' />
                  </div>
                  {project.id && (
                    <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <button
                        onClick={() => navigate(`/project/${project.id}`)}
                        className='px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors'>
                        {t.portfolio.viewProject}
                      </button>
                    </div>
                  )}
                </div>

                <div className='p-6'>
                  <div className='text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2'>{project.category}</div>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>{project.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full'>
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
              className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg'>
              {t.portfolio.moreProjects}
              <ArrowRight className='ml-2 w-5 h-5' />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>{t.services.title}</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>{t.services.subtitle}</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {t.services.list.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>{service.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>{service.description}</p>
                <ul className='space-y-3'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-gray-700 dark:text-gray-300'>
                      <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>{t.contact.title}</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>{t.contact.subtitle}</p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center'>
                  <Mail className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 dark:text-white'>Email</div>
                  <div className='text-gray-600 dark:text-gray-300'>{t.contact.info.email}</div>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center'>
                  <Phone className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 dark:text-white'>Phone</div>
                  <div className='text-gray-600 dark:text-gray-300'>{t.contact.info.phone}</div>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center'>
                  <MapPin className='w-6 h-6 text-green-600 dark:text-green-400' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 dark:text-white'>Location</div>
                  <div className='text-gray-600 dark:text-gray-300'>{t.contact.info.location}</div>
                </div>
              </div>

              <div className='pt-8'>
                <div className='flex space-x-6'>
                  <a
                    href='https://github.com/hariprediansyah'
                    className='w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all'>
                    <Github size={20} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/hari-prediansyah-8516411b4'
                    className='w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all'>
                    <Linkedin size={20} />
                  </a>
                  <a
                    href='https://instagram.com/hariiprd'
                    className='w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all'>
                    <Instagram size={20} />
                  </a>
                  <button
                    onClick={() => navigate('/blog')}
                    className='w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all'>
                    <BookOpen size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <form className='space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                      {t.contact.form.name}
                    </label>
                    <input
                      type='text'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                      placeholder={t.contact.form.name}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                      {t.contact.form.email}
                    </label>
                    <input
                      type='email'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                      placeholder={t.contact.form.email}
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                    {t.contact.form.subject}
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                    placeholder={t.contact.form.subject}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                    placeholder={t.contact.form.message}></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg'>
                  {t.contact.form.send}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 bg-gray-900 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-gray-400'>
            <p>&copy; 2024 Hari Prediansyah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
