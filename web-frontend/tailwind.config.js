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
        'admin-dominant': '#FFF',
        'admin-complement' : '#e0e7ff',
        'admin-ascent' : '#3a0ca3',
        'admin-ascent-dark' : '#1b0156',

        'web-dominant': '#FFF',
        'web-complement' : '#e0e7ff',
        'web-ascent' : '#fb8500',
        'web-ascent-dark' : '#fb5607',
      },
    },
    
  },
  plugins: [],
}