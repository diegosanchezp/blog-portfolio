const themeDir = __dirname + '/../../';

module.exports = {
  // === Removing unused css === //

  // 1. Provide an array of paths to all of your template files using the purge option
  purge: [
    themeDir + 'layouts/**/*.html',
    themeDir + 'content/**/*.html',
    'layouts/**/*.html',
    'content/**/*.html',
    'exampleSite/layouts/**/*.html',
    'exampleSite/content/**/*.html',
  ],
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
        'smmd': {
          'raw': '(min-width: 0px) and (max-width: 640px), (min-width: 641px) and (max-width: 768px)'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
