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
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
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
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
