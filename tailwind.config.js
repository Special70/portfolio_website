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
        'viewport<=1200px': {max: '1200px'},
        'viewport>1000px': {min: '1001px'},
      },
      width : {
        '910px': '910px',
        '500': '125rem',
        '400': '100rem',
        '300': '75rem',
        '200': '50rem',
        '100': '25rem',
        '2full': '200%',
      },
      spacing: {
        '910px': '910px',
        '50': '12.5rem'
      },
      fontSize: {
        'responsive-small': 'clamp(1rem, 1vw + 1rem, 2rem)',
        'responsive-regular': 'clamp(2rem, 2vw + 2rem, 3rem)',
        'responsive-large': 'clamp(2rem, 4vw + 2rem, 6rem)',
      },
    },
    fontFamily: {
      'minecraft': ['minecraft'],
      'open-sans': ['open-sans'],
      'host-grotesk': ['host-grotesk'],
    }
  },
  plugins: []
}

