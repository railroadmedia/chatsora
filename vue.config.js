module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    resolve: {
      symlinks: false,
    },
  },
  css: {
    extract: true // only needed when building as library in watch mode
  }
}
