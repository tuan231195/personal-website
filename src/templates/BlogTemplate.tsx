import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '~/components/ui/containers/Container';
import { Card } from '~/components/ui/containers/Card';
import tw from 'twin.macro';
import { Icon } from '~/components/ui/icons/Icon';
import { format } from 'date-fns';
import { wrapRootElement } from '~/components/markdown/mdx';

const Root = tw.div`
	bg-gray-300  flex-grow py-10
`;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				tags
				date
				image
				title
				tags
			}
		}
	}
`;

const PostTemplate = ({
	data: {
		markdownRemark: { html, frontmatter },
	},
}) =>
	wrapRootElement(
		<Root>
			<Container>
				<Card>
					{frontmatter.image && (
						<Card.Image
							style={{ maxHeight: '500px' }}
							src={frontmatter.image}
							alt={'backgroundImage'}
						/>
					)}
					<header
						tw={
							'flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-700 mb-5'
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
					<div
						className='blog-post-content'
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</Card>
			</Container>
		</Root>
	);

export default PostTemplate;
