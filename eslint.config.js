import globals from 'globals'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-undef': 'off',
    },
  },
]
