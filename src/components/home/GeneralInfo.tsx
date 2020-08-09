import { Groups } from '~/components/ui/groups/Groups';
import { Icon } from '~/components/ui/icons/Icon';
import React from 'react';
import { ProfileSection } from '~/components/home/ProfileSection';
import userProfile from '~/profile';

export function GeneralInfo({
	profile,
}: {
	profile: typeof userProfile['basic'];
}) {
	return (
		<ProfileSection>
			<Groups size={2} orientation={'vertical'}>
				<Groups size={2}>
					<Icon name={'location'} size={16} color={'gray-600'} />
					<span> {profile.location} </span>
				</Groups>
				<Groups size={2}>
					<Icon name={'mail'} size={16} color={'gray-600'} />
					<span> {profile.email} </span>
				</Groups>
				<Groups size={2}>
					<Icon name={'link'} size={16} color={'gray-600'} />
					<span> {profile.website} </span>
				</Groups>
			</Groups>
		</ProfileSection>
	);
}
