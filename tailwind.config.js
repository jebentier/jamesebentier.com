/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Montserrat', 'sans-serif'],
        'resume': ["Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "sans-serif"],
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

