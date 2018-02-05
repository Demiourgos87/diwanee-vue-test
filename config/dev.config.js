var webpack = require('webpack'),
    WebpackBuildNotifierPlugin = require('webpack-build-notifier'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // ----- JS ES2015 compiling
            {
                test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['babel-preset-env'] }
                }
            },
            // ----- SASS compiling
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            // ----- Font loading
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /(node_modules|img)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }
            },
            // ----- Image loading
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: /(node_modules|fonts)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/img/'
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    // ----- Webpack dev server options
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        hot: true,
        compress: true,
        port: 3300,
        stats: {
            all: false,
            errors: true,
            warnings: true
        },
        open: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackHarddiskPlugin(),
        new HtmlWebpackPlugin({
            title: 'Diwanee Serbia',
            filename: 'index.html',
            template: './src/index.html',
            // alwaysWriteToDisk: true
        }),
        new WebpackBuildNotifierPlugin({
            title: "Webpack",
            suppressSuccess: false
        })
    ]
};
