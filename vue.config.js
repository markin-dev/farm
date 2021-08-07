const path = require('path');

module.exports = {
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
