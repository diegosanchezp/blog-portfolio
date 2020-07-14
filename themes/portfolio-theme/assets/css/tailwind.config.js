module.exports = {
  purge: [],
  theme: {
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
