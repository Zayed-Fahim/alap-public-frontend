import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = [
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'build/', 'public/'],
    files: ['**/*.ts', '**/*.tsx']
  },
  ,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off'
    }
  }
];

export default eslintConfig;
