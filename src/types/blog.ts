export interface Blog {
	excerpt: string;
	fields: {
		slug: string;
	};
	frontmatter: {
		tags: string[];
		date: string;
		image: string;
		title: string;
	};
	id: string;
}
