var path = require('path');

module.exports = {
	entry: './es6/app.jsx',
	output: {
		path: __dirname + '/build/js/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'es6'),
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	}
};