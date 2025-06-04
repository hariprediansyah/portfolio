import { useEffect, useState } from 'react'

export function LoadImage({ url, alt, className = '' }) {
  const [status, setStatus] = useState('loading') // 'loading', 'loaded', 'error'

  useEffect(() => {
    if (!url) {
      setStatus('error')
      return
    }

    const img = new Image()
    img.src = url
    img.onload = () => setStatus('loaded')
    img.onerror = () => setStatus('error')

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [url])

  return (
    <div className={`relative aspect-video overflow-hidden ${className}`}>
      {/* Placeholder */}
      <div className='absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse' />

      {/* Gambar yang sudah diload */}
      {status === 'loaded' && (
        <img
          src={url}
          alt={alt}
          className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          loading='lazy'
          decoding='async'
        />
      )}

      {/* Fallback untuk error */}
      {status === 'error' && (
        <div className='absolute inset-0 flex items-center justify-center bg-red-100 dark:bg-red-900/50'>
          <span className='text-sm text-red-500 dark:text-red-300'>Failed to load image</span>
        </div>
      )}
    </div>
  )
}
