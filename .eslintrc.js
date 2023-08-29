module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  ignorePatterns: ['dist', 'node_modules'],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'prettier',
  ],
  extends: ['airbnb-typescript', 'prettier'],
  rules: {
    // Project-specific
    'import/prefer-default-export': 0,
    'import/extensions': 'off',
    "simple-import-sort/imports": "error",
    'simple-import-sort/exports': 2,
    // React-specific
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    // This disables the 'React' must be in scope when using JSX error for React 17+
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    // TODO: Re-enable
    'react/no-unescaped-entities': 0,
    'prettier/prettier': [2],
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': 0,
  },
};
