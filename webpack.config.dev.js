'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    //devtool: 'source-map',
    entry: {
        'grid': ['./src/style-provider', './examples/grid'],
        'panel-container': ['./src/style-provider', './examples/panel-container']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [
            { loader: 'ts-loader', test: /\.tsx?$/ }
        ]
    },
    output: {
        filename: '[name].example.js',
        path: './dist'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({ chunks: ['grid'], filename: 'grid.example.html', js: 'react.js' }),
        new HtmlWebpackPlugin({ chunks: ['panel-container'], filename: 'panel-container.example.html' })
    ],
    resolve: {
        alias: {
            'react$': path.resolve(__dirname, './node_modules/react/dist/react-with-addons'),
            'react-dom$': path.resolve(__dirname, './node_modules/react-dom/dist/react-dom'),
            'react-addons-test-utils$': path.resolve(__dirname, './node_modules/react-addons-test-utils/index'),
            'sinon': 'sinon/pkg/sinon'
        },
        extensions: ['', '.js', '.json', '.ts', '.tsx']
    },
    resolveLoader: {
        modulesDirectories: ['./node_modules']
    }
}