export interface Blog {
	excerpt: string;
	slug: string;
	tags: string[];
	date: string;
	image: any;
	body: string;
	title: string;
	id: string;
}

export function flattenBlogNode({ frontmatter, ...rest }): Blog {
	return {
		...rest,
		...frontmatter,
	};
}
