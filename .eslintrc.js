module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },

  plugins: ['react'],
  rules: {
    'no-console': 'error',
    semi: ['warn', 'always'],
    indent: ['warn', 2],
    'no-multi-spaces': ['warn'],
    'react/react-in-jsx-scope': 'error',
    '@typescript-eslint/explicit': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off'
  }
};
