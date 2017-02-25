const webpack = require('webpack');
const path = require('path');
// var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var options = {
	cache: false,
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js',
		publicPath: path.join(__dirname, 'dist/')
	},
	devtool: 'source-map', // 'source-map',
	resolve: {
		extensions: ['.webpack.js', '.web.js','.js', '.jsx'],
  		mainFields: ['module', 'browser', 'main'],
	},
	module: {
		loaders: [
			{	test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, '/src/app')
			}
			// {	test: /\.css$/,
			// 	include: path.join(__dirname, 'semantic/dist'),
			// 	loader: "style-loader!css-loader"
			// }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({ React: 'react' })
	]
};

module.exports = options;
