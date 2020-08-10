import { Blog } from '~/types/blog';
import { Icon } from '~/components/ui/icons/Icon';
import { format } from 'date-fns';
import 'twin.macro';
import { Button } from '~/components/ui/controls/Button';
import { Card } from '~/components/ui/containers/Card';
import React from 'react';
import { Link } from 'gatsby';

export function BlogEntry({ blog }: { blog: Blog }) {
	return (
		<Card className={'sm:w-10/12 max-w-9/12 flex flex-col'}>
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
			<Link to={`/blogs/${blog.fields.slug}`} className={'self-end mt-4'}>
				<Button>
					<span tw={'flex items-center'}>
						Read More
						<Icon
							name={'arrow-narrow-right'}
							size={20}
							color={'white'}
							className={'ml-2'}
						/>
					</span>
				</Button>
			</Link>
		</Card>
	);
}
