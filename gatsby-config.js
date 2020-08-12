const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
	siteMetadata: {
		title: `Tuan Nguyen`,
		author: `Tuan Nguyen`,
		description: `Tuan Nguyen's personal website`,
		siteUrl: `https://vdtn359.com.au/`,
		social: {
			twitter: `vdtn359`,
		},
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/img`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: ['.mdx', '.md'],
				defaultLayouts: {
					default: require.resolve('./src/templates/PageTemplate.tsx'),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-relative-images`,
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 896,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static/',
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-external-links`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-plugin-netlify-cms`,
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
		`gatsby-plugin-offline`,
	],
};
