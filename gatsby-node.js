require('dotenv').config();
const path = require('path');
const { merge } = require('webpack-merge');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const postsPerPage = 6;

exports.onCreateWebpackConfig = ({ actions, getConfig, plugins }) => {
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
			plugins: [
				plugins.define(
					[
						'GATSBY_ALGOLIA_SEARCH_KEY',
						'GATSBY_ALGOLIA_APP_ID',
						'ALGOLIA_INDEX_NAME',
					].reduce((agg, current) => ({
						...agg,
						[`process.env.${current}`]: JSON.stringify(process.env[current]),
					})),
					{}
				),
			],
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

	const result = await graphql(`
		{
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				nodes {
					slug
					frontmatter {
						tags
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

	const posts = result.data.allMdx.nodes;
	generateBlogList(createPage, posts);
	generateBlog(createPage, posts);
	generateTaggedBlogs(createPage, posts);
};

function generateBlogList(createPage, posts) {
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
}

function generateTaggedBlogs(createPage, posts) {
	const groupedPosts = {};
	for (const post of posts) {
		for (const tag of post.frontmatter.tags) {
			groupedPosts[tag] = groupedPosts[tag] || [];
			groupedPosts[tag].push(post);
		}
	}
	Object.entries(groupedPosts).forEach(([tag, posts]) => {
		const numPages = Math.ceil(posts.length / postsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			const lowercaseTag = tag.toLowerCase();
			createPage({
				path:
					i === 0 ? `/tags/${lowercaseTag}/` : `/tags/${lowercaseTag}/${i + 1}`,
				component: path.resolve('./src/templates/TaggedBlogs.tsx'),
				context: {
					tag,
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			});
		});
	});
}

function generateBlog(createPage, posts) {
	const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.tsx`);
	posts.forEach((post) => {
		createPage({
			path: `/blogs/${post.slug}`,
			component: blogPostTemplate,
			context: {
				slug: post.slug,
			},
		});
	});
}

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node);
};
