module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh-TW',
      fallbackLocale: 'zh-TW',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/YUNI_Portfolio_Warehouse/'
    : '/'
}
