import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AllProjectsPage from './components/AllProjectsPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import BlogPage from './components/BlogPage'
import BlogDetailPage from './components/BlogDetailPage'
import NotFoundPage from './components/NotFoundPage'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  //App
  const [isDark, setIsDark] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [showLoading, setShowLoading] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Fade out loading spinner setelah loading selesai
  useEffect(() => {
    if (!isLoading) {
      const fadeTimer = setTimeout(() => setShowLoading(false), 500)
      return () => clearTimeout(fadeTimer)
    }
  }, [isLoading])

  if (showLoading) {
    return <LoadingSpinner show={isLoading} />
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-black dark:bg-black ${isDark ? 'dark' : ''}`}>
      <Routes>
        <Route path='/' element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path='/projects' element={<AllProjectsPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path='/project/:id' element={<ProjectDetailPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path='/blog' element={<BlogPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path='/blog/:id' element={<BlogDetailPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path='*' element={<NotFoundPage isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
