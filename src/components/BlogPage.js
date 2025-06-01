import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sun,
  Moon,
  Calendar,
  Clock,
  Tag,
  Search,
  User
} from 'lucide-react';
import { BlogCardSkeleton } from './SkeletonLoader';

const BlogPage = ({ isDark, language, toggleTheme, toggleLanguage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      title: 'Tech Blog',
      subtitle: 'Insights, tutorials, and thoughts on modern development',
      backToHome: 'Back to Home',
      searchPlaceholder: 'Search articles...',
      filterAll: 'All Articles',
      readMore: 'Read More',
      readTime: 'min read',
      categories: {
        react: 'React',
        flutter: 'Flutter',
        laravel: 'Laravel',
        tutorial: 'Tutorial',
        tips: 'Tips & Tricks'
      },
      articles: [
        {
          id: 'react-hooks-guide',
          title: 'Mastering React Hooks: A Complete Guide',
          excerpt: 'Deep dive into React Hooks and learn how to build more efficient and maintainable components with useState, useEffect, and custom hooks.',
          content: 'React Hooks revolutionized how we write React components...',
          category: 'react',
          readTime: 8,
          date: '2024-03-15',
          author: 'Hari Prediansyah',
          tags: ['React', 'JavaScript', 'Frontend'],
          featured: true
        },
        {
          id: 'flutter-performance',
          title: 'Flutter Performance Optimization Tips',
          excerpt: 'Learn essential techniques to optimize your Flutter apps for better performance and smoother user experience.',
          content: 'Performance is crucial for mobile applications...',
          category: 'flutter',
          readTime: 6,
          date: '2024-03-10',
          author: 'Hari Prediansyah',
          tags: ['Flutter', 'Performance', 'Mobile'],
          featured: true
        },
        {
          id: 'laravel-api-best-practices',
          title: 'Laravel API Development Best Practices',
          excerpt: 'Best practices for building scalable and secure APIs with Laravel, including authentication, validation, and documentation.',
          content: 'Building robust APIs is essential for modern applications...',
          category: 'laravel',
          readTime: 10,
          date: '2024-03-05',
          author: 'Hari Prediansyah',
          tags: ['Laravel', 'API', 'Backend'],
          featured: false
        },
        {
          id: 'javascript-async-patterns',
          title: 'Modern JavaScript Async Patterns',
          excerpt: 'Understanding Promises, async/await, and other asynchronous patterns in modern JavaScript development.',
          content: 'Asynchronous programming is fundamental to JavaScript...',
          category: 'tutorial',
          readTime: 7,
          date: '2024-02-28',
          author: 'Hari Prediansyah',
          tags: ['JavaScript', 'Async', 'Programming'],
          featured: false
        },
        {
          id: 'css-grid-flexbox',
          title: 'CSS Grid vs Flexbox: When to Use What',
          excerpt: 'Complete comparison between CSS Grid and Flexbox with practical examples and use cases.',
          content: 'CSS layout has evolved significantly...',
          category: 'tips',
          readTime: 5,
          date: '2024-02-20',
          author: 'Hari Prediansyah',
          tags: ['CSS', 'Layout', 'Frontend'],
          featured: false
        },
        {
          id: 'microservices-architecture',
          title: 'Introduction to Microservices Architecture',
          excerpt: 'Learn the fundamentals of microservices architecture and when to choose it over monolithic applications.',
          content: 'Microservices have become increasingly popular...',
          category: 'tutorial',
          readTime: 12,
          date: '2024-02-15',
          author: 'Hari Prediansyah',
          tags: ['Architecture', 'Microservices', 'Backend'],
          featured: true
        }
      ]
    },
    id: {
      title: 'Blog Teknologi',
      subtitle: 'Wawasan, tutorial, dan pemikiran tentang pengembangan modern',
      backToHome: 'Kembali ke Beranda',
      searchPlaceholder: 'Cari artikel...',
      filterAll: 'Semua Artikel',
      readMore: 'Baca Selengkapnya',
      readTime: 'menit baca',
      categories: {
        react: 'React',
        flutter: 'Flutter',
        laravel: 'Laravel',
        tutorial: 'Tutorial',
        tips: 'Tips & Trik'
      },
      articles: [
        {
          id: 'react-hooks-guide',
          title: 'Menguasai React Hooks: Panduan Lengkap',
          excerpt: 'Pelajari React Hooks secara mendalam dan cara membangun komponen yang lebih efisien dan mudah dipelihara dengan useState, useEffect, dan custom hooks.',
          content: 'React Hooks merevolusi cara kita menulis komponen React...',
          category: 'react',
          readTime: 8,
          date: '2024-03-15',
          author: 'Hari Prediansyah',
          tags: ['React', 'JavaScript', 'Frontend'],
          featured: true
        },
        {
          id: 'flutter-performance',
          title: 'Tips Optimasi Performa Flutter',
          excerpt: 'Pelajari teknik penting untuk mengoptimalkan aplikasi Flutter agar performa lebih baik dan pengalaman pengguna lebih lancar.',
          content: 'Performa sangat penting untuk aplikasi mobile...',
          category: 'flutter',
          readTime: 6,
          date: '2024-03-10',
          author: 'Hari Prediansyah',
          tags: ['Flutter', 'Performance', 'Mobile'],
          featured: true
        },
        {
          id: 'laravel-api-best-practices',
          title: 'Best Practice Pengembangan API Laravel',
          excerpt: 'Best practice untuk membangun API yang scalable dan aman dengan Laravel, termasuk autentikasi, validasi, dan dokumentasi.',
          content: 'Membangun API yang robust sangat penting untuk aplikasi modern...',
          category: 'laravel',
          readTime: 10,
          date: '2024-03-05',
          author: 'Hari Prediansyah',
          tags: ['Laravel', 'API', 'Backend'],
          featured: false
        },
        {
          id: 'javascript-async-patterns',
          title: 'Pola Async JavaScript Modern',
          excerpt: 'Memahami Promises, async/await, dan pola asynchronous lainnya dalam pengembangan JavaScript modern.',
          content: 'Pemrograman asynchronous adalah fundamental dalam JavaScript...',
          category: 'tutorial',
          readTime: 7,
          date: '2024-02-28',
          author: 'Hari Prediansyah',
          tags: ['JavaScript', 'Async', 'Programming'],
          featured: false
        },
        {
          id: 'css-grid-flexbox',
          title: 'CSS Grid vs Flexbox: Kapan Menggunakan Apa',
          excerpt: 'Perbandingan lengkap antara CSS Grid dan Flexbox dengan contoh praktis dan use case.',
          content: 'Layout CSS telah berkembang secara signifikan...',
          category: 'tips',
          readTime: 5,
          date: '2024-02-20',
          author: 'Hari Prediansyah',
          tags: ['CSS', 'Layout', 'Frontend'],
          featured: false
        },
        {
          id: 'microservices-architecture',
          title: 'Pengenalan Arsitektur Microservices',
          excerpt: 'Pelajari fundamental arsitektur microservices dan kapan memilihnya dibanding aplikasi monolitik.',
          content: 'Microservices semakin populer...',
          category: 'tutorial',
          readTime: 12,
          date: '2024-02-15',
          author: 'Hari Prediansyah',
          tags: ['Architecture', 'Microservices', 'Backend'],
          featured: true
        }
      ]
    }
  };

  const blogImages = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713'
  ];

  const t = content[language];

  const filteredArticles = t.articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = t.articles.filter(article => article.featured);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.backToHome}
              </button>
              <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t.subtitle}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-1"
              >
                <span className="text-lg">{language === 'en' ? '🇮🇩' : '🇬🇧'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Articles Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/blog/${article.id}`)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={blogImages[index]}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                      {t.categories[article.category]}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {article.readTime} {t.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
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
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* All Articles Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/blog/${article.id}`)}
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={blogImages[index % blogImages.length]}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                      {t.categories[article.category]}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime} {t.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    {t.readMore} →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                {language === 'en' ? 'No articles found matching your criteria.' : 'Tidak ada artikel yang ditemukan sesuai kriteria Anda.'}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;