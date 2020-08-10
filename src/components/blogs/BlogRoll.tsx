import tw from 'twin.macro';
import { Container } from '~/components/ui/containers/Container';
import React from 'react';
import { Blog } from '~/types/blog';
import { BlogEntry } from '~/components/blogs/BlogEntry';

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
					<BlogEntry blog={blog} key={blog.id} />
				))}
			</Container>
		</Root>
	);
}
