import { useStaticQuery, graphql } from 'gatsby';
import { BlogRoll } from '~/components/blogs/BlogRoll';
import { Helmet } from 'react-helmet';
import React from 'react';

export default function Blogs() {
	const data = useStaticQuery(graphql`
		query BlogsQuery {
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						frontmatter {
							image
							title
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<>
			<Helmet title='Blog posts' defer={false} />
			<BlogRoll blogs={data.allMarkdownRemark.edges.map(({ node }) => node)} />
		</>
	);
}
