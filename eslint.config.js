import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  parser: '@typescript-eslint/parser', // TypeScript parser
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Integrates Prettier
  ],
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/no-explicit-any': 'error', // disallow 'any'
    '@typescript-eslint/strict-boolean-expressions': 'warn', // encourages safer boolean checks

    // General JS rules
    'no-console': 'off', // console logs are fine for bot dev
    'no-constant-condition': ['error', { checkLoops: true }], // avoid infinite loops
    'no-var': 'error', // prefer let/const
    'prefer-const': 'warn',
    eqeqeq: ['error', 'always'], // always use === and !==
  },
});
