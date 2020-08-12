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

const BlogTemplate = ({
	data: {
		mdx: { body, frontmatter, slug },
	},
}) =>
	wrapRootElement(
		<GreyBackground>
			<SEO title={frontmatter.title} />
			<Container tw={'sm:py-6 flex items-center'}>
				<Card className={'sm:max-w-4xl w-full'}>
					{frontmatter.image && (
						<Card.Image
							style={{ maxHeight: '500px' }}
							fluid={frontmatter.image.childImageSharp.fluid}
							alt={'backgroundImage'}
						/>
					)}
					<header
						tw={
							'flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-700'
						}
					>
						<h5 tw={'type-h5'}>{frontmatter.title}</h5>
						<time tw={'font-semibold flex items-center'}>
							<Icon
								size={16}
								color={'gray-600'}
								name={'calendar'}
								className={'mr-2'}
							/>
							{format(new Date(frontmatter.date), 'MMM dd, yyyy')}
						</time>
					</header>
					<Groups size={2} className={`mb-6 mt-2`}>
						{frontmatter.tags.map((tag) => (
							<Link to={`/tags/${tag.toLowerCase()}`} key={tag}>
								<ColorBadge text={tag} />
							</Link>
						))}
					</Groups>
					<MDXRenderer>{body}</MDXRenderer>
					<DisqusComments slug={slug} title={frontmatter.title} />
				</Card>
			</Container>
		</GreyBackground>
	);

export default BlogTemplate;
