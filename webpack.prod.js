const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: {
        index: ['babel-polyfill', './src/client/index.js']
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})]
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new WorkboxPlugin.GenerateSW()
    ],
}