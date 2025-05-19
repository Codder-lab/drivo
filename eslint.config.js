// eslint.config.js
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  // Base Expo ESLint config
  expoConfig,

  // Custom config
  {
    ignores: ['dist/**', 'node_modules/**'],

    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: ['prettier'],

    rules: {
      'prettier/prettier': 'error',
      // You can override or add more rules here
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
