module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    "react/prop-types":"off",
     "react/react-in-jsx-scope": "off",
     'import/prefer-default-export': 'off',
    "react/function-component-definition": [
      "error",
      {
          "namedComponents": "arrow-function"
      }
  ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        endOfLine: 'auto',
        singleQuote: true
      }]
  },
};
