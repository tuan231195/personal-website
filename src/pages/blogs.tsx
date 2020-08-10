import { useStaticQuery, graphql } from 'gatsby';
import { BlogRoll } from '~/components/blogs/BlogRoll';
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
					}
				}
			}
		}
	`);

	return (
		<BlogRoll blogs={data.allMarkdownRemark.edges.map(({ node }) => node)} />
	);
}
