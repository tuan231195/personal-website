const path = require('path');
const { merge } = require('webpack-merge');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				nodes {
					slug
				}
			}
		}
	`);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const posts = result.data.allMdx.nodes;
	const postsPerPage = 6;
	const numPages = Math.ceil(posts.length / postsPerPage);

	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
			component: path.resolve('./src/templates/Blogs.tsx'),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		});
	});

	posts.forEach((post) => {
		createPage({
			path: `/blogs/${post.slug}`,
			component: blogPostTemplate,
			context: {
				slug: post.slug,
			},
		});
	});
};

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node);
};
