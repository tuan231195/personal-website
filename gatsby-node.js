const path = require('path');
const { merge } = require('webpack-merge');
const { createFilePath } = require('gatsby-source-filesystem');

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

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.tsx`);

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: `/blogs/${node.fields.slug}`,
			component: blogPostTemplate,
			context: {
				slug: node.fields.slug,
			},
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const filePath = createFilePath({ node, getNode, basePath: `blog` });
		const slug = filePath.substr(1, filePath.length - 2);
		createNodeField({
			name: `slug`,
			node,
			value: slug,
		});
	}
};
