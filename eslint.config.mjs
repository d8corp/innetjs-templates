import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import { importX } from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import stylistic from '@stylistic/eslint-plugin'

const MULTILINE_PREFIX_STATEMENTS = ['block-like', 'expression', 'var', 'let', 'const']
const MULTILINE_STATEMENTS = MULTILINE_PREFIX_STATEMENTS.map(key => `multiline-${key}`)

export default defineConfig([
  globalIgnores([
    'build',
    'node_modules',
    '**/*.d.ts',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      prettierConfig,
      js.configs.recommended,
      tseslint.configs.recommended,
      importX.flatConfigs.recommended,
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      '@stylistic': stylistic,
      react,
      prettier,
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        },
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: [...MULTILINE_STATEMENTS, 'return'] },
        { blankLine: 'always', prev: MULTILINE_STATEMENTS, next: '*' }
      ],
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'import/no-nodejs-modules': 'off',
      'unused-imports/no-unused-imports': 'error',
      'no-unreachable': 'error',
      "simple-import-sort/imports": ["error", {
        "groups": [
          ["^\\u0000"],
          ["^innet$", "^@?\\w"],
          ["^"],
          ["^/processes"],
          ["^/widgets"],
          ["^/features"],
          ["^/entities"],
          ["^/shared"],
          ["^\\.+(/[^/.]+|/[^.]+/[^/.]+)$"],
          ["^\\..+"],
          ["^\\.$"],
          ["^\\..+.md$"]
        ]
      }],
      'simple-import-sort/exports': 'error',
      'import/order': 'off',
      'import/first': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports'
        }
      ]
    },
  },
])
