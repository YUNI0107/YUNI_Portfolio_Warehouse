module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'ch',
      fallbackLocale: 'ch',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/YUNI_Portfolio_Warehouse/'
    : '/'
}
