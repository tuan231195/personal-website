module.exports = {
	purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				secondary: '#d1e0f4',
				primary: '#0288d1',
				cta: '#d10220',
				info: '#2ecbf6',
				warning: '#e4ca52',
				success: '#49d96a',
				danger: '#e75160',
			},
		},
		container: {
			center: true,
		},
	},
	corePlugins: {
		container: true,
	},
	variants: {},
	plugins: [],
};
