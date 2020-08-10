import 'twin.macro';
import { Container } from '~/components/ui/containers/Container';
import React from 'react';
import { Blog } from '~/types/blog';
import { BlogEntry } from '~/components/blogs/BlogEntry';

export function BlogRoll({ blogs }: { blogs: Blog[] }) {
	return (
		<Container className={'items-center'}>
			<h4 tw={'type-h4 text-center mb-4'}>Blogs</h4>
			{blogs.map((blog) => (
				<BlogEntry blog={blog} key={blog.id} />
			))}
		</Container>
	);
}
