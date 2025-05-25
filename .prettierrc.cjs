const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  endOfLine: "lf",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
