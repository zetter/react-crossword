module.exports = {
  extends: ['airbnb'],
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    "consistent-return": "off",
    "max-len": "off",
    "prefer-destructuring": "off",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "react/destructuring-assignment": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "off",
    "react/prefer-stateless-function": "off",
    "react/button-has-type": "off",
    "react/no-multi-comp": "off",
    "react/no-find-dom-node": "off",
    "react/no-access-state-in-setstate": "off"
  }
};
