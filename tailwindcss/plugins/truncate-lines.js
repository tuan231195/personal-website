const plugin = require('tailwindcss/plugin');

function truncateLines({ addUtilities, config }) {
	const lines = config('theme.truncate.lines');
	const keys = Object.keys(lines);

	if (!keys.length) return;

	const utilities = keys.reduce(
		(agg, key) => ({
			...agg,
			[`.truncate-${key}-lines`]: {
				overflow: 'hidden',
				display: '-webkit-box',
				'-webkit-line-clamp': lines[key],
				'-webkit-box-orient': 'vertical',
			},
		}),
		{}
	);

	addUtilities(utilities);
}

module.exports = plugin(truncateLines);
