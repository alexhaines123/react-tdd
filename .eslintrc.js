module.exports = {
  extends: [
    "codingitwrong"
  ],
  parser: '@babel/eslint-parser',
  plugins: ['cypress/recommended', 'jest', 'react' ],
  env: { 'jest/globals': true, browser: true }
}