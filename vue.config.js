const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/farm/'
    : '/',
  devServer: {
    overlay: {
      errors: false,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/global.scss";
        `,
      },
    },
  },
};
