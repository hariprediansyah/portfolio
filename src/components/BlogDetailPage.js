import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Sun, Moon, Calendar, Clock, Tag, User, Share2, BookOpen, ThumbsUp } from 'lucide-react'

const BlogDetailPage = ({ isDark, toggleTheme }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const content = {
    en: {
      backToBlog: 'Back to Blog',
      share: 'Share Article',
      like: 'Like',
      relatedArticles: 'Related Articles',
      readMore: 'Read More',
      readTime: 'min read',
      tableOfContents: 'Table of Contents',
      articles: {
        'react-hooks-guide': {
          title: 'Mastering React Hooks: A Complete Guide',
          excerpt:
            'Deep dive into React Hooks and learn how to build more efficient and maintainable components with useState, useEffect, and custom hooks.',
          category: 'react',
          readTime: 8,
          date: '2024-03-15',
          author: 'Hari Prediansyah',
          tags: ['React', 'JavaScript', 'Frontend'],
          content: `
            <h2>Introduction to React Hooks</h2>
            <p>React Hooks were introduced in React 16.8 and have revolutionized how we write React components. They allow you to use state and other React features without writing class components.</p>
            
            <h2>Understanding useState</h2>
            <p>The useState hook is the most basic hook and allows you to add state to functional components.</p>
            <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>

            <h2>useEffect for Side Effects</h2>
            <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
            
            <h2>Custom Hooks</h2>
            <p>Custom Hooks are a mechanism to reuse stateful logic between React components. They start with "use" and can call other Hooks.</p>

            <h2>Best Practices</h2>
            <ul>
              <li>Only call Hooks at the top level</li>
              <li>Only call Hooks from React functions</li>
              <li>Use the dependency array in useEffect wisely</li>
              <li>Create custom Hooks for reusable logic</li>
            </ul>

            <h2>Conclusion</h2>
            <p>React Hooks provide a more direct API to the React concepts you already know. They give you a way to use state and other React features without writing a class.</p>
          `
        },
        'flutter-performance': {
          title: 'Flutter Performance Optimization Tips',
          excerpt:
            'Learn essential techniques to optimize your Flutter apps for better performance and smoother user experience.',
          category: 'flutter',
          readTime: 6,
          date: '2024-03-10',
          author: 'Hari Prediansyah',
          tags: ['Flutter', 'Performance', 'Mobile'],
          content: `
            <h2>Why Performance Matters</h2>
            <p>Performance is crucial for mobile applications. Users expect smooth, responsive apps that load quickly and consume minimal battery.</p>
            
            <h2>Widget Building Optimization</h2>
            <p>Use const constructors whenever possible to prevent unnecessary widget rebuilds.</p>
            <pre><code>class MyWidget extends StatelessWidget {
  const MyWidget({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return const Text('Hello World');
  }
}</code></pre>

            <h2>ListView Optimization</h2>
            <p>For large lists, use ListView.builder instead of ListView to build items on demand.</p>
            
            <h2>Image Optimization</h2>
            <p>Optimize images by using appropriate formats and sizes. Use cached_network_image for network images.</p>

            <h2>State Management</h2>
            <p>Choose the right state management solution and avoid unnecessary rebuilds by using efficient patterns.</p>
          `
        }
      }
    },
    id: {
      backToBlog: 'Kembali ke Blog',
      share: 'Bagikan Artikel',
      like: 'Suka',
      relatedArticles: 'Artikel Terkait',
      readMore: 'Baca Selengkapnya',
      readTime: 'menit baca',
      tableOfContents: 'Daftar Isi',
      articles: {
        'react-hooks-guide': {
          title: 'Menguasai React Hooks: Panduan Lengkap',
          excerpt:
            'Pelajari React Hooks secara mendalam dan cara membangun komponen yang lebih efisien dan mudah dipelihara dengan useState, useEffect, dan custom hooks.',
          category: 'react',
          readTime: 8,
          date: '2024-03-15',
          author: 'Hari Prediansyah',
          tags: ['React', 'JavaScript', 'Frontend'],
          content: `
            <h2>Pengenalan React Hooks</h2>
            <p>React Hooks diperkenalkan di React 16.8 dan telah merevolusi cara kita menulis komponen React. Hooks memungkinkan Anda menggunakan state dan fitur React lainnya tanpa menulis class components.</p>
            
            <h2>Memahami useState</h2>
            <p>Hook useState adalah hook paling dasar dan memungkinkan Anda menambahkan state ke functional components.</p>
            <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda mengklik {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik saya
      </button>
    </div>
  );
}</code></pre>

            <h2>useEffect untuk Side Effects</h2>
            <p>Hook useEffect memungkinkan Anda melakukan side effects di function components. Ini memiliki tujuan yang sama dengan componentDidMount, componentDidUpdate, dan componentWillUnmount yang digabungkan.</p>
            
            <h2>Custom Hooks</h2>
            <p>Custom Hooks adalah mekanisme untuk menggunakan kembali stateful logic antara komponen React. Mereka dimulai dengan "use" dan dapat memanggil Hooks lainnya.</p>

            <h2>Best Practices</h2>
            <ul>
              <li>Hanya panggil Hooks di level teratas</li>
              <li>Hanya panggil Hooks dari fungsi React</li>
              <li>Gunakan dependency array di useEffect dengan bijak</li>
              <li>Buat custom Hooks untuk logic yang dapat digunakan kembali</li>
            </ul>

            <h2>Kesimpulan</h2>
            <p>React Hooks menyediakan API yang lebih langsung untuk konsep React yang sudah Anda kenal. Mereka memberi Anda cara untuk menggunakan state dan fitur React lainnya tanpa menulis class.</p>
          `
        },
        'flutter-performance': {
          title: 'Tips Optimasi Performa Flutter',
          excerpt:
            'Pelajari teknik penting untuk mengoptimalkan aplikasi Flutter agar performa lebih baik dan pengalaman pengguna lebih lancar.',
          category: 'flutter',
          readTime: 6,
          date: '2024-03-10',
          author: 'Hari Prediansyah',
          tags: ['Flutter', 'Performance', 'Mobile'],
          content: `
            <h2>Mengapa Performa Penting</h2>
            <p>Performa sangat penting untuk aplikasi mobile. Pengguna mengharapkan aplikasi yang smooth, responsif, loading cepat, dan konsumsi baterai minimal.</p>
            
            <h2>Optimasi Widget Building</h2>
            <p>Gunakan const constructors sebisa mungkin untuk mencegah rebuild widget yang tidak perlu.</p>
            <pre><code>class MyWidget extends StatelessWidget {
  const MyWidget({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return const Text('Hello World');
  }
}</code></pre>

            <h2>Optimasi ListView</h2>
            <p>Untuk list yang besar, gunakan ListView.builder alih-alih ListView untuk membangun item sesuai kebutuhan.</p>
            
            <h2>Optimasi Gambar</h2>
            <p>Optimalkan gambar dengan menggunakan format dan ukuran yang sesuai. Gunakan cached_network_image untuk gambar network.</p>

            <h2>State Management</h2>
            <p>Pilih solusi state management yang tepat dan hindari rebuild yang tidak perlu dengan menggunakan pola yang efisien.</p>
          `
        }
      }
    }
  }

  const blogImages = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  ]

  const t = content['en']
  const article = t.articles[id]

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='animate-pulse'>
            <div className='h-8 bg-gray-300 dark:bg-gray-600 rounded w-48 mb-8'></div>
            <div className='h-64 bg-gray-300 dark:bg-gray-600 rounded-xl mb-8'></div>
            <div className='space-y-4'>
              <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4'></div>
              <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-full'></div>
              <div className='h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Article Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'>
            Back to Blog
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
              onClick={() => navigate('/blog')}
              className='inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'>
              <ArrowLeft className='w-5 h-5 mr-2' />
              {t.backToBlog}
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

      {/* Article Content */}
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'>
          <div className='relative rounded-xl overflow-hidden h-64 sm:h-80 mb-8'>
            <img src={blogImages[0]} alt={article.title} className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
            <div className='absolute bottom-6 left-6 right-6'>
              <span className='inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4'>
                {article.category.toUpperCase()}
              </span>
              <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>{article.title}</h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className='flex flex-wrap items-center justify-between gap-4 mb-8'>
            <div className='flex items-center space-x-6 text-gray-600 dark:text-gray-400'>
              <div className='flex items-center'>
                <User size={16} className='mr-2' />
                {article.author}
              </div>
              <div className='flex items-center'>
                <Calendar size={16} className='mr-2' />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className='flex items-center'>
                <Clock size={16} className='mr-2' />
                {article.readTime} {t.readTime}
              </div>
            </div>

            <div className='flex items-center space-x-3'>
              <button className='flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors'>
                <ThumbsUp size={16} />
                <span>{t.like}</span>
              </button>
              <button className='flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'>
                <Share2 size={16} />
                <span>{t.share}</span>
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-8'>
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className='inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full'>
                <Tag size={12} className='mr-1' />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='prose prose-lg dark:prose-invert max-w-none'>
          <div className='article-content' dangerouslySetInnerHTML={{ __html: article.content }} />
        </motion.div>

        {/* Article Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='border-t border-gray-200 dark:border-gray-700 pt-8 mt-12'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <button className='flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                <ThumbsUp size={18} />
                <span>{t.like}</span>
              </button>
              <button className='flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'>
                <Share2 size={18} />
                <span>{t.share}</span>
              </button>
            </div>

            <button
              onClick={() => navigate('/blog')}
              className='flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'>
              <BookOpen size={18} />
              <span>More Articles</span>
            </button>
          </div>
        </motion.div>
      </article>
    </div>
  )
}

export default BlogDetailPage
