const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  extends: [
    'plugin:vue/recommended',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    'linebreak-style': 0,
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
};
