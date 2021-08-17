module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom_orange: {
          light: '#F3F2EE',
          DEFAULT: '#F3F2EE',
          dark: '#F3F2EE',
        },
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), 
    require('@tailwindcss/aspect-ratio')],
}
