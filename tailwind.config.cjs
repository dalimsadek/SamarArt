module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Lato', 'sans-serif']
      },
      colors: {
        clay: '#C89F88',
        sage: '#9AAE95',
        ivory: '#F6F2EA',
        softgold: '#D4B37A',
        warmblack: '#22201D'
      }
    }
  },
  plugins: []
}
