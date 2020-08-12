import React from 'react';
import { connectHits } from 'react-instantsearch-dom';

const HitsComponents = ({ hits, render }) => {
	return <>{render(hits)}</>;
};
export const Hits = connectHits(HitsComponents);
