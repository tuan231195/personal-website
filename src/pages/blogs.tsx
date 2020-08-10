import { graphql, useStaticQuery } from 'gatsby';
import { BlogRoll } from '~/components/blogs/BlogRoll';
import { Helmet } from 'react-helmet';
import React from 'react';
import { GreyBackground } from '~/components/ui/containers/Container';

export default function Blogs() {
	const data = useStaticQuery(graphql`
		query BlogsQuery {
			allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
				nodes {
					excerpt(pruneLength: 400)
					id
					frontmatter {
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
		<GreyBackground>
			<Helmet title='Blog posts' defer={false} />
			<BlogRoll blogs={data.allMdx.nodes} />
		</GreyBackground>
	);
}
