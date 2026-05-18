module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold:      '#B8905A',
        'gold-light': '#D4B07A',
        'gold-pale': '#EAD9C0',
        dark:      '#1A1715',
        'dark-soft': '#2E2A27',
        parchment: '#F8F4EF',
        surface:   '#F0EAE1',
        card:      '#EDE7DE',
        ivory:     '#FDFAF7',
        border:    '#DDD5C8',
        /* legacy compat */
        clay:      '#B8905A',
        warmblack: '#1A1715',
        softgold:  '#B8905A',
        sage:      '#748C70',
      },
      boxShadow: {
        soft: '0 14px 40px rgba(26,23,21,0.08)',
        lift: '0 20px 60px rgba(26,23,21,0.12)',
        gold: '0 4px 24px rgba(184,144,90,0.28)',
      },
    },
  },
  plugins: [],
}
