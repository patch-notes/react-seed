module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": 0,
      "react/forbid-prop-types": 0,
      "no-underscore-dangle": 0,
      "func-names": 0,
      "one-var": ["error", {
        "uninitialized": "always",
        "initialized": "never"
      }],
      "one-var-declaration-per-line": 0
    },
    "settings": {
      "import/resolver": {
        "webpack": {}
      }
    }
};
