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
import { SearchProvider } from '~/components/search/SearchProvider';
import { flattenBlogNode } from '~/types/blog';

export default function Blogs({ data, pageContext }) {
	const { currentPage, numPages } = pageContext;
	const blogs = data.allMdx.nodes.map(flattenBlogNode);
	return (
		<GreyBackground>
			<SEO title='Blog posts' />
			<Container className={'items-center px-5 py-6'}>
				<h4 tw={'type-h4 text-center'}>Blogs</h4>
				<SearchProvider>
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
									navigate(newPage === 1 ? `/blogs` : `/blogs/${newPage}`);
								}}
							/>
						</div>
					)}
				</SearchProvider>
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
