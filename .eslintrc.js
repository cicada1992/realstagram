const { rules } = require('eslint-config-prettier');

module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['@react-native-community', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error'
  }
};
