module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:prettier/recommended",
  ],

  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },

  plugins: ["react"],
  rules: {
    "no-console": "error",
    quotes: [2, "double"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
