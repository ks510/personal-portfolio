/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        royal: '#040217',
        lilac: '#E9E7FD'
      }
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif']
    }
  },
  plugins: []
};
