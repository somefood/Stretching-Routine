module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['react-app', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': [
            'off',
            {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
            },
        ],
        'import/no-anonymous-default-export': 'off',
    },
    globals: {
        location: true,
        arguments: true,
        tvExt: true,
        __CLIENT__: true,
        __SERVER__: true,
        __DEV__: true,
    },
};
