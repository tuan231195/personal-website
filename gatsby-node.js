const path = require('path');
const { merge } = require('webpack-merge');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
	let config = getConfig();
	config.module.rules = config.module.rules.map((item) => {
		const { test } = item;

		if (test && test.toString().includes('svg')) {
			return {
				...item,
				exclude: [path.resolve(__dirname, 'src', 'icons')],
			};
		}
		return {
			...item,
		};
	});

	config = merge(
		{
			resolve: {
				alias: {
					'~': path.resolve(__dirname, 'src'),
				},
			},
			module: {
				rules: [
					{
						test: /\.svg$/,
						use: [
							{ loader: 'svg-sprite-loader' },
							'svg-transform-loader',
							'svgo-loader',
						],
						include: [path.resolve(__dirname, 'src', 'icons')],
					},
				],
			},
		},
		config
	);
	actions.replaceWebpackConfig(config);
};
