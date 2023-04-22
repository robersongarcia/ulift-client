module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react'
  ],
  rules: {
    'max-len': ['warn', { code: 80 }],
    'react/react-in-jsx-scope': 'off'
  }
}
