import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Search,
  Sun,
  Moon,
  FileX,
  Compass,
  RotateCcw
} from 'lucide-react';

const NotFoundPage = ({ isDark, language, toggleTheme, toggleLanguage }) => {
  const navigate = useNavigate();

  const content = {
    en: {
      title: '404 - Page Not Found',
      subtitle: 'Oops! The page you\'re looking for doesn\'t exist.',
      description: 'The page you are trying to access might have been moved, deleted, or you might have entered the wrong URL.',
      backHome: 'Back to Home',
      goBack: 'Go Back',
      searchSite: 'Search Site',
      suggestions: {
        title: 'Here are some helpful links:',
        links: [
          { label: 'Homepage', path: '/', icon: Home },
          { label: 'All Projects', path: '/projects', icon: FileX },
          { label: 'Blog', path: '/blog', icon: Search }
        ]
      },
      errorCode: 'Error 404'
    },
    id: {
      title: '404 - Halaman Tidak Ditemukan',
      subtitle: 'Ups! Halaman yang Anda cari tidak ada.',
      description: 'Halaman yang Anda coba akses mungkin telah dipindahkan, dihapus, atau Anda mungkin salah memasukkan URL.',
      backHome: 'Kembali ke Beranda',
      goBack: 'Kembali',
      searchSite: 'Cari di Situs',
      suggestions: {
        title: 'Berikut beberapa link yang mungkin membantu:',
        links: [
          { label: 'Beranda', path: '/', icon: Home },
          { label: 'Semua Proyek', path: '/projects', icon: FileX },
          { label: 'Blog', path: '/blog', icon: Search }
        ]
      },
      errorCode: 'Error 404'
    }
  };

  const t = content[language];

  const floatingElements = [
    { icon: FileX, delay: 0, x: -20, y: -30 },
    { icon: Search, delay: 0.5, x: 20, y: -10 },
    { icon: Compass, delay: 1, x: -10, y: 20 },
    { icon: RotateCcw, delay: 1.5, x: 30, y: -20 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-200 dark:text-blue-800 opacity-20"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
            }}
            animate={{
              y: [element.y, element.y - 20, element.y],
              x: [element.x, element.x + 10, element.x],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <element.icon size={60} />
          </motion.div>
        ))}
      </div>

      {/* Header Controls */}
      <div className="absolute top-6 right-6 flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors"
        >
          <span className="text-lg">{language === 'en' ? '🇮🇩' : '🇬🇧'}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600">
              404
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 border-4 border-blue-200 dark:border-blue-800 rounded-full border-dashed opacity-30"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            {t.subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Home className="mr-2 w-5 h-5" />
            {t.backHome}
          </button>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {t.goBack}
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {t.suggestions.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.suggestions.links.map((link, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                onClick={() => navigate(link.path)}
                className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Fun Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8"
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.errorCode}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;