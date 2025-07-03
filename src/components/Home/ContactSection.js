import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import SpaceBackground from './SpaceBackground'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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
  }

  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      {/* Space Background untuk Contact Section */}
      <SpaceBackground
        starfieldOpacity={0.35}
        numberOfStars={45}
        nebulaIntensity={0.1}
        showShootingStars={false}
        showPlanets={false}
        showConstellationLines={true}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg'>Get In Touch</h2>
          <p className='text-xl text-cyan-300 max-w-3xl mx-auto drop-shadow-md'>
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
              <div className='w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-500/30'>
                <Mail className='w-6 h-6 text-blue-400' />
              </div>
              <div>
                <div className='font-semibold text-white drop-shadow-sm'>Email</div>
                <div className='text-cyan-300 drop-shadow-sm'>hariprediansyah@gmail.com</div>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-indigo-500/30'>
                <Phone className='w-6 h-6 text-indigo-400' />
              </div>
              <div>
                <div className='font-semibold text-white drop-shadow-sm'>Phone</div>
                <div className='text-cyan-300 drop-shadow-sm'>+62 858-8364-8268</div>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-500/30'>
                <MapPin className='w-6 h-6 text-cyan-400' />
              </div>
              <div>
                <div className='font-semibold text-white drop-shadow-sm'>Location</div>
                <div className='text-cyan-300 drop-shadow-sm'>Jakarta, Indonesia</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/30 shadow-lg'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-cyan-300 mb-2 drop-shadow-sm'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-cyan-300 mb-2 drop-shadow-sm'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-cyan-300 mb-2 drop-shadow-sm'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm'
                  placeholder='Project inquiry'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-cyan-300 mb-2 drop-shadow-sm'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              <button
                type='submit'
                className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 border border-blue-500/30'>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
