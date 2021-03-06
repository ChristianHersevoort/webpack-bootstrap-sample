var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // The standard entry point and output config
    entry: {
        bootstrap: "./src/bootstrap.js",
	main: "./src/scss/main.scss",
    },
    devtool: "eval",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
               test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
               loader: 'file'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
		        loader: ExtractTextPlugin.extract("style-loader", "css!sass?outputStyle=expanded")
            },
            {
		        test: /\.js$/,
	            loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}
