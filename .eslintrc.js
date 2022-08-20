module.exports = {
  "plugins": ["prettier"],
  "extends": ["react-app", "prettier"],
  "rules": {
    "no-unused-vars": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  },
};
