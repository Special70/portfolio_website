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
        '800px': '800px',
        '500': '125rem',
        '400': '100rem',
        '300': '75rem',
        '200': '50rem',
        '100': '25rem',
        '2full': '200%',
      },
      spacing: {
        '910px': '910px',
        '50': '12.5rem',
        '100': '25rem',
      },
      fontSize: {
        'responsive-small': 'clamp(1vw,2vw,1.2rem)',
        'responsive-regular': 'clamp(2vw,2vw,1.2rem)',
        'responsive-large': 'clamp(3vw,2vw,3rem)',
      },
      backgroundImage: {
        "programmer": "url('/src/assets/images/home-page/background.jpg')"
      }
    },
    fontFamily: {
      'minecraft': ['minecraft'],
      'open-sans': ['open-sans'],
      'host-grotesk': ['host-grotesk'],
      'comic-sans': ['comic-sans'],
    }
  },
  plugins: []
}

