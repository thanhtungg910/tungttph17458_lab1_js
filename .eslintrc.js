module.exports = {
    env: {
        es2021: true,
        browser: true,

    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "eol-last": ["error", "never"],
        "linebreak-style": 0,
    },
};