const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      colors: {
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
}
