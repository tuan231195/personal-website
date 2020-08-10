const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
	siteMetadata: {
		title: `Tuan Nguyen's personal website`,
		author: `Tuan Nguyen`,
	},
	developMiddleware: (app) => {
		app.use(
			'/api',
			createProxyMiddleware({
				target: 'http://localhost:9000',
				pathRewrite: {
					'/api': '',
				},
			})
		);
	},
	plugins: [
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: ['.mdx', '.md'],
				defaultLayouts: {
					default: require.resolve('./src/templates/BlogTemplate.tsx'),
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: `blogs`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Schönherz Design Stúdió',
				short_name: 'schdesign',
				start_url: '/',
				background_color: '#3d3d3d',
				theme_color: '#f8485e',
				display: 'standalone',
				icon: 'src/images/favicon.ico',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/layout/Index.tsx`),
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Lato`,
						variants: ['300', '400', `700`, `900`],
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Tuan Nguyen`,
				short_name: `Tuan`,
				start_url: `/`,
				background_color: `#41A4F5`,
				theme_color: `#41A4F5`,
				display: `minimal-ui`,
				icon: `src/images/favicon.ico`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
