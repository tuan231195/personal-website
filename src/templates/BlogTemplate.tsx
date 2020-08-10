import React from 'react';
import 'twin.macro';
import { graphql } from 'gatsby';
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
import { Helmet } from 'react-helmet';

export const query = graphql`
	query($slug: String!) {
		mdx(slug: { eq: $slug }) {
			body
			frontmatter {
				tags
				date
				image
				title
			}
		}
	}
`;

const BlogTemplate = ({
	data: {
		mdx: { body, frontmatter },
	},
}) =>
	wrapRootElement(
		<GreyBackground>
			<Helmet defer={false} title={frontmatter.title} />
			<Container tw={'sm:py-6'}>
				<Card className={'sm:max-w-6xl w-full'}>
					{frontmatter.image && (
						<Card.Image
							style={{ maxHeight: '500px' }}
							src={frontmatter.image}
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
							<ColorBadge text={tag} key={tag} />
						))}
					</Groups>
					<MDXRenderer>{body}</MDXRenderer>
				</Card>
			</Container>
		</GreyBackground>
	);

export default BlogTemplate;
