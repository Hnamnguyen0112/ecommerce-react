const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@routes': path.join(path.resolve(__dirname, './src/routes')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@lib': path.join(path.resolve(__dirname, './src/lib')),
      '@features': path.join(path.resolve(__dirname, './src/features')),
      '@pages': path.join(path.resolve(__dirname, './src/pages')),
      '@services': path.join(path.resolve(__dirname, './src/services')),
      '@layout': path.join(path.resolve(__dirname, './src/layouts')),
      '@helpers': path.join(path.resolve(__dirname, './src/helpers')),
    },
    external: ["react-helmet"],
  },
};
