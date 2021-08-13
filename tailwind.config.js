module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        
        neutral: '#ffffff'
        
      },
      red: {
        
        neutral: '#fa5757'
        
      },
      blue: {
        dark: '#252b46',
        neutral: '#5368df',
        light: '#9194a1',
        
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}}
