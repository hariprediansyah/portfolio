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
  BookOpen,
  ArrowUp
} from 'lucide-react'
import { LoadImage } from './LoadImage'
import axios from 'axios'
import { toast } from 'react-toastify'

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [showBackToTop, setShowBackToTop] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [handPos, setHandPos] = useState({ x: 0, y: 0 })
  const [showHand, setShowHand] = useState(false)
  const viewWorkBtnRef = React.useRef(null)
  const sendMessageBtnRef = React.useRef(null)

  // Language content dengan bahasa Indonesia yang lebih natural
  // Hapus seluruh deklarasi dan penggunaan objek content, t, dan akses t.*
  // Ganti dengan string langsung di JSX
  // Contoh:
  // Sebelumnya: <h1>{t.hero.name}</h1>
  // Setelah: <h1>Hari Prediansyah</h1>
  // ...
  // Lakukan untuk semua bagian yang sebelumnya mengambil dari t atau content

  const projectImages = [
    'Banner.png',
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

  const [imagesLoaded, setImagesLoaded] = useState(false)

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
      setShowBackToTop(window.scrollY > 200)
    }

    const preloadImages = () => {
      Promise.all(
        projectImages.map(
          (img) =>
            new Promise((resolve) => {
              const image = new Image()
              image.src = img
              image.onload = resolve
            })
        )
      ).then(() => {})
    }

    preloadImages()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      if (showHand) setHandPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [showHand])

  useEffect(() => {
    const viewWorkBtn = viewWorkBtnRef.current
    const sendMessageBtn = sendMessageBtnRef.current

    const onEnter = () => {
      setShowHand(true)
    }
    const onMove = (e) => {
      setHandPos({ x: e.clientX, y: e.clientY })
    }
    const onLeave = () => {
      setShowHand(false)
    }

    if (viewWorkBtn) {
      viewWorkBtn.addEventListener('mouseenter', onEnter)
      viewWorkBtn.addEventListener('mousemove', onMove)
      viewWorkBtn.addEventListener('mouseleave', onLeave)
    }

    if (sendMessageBtn) {
      sendMessageBtn.addEventListener('mouseenter', onEnter)
      sendMessageBtn.addEventListener('mousemove', onMove)
      sendMessageBtn.addEventListener('mouseleave', onLeave)
    }

    return () => {
      if (viewWorkBtn) {
        viewWorkBtn.removeEventListener('mouseenter', onEnter)
        viewWorkBtn.removeEventListener('mousemove', onMove)
        viewWorkBtn.removeEventListener('mouseleave', onLeave)
      }
      if (sendMessageBtn) {
        sendMessageBtn.removeEventListener('mouseenter', onEnter)
        sendMessageBtn.removeEventListener('mousemove', onMove)
        sendMessageBtn.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  function LoadImages(url) {
    return new Promise((resolve) => {
      const image = new Image()
      image.src = url
      image.onload = resolve
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //validasi
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill out all the fields', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regexEmail.test(formData.email)) {
      toast.error('Invalid email format', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return
    }
    toast.promise(
      new Promise((resolve, reject) => {
        axios
          .post('https://api.hariprediansyah.com/sendMessage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            })
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      }),
      {
        pending: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message'
      }
    )
    // toast.success('Message sent successfully!', {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined
    // })
  }

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'services', label: 'Services' },
    // { key: 'blog', label: 'Blog' },
    { key: 'contact', label: 'Contact' }
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
    <div>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg z-50 border-b border-gray-200/20 dark:border-gray-700/20 transition-all'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo bulat */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-extrabold shadow-md cursor-pointer hover:scale-105 transition-transform duration-200 border-4 border-white dark:border-gray-900'
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
                        text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                        ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}
                      aria-label={item.label}>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId='nav-underline'
                          className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-600 to-purple-600'
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
                      text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                      ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}
                    aria-label={item.label}>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId='nav-underline'
                        className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-600 to-purple-600'
                      />
                    )}
                  </button>
                )
              })}
            </div>
            {/* Theme Toggle & Mobile Nav Button */}
            <div className='flex items-center space-x-4'>
              {/* <button
                onClick={() => {
                  document.documentElement.classList.toggle('dark')
                }}
                className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors'
                aria-label='Toggle theme'>
                <Sun size={22} className='hidden dark:inline' />
                <Moon size={22} className='inline dark:hidden' />
              </button> */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors'
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
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
              className='md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-xl fixed top-20 left-0 right-0 z-50'>
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
                          text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                          ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}
                        aria-label={item.label}>
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId='nav-underline-mobile'
                            className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-600 to-purple-600'
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
                        text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                        ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}
                      aria-label={item.label}>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId='nav-underline-mobile'
                          className='absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-600 to-purple-600'
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

      {/* Hero Section */}
      <section id='home' className='pt-20 min-h-screen flex items-center relative overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'></div>

        {/* Animated Gradient Mesh */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-blue-600/5 dark:via-purple-600/5 dark:to-pink-600/5 animate-pulse'></div>

        {/* Floating Elements */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-xl animate-float'></div>
        <div
          className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-xl animate-float'
          style={{ animationDelay: '2s' }}></div>
        <div
          className='absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-xl animate-float'
          style={{ animationDelay: '4s' }}></div>
        <div
          className='absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-xl animate-float'
          style={{ animationDelay: '1s' }}></div>

        {/* Additional Floating Shapes */}
        <div
          className='absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg blur-lg animate-float'
          style={{ animationDelay: '3s' }}></div>
        <div
          className='absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-lg animate-float'
          style={{ animationDelay: '5s' }}></div>

        {/* Geometric Shapes */}
        <div
          className='absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 transform rotate-45 blur-sm animate-float'
          style={{ animationDelay: '2.5s' }}></div>
        <div
          className='absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform rotate-45 blur-sm animate-float'
          style={{ animationDelay: '1.5s' }}></div>

        {/* Geometric Pattern */}
        <div className='absolute inset-0 opacity-3 dark:opacity-5'>
          <div
            className='absolute top-0 left-0 w-full h-full'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
        </div>

        {/* Animated Lines */}
        <div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse'></div>
        <div
          className='absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse'
          style={{ animationDelay: '1s' }}></div>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-10'>
            <h1 className='text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white relative z-20'>
              Hari Prediansyah
            </h1>
            <p className='text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold relative z-20'>
              Just a dev trying not to break production.
            </p>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-xl relative z-20'>
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
                className='relative px-12 py-5 text-2xl text-white rounded-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl overflow-hidden z-10 hover:shadow-blue-500/25 dark:hover:shadow-purple-500/25'
                style={{
                  backgroundImage: 'linear-gradient(120deg, #2563eb, #9333ea)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: 'right center'
                }}>
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                <span className='relative z-10'>View My Work</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className='btn-hover-transition relative text-blue-400 overflow-hidden border-2 hover:dark:text-white dark:border-blue-400 active:dark:border-blue-600 rounded-xl text-2xl font-bold px-12 py-5 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20 transition-all duration-300'>
                <p>Get In Touch</p>
              </button>
            </div>
            <div className='icons-wrapper flex space-x-8 pt-6 relative z-20'>
              <a
                href='https://github.com/hariprediansyah'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>
                <i className='fa-brands fa-github fa-xl'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/hari-prediansyah-8516411b4'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>
                <i className='fa-brands fa-linkedin fa-xl'></i>
              </a>
              <a
                href='https://instagram.com/hariiprd'
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>
                <i className='fa-brands fa-instagram fa-xl'></i>
              </a>
              {/* <button
                onClick={() => navigate('/blog')}
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                title='Blog'>
                <i className='fa-solid fa-book-open fa-xl'></i>
              </button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative z-20'>
            <div className='relative w-96 h-96 mx-auto'>
              {/* Enhanced Glow Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse-glow'></div>
              <div
                className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-20 animate-pulse-glow'
                style={{ animationDelay: '1.5s' }}></div>

              {/* Floating Elements around profile */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-400/50 rounded-full animate-float'></div>
              <div
                className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/50 rounded-full animate-float'
                style={{ animationDelay: '2s' }}></div>
              <div
                className='absolute top-1/2 -left-8 w-4 h-4 bg-pink-400/50 rounded-full animate-float'
                style={{ animationDelay: '3s' }}></div>

              <img
                src='profile.jpg'
                alt='Hari Prediansyah'
                className='relative w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500'
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-28 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-20'>
            <h2 className='text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8'>About Me</h2>
            <p className='text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
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
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                With extensive experience across web, mobile, and desktop development, I bring ideas to life using
                cutting-edge technologies. My approach focuses on clean, maintainable code and user-centered design
                principles.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                <div className='text-center'>
                  <div className='text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-3'>
                    4+ Years Experience
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-3'>
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
              <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>Technical Skills</h3>

              <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
                    <skill.icon className='w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform' />
                    <div className='font-bold text-gray-900 dark:text-white text-lg'>{skill.name}</div>
                    <div className='text-base text-gray-500 dark:text-gray-400 mt-2'>{skill.category}</div>
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
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Featured Projects</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
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
                className='bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group'>
                <div className='relative aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden transform-gpu'>
                  {/* <img
                    src={projectImages[index]}
                    loading='lazy'
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                  /> */}
                  <LoadImage
                    url={projectImages[index]}
                    alt={project.title}
                    className='rounded-t-xl' // Optional
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
                        View Details
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
              View All Projects
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
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Services</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
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
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Get In Touch</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Ready to bring your ideas to life? Let's discuss your project
            </p>
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
                  <div className='text-gray-600 dark:text-gray-300'>hariprediansyah@gmail.com</div>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center'>
                  <Phone className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 dark:text-white'>Phone</div>
                  <div className='text-gray-600 dark:text-gray-300'>+62 858-8364-8268</div>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center'>
                  <MapPin className='w-6 h-6 text-green-600 dark:text-green-400' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 dark:text-white'>Location</div>
                  <div className='text-gray-600 dark:text-gray-300'>Jakarta, Indonesia</div>
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
                  {/* <button
                    onClick={() => navigate('/blog')}
                    className='w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all'>
                    <BookOpen size={20} />
                  </button> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <form className='space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Your Name</label>
                    <input
                      type='text'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder='Your Name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                      Your Email
                    </label>
                    <input
                      type='email'
                      className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder='Your Email'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>Subject</label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder='Subject'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder='Your Message'></textarea>
                </div>

                <button
                  ref={sendMessageBtnRef}
                  type='submit'
                  className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg'>
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 bg-gray-900 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
          <div className='text-center text-lg text-gray-400'>
            <p>&copy; 2024 Hari Prediansyah. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Back to Top Button dengan animasi */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key='backtotop'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: 'linear' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed bottom-8 right-8 z-50 sm:flex hidden items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
            aria-label='Back to Top'>
            <ArrowUp size={32} />
          </motion.button>
        )}
      </AnimatePresence>
      <div className='cursor' style={{ left: cursorPos.x, top: cursorPos.y }} />
      <div
        className='hand'
        style={{
          left: handPos.x,
          top: handPos.y,
          opacity: showHand ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${showHand ? 1 : 0}) rotate(${showHand ? 0 : 45}deg)`,
          transition: 'opacity 0.2s, transform 0.3s, left 0.1s, top 0.1s',
          pointerEvents: 'none'
        }}>
        <svg viewBox='0 0 62 45' fill='none'>
          <path
            d='M41.3333 39.2727L41.3333 36.8182C42.16 36.8182 43.8133 36 44.64 35.1818C45.4667 34.3636 46.2933 32.7273 46.2933 30.6818C46.2933 29.8636 46.2933 29.0455 45.88 28.2273C46.7067 27.8182 47.12 27.4091 47.9467 27C48.7733 26.1818 49.6 24.9545 49.6 22.5C49.6 21.6818 49.6 20.8636 49.1867 20.4545L56.2133 20.4545C58.6933 20.4545 62 18.8182 62 14.7273C62 13.0909 61.1733 11.4545 60.3467 10.2273C57.8667 8.18182 54.56 8.18182 54.56 8.18182L36.7867 8.18182C36.3733 5.72727 35.5467 3.68182 34.3067 2.45454C31.4133 -1.82466e-06 27.6933 -1.49959e-06 22.7333 -1.7164e-06L19.84 -1.84287e-06C14.0533 -2.09582e-06 11.16 2.86363 8.26667 5.72727L6.61334 6.95454C1.65334 12.2727 1.17419e-06 16.7727 6.91377e-07 27.8182C1.72801e-07 39.6818 6.61333 45 21.08 45L31.4133 45C34.3067 45 40.0933 44.1818 41.3333 39.2727ZM31.4133 40.9091L20.6667 40.9091C6.61333 40.9091 3.72 35.5909 3.72 27.8182C3.72 18 4.96 14.3182 9.09333 10.2273L10.7467 8.59091C14.0533 5.72727 15.7067 4.09091 19.84 4.09091L22.7333 4.09091C26.8667 4.09091 29.76 4.09091 31.4133 5.31818C31.8267 5.72727 32.24 6.95454 32.24 8.18182L30.1733 8.18182L23.9733 6.95454C23.56 6.95454 23.56 6.95455 23.1467 7.36364C22.7333 7.77273 23.1467 8.18182 23.1467 8.18182L28.1067 12.2727L54.56 12.2727C54.9733 12.2727 56.6267 12.2727 57.4533 13.0909C57.4533 13.5 57.8667 13.9091 57.8667 14.7273C57.8667 15.9545 56.6267 16.3636 56.2133 16.3636L38.44 16.3636C37.2 16.3636 35.96 17.1818 35.96 18.4091C35.96 19.6364 37.2 20.4545 38.0267 20.4545L43.4 20.4545C43.8133 20.4545 45.4667 20.8636 45.4667 22.5C45.4667 23.7273 45.0533 24.5455 43.8133 24.5455L38.44 24.5455C37.2 24.5455 35.96 25.3636 35.96 26.5909C35.96 27.8182 37.2 28.6364 38.0267 28.6364L40.92 28.6364C41.3333 28.6364 42.16 29.0455 42.16 30.6818C42.16 31.5 41.7467 31.9091 41.7467 31.9091C41.3333 32.7273 40.0933 32.7273 40.0933 32.7273L36.7867 32.7273C35.5467 32.7273 34.72 33.5455 34.72 34.3636C34.72 35.5909 35.1333 36.4091 36.3733 36.4091C36.7867 36.4091 37.2 36.8182 37.6133 37.2273L37.6133 38.0455C36.7867 40.5 32.6533 40.9091 31.4133 40.9091C31.8267 40.9091 31.8267 40.9091 31.4133 40.9091V40.9091Z'
            fill='white'
          />
        </svg>
      </div>
    </div>
  )
}

export default HomePage
