const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('react-scripts/config/webpack.config');

const currentConfig = webpackConfig('production'); //TODO

currentConfig.name = 'Server';
currentConfig.target = 'node';
currentConfig.externals = [nodeExternals()];
currentConfig.output = {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js'
}
currentConfig.entry = {
    server: path.resolve(__dirname, '..', 'server', 'index.js')
};

// const webpack = require('webpack');
// let compiler = webpack(config);
// compiler.run();

module.exports = currentConfig;