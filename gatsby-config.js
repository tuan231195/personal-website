require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');
const { queries } = require('./src/utils/algolia');

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
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-algolia`,
			options: {
				appId: process.env.GATSBY_ALGOLIA_APP_ID,
				apiKey: process.env.ALGOLIA_ADMIN_KEY,
				queries,
				chunkSize: 10000, // default: 1000
			},
		},
	],
};
