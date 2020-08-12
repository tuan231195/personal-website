import { graphql, navigate } from 'gatsby';
import { BlogRoll } from '~/components/blogs/BlogRoll';
import React from 'react';
import 'twin.macro';
import {
	Container,
	GreyBackground,
} from '~/components/ui/containers/Container';
import { Pagination } from '~/components/ui/containers/Pagination';
import { SEO } from '~/components/common/SEO';
import { flattenBlogNode } from '~/types/blog';

export default function TaggedBlogs({ data, pageContext }) {
	const { tag, currentPage, numPages } = pageContext;
	const blogs = data.allMdx.nodes.map(flattenBlogNode);
	return (
		<GreyBackground>
			<SEO title={`Tags: ${tag}`} />
			<Container className={'items-center px-5 py-6'}>
				<h4 tw={'type-h4 text-center mb-4'}>Tags: {tag}</h4>
				<BlogRoll blogs={blogs} />
				{numPages > 1 && (
					<div tw={'mt-4'}>
						<Pagination
							numPages={numPages}
							current={currentPage}
							onSelect={(newPage) => {
								if (newPage === currentPage) {
									return;
								}
								navigate(
									newPage === 1
										? `/tags/${tag.toLowerCase()}`
										: `/tags/${tag.toLowerCase()}/${newPage}`
								);
							}}
						/>
					</div>
				)}
			</Container>
		</GreyBackground>
	);
}

export const query = graphql`
	query TaggedBlogQuery($skip: Int!, $limit: Int!, $tag: String!) {
		allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			skip: $skip
			limit: $limit
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
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
`;
