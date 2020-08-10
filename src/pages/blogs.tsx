import { useStaticQuery, graphql } from 'gatsby';
import { BlogRoll } from '~/components/blogs/BlogRoll';
import { Helmet } from 'react-helmet';
import React from 'react';

export default function Blogs() {
	const data = useStaticQuery(graphql`
		query BlogsQuery {
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
				nodes {
					excerpt(pruneLength: 400)
					id
					frontmatter {
						image
						title
						date
						tags
					}
					slug
				}
			}
		}
	`);

	return (
		<>
			<Helmet title='Blog posts' defer={false} />
			<BlogRoll blogs={data.allMdx.nodes} />
		</>
	);
}
