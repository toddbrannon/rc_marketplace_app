/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-navy': '#10172A',
        'cyan_gradient': 'bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-100',
        'dark-blue': '#111827',
        'bg-dark-blue': '#111827',
      },
    },
  },
  plugins: [],
}