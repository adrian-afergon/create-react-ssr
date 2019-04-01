process.env.BABEL_ENV = 'development';

require('ignore-styles');

require('@babel/register')({
    ignore: [/node_modules/],
    presets: [
        '@babel/preset-env',
        '@babel/typescript',
        'react-app'
    ]
});

require('.');