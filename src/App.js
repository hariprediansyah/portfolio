import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AllProjectsPage from './components/AllProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import NotFoundPage from './components/NotFoundPage';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              isDark={isDark}
              language={language}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          } 
        />
        <Route 
          path="/projects" 
          element={
            <AllProjectsPage 
              isDark={isDark}
              language={language}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          } 
        />
        <Route 
          path="/project/:id" 
          element={
            <ProjectDetailPage 
              isDark={isDark}
              language={language}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          } 
        />
        <Route 
          path="/blog" 
          element={
            <BlogPage 
              isDark={isDark}
              language={language}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          } 
        />
        <Route 
          path="/blog/:id" 
          element={
            <BlogDetailPage 
              isDark={isDark}
              language={language}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          } 
        />
        <Route 
          path="*" 
          element={
            <NotFoundPage 
              isDark={isDark}
              language={language}
              toggleTheme={toggleTheme}
              toggleLanguage={toggleLanguage}
            />
          } 
        />
      </Routes>
    </div>
  );
};

export default App;