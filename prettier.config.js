module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'none',
  useTabs: false,
  endOfLine: 'auto',
  jsxSingleQuote: false,
  singleQuote: true,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require('prettier-plugin-tailwindcss')],
};
