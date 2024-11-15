/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'viewport<=910px': {max: '910px'},
        'viewport<=1000px': {max: '1000px'},
        'viewport>1000px': {min: '1001px'}
      },
      width : {
        '910px': '910px',
        '500': '125rem',
        '400': '100rem',
        '300': '75rem',
        '200': '50rem',
        '100': '25rem',
      },
      spacing: {
        '910px': '910px',
        '50': '12.5rem'
      }
    },
    fontFamily: {
      'minecraft': ['minecraft'],
      'open-sans': ['open-sans']
    }
  },
  plugins: []
}

