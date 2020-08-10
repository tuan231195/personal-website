import tw from 'twin.macro';
import { Container } from '~/components/ui/containers/Container';
import React from 'react';
import { Card } from '~/components/ui/containers/Card';
import { format } from 'date-fns';
import { Icon } from '~/components/ui/icons/Icon';
import { Button } from '~/components/ui/controls/Button';

type Blog = {
	excerpt: string;
	frontmatter: {
		date: string;
		image: string;
		title: string;
	};
	id: string;
};

const Root = tw.div`
	bg-gray-300  flex-grow py-10
`;

export function BlogRoll({ blogs }: { blogs: Blog[] }) {
	console.log(blogs);
	return (
		<Root>
			<Container className={'items-center'}>
				<h4 tw={'type-h4 text-center mb-4'}>Blogs</h4>
				{blogs.map((blog) => (
					<Card key={blog.id} className={'sm:w-10/12 max-w-9/12 flex flex-col'}>
						<article>
							<div
								tw={
									'flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-gray-700'
								}
							>
								<h5 tw={'type-h5'}>{blog.frontmatter.title}</h5>
								<time tw={'font-semibold flex items-center'}>
									<Icon
										size={16}
										color={'gray-600'}
										name={'calendar'}
										className={'mr-2'}
									/>
									{format(new Date(blog.frontmatter.date), 'MMM dd, yyyy')}
								</time>
							</div>
							<p className={'truncate-3-lines'}>{blog.excerpt}</p>
						</article>
						<Button tw={'self-end mt-4'}>
							<span tw={'flex items-center'}>
								Read More
								<Icon
									name={'arrow-narrow-right'}
									size={20}
									color={'white'}
								/>{' '}
							</span>
						</Button>
					</Card>
				))}
			</Container>
		</Root>
	);
}
