module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    "vue",
    "import"
  ],
  globals: {
    "ga": true, // Google Analytics
    "cordova": true,
    "__statics": true
  },
  "rules": {
    // allow async-await
    "generator-star-spacing": "off",

    // allow paren-less arrow functions
    "arrow-parens": 0,
    "one-var": 0,

    "import/first": 0,
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-var": [
      "warn"
    ],
    "strict": [
      "error"
    ],
    "no-console": [
      "off"
    ],
    "brace-style": [
      "warn",
      "stroustrup",
      { "allowSingleLine": true }
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }]
  }
}