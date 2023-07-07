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
    "no-console": "off",
    semi: ["warn", "always"],
    indent: ["warn", 2],
    "no-multi-spaces": ["warn"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "prettier/prettier": "warn",
    "@typescript-eslint/consistent-type-imports":"warn",
    "@typescript-eslint/restrict-template-expressions":"warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-imports":"off",
    "@typescript-eslint/no-misused-promises":"off"


  },
};
