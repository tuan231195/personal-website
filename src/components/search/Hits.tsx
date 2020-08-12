import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { Icon } from '~/components/ui/icons/Icon';
import 'twin.macro';

const HitsComponents = ({ hits, render }) => {
	return (
		<>
			{!!hits.length && render(hits)}
			{!hits.length && (
				<div tw={'flex flex-col items-center mt-10'}>
					<Icon name={'sad'} color={'gray-700'} size={100} />
					<h6 tw={'font-semibold mt-5 text-gray-700'}>
						We can&apos;t find what you are looking for
					</h6>
				</div>
			)}
		</>
	);
};
export const Hits = connectHits(HitsComponents);
