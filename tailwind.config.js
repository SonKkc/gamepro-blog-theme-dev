/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["*"],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '860px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '861px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'primary': '#333B7C',
        'secondary': '#EF8041',
        'tertiary': '#333B7C',
        'menu_desktop': '#FEFEFE',
        'menu_mobile': '#202020',
        'gray80': '#343434',
        'footer': '#1E1D1D'
      },
    },
  },
  plugins: [],
}

