import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { SearchBox } from '~/components/search/SearchBox';
import { Hits } from '~/components/search/Hits';
import { BlogRoll } from '~/components/blogs/BlogRoll';

const searchClient = algoliasearch(
	process.env.GATSBY_ALGOLIA_APP_ID as string,
	process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
);

export function SearchProvider({ children }) {
	const [hasInput, setHasInput] = useState(false);
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName={process.env.ALGOLIA_INDEX_NAME as string}
		>
			<Configure hitsPerPage={5} typoTolerance={false} />
			<SearchBox
				onChange={(value) => {
					setHasInput(!!value);
				}}
			/>
			{hasInput && (
				<Hits
					render={(hits: any[] = []) => {
						hits = hits.map((hit) => ({
							...hit,
							id: hit.objectID,
							tags: hit._tags,
						}));
						return <BlogRoll blogs={hits} />;
					}}
				/>
			)}
			{!hasInput && children}
		</InstantSearch>
	);
}
