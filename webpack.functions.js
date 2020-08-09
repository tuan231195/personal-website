const path = require('path');
module.exports = {
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-typescript',
							['@babel/preset-env', { targets: { node: true } }],
						],
					},
				},
			},
		],
	},
};
