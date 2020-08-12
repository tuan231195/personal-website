const pageQuery = `{
docs: allMdx(
  filter: {
    fileAbsolutePath: { regex: "/blog/" },
  }
 ) {
  nodes {
      id
      frontmatter {
        title
        date
        tags
      }
      slug
      excerpt(pruneLength: 400)
  }
 }
}`;
const flatten = (arr) =>
	arr.map(({ frontmatter, id, ...rest }) => ({
		...omit(frontmatter, ['tags']),
		...rest,
		objectID: id,
		_tags: frontmatter.tags,
	}));

const settings = {
	attributesToSnippet: [`excerpt:20`],
	searchableAttributes: ['title', '_tags', 'excerpt'],
};

exports.queries = [
	{
		query: pageQuery,
		transformer: ({ data }) => flatten(data.docs.nodes),
		indexName: process.env.ALGOLIA_INDEX_NAME,
		settings,
	},
];

function omit(object, keys) {
	const copied = { ...object };
	for (const key of keys) {
		delete copied[key];
	}
	return copied;
}
