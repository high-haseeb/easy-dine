/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { // <-- Corrected key is 'colors' (plural)
        backColor: '#0f1535',
        sideBarcol: '#06031F',
        Bodycol: '#090F2A',
        yellow: '#D4AF37',
        green: '#04B816',
        btncol: '0075ff', // <-- Added missing '#' here
      },
    },
  },
  plugins: [],
}
