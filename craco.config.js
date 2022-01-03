const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@routes': path.join(path.resolve(__dirname, './src/routes')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@lib': path.join(path.resolve(__dirname, './src/lib')),
      '@redux': path.join(path.resolve(__dirname, './src/redux')),
      '@pages': path.join(path.resolve(__dirname, './src/pages')),
      '@helpers': path.join(path.resolve(__dirname, './src/helpers')),
      '@services': path.join(path.resolve(__dirname, './src/services')),
      '@layout': path.join(path.resolve(__dirname, './src/layouts')),
    },
    external: ["react-helmet"],
  },
};
