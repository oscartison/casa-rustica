const path = require('path')

module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      locales: ['en', 'fr', 'nl'],
      defaultLocale: 'en',
    },
    localePath: path.resolve('./public/locales')
  };