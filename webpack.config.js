/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'nal.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname + '/dist',
        index: "index.html"
    }
}
