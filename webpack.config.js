const path = require("path")
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './assets/js/index.jsx', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
    ],
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['./assets/bundles']),
        new BundleTracker({ filename: './webpack-stats.json' }), // stats json is needed to direct django to assets
        //new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [{ // to transform JSX into JS
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            /* makes css bundle, but no hmr
            ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
            */
        },
        { // load fonts
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }]
        }],
    },
    output: {
        path: path.resolve(__dirname, './assets/bundles/'),
        filename: "[name].js",
        publicPath: 'http://localhost:3000/assets/bundles/'
    },
}
