const path = require("path");
const pathToApp = path.resolve(__dirname, "../app");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

const config = {
    context: pathToApp,
    entry: [
        "babel-polyfill",
        pathToApp
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
    },
    module: {
        rules: [
            { test: /\.js/, use: "babel-loader", exclude: /node_modules/, },
            {
                test: /\.(css|scss)$/,
                exclude: [
                    /node_modules/
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader?localIdentName=[name]__[local]&modules=true&sourceMap",
                        "postcss-loader?sourceMap"
                    ],
                }),
            },{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                loader: "file-loader",
            }
        ]
    },
    resolve: {
        modules: [
            "app",
            "node_modules"
        ]
    },
    plugins: [
		new ExtractTextPlugin("./styles.css"),
		new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
		new UglifyJsPlugin()
    ]
};

module.exports = config;