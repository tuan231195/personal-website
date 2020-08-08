import { Groups } from '~/components/ui/groups/Groups';
import { Icon } from '~/components/ui/icons/Icon';
import React from 'react';

export function GeneralInfo() {
	return (
		<Groups size={2} orientation={'vertical'}>
			<Groups size={2}>
				<Icon name={'location'} size={16} color={'gray-600'} />
				<span> Hurstville, NSW </span>
			</Groups>
			<Groups size={2}>
				<Icon name={'mail'} size={16} color={'gray-600'} />
				<span> vdtn359@gmail.com </span>
			</Groups>
			<Groups size={2}>
				<Icon name={'link'} size={16} color={'gray-600'} />
				<span> https://vdtn359.com </span>
			</Groups>
		</Groups>
	);
}
