module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      fontFamily: {
        // Primary display serif for elegant large headlines
        serif: ['Italiana', '"Playfair Display"', 'serif'],
        // Philosopher for editorial headings and subheads (sans-serif but slightly classical)
        philosopher: ['Philosopher', 'sans-serif'],
        // DM Sans for the main UI / body text
        dm: ['"DM Sans"', 'sans-serif'],
        // Default sans stack falls back to DM Sans then Inter
        sans: ['"DM Sans"', 'Inter', 'Lato', 'sans-serif']
      },
      colors: {
        // mapped to approved brand palette
        clay: '#8C5D58',     // warm clay (accent)
        sage: '#748C70',     // sage green (decorative)
        ivory: '#D9D9D9',    // light neutral base
        softgold: '#736D53', // olive / warm gray (secondary)
        warmblack: '#40130F' // deep brown / wine (dark sections / headings)
      }
    }
  },
  plugins: []
}
