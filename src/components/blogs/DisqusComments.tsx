import React from 'react';
import 'twin.macro';
import ReactDisqusComments from 'react-disqus-comments';

export function DisqusComments({ slug, title }) {
	const url = `https://vdtn359.com.au/blogs/${slug}`;
	return (
		<div tw={'mx-6 my-6'}>
			<ReactDisqusComments
				shortname='vdtn359'
				identifier={url}
				title={title}
				url={url}
			/>
		</div>
	);
}
