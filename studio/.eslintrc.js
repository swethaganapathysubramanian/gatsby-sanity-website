module.exports = {
  extends: ["standard", "standard-react"],
  parser: "babel-eslint",
  rules: {
    "react/prop-types": 0,
    "object-curly-spacing": ["error", "never"],
    quotes: ["error", "double"],
    semi: [2, "always"],
    "template-curly-spacing": ["error", "always"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.6"
    }
  }
};
