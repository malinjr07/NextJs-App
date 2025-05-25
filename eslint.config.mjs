import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    rules: {
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead of function declarations.',
        },
        {
          selector:
            'ExportDefaultDeclaration > FunctionDeclaration[id.name=/^[A-Z]/]',
          message: 'Use arrow functions for React components.',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  }),
];

export default eslintConfig;
