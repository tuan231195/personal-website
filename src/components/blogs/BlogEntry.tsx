import { Blog } from '~/types/blog';
import { Icon } from '~/components/ui/icons/Icon';
import { format } from 'date-fns';
import 'twin.macro';
import { Button } from '~/components/ui/controls/Button';
import { Card } from '~/components/ui/containers/Card';
import React from 'react';
import { Link } from 'gatsby';
import sort from 'lodash.sortby';
import { ColorBadge } from '~/components/ui/misc/ColorBadge';
import { Groups } from '~/components/ui/groups/Groups';

export function BlogEntry({ blog }: { blog: Blog }) {
	return (
		<Card className={'flex flex-col'}>
			<article>
				<header
					tw={
						'flex flex-col mb-3 sm:flex-row sm:items-center sm:justify-between text-gray-700'
					}
				>
					<h5 tw={'type-h5 sm:w-2/3 md:w-3/4'}>{blog.title}</h5>
					<time tw={'font-semibold mt-3 sm:mt-0 flex items-center'}>
						<Icon
							size={16}
							color={'gray-600'}
							name={'calendar'}
							className={'mr-2'}
						/>
						{format(new Date(blog.date), 'MMM dd, yyyy')}
					</time>
				</header>
				<Groups size={2} className={`mb-4`}>
					{sort(blog.tags).map((tag) => (
						<Link to={`/tags/${tag.toLowerCase()}`} key={tag}>
							<ColorBadge text={tag} />
						</Link>
					))}
				</Groups>

				<div tw={'h-24'}>
					<p className={'truncate-3-lines'}>{blog.excerpt}</p>
				</div>
			</article>
			<Link to={`/blogs/${blog.slug}`} className={'self-end mt-4'}>
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
