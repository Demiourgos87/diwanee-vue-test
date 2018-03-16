var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    path = require('path'),
    environment = process.env.NODE_ENV;

// ----- Output file paths
var outputDir = '../dist/',
    cssOutput = 'css/style.[chunkhash:8].css',
    jsOutput = 'js/[name].[chunkhash:8].bundle.js';

module.exports = function() {
    var options = {
        entry: {
            app: './src/main.js'
        },
        output: {
            path: path.resolve(__dirname, outputDir),
            filename: jsOutput
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: { presets: ['babel-preset-env'] }
                    }
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    config: {
                                        path: './config/postcss.config.js'
                                    }
                                }
                            },
                            'sass-loader'
                        ],
                        publicPath: '../'
                    })
                },
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
        plugins: [
            new ExtractTextPlugin(cssOutput),
            new CleanWebpackPlugin(['dist/*'], {
                root: path.resolve(__dirname + '/../')
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks(module) {
                    // any required modules inside node_modules are extracted to vendor
                    return (
                        module.resource &&
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0
                    )
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                async: 'vendor-async',
                children: true,
                minChunks: 3
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, '../dist/index.html'),
                template: './src/index.html',
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            })
        ]
    };

    // if NODE_ENV == production, push vue env fix and uglify js to plugins (webpack -p currently doesn't minify ES6 properly)
    function uglifyJS(env) {
        if (env == 'production') {
            var vueProd = new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            });
            var uglifyPlugin = new UglifyJsPlugin();

            options.plugins.push(vueProd, uglifyPlugin);
        }
    }
    uglifyJS(environment);

    return options;
};
