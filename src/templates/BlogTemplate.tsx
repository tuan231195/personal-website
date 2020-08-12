import React from 'react';
import 'twin.macro';
import { graphql, Link } from 'gatsby';
import {
	Container,
	GreyBackground,
} from '~/components/ui/containers/Container';
import { Card } from '~/components/ui/containers/Card';
import { Icon } from '~/components/ui/icons/Icon';
import { format } from 'date-fns';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { wrapRootElement } from '~/components/markdown/mdx';
import { ColorBadge } from '~/components/ui/misc/ColorBadge';
import { Groups } from '~/components/ui/groups/Groups';
import { SEO } from '~/components/common/SEO';
import { DisqusComments } from '~/components/blogs/DisqusComments';
import { flattenBlogNode } from '~/types/blog';

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			body
			slug
			frontmatter {
				tags
				date
				image {
					childImageSharp {
						fluid(maxWidth: 896) {
							...GatsbyImageSharpFluid
						}
					}
				}
				title
			}
		}
	}
`;

const BlogTemplate = ({ data: { mdx: node } }) => {
	const blog = flattenBlogNode(node);
	return wrapRootElement(
		<GreyBackground>
			<SEO title={blog.title} />
			<Container tw={'sm:py-6 flex items-center'}>
				<Card className={'sm:max-w-4xl w-full'}>
					{blog.image && (
						<Card.Image
							style={{ maxHeight: '500px' }}
							fluid={blog.image.childImageSharp.fluid}
							alt={'backgroundImage'}
						/>
					)}
					<header
						tw={
							'flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-700'
						}
					>
						<h5 tw={'type-h5'}>{blog.title}</h5>
						<time tw={'font-semibold flex items-center'}>
							<Icon
								size={16}
								color={'gray-600'}
								name={'calendar'}
								className={'mr-2'}
							/>
							{format(new Date(blog.date), 'MMM dd, yyyy')}
						</time>
					</header>
					<Groups size={2} className={`mb-6 mt-2`}>
						{blog.tags.map((tag) => (
							<Link to={`/tags/${tag.toLowerCase()}`} key={tag}>
								<ColorBadge text={tag} />
							</Link>
						))}
					</Groups>
					<MDXRenderer>{blog.body}</MDXRenderer>
					<DisqusComments slug={blog.slug} title={blog.title} />
				</Card>
			</Container>
		</GreyBackground>
	);
};

export default BlogTemplate;
