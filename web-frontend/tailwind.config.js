/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      maxWidth: {
        'sm': '350px',
      },
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '300px',
      'md': '600px',
      'lg': '1440px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'dominant': '#FFF',
        'complement' : '#e0e7ff',
        'ascent' : '#8338ec',
        'ascent-dark' : '#8338ec',
      },
    },
    
  },
  plugins: [],
}