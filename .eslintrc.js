module.exports = {
    "env": {
        "browser": true,
        "jest/globals": true,
        "es2021": true
    },
    "extends": ["plugins:jest/recommended", "eslint:recommended"],
    "plugins" : ["jest"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
    }
};
