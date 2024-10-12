/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'viewport<=910px': {max: '910px'},
        'viewport<=1000px': {max: '1000px'}
      },
      width : {
        '910px': '910px'
      },
      spacing: {
        '910px': '910px'
      }
    },
    fontFamily: {
      'minecraft': ['minecraft'],
      'open-sans': ['open-sans']
    }
  },
  plugins: []
}

