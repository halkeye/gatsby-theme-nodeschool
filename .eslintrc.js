/* eslint-env node */
module.exports = {
  "root": true,
  "parser": `babel-eslint`,
  "extends": [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:jest/recommended`,
  ],
  "plugins": [
    `babel`,
    `import`,
    `jest`,
    `jsx-a11y`,
    `promise`,
    `react`,
  ],
  "settings": {
    "react": { "version": `detect` },
    "import/extensions": [`.js`, `.jsx`],
    "import/resolver": {
      "node": {
        "extensions": [`.js`,`.jsx`],
      },
    },
    "linkComponents": [
      { "name": `Link`, "linkAttribute": `to` },
    ],
  },
  "rules": {
    "array-bracket-spacing": [`error`, `never`],
    "babel/new-cap": 1,
    "babel/no-invalid-this": 1,
    "babel/no-unused-expressions": 1,
    "babel/semi": [2, `always`],
    "babel/valid-typeof": 1,
    "brace-style": [`error`, `1tbs`],
    "comma-dangle": [`error`, `always-multiline`],
    "implicit-arrow-linebreak": [`error`, `beside`],
    "import/no-absolute-path": `error`,
    "import/no-cycle": `error`,
    "import/no-duplicates": `error`,
    "import/no-mutable-exports": `error`,
    "import/no-self-import": `error`,
    "import/no-webpack-loader-syntax": `error`,
    // "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
    "keyword-spacing": [`error`],
    "no-class-assign": `error`,
    "no-func-assign": `error`,
    "no-path-concat": `error`,
    "no-undef": [`error`],
    "no-var": `error`,
    "object-curly-spacing": [`error`, `always`],
    "quotes":[`error`, `backtick`],
    "react/jsx-no-undef": [`error`],
    "react/no-children-prop": `error`,
    "react/no-danger": `off`,
    "react/prefer-stateless-function": `off`,
    "react/prop-types": `off`,
    "semi": [2, `always`],
    "space-before-function-paren": [`error`, `always`],
    "space-infix-ops": [`error`],
    "space-in-parens": [`error`, `never`],
  },
  "env": {
    "browser": true,
    "es6": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": `module`,
  },
};
