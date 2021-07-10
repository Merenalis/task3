const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
module.exports = {
    entry: './scripts/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `./scripts/${filename('js')}`,
        publicPath: ""
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,

    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: "index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,

        })
    ],
    devtool: isProd ? false: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,

                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            },{
                test: /\.(?:|gif|png|jpeg|jpg)$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        name: `./img/${filename('[ext]')}`,
                    }
                }]

            },
        ]
    }
}