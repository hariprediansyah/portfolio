/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#06e303',
        secondary: '#0e0e0e',
        light: '#f1f1f1'
      },
      width: {
        fit: 'fit-content'
      },
      fontFamily: {
        display: ['Silkscreen', 'sans-serif']
      }
    }
  },
  plugins: []
}
