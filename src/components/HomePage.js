import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Navigation,
  HeroSection,
  AboutSection,
  PortfolioSection,
  ServicesSection,
  ContactSection,
  BackToTop,
  CustomCursor,
  Astronaut
} from './Home'

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()

  const [showBackToTop, setShowBackToTop] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [handPos, setHandPos] = useState({ x: 0, y: 0 })
  const [showHand, setShowHand] = useState(false)
  const viewWorkBtnRef = React.useRef(null)

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

    return () => {
      if (viewWorkBtn) {
        viewWorkBtn.removeEventListener('mouseenter', onEnter)
        viewWorkBtn.removeEventListener('mousemove', onMove)
        viewWorkBtn.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className='min-h-screen'>
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navigate={navigate}
      />

      <HeroSection
        scrollToSection={scrollToSection}
        viewWorkBtnRef={viewWorkBtnRef}
        setShowHand={setShowHand}
        setHandPos={setHandPos}
        showHand={showHand}
      />

      <AboutSection />

      <PortfolioSection />

      <ServicesSection />

      <ContactSection />

      <BackToTop showBackToTop={showBackToTop} />

      <CustomCursor cursorPos={cursorPos} handPos={handPos} showHand={showHand} />

      <Astronaut />
    </div>
  )
}

export default HomePage
