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

export default function Blogs({ data, pageContext }) {
	const { currentPage, numPages } = pageContext;
	return (
		<GreyBackground>
			<SEO title='Blog posts' />
			<Container className={'items-center px-5 py-6'}>
				<h4 tw={'type-h4 text-center mb-4'}>Blogs</h4>
				<BlogRoll blogs={data.allMdx.nodes} />
				{numPages > 1 && (
					<div tw={'mt-4'}>
						<Pagination
							numPages={numPages}
							current={currentPage}
							onSelect={(newPage) => {
								if (newPage === currentPage) {
									return;
								}
								navigate(newPage === 1 ? `/blogs` : `/blogs/${newPage}`);
							}}
						/>
					</div>
				)}
			</Container>
		</GreyBackground>
	);
}

export const query = graphql`
	query BlogsQuery($skip: Int!, $limit: Int!) {
		allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			skip: $skip
			limit: $limit
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
