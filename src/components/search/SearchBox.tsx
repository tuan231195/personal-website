import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { TextField } from '~/components/input/TextField';

const SearchBoxComponent = ({ currentRefinement, refine, onChange }) => (
	<form
		noValidate
		action=''
		role='search'
		className={'my-5 max-w-5xl sm:w-5/12'}
	>
		<TextField
			placeholder={'Search'}
			value={currentRefinement}
			onChange={(_event, { value }) => {
				refine(value);
				onChange(value);
			}}
		/>
	</form>
);

export const SearchBox = connectSearchBox(SearchBoxComponent);
