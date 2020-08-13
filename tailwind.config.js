module.exports = {
	purge: false,
	theme: {
		textIndent: {
			// defaults to {}
			'1': '0.25rem',
			'2': '0.5rem',
		},
		textShadow: {
			// defaults to {}
			default: '0 2px 5px rgba(0, 0, 0, 0.5)',
			lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
		},
		truncate: {
			lines: {
				3: '3',
				5: '5',
				8: '8',
			},
		},
		textStyles: (theme) => ({
			// defaults to {}
			heading: {
				output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
				fontWeight: theme('fontWeight.bold'),
				lineHeight: theme('lineHeight.tight'),
			},
			h1: {
				extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
				fontSize: theme('fontSize.5xl'),
				'@screen sm': {
					fontSize: theme('fontSize.6xl'),
				},
			},
			h2: {
				extends: 'heading',
				fontSize: theme('fontSize.4xl'),
				'@screen sm': {
					fontSize: theme('fontSize.5xl'),
				},
			},
			h3: {
				extends: 'heading',
				fontSize: theme('fontSize.4xl'),
			},
			h4: {
				extends: 'heading',
				fontSize: theme('fontSize.3xl'),
			},
			h5: {
				extends: 'heading',
				fontSize: theme('fontSize.2xl'),
			},
			h6: {
				extends: 'heading',
				fontSize: theme('fontSize.xl'),
			},
			link: {
				fontWeight: theme('fontWeight.bold'),
				color: theme('colors.blue.500'),
				'&:hover': {
					color: theme('colors.blue.600'),
					textDecoration: 'underline',
				},
			},
			richText: {
				fontWeight: theme('fontWeight.normal'),
				fontSize: theme('fontSize.base'),
				lineHeight: theme('lineHeight.relaxed'),
				'> * + *': {
					marginTop: '1em',
				},
				h1: {
					extends: 'h1',
				},
				h2: {
					extends: 'h2',
				},
				h3: {
					extends: 'h3',
				},
				h4: {
					extends: 'h4',
				},
				h5: {
					extends: 'h5',
				},
				h6: {
					extends: 'h6',
				},
				ul: {
					listStyleType: 'disc',
				},
				ol: {
					listStyleType: 'decimal',
				},
				a: {
					extends: 'link',
				},
				'b, strong': {
					fontWeight: theme('fontWeight.bold'),
				},
				'i, em': {
					fontStyle: 'italic',
				},
			},
		}),

		extend: {
			inset: {
				full: '100%',
				'1/2': '50%',
			},
			colors: {
				secondary: '#d1e0f4',
				primary: '#41A4F5',
				link: '#1e70bf',
				'inline-code': '#fff6ea',
				accent: '#FF8106',
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
	plugins: [
		require('tailwindcss-typography')({
			componentPrefix: 'type-',
		}),
		require('./tailwindcss/plugins/truncate-lines'),
	],
};
