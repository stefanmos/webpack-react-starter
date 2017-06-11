var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
	module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader','sass-loader']
        })
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
    ]
  },
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		stats: "errors-only",
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project Title',
			// minify: {
			// 	collapseWhitespace: true
			// }
			template: './app/index.ejs'
		}),
		new ExtractTextPlugin({
			filename: "styles.css",
			disable: false,
			allChunks: true
		}),
	]
};
