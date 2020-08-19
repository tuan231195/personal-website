import 'twin.macro';
import React from 'react';
import { Blog } from '~/types/blog';
import { BlogEntry } from '~/components/blogs/BlogEntry';
import { Groups } from '~/components/ui/groups/Groups';

export function BlogRoll({ blogs }: { blogs: Blog[] }) {
	return (
		<Groups
			size={10}
			orientation={'vertical'}
			className={`sm:w-9/12 md:max-w-8/12`}
		>
			{blogs.map((blog) => (
				<BlogEntry blog={blog} key={blog.id} />
			))}
		</Groups>
	);
}
