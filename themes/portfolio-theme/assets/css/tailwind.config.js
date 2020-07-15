module.exports = {
  purge: [],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '640px'},
      'md': {'min': '641px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1024px'},
      'xl': {'min': '1025px'},
    },
    extend: {
      colors: {
        // This colors are defined on the theme stylesheet
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        lightwhite: 'var(--color-lightwhite)'
      },
      screens: {
        'sp': {'max-width': '639px'}
      }
    },
  },
  variants: {},
  plugins: [],
}
